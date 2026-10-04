"use client"

import type { MouseEvent, ReactNode } from "react"
import { cn } from "cn"
import MessageScrollerDemo from "@/examples/base/message-scroller-demo"

import { AccountAccess } from "./account-access"
import { AnalyticsCard } from "./analytics-card"
import { AttachmentCard } from "./attachment-card"
import { ClaimableBalance } from "./claimable-balance"
import { CalendarCard } from "./combobox-date-picker"
import { ContextMenuCard } from "./context-menu-card"
import { ContributionHistory } from "./contribution-history"
import { DividendIncome } from "./dividend-income"
import { DropdownDrawerHover } from "./dropdown-drawer-hover"
import { EmptyDistributeTrack } from "./empty-distribute-track"
import { FaqCard } from "./faq-card"
import { InviteTeamCard } from "./invite-team-card"
import { MarkerAvatarAlert } from "./marker-avatar-alert"
import { MenubarCard } from "./menubar-card"
import { NavigationMenuCard } from "./navigation-menu-card"
import { NewMilestone } from "./new-milestone"
import { NotificationSettings } from "./notification-settings"
import { Payments } from "./payments"
import { PayoutThreshold } from "./payout-threshold"
import { PopoverSliderToastToggle } from "./popover-slider-toast-toggle"
import { PowerUsage } from "./power-usage"
import { SavingsTargets } from "./savings-targets"
import { ShortcutsCard } from "./shortcuts-card"
import { SidebarNav } from "./sidebar-nav"
import { SocialLinksCard } from "./social-links-card"
import { SyncingStateCard } from "./syncing-state-card"
import { TabsCard } from "./tabs-card"
import { AccountAccess as SkeletonAccountAccess } from "./skeleton/account-access"
import { AnalyticsCard as SkeletonAnalyticsCard } from "./skeleton/analytics-card"
import { ClaimableBalance as SkeletonClaimableBalance } from "./skeleton/claimable-balance"
import { ContributionHistory as SkeletonContributionHistory } from "./skeleton/contribution-history"
import { DividendIncome as SkeletonDividendIncome } from "./skeleton/dividend-income"
import { EmptyDistributeTrack as SkeletonEmptyDistributeTrack } from "./skeleton/empty-distribute-track"
import { NewMilestone as SkeletonNewMilestone } from "./skeleton/new-milestone"
import { NotificationSettings as SkeletonNotificationSettings } from "./skeleton/notification-settings"
import { Payments as SkeletonPayments } from "./skeleton/payments"
import { PayoutThreshold as SkeletonPayoutThreshold } from "./skeleton/payout-threshold"
import { PowerUsage as SkeletonPowerUsage } from "./skeleton/power-usage"
import { SavingsTargets as SkeletonSavingsTargets } from "./skeleton/savings-targets"
import { UIElements as SkeletonUIElements } from "./skeleton/ui-elements"
import { UIElements } from "./ui-elements"

/** Design width of the mobile collage before it is scaled into 140vw (shadcn pattern). */
const MOBILE_DESIGN_WIDTH = 1600

/**
 * Decorative strip pinned to the bottom fade only.
 * Height matches the fade overlay so duplicates never form a full extra row.
 */
function FadeTail({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mt-auto h-40 shrink-0 overflow-hidden lg:h-48"
    >
      <div className="flex flex-col gap-(--gap)">{children}</div>
    </div>
  )
}

function CardsSkeletonRails() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-12 z-10 hidden min-[2200px]:block [&_[data-slot=skeleton]:nth-child(even)]:hidden"
    >
      <div className="absolute top-0 left-[calc(50%-950px-var(--rail-width)-var(--gap))] grid w-(--rail-width) grid-cols-[repeat(2,var(--rail-column))] gap-(--gap) opacity-50 [--rail-column:20rem] [--rail-width:calc(var(--rail-column)*2+var(--gap))]">
        <div className="flex flex-col gap-(--gap)">
          <SkeletonContributionHistory />
          <SkeletonClaimableBalance />
          <SkeletonDividendIncome />
          <SkeletonPayoutThreshold />
        </div>
        <div className="flex flex-col gap-(--gap)">
          <SkeletonUIElements />
          <SkeletonSavingsTargets />
          <SkeletonNewMilestone />
          <SkeletonPayoutThreshold />
          <SkeletonAccountAccess />
        </div>
      </div>
      <div className="absolute top-0 right-[calc(50%-950px-var(--rail-width)-var(--gap))] grid w-(--rail-width) grid-cols-[repeat(2,var(--rail-column))] gap-(--gap) opacity-50 [--rail-column:20rem] [--rail-width:calc(var(--rail-column)*2+var(--gap))]">
        <div className="flex flex-col gap-(--gap)">
          <SkeletonNewMilestone />
          <SkeletonPayoutThreshold />
          <SkeletonAccountAccess />
          <SkeletonPayments />
          <SkeletonEmptyDistributeTrack />
        </div>
        <div className="flex flex-col gap-(--gap)">
          <SkeletonPayments />
          <SkeletonEmptyDistributeTrack />
          <SkeletonAnalyticsCard />
          <SkeletonNotificationSettings />
          <SkeletonPowerUsage />
        </div>
      </div>
    </div>
  )
}

function preventDemoHashNavigation(event: MouseEvent<HTMLDivElement>) {
  const target = event.target
  if (!(target instanceof Element)) return
  const anchor = target.closest("a[href='#']")
  if (!anchor) return
  event.preventDefault()
}

/** Same five columns / same cards as desktop — always fully visible in the mobile collage. */
function CardsColumns({ forceAll = false }: { forceAll?: boolean }) {
  const col = (visibleFrom: string) =>
    forceAll
      ? "flex h-full min-w-0 flex-col gap-(--gap)"
      : `hidden h-full flex-col gap-(--gap) ${visibleFrom}`

  return (
    <div
      className={
        forceAll
          ? "relative z-10 grid grid-cols-5 items-stretch gap-(--gap) **:data-[slot=card]:w-full"
          : "relative z-10 mx-auto grid items-stretch gap-(--gap) **:data-[slot=card]:w-full min-[1400px]:grid-cols-4! min-[1900px]:grid-cols-5! md:max-w-3xl md:grid-cols-2 lg:max-w-none lg:grid-cols-3 xl:max-w-[1600px] 2xl:max-w-[1900px]"
      }
    >
      <div className="flex h-full min-w-0 flex-col gap-(--gap)">
        <UIElements />
        <CalendarCard />
        <SidebarNav />
        <MenubarCard />
        <SyncingStateCard />
        <PayoutThreshold />
        <FadeTail>
          <PayoutThreshold />
        </FadeTail>
      </div>
      <div className={col("lg:flex")}>
        <ContributionHistory />
        <ClaimableBalance />
        <DividendIncome />
        <TabsCard />
        <FaqCard />
        <FadeTail>
          <ClaimableBalance />
        </FadeTail>
      </div>
      <div className={col("min-[1400px]:flex")}>
        <NewMilestone />
        <SavingsTargets />
        <AccountAccess />
        <NavigationMenuCard />
        <DropdownDrawerHover />
        <ShortcutsCard />
        <FadeTail>
          <AccountAccess />
        </FadeTail>
      </div>
      <div className={col("md:flex")}>
        <div className="**:[.text-center.text-xs]:hidden">
          <MessageScrollerDemo />
        </div>
        <Payments />
        <PopoverSliderToastToggle />
        <ContextMenuCard />
        <AttachmentCard />
        <InviteTeamCard />
        <FadeTail>
          <Payments />
        </FadeTail>
      </div>
      <div className={col("min-[1900px]:flex")}>
        <EmptyDistributeTrack />
        <AnalyticsCard />
        <NotificationSettings />
        <PowerUsage />
        <MarkerAvatarAlert />
        <SocialLinksCard />
        <FadeTail>
          <NotificationSettings />
        </FadeTail>
      </div>
    </div>
  )
}

/**
 * Mobile: desktop collage zoomed into 140vw (shadcn pattern).
 * `zoom` keeps layout height correct; fades match CardsDemo exactly.
 */
/** Soft handoff from page header (background) into the collage (muted). */
const COLLAGE_SURFACE =
  "bg-muted [background-image:linear-gradient(to_bottom,var(--background)_0%,var(--background)_1.25rem,var(--muted)_5.5rem)] dark:bg-background dark:[background-image:none]"

export function CardsDemoMobile() {
  return (
    <div
      data-collage-surface=""
      className={cn("relative w-full overflow-x-clip", COLLAGE_SURFACE)}
    >
      <div
        data-slot="demo"
        dir="rtl"
        lang="fa"
        aria-hidden="true"
        className="theme-container pointer-events-none max-w-none bg-transparent px-12 pt-6 pb-0! [--gap:--spacing(6)] [font-variant-numeric:normal] [&_*]:[font-variant-numeric:normal]"
        style={{
          width: MOBILE_DESIGN_WIDTH,
          zoom: `calc(140vw / ${MOBILE_DESIGN_WIDTH}px)`,
        }}
      >
        <CardsColumns forceAll />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-background via-muted/80 to-transparent dark:via-background/80" />
    </div>
  )
}

export function CardsDemo() {
  return (
    <div
      data-slot="demo"
      data-collage-surface=""
      dir="rtl"
      lang="fa"
      onClickCapture={preventDemoHashNavigation}
      className={cn(
        "theme-container relative flex w-full max-w-none flex-col gap-(--gap) px-12 pt-6 pb-0! [--gap:--spacing(8)] 3xl:[--gap:--spacing(8)] min-[1900px]:px-12 min-[1900px]:pt-8 min-[1900px]:[--gap:--spacing(10)]! lg:px-6 lg:pt-6 lg:[--gap:--spacing(6)] [font-variant-numeric:normal] [&_*]:[font-variant-numeric:normal]",
        COLLAGE_SURFACE
      )}
    >
      <CardsSkeletonRails />
      <CardsColumns />
      <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-background via-muted/80 to-transparent lg:h-48 dark:via-background/80" />
    </div>
  )
}
