const STEPS = [
  {
    title: "انتخاب بلاک",
    desc: "از فهرست بلاک‌ها بخش موردنظر را پیدا کنید.",
  },
  {
    title: "کپی در پروژه",
    desc: "کد را در اپ Next.js خود قرار دهید.",
  },
  {
    title: "اعمال تم",
    desc: "رنگ و فونت را با متغیرهای تم هماهنگ کنید.",
  },
  {
    title: "انتشار",
    desc: "صفحه را بیلد کنید و برای کاربر فارسی باز کنید.",
  },
] as const

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export function StepsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <h2 className="text-3xl font-bold tracking-tight">چطور شروع کنیم؟</h2>
      <p className="mt-2 text-muted-foreground">
        چهار مرحله تا اولین صفحهٔ راست‌چین
      </p>
      <ol className="mt-10 space-y-8">
        {STEPS.map((step, i) => (
          <li key={step.title} className="flex gap-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border bg-background text-sm font-medium">
              {toFa(i + 1)}
            </span>
            <div className="space-y-1 pt-0.5">
              <p className="font-semibold tracking-tight">{step.title}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
