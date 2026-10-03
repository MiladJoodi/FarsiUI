/**
 * Blocks sidebar: فارسی — English (RTL: FA right, EN left)
 * Each item maps to /blocks/{slug} and registry categories.
 */

export type BlocksNavItem = {
  title: string
  en: string
  href: string
  slug: string
}

export type BlocksNavCategory = {
  title: string
  en: string
  slug: string
  items: BlocksNavItem[]
}

function item(en: string, title: string, slug: string): BlocksNavItem {
  return { en, title, slug, href: `/blocks/${slug}` }
}

export const blocksNavCategories: BlocksNavCategory[] = [
  {
    title: "فرم‌ها و احراز هویت",
    en: "Forms & Auth",
    slug: "forms-auth",
    items: [
      item("Login", "ورود", "login"),
      item("Signup", "ثبت‌نام", "signup"),
      item("Forgot Password", "فراموشی رمز عبور", "forgot-password"),
      item("Reset Password", "تغییر رمز عبور", "reset-password"),
      item("OTP Verification", "تأیید کد یکبارمصرف", "otp"),
      item("Identity Verification", "احراز هویت", "identity-verification"),
      item("National ID", "کد ملی", "national-id"),
      item("License Plate", "پلاک خودرو", "license-plate"),
      item("Personal Info", "اطلاعات شخصی", "personal-info"),
      item("Document Verification", "تأیید مدارک", "document-verification"),
      item("Profile Form", "فرم پروفایل", "profile-form"),
      item("Contact Form", "فرم تماس با ما", "contact-form"),
      item("Support Form", "فرم درخواست پشتیبانی", "support-form"),
      item("Newsletter Form", "فرم عضویت در خبرنامه", "newsletter-form"),
    ],
  },
  {
    title: "بازاریابی",
    en: "Marketing",
    slug: "marketing",
    items: [
      item("Hero", "معرفی", "hero"),
      item("Features", "ویژگی‌ها", "features"),
      item("Feature Split", "ویژگی دو بخشی", "feature-split"),
      item("Bento", "بنتو", "bento"),
      item("Pricing", "قیمت‌گذاری", "pricing"),
      item("CTA", "فراخوان اقدام", "cta"),
      item("Banner", "بنر", "banner"),
      item("Stats", "آمار بازاریابی", "stats"),
      item("Testimonials", "نظرات کاربران", "testimonials"),
      item("Logo Cloud", "لوگوی مشتریان", "logo-cloud"),
      item("Newsletter", "خبرنامه", "newsletter"),
    ],
  },
  {
    title: "ناوبری",
    en: "Navigation",
    slug: "navigation",
    items: [
      item("Navbar", "نوار ناوبری", "navbar"),
      item("Header", "سربرگ", "header"),
      item("Footer", "پابرگ", "footer"),
      item("Sidebar", "نوار کناری", "sidebar"),
      item("Mobile Navigation", "ناوبری موبایل", "mobile-navigation"),
      item("Breadcrumb", "مسیر صفحه", "breadcrumb-block"),
    ],
  },
  {
    title: "محتوا",
    en: "Content",
    slug: "content",
    items: [
      item("Blog Grid", "فهرست وبلاگ", "blog-grid"),
      item("Article", "مقاله", "article"),
      item("FAQ", "پرسش‌های متداول", "faq"),
      item("Team", "تیم", "team"),
      item("Contact", "تماس", "contact"),
      item("Steps", "مراحل", "steps"),
      item("Comparison", "مقایسه", "comparison"),
    ],
  },
  {
    title: "داشبورد",
    en: "Dashboard",
    slug: "dashboard",
    items: [
      item("Dashboard Overview", "نمای کلی داشبورد", "dashboard"),
      item("Dashboard Stats", "شاخص‌های داشبورد", "dashboard-stats"),
      item("Analytics Charts", "تحلیل و نمودار", "analytics"),
      item("Data Table", "جدول داده‌ها", "data-table-block"),
      item("Activity", "فعالیت‌ها", "activity"),
      item("Recent Items", "موارد اخیر", "recent-items"),
      item("Settings", "تنظیمات داشبورد", "dashboard-settings"),
      item("User Management", "مدیریت کاربران", "user-management"),
    ],
  },
  {
    title: "تجارت و فروشگاه",
    en: "Commerce",
    slug: "commerce",
    items: [
      item("Product Grid", "فهرست محصولات", "product-grid"),
      item("Product Details", "جزئیات محصول", "product-details"),
      item("Shopping Cart", "سبد خرید", "shopping-cart"),
      item("Checkout", "تسویه‌حساب", "checkout"),
      item("Order Summary", "خلاصه سفارش", "order-summary"),
      item("Order History", "تاریخچه سفارش‌ها", "order-history"),
      item("Wishlist", "علاقه‌مندی‌ها", "wishlist"),
    ],
  },
  {
    title: "حساب کاربری",
    en: "Account",
    slug: "account",
    items: [
      item("Profile", "پروفایل", "profile"),
      item("Account Settings", "تنظیمات حساب", "account-settings"),
      item("Security Settings", "تنظیمات امنیتی", "security-settings"),
      item("Notifications", "اعلان‌ها", "account-notifications"),
      item("Billing", "صورتحساب", "account-billing"),
      item("Sessions", "نشست‌ها", "sessions"),
    ],
  },
  {
    title: "ارتباط و گفتگو",
    en: "Communication",
    slug: "communication",
    items: [
      item("Chat", "گفتگو", "chat"),
      item("Message List", "فهرست پیام‌ها", "message-list"),
      item("Comments", "دیدگاه‌ها", "comments"),
      item("Notifications", "اعلان‌ها", "notifications"),
      item("Inbox", "صندوق پیام‌ها", "inbox"),
    ],
  },
  {
    title: "جستجو و فیلتر",
    en: "Search & Filter",
    slug: "search",
    items: [
      item("Search", "جستجو", "search"),
      item("Search Results", "نتایج جستجو", "search-results"),
      item("Filters", "فیلترها", "filters"),
      item("Advanced Filters", "فیلترهای پیشرفته", "advanced-filters"),
      item("Sort & Filter", "مرتب‌سازی و فیلتر", "sort-filter"),
      item("Empty Search", "نتیجه‌ای پیدا نشد", "empty-search"),
    ],
  },
  {
    title: "فایل و رسانه",
    en: "Files & Media",
    slug: "media",
    items: [
      item("File Upload", "بارگذاری فایل", "file-upload"),
      item("File Manager", "مدیریت فایل‌ها", "file-manager"),
      item("Image Gallery", "گالری تصاویر", "image-gallery"),
      item("Media Grid", "فهرست رسانه‌ها", "media-grid"),
      item("Attachment List", "پیوست‌ها", "attachment-list"),
      item("Avatar Upload", "بارگذاری تصویر پروفایل", "avatar-upload"),
    ],
  },
  {
    title: "تقویم و زمان‌بندی",
    en: "Calendar",
    slug: "calendar",
    items: [
      item("Calendar", "تقویم", "calendar-block"),
      item("Event List", "فهرست رویدادها", "event-list"),
      item("Event Details", "جزئیات رویداد", "event-details"),
      item("Schedule", "برنامه زمانی", "schedule"),
      item("Date & Time Picker", "انتخاب تاریخ و زمان", "datetime-picker"),
      item("Booking", "رزرو", "booking"),
    ],
  },
  {
    title: "پرداخت و اشتراک",
    en: "Billing",
    slug: "billing",
    items: [
      item("Payment", "پرداخت", "payment"),
      item("Payment Methods", "روش‌های پرداخت", "payment-methods"),
      item("Subscription", "اشتراک", "subscription"),
      item("Plan Selection", "انتخاب طرح", "plan-selection"),
      item("Invoice", "فاکتور", "invoice"),
      item("Billing", "صورتحساب", "billing"),
    ],
  },
  {
    title: "وضعیت‌ها",
    en: "States",
    slug: "states",
    items: [
      item("Empty State", "حالت خالی", "empty-state"),
      item("Error State", "حالت خطا", "error-state"),
      item("Not Found", "پیدا نشد", "not-found-block"),
      item("Loading", "در حال بارگذاری", "loading-state"),
      item("Success", "موفقیت", "success-state"),
      item("Maintenance", "تعمیر و نگهداری", "maintenance"),
      item("Coming Soon", "به‌زودی", "coming-soon"),
    ],
  },
]

export function getVisibleBlocksNav() {
  return blocksNavCategories
}

export function findBlocksNavMatch(pathname: string) {
  for (const category of blocksNavCategories) {
    for (const navItem of category.items) {
      if (pathname === navItem.href || pathname.startsWith(`${navItem.href}/`)) {
        return { category, item: navItem }
      }
    }
  }
  return null
}

/** All /blocks/[slug] category slugs used by the nav. */
export function getBlocksCategorySlugs() {
  const slugs = new Set<string>()
  for (const category of blocksNavCategories) {
    for (const navItem of category.items) {
      slugs.add(navItem.slug)
    }
  }
  return [...slugs]
}
