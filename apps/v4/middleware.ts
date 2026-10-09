import { NextResponse, type NextRequest } from "next/server"

import { SKILL_REGISTRY_SLUGS } from "@/lib/skill-registry-slugs"

/**
 * Skills are style-agnostic and live once under /r/skills/<slug>.json.
 * CLI always requests /r/styles/<style>/<name>.json — rewrite skill names.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const match = pathname.match(/^\/r\/styles\/[^/]+\/([^/]+)\.json$/)
  if (!match) {
    return NextResponse.next()
  }

  const name = match[1]
  if (!SKILL_REGISTRY_SLUGS.has(name)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = `/r/skills/${name}.json`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ["/r/styles/:style/:name.json"],
}
