import Link from "next/link"

import { getSkills } from "@/lib/skills"

export default function SkillsPage() {
  const skills = getSkills()

  return (
    <div
      data-slot="docs"
      dir="rtl"
      lang="fa"
      className="flex scroll-mt-24 items-stretch pb-8 text-[1.05rem] sm:text-[15px] xl:w-full"
    >
      <div className="mx-auto flex w-full max-w-160 min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-foreground md:px-0 lg:py-8">
        <header className="flex flex-col gap-2">
          <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">
            مهارت‌ها
          </h1>
          <div className="space-y-3 text-pretty text-[1.05rem] text-muted-foreground sm:text-base sm:leading-7">
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
              برای کارهای فارسی، مهارت‌هایی مثل فارسی محاوره‌ای، متن{" "}
              <bdi dir="ltr" className="font-medium text-foreground">
                UI
              </bdi>
              ، تقویم شمسی، کد ملی و شبا آماده کرده‌ایم. هرکدام یک مهارت مستقل
              است.
            </p>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            از کجا شروع کنید
          </h2>
          <ol className="list-decimal space-y-2 pe-5 text-muted-foreground marker:text-foreground/50">
            <li className="leading-7">
              اول{" "}
              <Link
                href="/skills/install"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                نحوه نصب
              </Link>{" "}
              را بخوانید تا مسیر درست Agent خودتان را بشناسید.
            </li>
            <li className="leading-7">
              بعد از فهرست کناری، مهارت موردنظر را باز کنید و فایل{" "}
              <bdi dir="ltr" className="font-mono text-foreground">
                SKILL.md
              </bdi>{" "}
              را کپی کنید.
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            فهرست فعلی
          </h2>
          <ul className="divide-y rounded-xl border">
            {skills.map((skill) => (
              <li key={skill.slug}>
                <Link
                  href={`/skills/${skill.slug}`}
                  className="flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-muted/40"
                >
                  <span className="font-medium">{skill.title}</span>
                  <span
                    dir="ltr"
                    lang="en"
                    className="font-mono text-[0.7rem] text-muted-foreground"
                  >
                    {skill.slug}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
