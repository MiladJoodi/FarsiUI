const ROWS = [
  {
    label: "راست‌چین از روز اول",
    before: "دستی و پرخطا",
    after: "آماده در بلاک",
  },
  {
    label: "متن و placeholder",
    before: "انگلیسی باقی می‌ماند",
    after: "فارسی و جهت درست",
  },
  {
    label: "اعداد و مبلغ",
    before: "فاصلهٔ عجیب بین رقم‌ها",
    after: "نمایش تمیز با bdi",
  },
  { label: "زمان راه‌اندازی", before: "هفته‌ها", after: "ساعت‌ها" },
] as const

export function ComparisonSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight">قبل و بعد</h2>
        <p className="mt-2 text-muted-foreground">
          ساخت رابط فارسی بدون FarsiUI در برابر با آن — بدون جدول قیمت
        </p>
      </div>
      <div className="overflow-hidden rounded-xl border">
        <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-0 border-b bg-muted/40 text-sm font-medium">
          <div className="px-4 py-3">موضوع</div>
          <div className="border-s px-4 py-3 text-muted-foreground">
            بدون FarsiUI
          </div>
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
  )
}
