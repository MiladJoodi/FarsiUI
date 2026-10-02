---
name: zarinpal-payment
description: >
  Integrate the Zarinpal payment gateway into Next.js or Node.js applications.
  Use when implementing payment requests, authority handling, callbacks,
  verification, billing records, Toman-to-Rial conversion, sandbox testing,
  idempotency, or secure payment flows for Iranian products.
---

# Zarinpal Payment Gateway

Implementation guide for integrating **Zarinpal** into a Next.js App Router or Node.js application.

The integration should always keep payment credentials and payment verification on the server.

The core flow is:

```text
User clicks Pay
      │
      ▼
Your Server
      │
      ├── POST → Zarinpal /request
      │             │
      │             └── authority
      │
      ▼
Save pending billing record
      │
      ▼
Redirect user to Zarinpal StartPay
      │
      ▼
User completes or cancels payment
      │
      ▼
Zarinpal callback
?Authority=...&Status=OK
      │
      ▼
Your Server
      │
      ├── Find billing by authority
      │
      ├── POST → Zarinpal /verify
      │
      └── code === 100
             │
             ▼
        Mark paid
        Save ref_id
        Grant product
```

Do not grant a product merely because the browser returned from Zarinpal.

A successful callback must be followed by server-side verification.

---

## 1. Environment Variables

Create or update `.env.local` in the **project root**:

```env
ZARINPAL_MERCHANT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Optional
ZARINPAL_SANDBOX=true

# Public application URL
NEXTAUTH_URL=https://yourdomain.com
# or:
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Rules

* `ZARINPAL_MERCHANT_ID` must remain server-side.
* Never expose it through a `NEXT_PUBLIC_*` variable.
* Use HTTPS for production callbacks.
* Do not hardcode the merchant ID in source code.
* Keep sandbox and production credentials separate.

Prefer a server-only base URL variable when the application architecture allows it.

---

## 2. Zarinpal API Reference

### Base URLs

| Mode       | Base URL                       |
| ---------- | ------------------------------ |
| Sandbox    | `https://sandbox.zarinpal.com` |
| Production | `https://payment.zarinpal.com` |

### Endpoints

| Action         | URL                                 |
| -------------- | ----------------------------------- |
| Create request | `{BASE}/pg/v4/payment/request.json` |
| Verify payment | `{BASE}/pg/v4/payment/verify.json`  |

StartPay:

```text
Sandbox:
https://sandbox.zarinpal.com/pg/StartPay/{authority}

Production:
https://www.zarinpal.com/pg/StartPay/{authority}
```

Keep these URLs centralized instead of duplicating them throughout the application.

---

## 3. Currency

Zarinpal's API amount is sent in **Rial**.

If the application's internal pricing uses Toman:

```ts
const amountInRial = amountInToman * 10;
```

Example:

```text
49,000 Toman
× 10
= 490,000 Rial
```

Keep the application's canonical price in the application's chosen currency.

Do not store a mixture of Toman and Rial in the same `amount` field.

A useful naming convention is:

```text
amountToman
amountRial
```

when both values exist in the same scope.

---

## 4. Payment Request

Create payment requests from the server.

Endpoint:

```text
POST {BASE}/pg/v4/payment/request.json
```

Example:

```json
{
  "merchant_id": "your-merchant-id",
  "amount": 490000,
  "callback_url": "https://yourdomain.com/api/payment/zarinpal/verify",
  "description": "Purchase description",
  "metadata": {
    "mobile": "09120000000",
    "email": "user@example.com"
  }
}
```

A successful response contains an authority:

```json
{
  "data": {
    "code": 100,
    "message": "Success",
    "authority": "A000000000000000000000000000000000",
    "fee_type": "Merchant",
    "fee": 0
  },
  "errors": []
}
```

Require:

```text
data.code === 100
```

and:

```text
data.authority
```

before treating the request as successful.

---

## 5. Payment Verification

Endpoint:

```text
POST {BASE}/pg/v4/payment/verify.json
```

Request:

```json
{
  "merchant_id": "your-merchant-id",
  "amount": 490000,
  "authority": "A000000000000000000000000000000000"
}
```

The amount must be the same Rial amount used during the payment request.

A successful response contains:

```json
{
  "data": {
    "code": 100,
    "ref_id": 12345678,
    "message": "Paid"
  },
  "errors": []
}
```

### Verification codes

| Code  | Meaning                       |
| ----- | ----------------------------- |
| `100` | Payment successfully verified |
| `101` | Payment was already verified  |
| Other | Verification failed           |

Treat `101` as an idempotent already-paid state, but do not grant the product twice.

---

## 6. Complete Payment Flow

Implement the flow in this order:

1. User chooses a product.
2. Client sends the purchase intent to your server.
3. Server authenticates the user.
4. Server validates the requested product/plan.
5. Server computes the final amount from trusted pricing data.
6. Server handles discounts on the server.
7. If the final amount is zero, skip Zarinpal.
8. Otherwise convert the amount from Toman to Rial.
9. Server creates the Zarinpal request.
10. Server receives the authority.
11. Server saves a `pending` billing record.
12. Server returns the payment URL.
13. Browser redirects to Zarinpal.
14. Zarinpal redirects to the callback URL.
15. Server reads `Authority` and `Status`.
16. If the status is not successful, mark the attempt appropriately.
17. Server finds the billing record by authority.
18. Server verifies the payment with Zarinpal.
19. If verification returns `100`, mark the billing record paid.
20. Save `refId`.
21. Grant the product/service.
22. If verification returns `101`, treat the payment as already verified and avoid duplicate fulfillment.
23. For other verification codes, do not grant the product.

The browser must never be the authority for payment success.

---

## 7. Database Model

Store one record per payment attempt.

A minimum model:

```typescript
interface BillingRecord {
  id: string;
  userId: string;

  // Application's canonical currency: Toman
  amount: number;

  status: "pending" | "paid" | "failed";

  authority: string;
  refId?: string;

  createdAt: Date;
  updatedAt: Date;

  type?: string;
  period?: string;
  description?: string;

  originalAmount?: number;
  discountAmount?: number;
  discountCode?: string;
}
```

Consider also storing:

```text
amountRial
currency
failureReason
paidAt
provider
```

when the application needs stronger accounting/auditing.

### Critical rule

During verification:

```text
authority
  ↓
billing record
  ↓
stored amount
  ↓
amount × 10
  ↓
Zarinpal verify
```

Never trust the amount from callback query parameters.

Do not calculate the verification amount from client state.

---

## 8. API Route: Create Payment

Create:

```text
app/api/payment/zarinpal/request/route.ts
```

in the project root.

Example:

```typescript
import { NextRequest, NextResponse } from "next/server";

const IS_SANDBOX = process.env.ZARINPAL_SANDBOX === "true";

const ZARINPAL_BASE = IS_SANDBOX
  ? "https://sandbox.zarinpal.com"
  : "https://payment.zarinpal.com";

const REQUEST_URL =
  `${ZARINPAL_BASE}/pg/v4/payment/request.json`;

function getBaseUrl(): string {
  const value =
    process.env.NEXTAUTH_URL ||
    process.env.NEXT_PUBLIC_BASE_URL;

  if (!value) {
    throw new Error("Application base URL is not configured");
  }

  return value.replace(/\/$/, "");
}

export async function POST(request: NextRequest) {
  const session = await getYourSession(request);

  if (!session?.user?.id) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    );
  }

  const merchantId = process.env.ZARINPAL_MERCHANT_ID;

  if (!merchantId) {
    console.error("ZARINPAL_MERCHANT_ID is not configured");

    return NextResponse.json(
      { error: "Payment gateway not configured" },
      { status: 500 }
    );
  }

  const body = await request.json();

  // Validate the purchase request.
  // Never trust a client-provided price.
  const amountInToman = await computeAmountFromServerData(
    body,
    session.user.id
  );

  if (amountInToman <= 0) {
    const billing = await saveBillingRecord({
      userId: session.user.id,
      amount: 0,
      status: "paid",
      ...body,
    });

    await grantProductToUser(
      session.user.id,
      body
    );

    return NextResponse.json({
      success: true,
      free: true,
      billingId: billing.id,
      message: "Purchase activated for free",
    });
  }

  const amountInRial = amountInToman * 10;

  const callbackUrl =
    `${getBaseUrl()}/api/payment/zarinpal/verify`;

  const response = await fetch(REQUEST_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      merchant_id: merchantId,
      amount: amountInRial,
      callback_url: callbackUrl,
      description: "Purchase",
      metadata: {
        mobile: session.user.phone || "",
        email: session.user.email || "",
      },
    }),
  });

  if (!response.ok) {
    console.error(
      "Zarinpal request HTTP failure:",
      response.status
    );

    return NextResponse.json(
      { error: "Payment gateway error. Try again." },
      { status: 502 }
    );
  }

  const data = await response.json();

  if (
    data.data?.code !== 100 ||
    !data.data?.authority
  ) {
    console.error(
      "Zarinpal request failed:",
      data
    );

    return NextResponse.json(
      { error: "Payment gateway error. Try again." },
      { status: 502 }
    );
  }

  const authority = data.data.authority;

  const paymentUrl = IS_SANDBOX
    ? `https://sandbox.zarinpal.com/pg/StartPay/${authority}`
    : `https://www.zarinpal.com/pg/StartPay/${authority}`;

  const billing = await saveBillingRecord({
    userId: session.user.id,
    amount: amountInToman,
    status: "pending",
    authority,
    ...body,
  });

  return NextResponse.json({
    success: true,
    authority,
    paymentUrl,
    billingId: billing.id,
  });
}
```

### Important

`computeAmountFromServerData()` is intentionally project-specific.

It should derive the amount from trusted server-side information such as:

* Product ID
* Plan ID
* Current database price
* Current subscription period
* Valid discount code

It must not simply return:

```ts
body.amount
```

---

## 9. Save the Pending Record Carefully

A useful sequence is:

```text
Create Zarinpal authority
        ↓
Save pending billing record
        ↓
Return payment URL
```

The database record should contain enough information to recover the payment later.

At minimum:

```text
userId
amount
authority
status
createdAt
```

If saving the billing record fails after Zarinpal has created the authority, do not return a payment URL as if the transaction were fully initialized.

Log the failure and handle the orphaned authority according to the application's recovery strategy.

---

## 10. API Route: Verify Callback

Create:

```text
app/api/payment/zarinpal/verify/route.ts
```

Example:

```typescript
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

const IS_SANDBOX = process.env.ZARINPAL_SANDBOX === "true";

const ZARINPAL_BASE = IS_SANDBOX
  ? "https://sandbox.zarinpal.com"
  : "https://payment.zarinpal.com";

const VERIFY_URL =
  `${ZARINPAL_BASE}/pg/v4/payment/verify.json`;

const RESULT_PAGE = "/payment/result";

export async function GET(request: NextRequest) {
  const authority =
    request.nextUrl.searchParams.get("Authority");

  const status =
    request.nextUrl.searchParams.get("Status");

  if (!authority) {
    redirect(`${RESULT_PAGE}?payment=failed`);
  }

  if (status !== "OK") {
    redirect(`${RESULT_PAGE}?payment=failed`);
  }

  const merchantId =
    process.env.ZARINPAL_MERCHANT_ID;

  if (!merchantId) {
    redirect(`${RESULT_PAGE}?payment=error`);
  }

  const billing =
    await findBillingByAuthority(
      authority,
      "pending"
    );

  if (!billing) {
    const existing =
      await findBillingByAuthority(
        authority,
        "paid"
      );

    if (existing) {
      redirect(
        `${RESULT_PAGE}?payment=success`
      );
    }

    redirect(
      `${RESULT_PAGE}?payment=notfound`
    );
  }

  const amountInRial =
    billing.amount * 10;

  const response = await fetch(
    VERIFY_URL,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        merchant_id: merchantId,
        amount: amountInRial,
        authority,
      }),
    }
  );

  if (!response.ok) {
    console.error(
      "Zarinpal verify HTTP failure:",
      response.status
    );

    redirect(
      `${RESULT_PAGE}?payment=verify_failed`
    );
  }

  const data = await response.json();
  const code = data.data?.code;

  if (code === 101) {
    redirect(
      `${RESULT_PAGE}?payment=success`
    );
  }

  if (code !== 100) {
    console.error(
      "Zarinpal verify failed:",
      data
    );

    await updateBillingStatus(
      billing.id,
      "failed"
    );

    redirect(
      `${RESULT_PAGE}?payment=verify_failed`
    );
  }

  const refId =
    data.data?.ref_id;

  await updateBillingRecord(
    billing.id,
    {
      status: "paid",
      refId: refId?.toString(),
    }
  );

  await grantProductToUser(
    billing.userId,
    billing
  );

  redirect(
    `${RESULT_PAGE}?payment=success`
  );
}
```

The authentication session does not need to be relied upon in the callback.

The callback is identified using the payment authority and the server-side billing record.

---

## 11. Idempotency

Payment callbacks can be repeated.

The fulfillment operation must therefore be idempotent.

Bad:

```text
verify succeeds
↓
grant 100 credits
↓
callback repeats
↓
grant another 100 credits
```

Correct:

```text
verify succeeds
↓
billing becomes paid
↓
grant product exactly once

callback repeats
↓
billing is already paid
↓
do not grant again
```

Use a database transaction or another reliable atomic mechanism when granting:

* Credits
* Subscription time
* Purchased products
* Account balance
* Digital licenses

Do not rely only on:

```ts
if (billing.status === "paid")
```

without considering concurrent callbacks.

Two requests can read `pending` at nearly the same time.

Use database-level protection where the business logic is financially important.

---

## 12. Frontend Integration

Client-side payment initiation should send the purchase intent, not the trusted price.

```typescript
async function handlePayment(
  purchaseDetails: object
) {
  const response = await fetch(
    "/api/payment/zarinpal/request",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        purchaseDetails
      ),
    }
  );

  const data = await response.json();

  if (!response.ok || !data.success) {
    showError(
      data.error ||
      "Payment failed. Try again."
    );

    return;
  }

  if (data.free) {
    showSuccess(data.message);
    return;
  }

  window.location.href =
    data.paymentUrl;
}
```

### Payment states

The UI should distinguish:

```text
Idle
Creating payment
Redirecting
Paid
Cancelled
Verification failed
Unknown/error
```

Disable repeated payment submission while the request is being created.

---

## 13. Reading the Result

After returning to:

```text
/payment/result
```

the frontend can read:

```typescript
const searchParams =
  new URLSearchParams(
    window.location.search
  );

const paymentStatus =
  searchParams.get("payment");
```

Example values:

```text
success
failed
verify_failed
notfound
error
```

These values are UI states only.

Do not use:

```text
?payment=success
```

as proof that money was received.

The server must already have verified the transaction.

---

## 14. Error Handling

| Scenario                  | Response                                         |
| ------------------------- | ------------------------------------------------ |
| Request code is not `100` | Do not redirect to payment. Return a safe error. |
| Callback has `Status=NOK` | Treat as cancelled/failed payment.               |
| Authority is missing      | Reject callback.                                 |
| Billing record not found  | Do not verify/grant.                             |
| Verification code `100`   | Mark paid and fulfill.                           |
| Verification code `101`   | Treat as already verified; remain idempotent.    |
| Other verification code   | Do not grant the product.                        |
| Gateway HTTP failure      | Do not grant the product.                        |
| Merchant ID missing       | Configuration error.                             |
| Network timeout           | Do not grant the product automatically.          |

Never expose:

* Merchant credentials
* Full gateway responses
* Internal database errors
* Stack traces

to the browser.

Log detailed information server-side according to the project's logging policy.

---

## 15. Zero-Amount Purchases

A fully discounted purchase should not go through Zarinpal.

If:

```text
finalAmount <= 0
```

then:

```text
Save billing as paid
       ↓
Grant product
       ↓
Return success
```

Do not generate a fake Zarinpal authority for a free purchase.

Make sure the free-purchase fulfillment is also idempotent.

---

## 16. Security Checklist

* [ ] Merchant ID is server-side only.
* [ ] No payment secret is exposed through client-side environment variables.
* [ ] Product price is computed server-side.
* [ ] Client-provided amount is ignored.
* [ ] Discount validation happens server-side.
* [ ] Billing record is created before redirecting the user.
* [ ] Authority is stored with the billing record.
* [ ] Verification uses the amount stored in the database.
* [ ] Callback query parameters are not trusted as payment proof.
* [ ] Product is granted only after successful verification.
* [ ] `code === 101` is handled idempotently.
* [ ] Concurrent callbacks cannot double-fulfill the purchase.
* [ ] Production callback uses HTTPS.
* [ ] Detailed gateway errors are not returned to users.
* [ ] Sensitive credentials are never logged.
* [ ] Payment records have an auditable status history where required.
* [ ] Free purchases cannot be abused to grant products repeatedly.

---

## 17. Testing and Sandbox

Use sandbox credentials during development.

Set in `.env.local`:

```env
ZARINPAL_SANDBOX=true
```

Register for the Zarinpal sandbox and use its test merchant credentials and test payment details.

Test at least:

1. Successful payment.
2. User cancellation.
3. Invalid/failed payment.
4. Missing authority.
5. Unknown authority.
6. Verification failure.
7. Duplicate callback.
8. Concurrent callback handling.
9. Zero-amount purchase.
10. Invalid discount.
11. Production-like HTTPS callback.
12. Gateway/network failure.

After a successful test, confirm:

```text
billing.status === "paid"
refId is stored
product is granted exactly once
```

Do not consider a payment successful merely because the browser returned from the gateway.

---

## 18. Test the API Manually

For the payment request route, test from the **project root** using the project's authenticated environment.

A raw request can look like:

```bash
curl -X POST http://localhost:3000/api/payment/zarinpal/request \
  -H "Content-Type: application/json" \
  -d '{"type":"plan","period":"monthly"}'
```

This will only work if the authentication mechanism accepts the request.

Do not disable authentication simply to make a manual test pass.

The callback can be tested with a known authority:

```text
http://localhost:3000/api/payment/zarinpal/verify?Authority=...&Status=OK
```

Use real sandbox authorities for meaningful verification tests.

---

## 19. Key Constants

### Sandbox

```typescript
const REQUEST_URL =
  "https://sandbox.zarinpal.com/pg/v4/payment/request.json";

const VERIFY_URL =
  "https://sandbox.zarinpal.com/pg/v4/payment/verify.json";

const START_PAY =
  "https://sandbox.zarinpal.com/pg/StartPay/";
```

### Production

```typescript
const REQUEST_URL =
  "https://payment.zarinpal.com/pg/v4/payment/request.json";

const VERIFY_URL =
  "https://payment.zarinpal.com/pg/v4/payment/verify.json";

const START_PAY =
  "https://www.zarinpal.com/pg/StartPay/";
```

### Currency conversion

```typescript
const amountInRial =
  amountInToman * 10;
```

### Response codes

```text
Request:
100 → authority created successfully

Verify:
100 → successfully verified
101 → already verified
other → verification failure
```

---

## 20. Agent Rules

When implementing Zarinpal:

1. Inspect the existing authentication system first.
2. Inspect the existing billing/payment model before creating another one.
3. Inspect existing pricing and discount logic.
4. Never trust a client-provided amount.
5. Keep the merchant ID server-side.
6. Store the authority before redirecting the user.
7. Find the billing record by authority during verification.
8. Use the stored amount for verification.
9. Never trust callback status as payment proof.
10. Grant the product only after server-side verification.
11. Make fulfillment idempotent.
12. Protect against concurrent callbacks.
13. Keep sandbox and production configuration separate.
14. Use HTTPS for production callbacks.
15. Do not expose raw gateway errors to users.
16. Reuse existing database transactions and error handling where available.
17. Do not introduce a second payment abstraction if the project already has one.
18. Keep Toman and Rial conversions explicit in variable names.
19. Handle zero-value purchases separately.
20. Test cancellation, duplicate callbacks, verification failure, and successful fulfillment before shipping.

---

## 21. Final Checklist

Before considering the integration complete:

* [ ] Environment variables are configured.
* [ ] Merchant ID is server-only.
* [ ] Sandbox mode works.
* [ ] Production URLs are configured separately.
* [ ] Server calculates the final amount.
* [ ] Toman → Rial conversion is explicit.
* [ ] Payment request returns an authority.
* [ ] Pending billing record stores the authority.
* [ ] User is redirected to the correct StartPay URL.
* [ ] Callback reads `Authority` and `Status`.
* [ ] Billing is looked up by authority.
* [ ] Verification uses the stored amount.
* [ ] `code === 100` marks the payment as paid.
* [ ] `code === 101` is handled idempotently.
* [ ] Other verification codes do not grant the product.
* [ ] `ref_id` is stored after successful verification.
* [ ] Product fulfillment is idempotent.
* [ ] Zero-amount purchases bypass Zarinpal.
* [ ] Failed/cancelled payments do not grant the product.
* [ ] Duplicate callbacks are safe.
* [ ] Concurrent callbacks cannot double-grant.
* [ ] Client never receives payment credentials.
* [ ] Production callback uses HTTPS.
* [ ] Error responses do not leak sensitive information.
* [ ] Sandbox tests pass before production activation.

---

## 22. Official Resources

Use the provider's current official documentation and sandbox information when implementing or validating the integration:

* Zarinpal Developer Documentation: `https://www.zarinpal.com/docs/`
* Zarinpal Sandbox: `https://sandbox.zarinpal.com`
* Zarinpal Merchant Panel: `https://www.zarinpal.com/panel/`

Provider endpoints and payment behavior can change. If the current project depends on a specific API version, verify the endpoint and response contract against the provider's current documentation before shipping.

Adapt the examples to the existing project's architecture. When modifying an existing project, inspect its current payment, authentication, billing, pricing, and fulfillment patterns first. Reuse existing abstractions where possible instead of introducing parallel implementations.
