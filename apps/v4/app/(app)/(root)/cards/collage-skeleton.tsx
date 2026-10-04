import { cn } from "cn"

import { CollageColumns } from "./collage-columns"
import { AccountAccess } from "./skeleton/account-access"
import { AnalyticsCard } from "./skeleton/analytics-card"
import { AttachmentCard } from "./skeleton/attachment-card"
import { CalendarCard } from "./skeleton/calendar-card"
import { ClaimableBalance } from "./skeleton/claimable-balance"
import { ContextMenuCard } from "./skeleton/context-menu-card"
import { ContributionHistory } from "./skeleton/contribution-history"
import { DividendIncome } from "./skeleton/dividend-income"
import { DropdownDrawerHover } from "./skeleton/dropdown-drawer-hover"
import { EmptyDistributeTrack } from "./skeleton/empty-distribute-track"
import { FaqCard } from "./skeleton/faq-card"
import { InviteTeamCard } from "./skeleton/invite-team-card"
import { MarkerAvatarAlert } from "./skeleton/marker-avatar-alert"
import { MenubarCard } from "./skeleton/menubar-card"
import { MessageScrollerStatic } from "./skeleton/message-scroller-static"
import { NewMilestone } from "./skeleton/new-milestone"
import { NotificationSettings } from "./skeleton/notification-settings"
import { Payments } from "./skeleton/payments"
import { PayoutThreshold } from "./skeleton/payout-threshold"
import { PopoverSliderToastToggle } from "./skeleton/popover-slider-toast-toggle"
import { PowerUsage } from "./skeleton/power-usage"
import { SavingsTargets } from "./skeleton/savings-targets"
import { ShortcutsCard } from "./skeleton/shortcuts-card"
import { SidebarNav } from "./skeleton/sidebar-nav"
import { SocialLinksCard } from "./skeleton/social-links-card"
import { SyncingStateCard } from "./skeleton/syncing-state-card"
import { TabsCard } from "./skeleton/tabs-card"
import { UIElements } from "./skeleton/ui-elements"

/** Design width of the mobile collage before it is scaled into 140vw. */
const MOBILE_DESIGN_WIDTH = 1600

const COLLAGE_SURFACE =
  "bg-muted [background-image:linear-gradient(to_bottom,var(--background)_0%,var(--background)_1.25rem,var(--muted)_5.5rem)] dark:bg-background dark:[background-image:none]"

const SKELETON_CARDS = {
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

/** Collage placeholder — same columns / RTL / chrome as CardsDemo. */
export function CollageSkeleton({ mobile = false }: { mobile?: boolean }) {
  if (mobile) {
    return (
      <div
        aria-busy="true"
        aria-label="در حال بارگذاری نمونه‌ها"
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
          <CollageColumns forceAll cards={SKELETON_CARDS} />
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-background via-muted/80 to-transparent dark:via-background/80" />
      </div>
    )
  }

  return (
    <div
      aria-busy="true"
      aria-label="در حال بارگذاری نمونه‌ها"
      data-slot="demo"
      data-collage-surface=""
      dir="rtl"
      lang="fa"
      className={cn(
        "theme-container relative flex w-full max-w-none flex-col gap-(--gap) px-12 pt-6 pb-0! [--gap:--spacing(8)] 3xl:[--gap:--spacing(8)] min-[1900px]:px-12 min-[1900px]:pt-8 min-[1900px]:[--gap:--spacing(10)]! lg:px-6 lg:pt-6 lg:[--gap:--spacing(6)] [font-variant-numeric:normal] [&_*]:[font-variant-numeric:normal]",
        COLLAGE_SURFACE
      )}
    >
      <CollageColumns cards={SKELETON_CARDS} />
      <div className="absolute inset-x-0 bottom-0 z-20 h-40 bg-linear-to-t from-background via-muted/80 to-transparent lg:h-48 dark:via-background/80" />
    </div>
  )
}
