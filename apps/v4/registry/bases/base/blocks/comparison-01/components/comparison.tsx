const ROWS = [
  { label: "راست‌چین از روز اول", before: "دستی و پرخطا", after: "آماده در بلوک" },
  { label: "متن و placeholder", before: "انگلیسی باقی می‌ماند", after: "فارسی و جهت درست" },
  { label: "اعداد و مبلغ", before: "فاصلهٔ عجیب بین رقم‌ها", after: "نمایش تمیز با bdi" },
  { label: "زمان راه‌اندازی", before: "هفته‌ها", after: "ساعت‌ها" },
] as const

export default function ComparisonSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-3xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">قبل و بعد</h2>
          <p className="mt-2 text-muted-foreground">
            ساخت رابط فارسی بدون FarsiUI در برابر با آن — بدون جدول قیمت
          </p>
        </div>
        <div className="overflow-hidden rounded-xl border">
          <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-0 border-b bg-muted/40 text-sm font-medium">
            <div className="px-4 py-3">موضوع</div>
            <div className="border-s px-4 py-3 text-muted-foreground">بدون FarsiUI</div>
            <div className="border-s px-4 py-3">با FarsiUI</div>
          </div>
          {ROWS.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1.2fr_1fr_1fr] border-b text-sm last:border-0"
            >
              <div className="px-4 py-3.5 font-medium">{row.label}</div>
              <div className="border-s px-4 py-3.5 text-muted-foreground">
                {row.before}
              </div>
              <div className="border-s px-4 py-3.5">{row.after}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
