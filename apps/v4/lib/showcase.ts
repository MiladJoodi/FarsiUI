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
    description: "نمونه‌های داشبورد و پنل مدیریت",
  },
  {
    title: "اپلیکیشن‌ها",
    slug: "applications",
    description: "اپلیکیشن‌های کاربردی",
  },
  {
    title: "فروشگاهی",
    slug: "commerce",
    description: "فروشگاه و تجارت الکترونیک",
  },
  {
    title: "هوش مصنوعی",
    slug: "ai",
    description: "نمونه‌های مبتنی بر AI",
  },
  {
    title: "لندینگ‌ها",
    slug: "landings",
    description: "صفحات فرود و معرفی محصول",
  },
  {
    title: "سایر",
    slug: "other",
    description: "نمونه‌های متفرقه",
  },
]

export const showcaseProjects: ShowcaseProject[] = [
  // داشبوردها
  {
    id: "dashboard-01",
    title: "نسخهٔ اصلی",
    description:
      "پنل داشبورد فارسی با سایدبار، کارت‌های آماری، نمودار تعاملی و جدول داده.",
    category: "dashboard",
    imageUrl: "/r/styles/new-york/dashboard-01-light.png",
    imageUrlDark: "/r/styles/new-york/dashboard-01-dark.png",
  },
  {
    id: "dashboard-02",
    title: "تحلیل فروش",
    description: "داشبورد فروش با نمودارها و گزارش‌های دوره‌ای.",
    category: "dashboard",
  },
  {
    id: "dashboard-03",
    title: "پنل مدیریت",
    description: "پنل ادمین با مدیریت کاربران و تنظیمات.",
    category: "dashboard",
  },

  // اپلیکیشن‌ها
  {
    id: "applications-01",
    title: "مدیریت وظایف",
    description: "اپلیکیشن لیست کارها با برد کانبان.",
    category: "applications",
  },
  {
    id: "applications-02",
    title: "تقویم رویدادها",
    description: "اپلیکیشن تقویم و زمان‌بندی جلسات.",
    category: "applications",
  },
  {
    id: "applications-03",
    title: "پیام‌رسان تیمی",
    description: "اپلیکیشن چت و همکاری تیمی.",
    category: "applications",
  },

  // فروشگاهی
  {
    id: "commerce-01",
    title: "فروشگاه آنلاین",
    description: "فروشگاه با لیست محصول، سبد خرید و تسویه.",
    category: "commerce",
  },
  {
    id: "commerce-02",
    title: "کاتالوگ محصولات",
    description: "صفحهٔ محصولات با فیلتر و جستجو.",
    category: "commerce",
  },
  {
    id: "commerce-03",
    title: "صفحهٔ پرداخت",
    description: "فرم سفارش و خلاصهٔ پرداخت.",
    category: "commerce",
  },

  // هوش مصنوعی
  {
    id: "ai-01",
    title: "چت‌بات هوشمند",
    description: "رابط گفتگو با مدل زبانی.",
    category: "ai",
  },
  {
    id: "ai-02",
    title: "تولید محتوا",
    description: "ابزار تولید متن و تصویر با AI.",
    category: "ai",
  },
  {
    id: "ai-03",
    title: "دستیار کدنویسی",
    description: "محیط گفتگو برای کمک به توسعه.",
    category: "ai",
  },

  // لندینگ‌ها
  {
    id: "landings-01",
    title: "لندینگ محصول",
    description: "صفحهٔ معرفی محصول با CTA.",
    category: "landings",
  },
  {
    id: "landings-02",
    title: "لندینگ استارتاپ",
    description: "صفحهٔ فرود با ویژگی‌ها و قیمت‌گذاری.",
    category: "landings",
  },
  {
    id: "landings-03",
    title: "لندینگ سرویس",
    description: "صفحهٔ معرفی خدمات با فرم تماس.",
    category: "landings",
  },

  // سایر
  {
    id: "other-01",
    title: "صفحهٔ خطا",
    description: "قالب صفحات ۴۰۴ و خطا.",
    category: "other",
  },
  {
    id: "other-02",
    title: "پروفایل کاربر",
    description: "صفحهٔ پروفایل و تنظیمات حساب.",
    category: "other",
  },
  {
    id: "other-03",
    title: "بلاگ",
    description: "لیست نوشته‌ها و صفحهٔ مطلب.",
    category: "other",
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
