import { NextResponse, type NextRequest } from "next/server"

/**
 * Root layout sometimes does not see Cookie on the document request.
 * Forward picker prefs as request headers so SSR can set body classes.
 */
export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)

  const designSystem = request.cookies.get("design-system-preview")?.value
  const activeTheme = request.cookies.get("active-theme")?.value
  const uiFont = request.cookies.get("ui-font-preview")?.value

  if (designSystem) {
    requestHeaders.set("x-design-system-preview", designSystem)
  }
  if (activeTheme) {
    requestHeaders.set("x-active-theme", activeTheme)
  }
  if (uiFont) {
    requestHeaders.set("x-ui-font-preview", uiFont)
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: [
    /*
     * Run on page navigations; skip static assets and Next internals.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)",
  ],
}
