import Link from "next/link"

import { SkillsList } from "@/components/skills-list"

export default function SkillsPage() {
  return (
    <div
      data-slot="docs"
      data-docs-kind="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-base leading-[1.7] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-6 px-4 py-6 text-foreground md:px-0 lg:py-8 dark:text-foreground">
        <header className="flex flex-col gap-2">
          <h1 className="docs-page-title scroll-m-24 font-semibold tracking-tight">
            مهارت‌ها
          </h1>
          <p className="docs-page-description text-pretty text-muted-foreground">
            فایل‌های Markdown برای آموزش Agent — مناسب Claude Code، Cursor و
            Codex.
          </p>
        </header>

        <div className="typeset w-full flex-1">
          <p>
            مهارت‌ها فایل‌های{" "}
            <bdi dir="ltr" className="font-medium">
              Markdown
            </bdi>{" "}
            هستند که به{" "}
            <bdi dir="ltr" className="font-medium">
              Agent
            </bdi>{" "}
            یاد می‌دهند یک کار مشخص را چطور انجام دهد. ابزارهایی مثل{" "}
            <bdi dir="ltr" className="font-medium">
              Claude Code
            </bdi>
            ،{" "}
            <bdi dir="ltr" className="font-medium">
              Cursor
            </bdi>{" "}
            و{" "}
            <bdi dir="ltr" className="font-medium">
              Codex
            </bdi>{" "}
            قبل از کار این دستورالعمل‌ها را می‌خوانند.
          </p>
          <p>
            هر مهارت یک فایل{" "}
            <bdi dir="ltr" className="font-medium">
              SKILL.md
            </bdi>{" "}
            است. برای کارهای فارسی، مهارت‌هایی مثل فارسی محاوره‌ای، متن رابط
            کاربری، تقویم شمسی و اعتبارسنجی ایرانی آماده کرده‌ایم.
          </p>

          <h2>از کجا شروع کنید</h2>
          <ol>
            <li>
              از فهرست زیر (در موبایل) یا نوار کناری (در دسکتاپ)، مهارت موردنظر
              را انتخاب کنید.
            </li>
            <li>
              فایل{" "}
              <bdi dir="ltr" className="font-medium">
                SKILL.md
              </bdi>{" "}
              را کپی یا دانلود کنید و در مسیر ابزار خود بگذارید. راهنمای مسیرها
              در <Link href="/skills/install">نحوه نصب</Link> است.
            </li>
          </ol>
        </div>

        <div className="not-typeset lg:hidden">
          <h2 className="mb-3 text-base font-semibold tracking-tight">
            فهرست مهارت‌ها
          </h2>
          <SkillsList />
        </div>
      </div>
    </div>
  )
}
