"use client"

import type { MouseEvent } from "react"
import { cn } from "cn"

import { AccountAccess } from "./account-access"
import { AnalyticsCard } from "./analytics-card"
import { AttachmentCard } from "./attachment-card"
import { ClaimableBalance } from "./claimable-balance"
import { CollageColumns } from "./collage-columns"
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
import { MessageScrollerStatic } from "./message-scroller-static"
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
import { UIElements } from "./ui-elements"

/** Design width of the mobile collage before it is scaled into 140vw (shadcn pattern). */
const MOBILE_DESIGN_WIDTH = 1600

const LIVE_CARDS = {
  UIElements,
  CalendarCard,
  SidebarNav,
  MenubarCard,
  SyncingStateCard,
  PayoutThreshold,
  ContributionHistory,
  ClaimableBalance,
  DividendIncome,
  TabsCard,
  FaqCard,
  NewMilestone,
  SavingsTargets,
  AccountAccess,
  DropdownDrawerHover,
  ShortcutsCard,
  MessageScrollerStatic,
  Payments,
  PopoverSliderToastToggle,
  ContextMenuCard,
  AttachmentCard,
  InviteTeamCard,
  EmptyDistributeTrack,
  AnalyticsCard,
  NotificationSettings,
  PowerUsage,
  MarkerAvatarAlert,
  SocialLinksCard,
}

function preventDemoHashNavigation(event: MouseEvent<HTMLDivElement>) {
  const target = event.target
  if (!(target instanceof Element)) return
  const anchor = target.closest("a[href='#']")
  if (!anchor) return
  event.preventDefault()
}

/** Soft handoff from page header (background) into the collage (muted). */
const COLLAGE_SURFACE =
  "bg-muted [background-image:linear-gradient(to_bottom,var(--background)_0%,var(--background)_1.25rem,var(--muted)_5.5rem)] dark:bg-background dark:[background-image:none]"

export function CardsDemoMobile() {
  return (
    <div
      data-collage-surface=""
      className={cn(
        "relative w-full max-w-full overflow-x-clip",
        COLLAGE_SURFACE
      )}
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
        <CollageColumns forceAll cards={LIVE_CARDS} />
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
      <CollageColumns cards={LIVE_CARDS} />
      <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-background via-muted/80 to-transparent lg:h-48 dark:via-background/80" />
    </div>
  )
}
