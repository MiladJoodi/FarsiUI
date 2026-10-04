import Link from "next/link"

export default function SkillsPage() {
  return (
    <div
      data-slot="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8">
        <header className="flex flex-col gap-2">
          <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight">
            مهارت‌ها
          </h1>
          <div className="docs-page-description space-y-3 text-pretty text-muted-foreground">
            <p>
              مهارت‌ها فایل‌های{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                Markdown
              </bdi>{" "}
              هستند که به{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                Agent
              </bdi>{" "}
              یاد می‌دهند یک کار مشخص را چطور انجام دهد. ابزارهایی مثل{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                Claude Code
              </bdi>
              ،{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                Cursor
              </bdi>{" "}
              و{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                Codex
              </bdi>{" "}
              قبل از کار این دستورالعمل‌ها را می‌خوانند.
            </p>
            <p>
              هر مهارت یک فایل{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                SKILL.md
              </bdi>{" "}
              است. برای کارهای فارسی، مهارت‌هایی مثل فارسی محاوره‌ای، متن رابط
              کاربری، تقویم شمسی و اعتبارسنجی ایرانی آماده کرده‌ایم.
            </p>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading scroll-m-24 text-[length:var(--docs-h2)] font-medium tracking-tight">
            از کجا شروع کنید
          </h2>
          <ol className="list-decimal space-y-2 pe-5 text-muted-foreground marker:text-foreground/50">
            <li className="leading-[1.7]">
              از فهرست کناری، مهارت موردنظر را انتخاب کنید.
            </li>
            <li className="leading-[1.7]">
              فایل{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                SKILL.md
              </bdi>{" "}
              را کپی یا دانلود کنید و در مسیر ابزار خود بگذارید. راهنمای مسیرها
              در{" "}
              <Link
                href="/skills/install"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                نحوه نصب
              </Link>{" "}
              است.
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}
