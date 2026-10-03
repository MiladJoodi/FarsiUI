function resolveAppUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")
  return "http://localhost:4000"
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
    "کامپوننت‌های مدرن و قابل شخصی‌سازی برای ساخت محصولات فارسی",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/MiladJoodi/FarsiUI",
  },
  navItems: [
    {
      href: "/docs/installation",
      label: "مستندات",
    },
    {
      href: "/docs/components",
      label: "کامپوننت‌ها",
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
