"use client"

const POSTS = [
  {
    title: "راست‌چین کردن فرم‌ها بدون دردسر",
    excerpt: "چطور فاصله‌ها، برچسب‌ها و دکمه‌ها را از روز اول برای فارسی درست بچینید.",
    date: "۲ مهر ۱۴۰۴",
    category: "راهنما",
  },
  {
    title: "تقویم شمسی در داشبورد محصول",
    excerpt: "نمایش تاریخ و بازهٔ زمانی به‌سبک کاربر ایرانی، بدون تبدیل دستی.",
    date: "۲۸ شهریور ۱۴۰۴",
    category: "محصول",
  },
  {
    title: "پنج بلاک که سرعت تیم را دو برابر کرد",
    excerpt: "از ورود تا تنظیمات؛ الگوهایی که کمتر بازنویسی می‌خواهند.",
    date: "۲۰ شهریور ۱۴۰۴",
    category: "تجربه",
  },
] as const

export function BlogGridSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">وبلاگ FarsiUI</h2>
        <p className="mt-2 text-muted-foreground">
          نکته و تجربه برای ساخت محصول فارسی
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <article key={post.title} className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground">
              {post.category} · {post.date}
            </p>
            <h3 className="text-lg font-semibold tracking-tight">
              <a href="#" className="hover:underline">
                {post.title}
              </a>
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
