"use client"

import LogoImage, { LOGOS } from "@/registry/bases/base/blocks/logo-cloud-01/components/logos"

function MarqueeRow({ reverse }: { reverse?: boolean }) {
  const items = [...LOGOS, ...LOGOS]
  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex w-max gap-10 py-2 ${
          reverse
            ? "animate-[marquee-reverse_35s_linear_infinite]"
            : "animate-[marquee_35s_linear_infinite]"
        }`}
      >
        {items.map((logo, index) => (
          <LogoImage key={`${logo.src}-${index}`} {...logo} size="md" />
        ))}
      </div>
    </div>
  )
}

export default function LogoCloudMarquee() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col justify-center gap-8 bg-background py-16"
    >
      <div className="px-6 text-center">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          در حرکت با برندهای فارسی
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          لوگوها را جایگزین کنید؛ چیدمان آماده است
        </p>
      </div>

      <div className="space-y-6 [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]">
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(50%); }
          }
          @keyframes marquee-reverse {
            from { transform: translateX(50%); }
            to { transform: translateX(0); }
          }
        `}</style>
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </section>
  )
}
