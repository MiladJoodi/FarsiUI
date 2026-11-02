export type Sponsor = {
  id: string
  name: string
  href: string
  /** Logo for light theme (`public/sponsors/`) */
  logoSrc: string
  /** Optional logo for dark theme; falls back to `logoSrc` */
  logoSrcDark?: string
  logoAlt: string
}

/**
 * Active sponsors shown on the home page.
 * Drop logo files into `public/sponsors/` and update this list.
 */
export const sponsors: Sponsor[] = [
  {
    id: "paasta",
    name: "پاستاکلود",
    href: "https://paasta.cloud",
    logoSrc: "/sponsors/paasta-light.png",
    logoSrcDark: "/sponsors/paasta-dark.png",
    logoAlt: "لوگوی پاستاکلود",
  },
]
/** Open slot CTA — links to contact for new sponsors. */
export const sponsorOpenSlot = {
  href: "/contact",
  label: "حامی شوید",
} as const
