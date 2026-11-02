import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

import type { Sponsor } from "./data"

const cardClassName = cn(
  "flex h-[4.5rem] w-[12rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border/70 bg-background/80 p-0.5 md:h-20 md:w-[13.5rem]",
  "transition-colors hover:border-border hover:bg-muted/40"
)

const logoClassName = "h-[92%] w-auto max-w-full object-contain scale-105"


export function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const hasDarkLogo = Boolean(sponsor.logoSrcDark)

  return (
    <Link
      href={sponsor.href}
      target="_blank"
      rel="noopener noreferrer nofollow sponsored"
      className={cardClassName}
      aria-label={sponsor.name}
    >
      <Image
        src={sponsor.logoSrc}
        alt={sponsor.logoAlt}
        width={200}
        height={48}
        unoptimized
        className={cn(
          logoClassName,
          hasDarkLogo ? "dark:hidden" : "opacity-90 dark:invert"
        )}
      />
      {hasDarkLogo ? (
        <Image
          src={sponsor.logoSrcDark!}
          alt={sponsor.logoAlt}
          width={200}
          height={48}
          unoptimized
          className={cn(logoClassName, "hidden dark:block")}
        />
      ) : null}
    </Link>
  )
}

export function SponsorOpenSlotCard({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        cardClassName,
        "border-dashed border-muted-foreground/35 bg-transparent px-3 hover:border-muted-foreground/55 hover:bg-muted/20"
      )}
      aria-label={label}
    >
      <span className="whitespace-nowrap text-center text-xs font-medium text-foreground/80">
        {label}
      </span>
    </Link>
  )
}
