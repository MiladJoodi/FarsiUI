"use client"

export function BentoSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight">چیدمان بنتو</h2>
        <p className="mt-2 text-muted-foreground">
          چند کاشی هم‌اندازه برای معرفی سریع قابلیت‌ها
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            title: "راست‌چین بومی",
            desc: "جهت و تراز برای فارسی از روز اول درست است.",
          },
          {
            title: "کامپوننت آماده",
            desc: "دکمه، فرم و دیالوگ با ظاهر یکدست.",
          },
          {
            title: "بلوک‌های واقعی",
            desc: "هیرو، ورود و داشبورد را کپی کنید و جلو بروید.",
          },
          {
            title: "تم روشن و تیره",
            desc: "بدون تنظیم اضافه در هر دو حالت هماهنگ می‌ماند.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border bg-card p-6">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
