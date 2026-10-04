import type { ComponentType, ReactNode } from "react"

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

export type CollageCardComponents = {
  UIElements: ComponentType
  CalendarCard: ComponentType
  SidebarNav: ComponentType
  MenubarCard: ComponentType
  SyncingStateCard: ComponentType
  PayoutThreshold: ComponentType
  ContributionHistory: ComponentType
  ClaimableBalance: ComponentType
  DividendIncome: ComponentType
  TabsCard: ComponentType
  FaqCard: ComponentType
  NewMilestone: ComponentType
  SavingsTargets: ComponentType
  AccountAccess: ComponentType
  DropdownDrawerHover: ComponentType
  ShortcutsCard: ComponentType
  MessageScrollerStatic: ComponentType
  Payments: ComponentType
  PopoverSliderToastToggle: ComponentType
  ContextMenuCard: ComponentType
  AttachmentCard: ComponentType
  InviteTeamCard: ComponentType
  EmptyDistributeTrack: ComponentType
  AnalyticsCard: ComponentType
  NotificationSettings: ComponentType
  PowerUsage: ComponentType
  MarkerAvatarAlert: ComponentType
  SocialLinksCard: ComponentType
}

/** Shared five-column collage layout — real cards and skeletons must use this. */
export function CollageColumns({
  forceAll = false,
  cards: C,
}: {
  forceAll?: boolean
  cards: CollageCardComponents
}) {
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
        <C.UIElements />
        <C.CalendarCard />
        <C.SidebarNav />
        <C.MenubarCard />
        <C.SyncingStateCard />
        <C.PayoutThreshold />
        <FadeTail>
          <C.PayoutThreshold />
        </FadeTail>
      </div>
      <div className={col("lg:flex")}>
        <C.ContributionHistory />
        <C.ClaimableBalance />
        <C.DividendIncome />
        <C.TabsCard />
        <C.FaqCard />
        <FadeTail>
          <C.ClaimableBalance />
        </FadeTail>
      </div>
      <div className={col("min-[1400px]:flex")}>
        <C.NewMilestone />
        <C.SavingsTargets />
        <C.AccountAccess />
        <C.DropdownDrawerHover />
        <C.ShortcutsCard />
        <FadeTail>
          <C.AccountAccess />
        </FadeTail>
      </div>
      <div className={col("md:flex")}>
        <div className="**:[.text-center.text-xs]:hidden">
          <C.MessageScrollerStatic />
        </div>
        <C.Payments />
        <C.PopoverSliderToastToggle />
        <C.ContextMenuCard />
        <C.AttachmentCard />
        <C.InviteTeamCard />
        <FadeTail>
          <C.Payments />
        </FadeTail>
      </div>
      <div className={col("min-[1900px]:flex")}>
        <C.EmptyDistributeTrack />
        <C.AnalyticsCard />
        <C.NotificationSettings />
        <C.PowerUsage />
        <C.MarkerAvatarAlert />
        <C.SocialLinksCard />
        <FadeTail>
          <C.NotificationSettings />
        </FadeTail>
      </div>
    </div>
  )
}
