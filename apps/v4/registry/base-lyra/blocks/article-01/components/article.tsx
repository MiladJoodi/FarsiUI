const PARAGRAPHS = [
  "ساخت محصول فارسی فقط ترجمهٔ متن نیست؛ فاصله‌ها، تراز و جهت نوشتار باید از روز اول درست باشد. بسیاری از تیم‌ها بعد از چند اسپرینت متوجه می‌شوند که RTL را روی یک لایهٔ LTR چسبانده‌اند.",
  "بلوک مقالهٔ ساده نقطهٔ شروع خوبی است: عنوان واضح، تاریخ شمسی و متنی که بدون حاشیهٔ اضافه خوانده می‌شود. همین الگوی مینیمال برای مستندات داخلی و پست‌های وبلاگ کافی است.",
  "وقتی بدنه کوتاه و خواناست، مرحلهٔ بعد افزودن نویسنده، کاور و فهرست مطالب است — نه برعکس.",
] as const

export function ArticleSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <article className="w-full max-w-2xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <header className="mb-8 space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            چرا صفحهٔ مقاله را از ساده‌ترین نسخه شروع کنیم؟
          </h1>
          <p className="text-sm text-muted-foreground">
            ۲ مهر ۱۴۰۵ · ۵ دقیقه مطالعه
          </p>
        </header>
        <div className="space-y-5 text-base leading-8 text-foreground/90">
          {PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </article>
    </div>
  )
}
