export const siteConfig = {
  name: "FarsiUI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:4000",
  ogImage: "/opengraph-image.png",
  description:
    "کامپوننت‌های مدرن و قابل شخصی‌سازی برای ساخت محصولات فارسی",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/MiladJoodi/FarsiUI",
  },
  navItems: [
    {
      href: "/",
      label: "خانه",
    },
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
