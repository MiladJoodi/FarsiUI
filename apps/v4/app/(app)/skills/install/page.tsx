import { type Metadata } from "next"
import Link from "next/link"

import { getSkills } from "@/lib/skills"
import {
  SkillAgentPathRow,
  SkillCopyCommand,
  SkillCopyIconButton,
} from "@/components/skill-copy"

export const metadata: Metadata = {
  title: "نحوه نصب مهارت‌ها",
  description:
    "مسیر درست قرار دادن SKILL.md برای Cursor، Claude Code و Codex.",
  alternates: {
    canonical: "/skills/install",
  },
}

export default function SkillsInstallPage() {
  const example = getSkills()[0]

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
            نحوه نصب
          </h1>
          <p className="docs-page-description text-pretty text-muted-foreground">
            مهارت یک فایل راهنما است. آن را داخل پوشهٔ مربوط به ابزار خودتان
            بگذارید — نه مستقیم در ریشهٔ پروژه.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="font-heading scroll-m-24 text-[length:var(--docs-h2)] font-medium tracking-tight">
            نصب سریع با CLI
          </h2>
          <p className="text-muted-foreground">
            داخل ریشهٔ پروژه این دستور را بزنید:
          </p>
          {example ? (
            <SkillCopyCommand command={example.installCommand} />
          ) : null}
        </section>

        <section className="space-y-3">
          <h2 className="font-heading scroll-m-24 text-[length:var(--docs-h2)] font-medium tracking-tight">
            نصب دستی
          </h2>
          <p className="text-muted-foreground">
            فایل را دانلود کنید یا خودتان بسازید و در یکی از مسیرهای زیر بگذارید
            — نه مستقیم کنار فایل‌های ریشهٔ پروژه:
          </p>

          <div className="space-y-2">
            {(example?.installTargets ?? [])
              .filter((target) => target.id !== "other")
              .map((target) => (
                <SkillAgentPathRow
                  key={target.id}
                  id={target.id}
                  name={target.name}
                  paths={target.paths}
                />
              ))}
          </div>

          {example ? (
            <div className="space-y-2 pt-1">
              <p className="text-muted-foreground">
                برای ابزارهای دیگر می‌توانید در{" "}
                <bdi dir="ltr" className="font-mono text-foreground">
                  AGENTS.md
                </bdi>{" "}
                هم ارجاع بدهید:
              </p>
              <figure
                data-rehype-pretty-code-figure=""
                data-not-typeset=""
                className="relative m-0! md:mx-0!"
              >
                <SkillCopyIconButton
                  value={example.agentsHint}
                  label="کپی"
                  className="absolute top-2 end-2 z-10"
                />
                <pre
                  dir="ltr"
                  lang="en"
                  className="no-scrollbar overflow-x-auto px-4 py-3.5 pe-12 text-start font-mono text-[length:var(--docs-code)] leading-[1.5]"
                >
                  {example.agentsHint}
                </pre>
              </figure>
            </div>
          ) : null}
        </section>

        <section className="rounded-xl border border-dashed px-4 py-3 text-muted-foreground">
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
