import { SponsorCard, SponsorOpenSlotCard } from "./sponsor-card"
import { sponsorOpenSlot, sponsors } from "./data"

export function SponsorsSection() {
  return (
    <section
      dir="rtl"
      lang="fa"
      aria-label="حامیان"
      className="border-t border-border/60"
    >
      <div className="container py-8 md:py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <p className="text-sm text-muted-foreground">
            این پروژه با حمایت حامیانش ادامه پیدا می‌کند.
          </p>
          <ul className="flex flex-nowrap items-center justify-center gap-2 md:gap-3">
            {sponsors.map((sponsor) => (
              <li key={sponsor.id} className="shrink-0">
                <SponsorCard sponsor={sponsor} />
              </li>
            ))}
            <li className="shrink-0">
              <SponsorOpenSlotCard
                href={sponsorOpenSlot.href}
                label={sponsorOpenSlot.label}
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
