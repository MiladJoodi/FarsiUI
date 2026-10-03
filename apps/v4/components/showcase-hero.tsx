export function ShowcaseHero() {
  return (
    <header
      dir="rtl"
      lang="fa"
      className="relative mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 pt-8 text-center md:pt-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-10 -z-10 mx-auto h-52 max-w-2xl rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--color-foreground)_5%,transparent),transparent_78%)] blur-2xl"
      />
      <h1 className="text-balance text-2xl font-semibold tracking-tight md:text-4xl md:leading-[1.25]">
        نمونه‌های ساخته‌شده
      </h1>
      <p className="text-pretty max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
        نمونه‌هایی از سایت‌ها، اپلیکیشن‌ها و داشبوردهایی که با FarsiUI ساخته
        شده‌اند.
      </p>
    </header>
  )
}
