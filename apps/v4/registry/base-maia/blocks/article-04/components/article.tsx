import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Separator } from "@/registry/base-maia/ui/separator"

const TOC = [
  { id: "why", label: "چرا فهرست مطالب؟" },
  { id: "layout", label: "چیدمان دو ستونه" },
  { id: "related", label: "مقاله‌های مرتبط" },
] as const

const RELATED = [
  {
    title: "تایپوگرافی بدنهٔ مقاله در RTL",
    date: "۲۸ شهریور ۱۴۰۵",
  },
  {
    title: "مسیر صفحه برای پست وبلاگ",
    date: "۲۲ شهریور ۱۴۰۵",
  },
  {
    title: "CTA انتهای نوشته بدون فشار",
    date: "۱۵ شهریور ۱۴۰۵",
  },
] as const

export default function ArticleSidebar() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14">
          <article>
            <header className="mb-8 space-y-5">
              <Badge variant="outline" className="w-fit">
                طراحی
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                فهرست مطالب و ستون کناری برای خواندن عمیق
              </h1>
              <div className="flex items-center gap-3">
                <Avatar className="size-10">
                  <AvatarImage src="/avatars/02.png" alt="علی محمدی" />
                  <AvatarFallback>ع‌م</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">علی محمدی</p>
                  <p className="text-muted-foreground">
                    ۳۰ شهریور ۱۴۰۵ · ۱۰ دقیقه مطالعه
                  </p>
                </div>
              </div>
            </header>
            <Separator className="mb-8" />
            <div className="space-y-8 text-base leading-8 text-foreground/90">
              <section id="why" className="scroll-mt-24 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  چرا فهرست مطالب؟
                </h2>
                <p>
                  وقتی مقاله طولانی می‌شود، فهرست ثابت در ستون کناری به خواننده
                  اجازه می‌دهد بخش مورد نظر را پیدا کند بدون اسکرول کور. لینک‌ها
                  باید کوتاه و هم‌راستا با تیترهای واقعی باشند.
                </p>
              </section>
              <section id="layout" className="scroll-mt-24 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  چیدمان دو ستونه
                </h2>
                <p>
                  ستون اصلی برای متن است؛ ستون کناری برای ناوبری و پیشنهاد. در
                  موبایل ستون کناری زیر محتوا می‌آید تا عرض خواندن حفظ شود.
                </p>
              </section>
              <section id="related" className="scroll-mt-24 space-y-4">
                <h2 className="text-xl font-semibold tracking-tight">
                  مقاله‌های مرتبط
                </h2>
                <p>
                  سه لینک مرتبط معمولاً بهتر از یک گرید شلوغ است. تاریخ شمسی
                  کوتاه کنار عنوان کافی است تا تازگی را نشان دهد.
                </p>
              </section>
            </div>
          </article>

          <aside className="flex flex-col gap-8 lg:sticky lg:top-16 lg:self-start">
            <nav aria-label="فهرست مطالب" className="space-y-3">
              <p className="text-sm font-medium">در این نوشته</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Separator />
            <div className="space-y-3">
              <p className="text-sm font-medium">مرتبط</p>
              <ul className="space-y-4">
                {RELATED.map((item) => (
                  <li key={item.title} className="space-y-1">
                    <a
                      href="#"
                      className="text-sm leading-snug font-medium hover:underline"
                    >
                      {item.title}
                    </a>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
