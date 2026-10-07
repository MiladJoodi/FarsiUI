import { createOgImage } from "./create-og-image"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  return createOgImage({
    title: searchParams.get("title"),
    description: searchParams.get("description"),
  })
}
