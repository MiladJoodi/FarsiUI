---
name: parspack-s3-upload
description: >
  Upload images to ParsPack S3-compatible object storage from a Next.js App
  Router application. Use when implementing server-side image uploads, S3
  client configuration, public or presigned object URLs, upload validation,
  authenticated API routes, or ParsPack-specific path-style addressing.
---

# ParsPack S3 Image Upload

Implementation guide for uploading images to **ParsPack**, an S3-compatible object storage provider, from a Next.js App Router project.

Use this guide when implementing the complete upload flow from browser to authenticated Next.js API route and then to ParsPack object storage.

The default architecture is:

```text
Browser
  ↓ FormData
POST /api/upload
  ↓
Authenticated Next.js Route
  ↓
uploadImage()
  ↓
ParsPack S3
  ↓ PutObject
{ url, key }
```

ParsPack is treated as an S3-compatible provider. The important provider-specific details are:

* Custom S3 endpoint
* Path-style bucket addressing
* Public object URL construction
* Bucket permissions for direct public URLs

Keep credentials server-side. Never expose S3 access keys or secret keys to browser code.

---

## 1. Dependencies

Install the AWS SDK v3 S3 packages.

Run this command from the **project root**, where `package.json` is located:

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

If the project uses another package manager, use its equivalent command.

The application needs:

* `@aws-sdk/client-s3` for S3 operations
* `@aws-sdk/s3-request-presigner` only when presigned URLs are required

Do not install the presigner package if the application only uses public objects.

---

## 2. Environment Variables

Create or update `.env.local` in the **project root**:

```env
S3_ENDPOINT=https://YOUR_ACCOUNT.parspack.net
S3_BUCKET=your-bucket-name
S3_ACCESS_KEY_ID=your-access-key
S3_SECRET_ACCESS_KEY=your-secret-key
S3_REGION=us-east-1
S3_FORCE_PATH_STYLE=true
```

| Variable               | Required | Notes                                                                |
| ---------------------- | -------- | -------------------------------------------------------------------- |
| `S3_ENDPOINT`          | Yes      | Exact ParsPack endpoint URL. Do not include a trailing slash.        |
| `S3_BUCKET`            | Yes      | Bucket name.                                                         |
| `S3_ACCESS_KEY_ID`     | Yes      | ParsPack access key. Server-side only.                               |
| `S3_SECRET_ACCESS_KEY` | Yes      | ParsPack secret key. Server-side only.                               |
| `S3_REGION`            | No       | Defaults to `us-east-1` unless the provider specifies another value. |
| `S3_FORCE_PATH_STYLE`  | No       | Defaults to `true`.                                                  |

Never expose these variables through:

```text
NEXT_PUBLIC_*
```

or browser/client components.

### Bucket permissions

If the application stores direct public URLs, uploaded objects must be publicly readable according to the bucket's access policy.

If the bucket is private, use presigned URLs instead.

Do not make an entire bucket public unless that is an intentional product requirement.

---

## 3. File Structure

A simple implementation can use:

```text
lib/
  s3/
    client.ts
    urls.ts
    upload.ts

app/
  api/
    upload/
      route.ts
```

Responsibilities:

```text
client.ts
  S3Client configuration and bucket access

urls.ts
  Public URL construction
  Presigned object URLs

upload.ts
  File validation
  Object key generation
  PutObject

route.ts
  Authentication
  FormData parsing
  HTTP responses
```

Keep the S3 credentials and upload implementation on the server.

---

## 4. S3 Client

Create:

```text
lib/s3/client.ts
```

from the **project root** when referencing the path.

```typescript
import { S3Client } from "@aws-sdk/client-s3";

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

let client: S3Client | null = null;

export function getS3Client(): S3Client {
  if (client) {
    return client;
  }

  client = new S3Client({
    endpoint: requireEnv("S3_ENDPOINT"),
    region: process.env.S3_REGION ?? "us-east-1",
    credentials: {
      accessKeyId: requireEnv("S3_ACCESS_KEY_ID"),
      secretAccessKey: requireEnv("S3_SECRET_ACCESS_KEY"),
    },
    forcePathStyle: process.env.S3_FORCE_PATH_STYLE !== "false",
  });

  return client;
}

export function getS3Bucket(): string {
  return requireEnv("S3_BUCKET");
}
```

### ParsPack path-style addressing

The important configuration is:

```typescript
forcePathStyle: true
```

Path-style addressing produces a URL structure similar to:

```text
https://endpoint/bucket/key
```

rather than:

```text
https://bucket.endpoint/key
```

Do not remove `forcePathStyle` unless the actual ParsPack endpoint and bucket configuration support virtual-host-style addressing.

---

## 5. URL Helpers

Create:

```text
lib/s3/urls.ts
```

Use path-style URLs for public objects:

```typescript
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { getS3Bucket, getS3Client } from "./client";

function trimTrailingSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

function normalizeObjectKey(key: string): string {
  return key.replace(/^\/+/, "");
}

export function getPublicObjectUrl(key: string): string {
  const endpoint = trimTrailingSlash(process.env.S3_ENDPOINT ?? "");
  const bucket = getS3Bucket();
  const normalizedKey = normalizeObjectKey(key);

  return `${endpoint}/${bucket}/${normalizedKey}`;
}

export async function getPresignedObjectUrl(
  key: string,
  expiresIn = 3600
): Promise<string> {
  const command = new GetObjectCommand({
    Bucket: getS3Bucket(),
    Key: normalizeObjectKey(key),
  });

  return getSignedUrl(getS3Client(), command, {
    expiresIn,
  });
}
```

Example public URL:

```text
https://YOUR_ACCOUNT.parspack.net/my-bucket/uploads/<ownerId>/<uuid>.jpg
```

### Public vs private objects

For public objects:

```text
getPublicObjectUrl()
```

is sufficient.

For private objects:

```text
getPresignedObjectUrl()
```

should be used when the client needs temporary access.

Do not return permanent public URLs for private objects.

---

## 6. Upload Logic

Create:

```text
lib/s3/upload.ts
```

```typescript
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { getPublicObjectUrl } from "./urls";
import { getS3Bucket, getS3Client } from "./client";

const ALLOWED_CONTENT_TYPES = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["image/gif", "gif"],
]);

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function uploadImage(
  ownerId: string,
  file: File
): Promise<{ url: string; key: string }> {
  if (!ALLOWED_CONTENT_TYPES.has(file.type)) {
    throw new Error("Invalid file type");
  }

  if (file.size > MAX_FILE_SIZE) {
    throw new Error("File too large");
  }

  const extension = ALLOWED_CONTENT_TYPES.get(file.type)!;
  const key = `uploads/${ownerId}/${randomUUID()}.${extension}`;

  const buffer = Buffer.from(await file.arrayBuffer());

  await getS3Client().send(
    new PutObjectCommand({
      Bucket: getS3Bucket(),
      Key: key,
      Body: buffer,
      ContentType: file.type,
    })
  );

  return {
    key,
    url: getPublicObjectUrl(key),
  };
}
```

### Design rules

The server must validate:

* MIME type
* File size
* Ownership/scope
* Authentication

Do not rely on client-side validation.

### Object key

Use a predictable directory structure with an unpredictable object identifier:

```text
uploads/{ownerId}/{uuid}.{ext}
```

For example:

```text
uploads/user_123/550e8400-e29b-41d4-a716-446655440000.jpg
```

This provides:

* Owner scoping
* Collision resistance
* Easy deletion
* Easier debugging
* Clear storage organization

Do not use the original filename as the object key.

Original filenames can contain:

* Spaces
* Unicode characters
* Path-like strings
* Unexpected extensions
* Sensitive information

If the original filename is useful to the application, store it separately as metadata.

---

## 7. File Validation

MIME type validation is useful, but it is not a complete security boundary.

The browser controls the `File.type` value.

For higher-risk applications, validate the actual file content server-side.

For example, use an image parser or `sharp` when appropriate.

A production application may therefore validate:

```text
1. Authentication
2. File presence
3. File size
4. Declared MIME type
5. Actual file signature/content
6. Image dimensions
7. Optional image processing
```

Do not trust:

```text
file.name
file.type
```

as proof that a file is actually a valid image.

### Filename extensions

Never derive authorization or storage behavior from an untrusted original extension.

Use the validated content type to determine the generated extension.

---

## 8. API Route

Create:

```text
app/api/upload/route.ts
```

Example:

```typescript
import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { uploadImage } from "@/lib/s3/upload";

export async function POST(request: NextRequest) {
  const session = await getSession();

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json(
      { error: "No file provided" },
      { status: 400 }
    );
  }

  try {
    const result = await uploadImage(session.user.id, file);

    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Upload failed";

    const status =
      message === "Invalid file type" ||
      message === "File too large"
        ? 400
        : 500;

    return NextResponse.json(
      { error: message },
      { status }
    );
  }
}
```

Adapt:

```text
@/lib/session
```

to the authentication system used by the application.

### Contract

| Method | Path          | Auth                  | Body       | Success        |
| ------ | ------------- | --------------------- | ---------- | -------------- |
| `POST` | `/api/upload` | Authenticated session | `FormData` | `{ url, key }` |

Expected errors:

```text
401 → unauthenticated
400 → invalid request/file
500 → storage or unexpected server error
```

Do not return raw AWS/ParsPack errors to the client.

Log detailed server-side errors where the project's logging policy permits it, and return a safe client-facing message.

---

## 9. Request Limits

The S3 upload limit is not the only relevant limit.

Check the application's:

* Reverse proxy
* Hosting provider
* Next.js runtime
* Serverless function
* Nginx configuration
* Request body limits

A `5 MB` application-level limit does not help if nginx rejects a request at `1 MB` before it reaches Next.js.

Set infrastructure limits slightly above the application's intended limit when appropriate.

---

## 10. Client-side Usage

Client-side validation is for user experience only.

```typescript
const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

const ALLOWED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
];

async function handleImageUpload(file: File) {
  if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
    throw new Error("Invalid file type");
  }

  if (file.size > MAX_IMAGE_SIZE) {
    throw new Error("File too large");
  }

  const formData = new FormData();

  formData.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => null);

    throw new Error(data?.error || "Upload failed");
  }

  const { url } = await res.json();

  setForm((form) => ({
    ...form,
    imageUrl: url,
  }));
}
```

### Important

The field name must be:

```text
file
```

because the server reads:

```typescript
formData.get("file")
```

Do not manually set:

```http
Content-Type: multipart/form-data
```

in `fetch`.

The browser must generate the multipart boundary automatically.

### File input

Use:

```tsx
<input
  type="file"
  accept="image/jpeg,image/png,image/webp,image/gif"
/>
```

Disable or block duplicate submission while an upload is running.

Show useful states:

```text
Idle
Uploading
Success
Error
```

For larger files, consider progress reporting and direct-to-S3 uploads.

---

## 11. Database Persistence

Do not automatically treat the returned URL as the only piece of storage information.

Prefer storing at least:

```text
key
url
```

when the application may later need:

* Deletion
* Migration
* Regeneration
* Presigned access
* Provider changes

For example:

```ts
{
  imageUrl: result.url,
  imageKey: result.key,
}
```

The exact database model depends on the application.

If the URL format may change in the future, storing the key is especially useful because the URL can be reconstructed from the current storage configuration.

---

## 12. Next.js Image Configuration

If the application uses `next/image` with public ParsPack URLs, allow the exact ParsPack hostname.

In:

```text
next.config.ts
```

use:

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "YOUR_ACCOUNT.parspack.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

Replace the hostname with the actual ParsPack endpoint host.

Do not use a wildcard hostname unless the project has a specific reason to do so.

After changing `next.config.ts`, restart the Next.js development server.

---

## 13. Authentication and Middleware

Keep authentication inside the upload route.

The route should explicitly verify the current user before accepting the file.

Do not rely only on a middleware redirect.

For example:

```text
Browser
  ↓
POST /api/upload
  ↓
Route checks session
  ↓
Upload
```

If middleware protects application routes, make sure `/api/upload` is not converted into an HTML redirect for unauthenticated requests.

The API route should return:

```json
{
  "error": "Unauthorized"
}
```

with HTTP `401`.

This keeps API behavior predictable for `fetch()` clients.

---

## 14. Rate Limiting and Abuse Protection

An authenticated upload endpoint can still be abused.

For production systems, consider:

* Per-user upload rate limits
* Maximum upload count
* Maximum total storage per user
* Request throttling
* File dimension limits
* Content validation
* Duplicate upload handling
* Abuse monitoring

Authentication alone does not make an upload endpoint safe from excessive usage.

---

## 15. ParsPack-specific Checklist

When implementing or debugging ParsPack storage, verify:

1. `forcePathStyle` is enabled.
2. `S3_ENDPOINT` exactly matches the ParsPack endpoint.
3. `S3_ENDPOINT` does not contain an accidental trailing slash.
4. `S3_BUCKET` is correct.
5. Access key and secret key are correct.
6. Credentials exist only server-side.
7. Public objects have the required bucket/object permissions.
8. Public URL uses:

```text
{S3_ENDPOINT}/{S3_BUCKET}/{key}
```

9. The URL does not use:

```text
https://bucket.endpoint/key
```

unless the actual provider configuration explicitly supports it.
10. `next/image` allows the ParsPack hostname when needed.
11. Region matches the provider's requirements.
12. CORS is not incorrectly added as a requirement for server-side uploads.

### CORS

For:

```text
Browser → Next.js → ParsPack
```

the browser is not directly talking to ParsPack.

CORS on the bucket is therefore generally not required for the upload request.

CORS becomes relevant when changing the architecture to:

```text
Browser → ParsPack
```

using a presigned upload URL.

---

## 16. Common Failure Modes

| Symptom                                      | Likely cause                                                                   |
| -------------------------------------------- | ------------------------------------------------------------------------------ |
| `Missing required environment variable`      | Environment variables are missing or the server was not restarted.             |
| `403` / `AccessDenied` from S3               | Incorrect credentials or bucket permissions.                                   |
| Upload succeeds but image returns `403`      | Object/bucket is not publicly readable.                                        |
| Upload succeeds but URL is wrong             | Path-style URL construction is incorrect.                                      |
| URL uses `bucket.endpoint`                   | Virtual-host addressing is being used.                                         |
| `next/image` refuses the URL                 | ParsPack hostname is missing from `remotePatterns`.                            |
| `401` on upload                              | Session is missing or user is not authenticated.                               |
| `File too large`                             | Server-side size limit was exceeded.                                           |
| `Invalid file type`                          | File MIME type is not allowed.                                                 |
| Works locally but fails in production        | Deployment environment variables or infrastructure request limits are missing. |
| Works directly but not through nginx         | Reverse proxy body-size or timeout limit.                                      |
| Upload works but browser cannot fetch object | Public bucket/object policy or URL configuration problem.                      |

---

## 17. Optional Extensions

### Delete uploaded objects

Use `DeleteObjectCommand` with the stored `key`.

Keep the key because deletion should not depend on parsing a public URL.

### Private buckets

For private objects:

* Do not construct permanent public URLs.
* Generate presigned GET URLs when access is needed.
* Use a reasonable expiration time.
* Authorize the requesting user before generating the URL.

### Direct browser upload

For larger files:

```text
Browser
  ↓
Next.js requests presigned PUT URL
  ↓
Browser → ParsPack
```

This reduces memory usage in the Next.js server.

Do not expose permanent S3 credentials to the browser.

### Image processing

Use `sharp` when the application needs:

* Resize
* Compression
* Format conversion
* Thumbnail generation
* Metadata removal

A common production flow is:

```text
Upload
  ↓
Validate
  ↓
Process
  ↓
PutObject
```

Do not process untrusted images without considering resource limits.

---

## 18. Minimal Test Plan

From the **project root**, configure all required `S3_*` environment variables.

Then:

1. Start the application.
2. Log in as an authenticated user.
3. Upload a small JPEG.
4. Confirm the API returns:

```json
{
  "url": "https://...parspack.net/bucket/uploads/...",
  "key": "uploads/..."
}
```

5. Open the returned URL directly.
6. Confirm the image loads.
7. Save the URL/key to the relevant database record.
8. Render the image through `next/image`.
9. Test an invalid MIME type.
10. Test a file larger than the configured limit.
11. Test an unauthenticated request.
12. Test the production deployment separately.

### Optional curl test

From the **project root**, if the application is running locally:

```bash
curl -X POST http://localhost:3000/api/upload \
  -F "file=@./test-image.jpg"
```

If authentication is required, include the appropriate authenticated session mechanism rather than disabling authentication just for testing.

---

## 19. Nginx Note

If uploads work locally but fail behind nginx with:

```text
413 Request Entity Too Large
```

the reverse proxy is probably rejecting the request before it reaches Next.js.

For example:

```nginx
client_max_body_size 10M;
```

Then reload nginx using the deployment's normal reload procedure.

The infrastructure limit should be greater than or equal to the application's intended upload limit.

Do not solve a `413` by blindly increasing the limit. Keep the application-level file-size validation in place.

---

## 20. Agent Rules

When implementing ParsPack uploads:

1. Inspect the existing authentication system before creating a new one.
2. Inspect the existing storage utilities before creating duplicate S3 helpers.
3. Keep credentials server-side.
4. Never put S3 secrets in client components.
5. Use `forcePathStyle` for ParsPack path-style storage.
6. Validate file size and type on the server.
7. Do not trust the original filename.
8. Generate collision-safe object keys.
9. Keep the object key if future deletion or migration is possible.
10. Use public URLs only for intentionally public objects.
11. Use presigned URLs for private objects.
12. Do not manually set multipart `Content-Type` in browser `fetch`.
13. Do not disable authentication to make uploads work.
14. Do not bypass bucket permissions to hide a configuration problem.
15. Check `next/image` configuration when remote images fail.
16. Check reverse-proxy body limits when uploads fail before reaching Next.js.
17. Match the project's existing error-handling and logging conventions.
18. Avoid introducing new architecture when the project already has an established upload abstraction.

---

## 21. Final Checklist

Before considering the implementation complete:

* [ ] AWS SDK S3 packages are installed.
* [ ] `.env.local` contains the required server-side variables.
* [ ] Secrets are not exposed through `NEXT_PUBLIC_*`.
* [ ] ParsPack endpoint is correct.
* [ ] Bucket name is correct.
* [ ] `forcePathStyle` is enabled.
* [ ] S3 client is server-only.
* [ ] Upload route requires authentication.
* [ ] `FormData` field is named `file`.
* [ ] Server validates MIME type.
* [ ] Server validates file size.
* [ ] Object keys do not use untrusted filenames.
* [ ] Object keys are collision-safe.
* [ ] Public/private storage behavior is intentional.
* [ ] Public URL uses the correct path-style format.
* [ ] `next/image` allows the ParsPack hostname when needed.
* [ ] Client does not manually set multipart `Content-Type`.
* [ ] Upload state prevents accidental duplicate submission.
* [ ] Production request-size limits are configured.
* [ ] Unauthorized requests return JSON `401`.
* [ ] Invalid files return `400`.
* [ ] Storage failures return a safe `500`.
* [ ] The returned object can be fetched successfully.
* [ ] Database persistence stores the appropriate storage reference.
* [ ] Delete/presigned access has been considered if required.

---

## 22. Scope

This skill covers ParsPack S3-compatible object storage integration for image uploads in a Next.js App Router application.

It does not prescribe:

* A specific authentication provider
* A specific database
* A specific form library
* A specific UI component library
* A specific deployment platform
* A specific image-processing pipeline

Adapt the examples to the existing project's architecture.

When modifying an existing project, inspect its current storage, authentication, database, validation, and error-handling patterns first. Reuse existing abstractions where possible instead of introducing parallel implementations.
