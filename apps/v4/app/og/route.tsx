import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

/** Legacy /og?title=… URLs → static demo share image. */
export async function GET(request: Request) {
  const candidates = [
    join(process.cwd(), "public/farsiui/demo.png"),
    join(process.cwd(), "apps/v4/public/farsiui/demo.png"),
  ]

  for (const file of candidates) {
    try {
      const body = await readFile(file)
      return new NextResponse(body, {
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=86400, immutable",
        },
      })
    } catch {
      // try next
    }
  }

  return NextResponse.redirect(new URL("/farsiui/demo.png", request.url))
}
