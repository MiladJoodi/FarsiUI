export function SkillsHero() {
  return (
    <header
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 pt-8 text-center md:gap-5 md:pt-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-8 -z-10 mx-auto h-40 max-w-xl rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-foreground)_8%,transparent),transparent)]"
      />
      <h1 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl md:leading-[1.25]">
        مهارت‌ها
      </h1>
      <div className="text-pretty flex max-w-2xl flex-col gap-3 text-sm leading-relaxed text-muted-foreground md:text-base md:leading-7">
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
          ، تقویم شمسی، کد ملی و شبا آماده کرده‌ایم. هرکدام یک مهارت مستقل است.
        </p>
      </div>
    </header>
  )
}
