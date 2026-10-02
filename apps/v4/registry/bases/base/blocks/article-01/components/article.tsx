const PARAGRAPHS = [
  "ساخت محصول فارسی فقط ترجمهٔ متن نیست؛ فاصله‌ها، تراز و جهت نوشتار باید از روز اول درست باشد. بسیاری از تیم‌ها بعد از چند اسپرینت متوجه می‌شوند که RTL را روی یک لایهٔ LTR چسبانده‌اند.",
  "بلاک مقالهٔ ساده نقطهٔ شروع خوبی است: عنوان واضح، تاریخ شمسی و متنی که بدون حاشیهٔ اضافه خوانده می‌شود. همین الگوی مینیمال برای مستندات داخلی و پست‌های وبلاگ کافی است.",
  "وقتی بدنه کوتاه و خواناست، مرحلهٔ بعد افزودن نویسنده، کاور و فهرست مطالب است — نه برعکس.",
] as const

export function ArticleSimple() {
  return (
    <article
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
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
  )
}
