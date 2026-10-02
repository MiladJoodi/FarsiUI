import { type Metadata } from "next"
import Link from "next/link"

import { getSkills } from "@/lib/skills"
import {
  SkillCopyCommand,
  SkillCopyIconButton,
  SkillToolIcon,
} from "@/components/skill-copy"

export const metadata: Metadata = {
  title: "نحوه نصب مهارت‌ها",
  description:
    "مسیر درست قرار دادن SKILL.md برای Cursor، Claude Code و Codex.",
  alternates: {
    canonical: "/skills/install",
  },
}

const TREE = `پروژهٔ شما/
└── .cursor/
    └── skills/
        └── persian-conversational/
            └── SKILL.md`

export default function SkillsInstallPage() {
  const example = getSkills()[0]

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
            نحوه نصب
          </h1>
          <p className="text-pretty text-[1.05rem] text-muted-foreground sm:text-base">
            مهارت یک فایل{" "}
            <bdi dir="ltr" className="font-mono text-foreground">
              SKILL.md
            </bdi>{" "}
            است. آن را در پوشهٔ skills مربوط به Agent بگذارید — نه در ریشهٔ پروژه.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            نصب سریع با CLI
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            داخل پوشهٔ پروژه این دستور را بزنید:
          </p>
          {example ? (
            <SkillCopyCommand command={example.installCommand} />
          ) : null}
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            داخل پروژه
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            اول ریشهٔ پروژه، بعد پوشهٔ Agent. مثال Cursor:
          </p>
          <div className="overflow-hidden rounded-xl border">
            <div className="flex items-center justify-between border-b bg-muted/30 px-3 py-1.5">
              <span className="text-xs text-muted-foreground">ساختار پوشه</span>
              <SkillCopyIconButton value={TREE} label="کپی ساختار" />
            </div>
            <pre
              dir="ltr"
              lang="en"
              className="overflow-x-auto bg-code p-3 text-start font-mono text-[12px] leading-5"
            >
              {TREE}
            </pre>
          </div>
          <p className="text-sm leading-7 text-muted-foreground">
            درست:{" "}
            <bdi dir="ltr" className="font-mono text-foreground">
              .cursor/skills/persian-conversational/SKILL.md
            </bdi>
            . اشتباه: گذاشتن پوشهٔ مهارت مستقیم در ریشهٔ پروژه.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-heading text-lg font-medium tracking-tight">
            نصب دستی
          </h2>
          <p className="text-sm leading-7 text-muted-foreground">
            از صفحهٔ هر مهارت، با آیکون دانلود فایل را بگیرید و در مسیر Agent
            بگذارید:
          </p>

          <div className="space-y-2">
            {(example?.installTargets ?? [])
              .filter((target) => target.id !== "other")
              .map((target) => (
                <div
                  key={target.id}
                  className="flex items-center gap-3 rounded-xl border px-3 py-2.5"
                >
                  <SkillToolIcon id={target.id} name={target.name} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium" dir="ltr" lang="en">
                      {target.name}
                    </p>
                    <p
                      dir="ltr"
                      lang="en"
                      className="break-all font-mono text-[12px] text-muted-foreground"
                    >
                      {target.paths[0]}
                    </p>
                    {target.note ? (
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">
                        {target.note}
                      </p>
                    ) : null}
                  </div>
                  <SkillCopyIconButton
                    value={target.paths[0]!}
                    label="کپی مسیر"
                  />
                </div>
              ))}
          </div>

          {example ? (
            <div className="space-y-2 pt-1">
              <p className="text-sm text-muted-foreground">
                برای ابزارهای دیگر می‌توانید در{" "}
                <bdi dir="ltr" className="font-mono text-foreground">
                  AGENTS.md
                </bdi>{" "}
                هم ارجاع بدهید:
              </p>
              <pre
                dir="ltr"
                lang="en"
                className="overflow-x-auto rounded-xl border bg-code p-3 text-start font-mono text-[12px] leading-5"
              >
                {example.agentsHint}
              </pre>
            </div>
          ) : null}
        </section>

        <section className="rounded-xl border border-dashed px-4 py-3 text-sm leading-7 text-muted-foreground">
          بعد از نصب، از{" "}
          <Link
            href="/skills"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            معرفی
          </Link>{" "}
          یا فهرست کناری مهارت را باز کنید.
        </section>
      </div>
    </div>
  )
}
