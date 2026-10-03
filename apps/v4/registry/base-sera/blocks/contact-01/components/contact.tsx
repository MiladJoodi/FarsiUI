const CHANNELS = [
  {
    label: "ایمیل",
    value: "info@farsiui.ir",
    dir: "ltr" as const,
  },
  {
    label: "تلفن",
    value: "۰۲۱-۹۱۰۰۰۰۰۰",
    dir: "ltr" as const,
  },
  {
    label: "آدرس",
    value: "تهران، خیابان ولیعصر، پلاک ۱۲۰",
    dir: "rtl" as const,
  },
] as const

export function ContactSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-2xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <h2 className="text-3xl font-bold tracking-tight">تماس با ما</h2>
        <p className="mt-2 text-muted-foreground">
          راه‌های ارتباطی تیم FarsiUI
        </p>
        <ul className="mt-10 space-y-6">
          {CHANNELS.map((item) => (
            <li
              key={item.label}
              className="space-y-1 border-b pb-6 last:border-0"
            >
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p
                dir={item.dir}
                className={
                  item.dir === "ltr"
                    ? "font-medium tracking-normal [letter-spacing:0]"
                    : "font-medium"
                }
              >
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
