/**
 * Generates RTL Persian FarsiUI blocks (2 UX variants per nav item).
 * Run: node apps/v4/scripts/generate-fa-blocks.mjs
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const blocksRoot = path.join(root, "registry/bases/base/blocks")

/** Existing categories we already have examples for — skip generating. */
const SKIP_SLUGS = new Set([
  "login",
  "signup",
  "sidebar",
  "dashboard",
  "personal-info",
  "identity-verification",
  "forgot-password",
  "national-id",
  "license-plate",
  "identity-check",
  "document-verification",
  "profile-form",
  "settings-form",
  "contact-form",
  "support-form",
  "newsletter-form",
  "hero",
  "features",
  "feature-split",
  "bento",
  "pricing",
  "cta",
  "banner",
  "stats",
  "testimonials",
  "logo-cloud",
  "newsletter",
])

const ITEMS = [
  // forms-auth (skip login/signup)
  ["forgot-password", "فراموشی رمز عبور", "Forgot Password", "form"],
  ["reset-password", "تغییر رمز عبور", "Reset Password", "form"],
  ["otp", "تأیید کد یکبارمصرف", "OTP Verification", "otp"],
  ["identity-verification", "احراز هویت", "Identity Verification", "form"],
  ["national-id", "کد ملی", "National ID", "form"],
  ["license-plate", "پلاک خودرو", "License Plate", "form"],
  ["personal-info", "اطلاعات شخصی", "Personal Info", "form"],
  ["identity-check", "بررسی هویت", "Identity Check", "check"],
  ["document-verification", "تأیید مدارک", "Document Verification", "upload"],
  ["profile-form", "فرم پروفایل", "Profile Form", "form"],
  ["settings-form", "فرم تنظیمات", "Settings Form", "settings"],
  ["contact-form", "فرم تماس با ما", "Contact Form", "form"],
  ["support-form", "فرم درخواست پشتیبانی", "Support Form", "form"],
  ["newsletter-form", "فرم عضویت در خبرنامه", "Newsletter Form", "inline-form"],
  // marketing
  ["hero", "معرفی", "Hero", "hero"],
  ["features", "ویژگی‌ها", "Features", "grid"],
  ["feature-split", "ویژگی دو بخشی", "Feature Split", "split"],
  ["bento", "بنتو", "Bento", "bento"],
  ["pricing", "قیمت‌گذاری", "Pricing", "pricing"],
  ["cta", "فراخوان اقدام", "CTA", "cta"],
  ["banner", "بنر", "Banner", "banner"],
  ["stats", "آمار", "Stats", "stats"],
  ["testimonials", "نظرات کاربران", "Testimonials", "cards"],
  ["logo-cloud", "لوگوی مشتریان", "Logo Cloud", "logos"],
  ["newsletter", "خبرنامه", "Newsletter", "inline-form"],
  // navigation (skip sidebar)
  ["navbar", "نوار ناوبری", "Navbar", "navbar"],
  ["header", "سربرگ", "Header", "header"],
  ["footer", "پابرگ", "Footer", "footer"],
  ["mobile-navigation", "ناوبری موبایل", "Mobile Navigation", "drawer-nav"],
  ["breadcrumb-block", "مسیر صفحه", "Breadcrumb", "breadcrumb"],
  // content
  ["blog-grid", "فهرست وبلاگ", "Blog Grid", "grid"],
  ["article", "مقاله", "Article", "article"],
  ["faq", "پرسش‌های متداول", "FAQ", "faq"],
  ["team", "تیم", "Team", "team"],
  ["contact", "تماس", "Contact", "split"],
  ["steps", "مراحل", "Steps", "steps"],
  ["comparison", "مقایسه", "Comparison", "comparison"],
  // dashboard (skip dashboard overview slug)
  ["dashboard-stats", "آمار داشبورد", "Dashboard Stats", "stats"],
  ["analytics", "تحلیل‌ها", "Analytics", "analytics"],
  ["data-table-block", "جدول داده‌ها", "Data Table", "table"],
  ["activity", "فعالیت‌ها", "Activity", "feed"],
  ["recent-items", "موارد اخیر", "Recent Items", "list"],
  ["dashboard-settings", "تنظیمات", "Settings", "settings"],
  ["user-management", "مدیریت کاربران", "User Management", "table"],
  // commerce
  ["product-grid", "فهرست محصولات", "Product Grid", "product-grid"],
  ["product-details", "جزئیات محصول", "Product Details", "product"],
  ["shopping-cart", "سبد خرید", "Shopping Cart", "cart"],
  ["checkout", "تسویه‌حساب", "Checkout", "checkout"],
  ["order-summary", "خلاصه سفارش", "Order Summary", "summary"],
  ["order-history", "تاریخچه سفارش‌ها", "Order History", "table"],
  ["wishlist", "علاقه‌مندی‌ها", "Wishlist", "product-grid"],
  // account
  ["profile", "پروفایل", "Profile", "profile"],
  ["account-settings", "تنظیمات حساب", "Account Settings", "settings"],
  ["security-settings", "تنظیمات امنیتی", "Security Settings", "settings"],
  ["account-notifications", "اعلان‌ها", "Notifications", "list"],
  ["account-billing", "صورتحساب", "Billing", "billing"],
  ["sessions", "نشست‌ها", "Sessions", "list"],
  // communication
  ["chat", "گفتگو", "Chat", "chat"],
  ["conversation", "مکالمه", "Conversation", "chat"],
  ["message-list", "فهرست پیام‌ها", "Message List", "list"],
  ["comments", "دیدگاه‌ها", "Comments", "comments"],
  ["notifications", "اعلان‌ها", "Notifications", "list"],
  ["inbox", "صندوق پیام‌ها", "Inbox", "inbox"],
  // search
  ["search", "جستجو", "Search", "search"],
  ["search-results", "نتایج جستجو", "Search Results", "search-results"],
  ["filters", "فیلترها", "Filters", "filters"],
  ["advanced-filters", "فیلترهای پیشرفته", "Advanced Filters", "drawer-filters"],
  ["sort-filter", "مرتب‌سازی و فیلتر", "Sort & Filter", "filters"],
  ["empty-search", "نتیجه‌ای پیدا نشد", "Empty Search", "empty"],
  // media
  ["file-upload", "بارگذاری فایل", "File Upload", "upload"],
  ["file-manager", "مدیریت فایل‌ها", "File Manager", "file-manager"],
  ["image-gallery", "گالری تصاویر", "Image Gallery", "gallery"],
  ["media-grid", "فهرست رسانه‌ها", "Media Grid", "gallery"],
  ["attachment-list", "پیوست‌ها", "Attachment List", "list"],
  ["avatar-upload", "بارگذاری تصویر پروفایل", "Avatar Upload", "avatar"],
  // calendar
  ["calendar-block", "تقویم", "Calendar", "calendar"],
  ["event-list", "فهرست رویدادها", "Event List", "list"],
  ["event-details", "جزئیات رویداد", "Event Details", "detail"],
  ["schedule", "برنامه زمانی", "Schedule", "schedule"],
  ["datetime-picker", "انتخاب تاریخ و زمان", "Date & Time Picker", "form"],
  ["booking", "رزرو", "Booking", "booking"],
  // billing
  ["payment", "پرداخت", "Payment", "payment"],
  ["payment-methods", "روش‌های پرداخت", "Payment Methods", "list"],
  ["subscription", "اشتراک", "Subscription", "pricing"],
  ["plan-selection", "انتخاب طرح", "Plan Selection", "pricing"],
  ["invoice", "فاکتور", "Invoice", "invoice"],
  ["billing", "صورتحساب", "Billing", "billing"],
  // states
  ["empty-state", "حالت خالی", "Empty State", "empty"],
  ["error-state", "حالت خطا", "Error State", "error"],
  ["not-found-block", "پیدا نشد", "Not Found", "error"],
  ["loading-state", "در حال بارگذاری", "Loading", "loading"],
  ["success-state", "موفقیت", "Success", "success"],
  ["maintenance", "تعمیر و نگهداری", "Maintenance", "empty"],
  ["coming-soon", "به‌زودی", "Coming Soon", "coming-soon"],
]

function shell(children, extraClass = "") {
  return `"use client"

import { cn } from "cn"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground ${extraClass}", className)}
      {...props}
    >
${children}
    </div>
  )
}
`
}

function imports(needed) {
  const lines = [`import { cn } from "cn"`]
  if (needed.has("button"))
    lines.push(`import { Button } from "@/registry/bases/base/ui/button"`)
  if (needed.has("card"))
    lines.push(`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"`)
  if (needed.has("input"))
    lines.push(`import { Input } from "@/registry/bases/base/ui/input"`)
  if (needed.has("label"))
    lines.push(`import { Label } from "@/registry/bases/base/ui/label"`)
  if (needed.has("textarea"))
    lines.push(`import { Textarea } from "@/registry/bases/base/ui/textarea"`)
  if (needed.has("badge"))
    lines.push(`import { Badge } from "@/registry/bases/base/ui/badge"`)
  if (needed.has("separator"))
    lines.push(`import { Separator } from "@/registry/bases/base/ui/separator"`)
  if (needed.has("switch"))
    lines.push(`import { Switch } from "@/registry/bases/base/ui/switch"`)
  if (needed.has("checkbox"))
    lines.push(`import { Checkbox } from "@/registry/bases/base/ui/checkbox"`)
  if (needed.has("avatar"))
    lines.push(`import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"`)
  if (needed.has("table"))
    lines.push(`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"`)
  if (needed.has("tabs"))
    lines.push(`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"`)
  if (needed.has("progress"))
    lines.push(`import { Progress } from "@/registry/bases/base/ui/progress"`)
  if (needed.has("skeleton"))
    lines.push(`import { Skeleton } from "@/registry/bases/base/ui/skeleton"`)
  if (needed.has("empty"))
    lines.push(`import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"`)
  if (needed.has("sheet"))
    lines.push(`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"`)
  if (needed.has("drawer"))
    lines.push(`import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"`)
  if (needed.has("select"))
    lines.push(`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"`)
  if (needed.has("accordion"))
    lines.push(`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"`)
  if (needed.has("breadcrumb"))
    lines.push(`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"`)
  if (needed.has("input-otp"))
    lines.push(`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/base/ui/input-otp"`)
  return lines.join("\n")
}

function pageFile(importBlock, body, wrapClass = "min-h-[480px] p-6") {
  const extras = body.includes("planPrices")
    ? `\nconst planPrices = [199000, 499000, 1200000]\n`
    : `\n`
  return `${importBlock}
${extras}
export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground ${wrapClass}", className)}
      {...props}
    >
${body}
    </div>
  )
}
`
}

function variantBodies(kind, fa, en, variant) {
  const needed = new Set(["button", "card", "input", "label"])
  let body = ""
  let wrap = "flex min-h-[520px] items-center justify-center p-6"

  if (kind === "form" || kind === "inline-form") {
    needed.add("card")
    if (variant === 1) {
      body = `      <div className="w-full max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>${fa}</CardTitle>
            <CardDescription>${fa} — تجربهٔ ساده و متمرکز</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="field-a">ایمیل</Label>
              <Input id="field-a" type="email" placeholder="name@example.com" dir="ltr" className="text-start" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="field-b">جزئیات</Label>
              <Input id="field-b" placeholder="اینجا بنویسید…" dir="rtl" className="text-start" />
            </div>
            <Button className="w-full">ادامه</Button>
          </CardContent>
        </Card>
      </div>`
    } else {
      needed.add("sheet")
      wrap = "flex min-h-[420px] flex-col items-center justify-center gap-4 p-6"
      body = `      <p className="max-w-sm text-center text-sm text-muted-foreground">
        نسخهٔ دوم: باز شدن فرم داخل شیت از سمت راست
      </p>
      <Sheet>
        <SheetTrigger asChild>
          <Button>${fa}</Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:max-w-md" dir="rtl" lang="fa">
          <SheetHeader>
            <SheetTitle>${fa}</SheetTitle>
            <SheetDescription>جزئیات مربوط به ${fa} را تکمیل کنید</SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="s-a">نام</Label>
              <Input id="s-a" placeholder="مثلاً سارا" dir="rtl" className="text-start" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="s-b">توضیح</Label>
              <Input id="s-b" placeholder="اختیاری" dir="rtl" className="text-start" />
            </div>
          </div>
          <SheetFooter>
            <Button type="submit" className="w-full">ثبت</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>`
    }
  } else if (kind === "otp") {
    needed.add("input-otp")
    needed.add("card")
    if (variant === 1) {
      body = `      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>${fa}</CardTitle>
          <CardDescription>کد ۶ رقمی ارسال‌شده به موبایل را وارد کنید</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <InputOTP maxLength={6} dir="ltr">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button className="w-full">تأیید کد</Button>
        </CardContent>
      </Card>`
    } else {
      needed.add("drawer")
      wrap = "flex min-h-[420px] flex-col items-center justify-center gap-4 p-6"
      body = `      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">باز کردن تأیید OTP</Button>
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader>
            <DrawerTitle>${fa}</DrawerTitle>
            <DrawerDescription>کد را وارد کنید تا ادامه دهید</DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center px-4 pb-2" dir="ltr">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <DrawerFooter>
            <Button>تأیید</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>`
    }
  } else if (kind === "hero" || kind === "cta" || kind === "banner" || kind === "coming-soon") {
    needed.clear()
    needed.add("button")
    needed.add("badge")
    wrap =
      variant === 1
        ? "relative flex min-h-[480px] flex-col justify-end overflow-hidden bg-gradient-to-b from-muted/40 to-background p-8 md:p-12"
        : "flex min-h-[480px] flex-col items-center justify-center gap-6 bg-[radial-gradient(ellipse_at_top,_var(--muted)_0%,_transparent_55%)] p-8 text-center"
    body =
      variant === 1
        ? `      <Badge className="mb-3 w-fit">جدید</Badge>
      <h1 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">${fa}</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        بلوک ${en} با چیدمان راست‌چین و تمرکز روی یک پیام اصلی و یک گروه دکمه.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button size="lg">شروع کنید</Button>
        <Button size="lg" variant="outline">بیشتر بدانید</Button>
      </div>`
        : `      <Badge variant="secondary">${en}</Badge>
      <h1 className="max-w-xl text-4xl font-bold tracking-tight">${fa}</h1>
      <p className="max-w-md text-muted-foreground">نسخهٔ دوم با مرکز صفحه و تاکید بصری ملایم.</p>
      <Button size="lg">ادامه</Button>`
  } else if (kind === "grid" || kind === "features" || kind === "bento" || kind === "product-grid" || kind === "team" || kind === "gallery") {
    needed.clear()
    needed.add("card")
    needed.add("badge")
    needed.add("button")
    wrap = "min-h-[520px] space-y-6 p-6 md:p-10"
    const cols = kind === "bento" ? "md:grid-cols-4" : "md:grid-cols-3"
    const count = kind === "bento" ? 6 : 3
    const spanExpr =
      kind === "bento"
        ? 'i === 1 ? "md:col-span-2 md:row-span-2" : undefined'
        : "undefined"
    const footer =
      variant === 2
        ? `\n            <CardFooter>
              <Button size="sm" variant="secondary">جزئیات</Button>
            </CardFooter>`
        : ""
    body = `      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">${fa}</h2>
          <p className="text-sm text-muted-foreground">${en} — نمونه‌های راست‌چین</p>
        </div>
        <Button variant="outline" size="sm">مشاهده همه</Button>
      </div>
      <div className="grid gap-4 ${cols}">
        {Array.from({ length: ${count} }, (_, idx) => idx + 1).map((i) => (
          <Card key={i} className={${spanExpr}}>
            <CardHeader>
              <Badge variant="outline" className="w-fit">مورد {i}</Badge>
              <CardTitle className="text-base">عنوان نمونه {i}</CardTitle>
              <CardDescription>توضیح کوتاه برای این کارت در چیدمان ${fa}.</CardDescription>
            </CardHeader>${footer}
          </Card>
        ))}
      </div>`
  } else if (kind === "pricing" || kind === "comparison") {
    needed.clear()
    needed.add("card")
    needed.add("button")
    needed.add("badge")
    wrap = "min-h-[520px] p-6 md:p-10"
    body = `      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">${fa}</h2>
        <p className="mt-2 text-muted-foreground">پلن مناسب خود را انتخاب کنید</p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {["پایه", "حرفه‌ای", "سازمانی"].map((plan, i) => (
          <Card key={plan} className={i === 1 ? "border-primary shadow-md" : ""}>
            <CardHeader>
              {i === 1 ? <Badge className="w-fit">پیشنهادی</Badge> : null}
              <CardTitle>{plan}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">{planPrices[i].toLocaleString("fa-IR")}</span>
                <span className="text-muted-foreground"> تومان / ماه</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              دسترسی به امکانات ${fa} با پشتیبانی فارسی و راست‌چین کامل.
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={i === 1 ? "default" : "outline"}>انتخاب پلن</Button>
            </CardFooter>
          </Card>
        ))}
      </div>`
  } else if (kind === "stats" || kind === "analytics") {
    needed.clear()
    needed.add("card")
    wrap = "min-h-[420px] p-6"
    body = `      <h2 className="mb-4 text-xl font-bold">${fa}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["کاربران فعال", "۱۲٬۴۸۰"],
          ["درآمد ماه", "۸۴۰ میلیون"],
          ["نرخ تبدیل", "۴٫۲٪"],
          ["رضایت", "۹۶٪"],
        ].map(([label, value]) => (
          <Card key={label}>
            <CardHeader className="pb-2">
              <CardDescription>{label}</CardDescription>
              <CardTitle className="text-2xl tabular-nums">{value}</CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground">
              ${variant === 1 ? "نسبت به ماه قبل +۸٪" : "به‌روز‌رسانی لحظه‌ای"}
            </CardContent>
          </Card>
        ))}
      </div>`
  } else if (kind === "table" || kind === "list" || kind === "feed" || kind === "inbox") {
    needed.clear()
    needed.add("table")
    needed.add("badge")
    needed.add("button")
    needed.add("card")
    wrap = "min-h-[480px] p-6"
    if (variant === 1 && (kind === "table" || kind === "list")) {
      body = `      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">${fa}</h2>
        <Button size="sm">افزودن</Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">نام</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {["سارا محمدی", "علی رضایی", "مینا کریمی"].map((name, i) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell><Badge variant="secondary">{["فعال", "در انتظار", "بسته"][i]}</Badge></TableCell>
                <TableCell className="tabular-nums">{["۱۴۰۴/۰۷/۱۰", "۱۴۰۴/۰۷/۱۱", "۱۴۰۴/۰۷/۱۲"][i]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>`
    } else {
      needed.add("avatar")
      body = `      <h2 className="mb-4 text-xl font-bold">${fa}</h2>
      <div className="divide-y rounded-xl border">
        {["پیام جدید از پشتیبانی", "سفارش شما ارسال شد", "یادآوری جلسه ساعت ۱۸"].map((t, i) => (
          <div key={t} className="flex items-center gap-3 p-4">
            <Avatar>
              <AvatarFallback>{["پ", "س", "ی"][i]}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{t}</p>
              <p className="text-xs text-muted-foreground">${en}</p>
            </div>
            <Badge variant="outline">جدید</Badge>
          </div>
        ))}
      </div>`
    }
  } else if (kind === "faq") {
    needed.clear()
    needed.add("accordion")
    wrap = "mx-auto min-h-[420px] max-w-2xl p-6"
    body = `      <h2 className="mb-6 text-center text-2xl font-bold">${fa}</h2>
      <Accordion type="single" collapsible className="w-full">
        {["چطور شروع کنم؟", "آیا راست‌چین پشتیبانی می‌شود؟", "هزینه اشتراک چقدر است؟"].map((q, i) => (
          <AccordionItem key={q} value={"item-" + i}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>
              پاسخ نمونه برای «{q}» — همهٔ متن‌ها فارسی و راست‌چین هستند.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>`
  } else if (kind === "navbar" || kind === "header") {
    needed.clear()
    needed.add("button")
    needed.add("badge")
    wrap = "min-h-[200px] p-0"
    body = `      <header className="flex items-center justify-between border-b px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="font-bold">فارسی‌UI</span>
          <nav className="hidden items-center gap-4 text-sm text-muted-foreground md:flex">
            <a href="#" className="hover:text-foreground">محصولات</a>
            <a href="#" className="hover:text-foreground">قیمت‌ها</a>
            <a href="#" className="hover:text-foreground">مستندات</a>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">${fa}</Badge>
          <Button size="sm">ورود</Button>
        </div>
      </header>
      <div className="p-8 text-sm text-muted-foreground">محتوای صفحه زیر نوار ${en}</div>`
  } else if (kind === "footer") {
    needed.clear()
    needed.add("separator")
    wrap = "min-h-[240px] p-0"
    body = `      <div className="flex-1 p-8 text-sm text-muted-foreground">محتوای اصلی</div>
      <footer className="border-t bg-muted/30 px-6 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <p className="font-semibold">فارسی‌UI</p>
            <p className="mt-2 text-sm text-muted-foreground">${fa}</p>
          </div>
          <div className="text-sm">
            <p className="font-medium">لینک‌ها</p>
            <ul className="mt-2 space-y-1 text-muted-foreground">
              <li>مستندات</li>
              <li>بلاک‌ها</li>
              <li>قیمت‌گذاری</li>
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">© ۱۴۰۴ همه حقوق محفوظ است</div>
        </div>
      </footer>`
  } else if (kind === "drawer-nav" || kind === "drawer-filters") {
    needed.clear()
    needed.add("button")
    needed.add("drawer")
    needed.add("separator")
    if (kind === "drawer-filters") {
      needed.add("checkbox")
      needed.add("label")
    }
    wrap = "flex min-h-[360px] items-center justify-center p-6"
    body =
      kind === "drawer-nav"
        ? `      <Drawer>
        <DrawerTrigger asChild>
          <Button>باز کردن منوی موبایل</Button>
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader>
            <DrawerTitle>${fa}</DrawerTitle>
            <DrawerDescription>ناوبری تمام‌صفحه برای موبایل</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-2 px-4 pb-6 text-sm">
            {["خانه", "محصولات", "قیمت‌ها", "پشتیبانی"].map((item) => (
              <button key={item} className="rounded-lg px-3 py-2 text-start hover:bg-muted">{item}</button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>`
        : `      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">فیلترها</Button>
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader>
            <DrawerTitle>${fa}</DrawerTitle>
            <DrawerDescription>فیلترهای پیشرفته در کشو</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-3 px-4 pb-4">
            {["موجود در انبار", "ارسال امروز", "تخفیف‌دار"].map((f) => (
              <label key={f} className="flex items-center gap-2 text-sm">
                <Checkbox />
                {f}
              </label>
            ))}
          </div>
          <DrawerFooter>
            <Button>اعمال فیلتر</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>`
  } else if (kind === "breadcrumb") {
    needed.clear()
    needed.add("breadcrumb")
    wrap = "min-h-[160px] p-6"
    body = `      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">خانه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">بلاک‌ها</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>${fa}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>`
  } else if (kind === "empty" || kind === "error" || kind === "success" || kind === "loading") {
    needed.clear()
    needed.add("empty")
    needed.add("button")
    if (kind === "loading") needed.add("skeleton")
    wrap = "flex min-h-[420px] items-center justify-center p-6"
    if (kind === "loading") {
      body = `      <div className="w-full max-w-md space-y-3">
        <Skeleton className="h-8 w-2/3" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-32 w-full" />
        <p className="text-center text-sm text-muted-foreground">${fa}</p>
      </div>`
    } else {
      body = `      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon" />
          <EmptyTitle>${fa}</EmptyTitle>
          <EmptyDescription>
            ${
              kind === "error"
                ? "مشکلی پیش آمد. لطفاً دوباره تلاش کنید."
                : kind === "success"
                  ? "عملیات با موفقیت انجام شد."
                  : "هنوز موردی برای نمایش وجود ندارد."
            }
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>${kind === "error" ? "تلاش مجدد" : "بازگشت"}</Button>
        </EmptyContent>
      </Empty>`
    }
  } else if (kind === "chat" || kind === "comments") {
    needed.clear()
    needed.add("card")
    needed.add("avatar")
    needed.add("input")
    needed.add("button")
    wrap = "min-h-[480px] p-4"
    body = `      <Card className="mx-auto flex h-[440px] max-w-lg flex-col">
        <CardHeader className="border-b py-3">
          <CardTitle className="text-base">${fa}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 space-y-3 overflow-auto py-4">
          {[
            ["سارا", "سلام، سفارش من کی می‌رسه؟"],
            ["پشتیبانی", "سلام! تا فردا ارسال می‌شود."],
          ].map(([who, text], i) => (
            <div key={i} className={"flex gap-2 " + (i % 2 ? "flex-row-reverse" : "")}>
              <Avatar className="size-8">
                <AvatarFallback>{who[0]}</AvatarFallback>
              </Avatar>
              <div className="rounded-2xl bg-muted px-3 py-2 text-sm">{text}</div>
            </div>
          ))}
        </CardContent>
        <div className="flex gap-2 border-t p-3">
          <Input placeholder="پیام بنویسید…" />
          <Button>ارسال</Button>
        </div>
      </Card>`
  } else if (kind === "settings" || kind === "profile" || kind === "check") {
    needed.clear()
    needed.add("card")
    needed.add("switch")
    needed.add("label")
    needed.add("button")
    needed.add("separator")
    needed.add("tabs")
    wrap = "min-h-[480px] p-6"
    if (variant === 1) {
      body = `      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>${fa}</CardTitle>
          <CardDescription>تنظیمات حساب با سوئیچ‌های راست‌چین</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            ["اعلان ایمیلی", true],
            ["ورود دو مرحله‌ای", false],
            ["نمایش پروفایل عمومی", true],
          ].map(([label, on]) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <Label>{label}</Label>
              <Switch defaultChecked={Boolean(on)} />
            </div>
          ))}
        </CardContent>
        <CardFooter>
          <Button className="w-full">ذخیره تغییرات</Button>
        </CardFooter>
      </Card>`
    } else {
      body = `      <Tabs defaultValue="general" className="mx-auto max-w-xl" dir="rtl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="general">عمومی</TabsTrigger>
          <TabsTrigger value="security">امنیت</TabsTrigger>
        </TabsList>
        <TabsContent value="general" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>${fa}</CardTitle>
              <CardDescription>نسخهٔ دوم با تب‌ها</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <Label>حالت تاریک خودکار</Label>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security" className="mt-4">
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              تنظیمات امنیتی حساب شما اینجاست.
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>`
    }
  } else if (kind === "upload" || kind === "avatar" || kind === "file-manager") {
    needed.clear()
    needed.add("card")
    needed.add("button")
    needed.add("progress")
    needed.add("avatar")
    wrap = "flex min-h-[420px] items-center justify-center p-6"
    body =
      kind === "avatar"
        ? `      <Card className="w-full max-w-sm text-center">
        <CardHeader>
          <CardTitle>${fa}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Avatar className="size-24">
            <AvatarFallback className="text-2xl">فا</AvatarFallback>
          </Avatar>
          <Button variant="outline">انتخاب تصویر</Button>
        </CardContent>
      </Card>`
        : `      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>${fa}</CardTitle>
          <CardDescription>فایل را بکشید و رها کنید یا انتخاب کنید</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex h-32 items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
            رها کردن فایل‌ها اینجا
          </div>
          <Progress value={${variant === 1 ? 45 : 78}} />
          <Button className="w-full">بارگذاری</Button>
        </CardContent>
      </Card>`
  } else if (kind === "cart" || kind === "checkout" || kind === "summary" || kind === "payment" || kind === "invoice" || kind === "billing" || kind === "product" || kind === "booking" || kind === "detail" || kind === "schedule" || kind === "calendar" || kind === "search" || kind === "search-results" || kind === "filters" || kind === "split" || kind === "article" || kind === "steps") {
    needed.clear()
    needed.add("card")
    needed.add("button")
    needed.add("badge")
    needed.add("separator")
    needed.add("input")
    needed.add("label")
    wrap = "min-h-[480px] p-6"
    body = `      <div className={cn("mx-auto grid max-w-4xl gap-6", ${variant === 1 ? '"md:grid-cols-[1.2fr_0.8fr]"' : "undefined"})}>
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <CardTitle>${fa}</CardTitle>
              <Badge variant="secondary">${en}</Badge>
            </div>
            <CardDescription>
              بلوک راست‌چین با UX ${variant === 1 ? "دو ستونه" : "تک‌ستونه فشرده"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label>عنوان</Label>
              <Input defaultValue="نمونه فارسی" />
            </div>
            <div className="rounded-lg bg-muted/50 p-4 text-sm text-muted-foreground">
              محتوای نمونه برای «${fa}». همهٔ عناصر راست‌چین هستند.
            </div>
            <Button>اقدام اصلی</Button>
          </CardContent>
        </Card>
        ${
          variant === 1
            ? `<Card>
          <CardHeader>
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex justify-between"><span>جمع جزء</span><span className="tabular-nums">۱٬۲۰۰٬۰۰۰</span></div>
            <div className="flex justify-between"><span>مالیات</span><span className="tabular-nums">۱۲۰٬۰۰۰</span></div>
            <Separator />
            <div className="flex justify-between font-medium"><span>مبلغ قابل پرداخت</span><span className="tabular-nums">۱٬۳۲۰٬۰۰۰</span></div>
            <Button className="mt-2 w-full">تأیید</Button>
          </CardContent>
        </Card>`
            : ""
        }
      </div>`
  } else {
    // fallback
    needed.clear()
    needed.add("card")
    needed.add("button")
    wrap = "flex min-h-[360px] items-center justify-center p-6"
    body = `      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>${fa}</CardTitle>
          <CardDescription>${en}</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">ادامه</Button>
        </CardContent>
      </Card>`
  }

  return { needed, body, wrap }
}

const registryItems = []

for (const [slug, fa, en, kind] of ITEMS) {
  if (SKIP_SLUGS.has(slug)) continue

  for (const variant of [1, 2]) {
    const name = `${slug}-${String(variant).padStart(2, "0")}`
    const dir = path.join(blocksRoot, name)
    fs.mkdirSync(dir, { recursive: true })

    const { needed, body, wrap } = variantBodies(kind, fa, en, variant)
    const content = pageFile(imports(needed), body, wrap)
    fs.writeFileSync(path.join(dir, "page.tsx"), content)

    registryItems.push({
      name,
      title: `${en} ${String(variant).padStart(2, "0")}`,
      description: `${fa} — نمونهٔ راست‌چین فارسی`,
      type: "registry:block",
      categories: [slug],
      files: [
        {
          path: `blocks/${name}/page.tsx`,
          type: "registry:page",
          target: `app/${slug}/page.tsx`,
        },
      ],
    })
  }
}

const registryOut = path.join(blocksRoot, "_registry-fa-generated.ts")
const registrySource = `import { type Registry } from "farsiui/schema"

/** Auto-generated RTL Persian blocks. Do not edit by hand. */
export const faBlocks: Registry["items"] = ${JSON.stringify(registryItems, null, 2)}
`
fs.writeFileSync(registryOut, registrySource)

console.log(`Generated ${registryItems.length} blocks`)
console.log(`Registry: ${registryOut}`)
