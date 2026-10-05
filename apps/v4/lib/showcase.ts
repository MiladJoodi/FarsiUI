const EXAMPLES_LIVE_BASE = "https://farsiui-examples.vercel.app/examples"
const EXAMPLES_GITHUB_BASE =
  "https://github.com/MiladJoodi/FarsiUI-Examples/tree/master/app/examples"

/** Shared preview until per-example screenshots are added under /images/showcase. */
const DEFAULT_IMAGE_LIGHT = "/r/styles/new-york/dashboard-01-light.png"
const DEFAULT_IMAGE_DARK = "/r/styles/new-york/dashboard-01-dark.png"

function exampleUrls(slug: string) {
  return {
    liveUrl: `${EXAMPLES_LIVE_BASE}/${slug}`,
    githubUrl: `${EXAMPLES_GITHUB_BASE}/${slug}`,
    imageUrl: DEFAULT_IMAGE_LIGHT,
    imageUrlDark: DEFAULT_IMAGE_DARK,
  }
}

export type ShowcaseCategory = {
  title: string
  slug: string
  description?: string
  /** If set, sidebar links outside category filter routes */
  href?: string
}

export type ShowcaseProject = {
  id: string
  title: string
  description: string
  category: string
  imageUrl?: string
  imageUrlDark?: string
  githubUrl?: string
  liveUrl?: string
}

export const showcaseCategories: ShowcaseCategory[] = [
  {
    title: "داشبوردها",
    slug: "dashboard",
    description: "داشبورد و تحلیل",
  },
  {
    title: "اپلیکیشن‌ها",
    slug: "applications",
    description: "ابزارهای کاربردی، فروشگاه و دستیار",
  },
  {
    title: "صفحات وب",
    slug: "pages",
    description: "لندینگ، بلاگ، تنظیمات و احراز هویت",
  },
]

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "dashboard",
    title: "داشبورد",
    description: "پنل مدیریت فروش با کارت آماری، نمودار و جدول سفارش‌ها.",
    category: "dashboard",
    ...exampleUrls("dashboard"),
  },
  {
    id: "analytics",
    title: "آنالیتیکس",
    description: "داشبورد تحلیل با نمودارها و گزارش‌های عملکرد.",
    category: "dashboard",
    ...exampleUrls("analytics"),
  },
  {
    id: "tasks",
    title: "وظایف",
    description: "مدیریت کارها با جدول، فیلتر و وضعیت‌ها.",
    category: "applications",
    ...exampleUrls("tasks"),
  },
  {
    id: "calendar",
    title: "تقویم",
    description: "تقویم رویدادها و زمان‌بندی جلسات.",
    category: "applications",
    ...exampleUrls("calendar"),
  },
  {
    id: "team-chat",
    title: "چت تیمی",
    description: "پیام‌رسان و همکاری تیمی.",
    category: "applications",
    ...exampleUrls("team-chat"),
  },
  {
    id: "ecommerce",
    title: "فروشگاه",
    description: "فروشگاه آنلاین با لیست محصول و سبد خرید.",
    category: "applications",
    ...exampleUrls("ecommerce"),
  },
  {
    id: "ai-assistant",
    title: "دستیار هوش مصنوعی",
    description: "رابط گفتگو با دستیار هوشمند.",
    category: "applications",
    ...exampleUrls("ai-assistant"),
  },
  {
    id: "landing",
    title: "لندینگ",
    description: "صفحهٔ معرفی محصول با CTA.",
    category: "pages",
    ...exampleUrls("landing"),
  },
  {
    id: "pricing",
    title: "قیمت‌گذاری",
    description: "صفحهٔ پلن‌ها و مقایسهٔ قیمت.",
    category: "pages",
    ...exampleUrls("pricing"),
  },
  {
    id: "blog",
    title: "بلاگ",
    description: "لیست نوشته‌ها و صفحهٔ مطلب.",
    category: "pages",
    ...exampleUrls("blog"),
  },
  {
    id: "settings",
    title: "تنظیمات",
    description: "صفحهٔ تنظیمات حساب و سامانه.",
    category: "pages",
    ...exampleUrls("settings"),
  },
  {
    id: "authentication",
    title: "احراز هویت",
    description: "ورود و ثبت‌نام با فرم فارسی.",
    category: "pages",
    ...exampleUrls("authentication"),
  },
]

export function getShowcaseCategory(slug: string) {
  return showcaseCategories.find((category) => category.slug === slug)
}

export function getShowcaseProjects(categorySlug?: string) {
  if (!categorySlug) {
    return showcaseProjects
  }
  return showcaseProjects.filter((project) => project.category === categorySlug)
}

export function getShowcaseCategorySlugs() {
  return showcaseCategories
    .filter((category) => !category.href)
    .map((category) => category.slug)
}
