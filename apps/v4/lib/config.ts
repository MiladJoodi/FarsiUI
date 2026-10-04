const PRODUCTION_APP_URL = "https://farsiui.ir"
const LOCAL_APP_URL = "http://localhost:4000"

function resolveAppUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")
  if (process.env.NODE_ENV === "production") return PRODUCTION_APP_URL
  return LOCAL_APP_URL
}

/** Prefer the live request host so absolute URLs never point at a different origin (e.g. localhost). */
export function getMetadataBase(headersList: Headers) {
  const host =
    headersList.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    headersList.get("host")?.trim()
  const proto =
    headersList.get("x-forwarded-proto")?.split(",")[0]?.trim() ||
    (host?.includes("localhost") || host?.startsWith("127.") ? "http" : "https")

  if (host) {
    try {
      return new URL(`${proto}://${host}`)
    } catch {
      // fall through
    }
  }

  return new URL(resolveAppUrl())
}

export const siteConfig = {
  name: "FarsiUI",
  url: resolveAppUrl(),
  ogImage: "/opengraph-image.png",
  description:
    "کتابخانه کامپوننت UI فارسی برای React و Tailwind — آمادهٔ RTL و مناسب ساخت رابط کاربری محصولات فارسی.",
  links: {
    github: "https://github.com/MiladJoodi/FarsiUI",
  },
  navItems: [
    {
      href: "/docs/installation",
      label: "مستندات",
    },
    {
      href: "/blocks",
      label: "بلوک‌ها",
    },
    {
      href: "/showcase",
      label: "نمونه‌ها",
    },
    {
      href: "/skills",
      label: "مهارت‌ها",
    },
    {
      href: "/charts/area",
      label: "نمودارها",
    },
  ],
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}
