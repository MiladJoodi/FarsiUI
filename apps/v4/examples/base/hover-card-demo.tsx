import { Button } from "@/styles/base-nova/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/styles/base-nova/ui/hover-card"

export default function HoverCardDemo() {
  return (
    <div dir="rtl">
      <HoverCard>
        <HoverCardTrigger
          delay={10}
          closeDelay={100}
          render={<Button variant="link" />}
        >
          اینجا نگه دارید
        </HoverCardTrigger>
        <HoverCardContent className="flex w-64 flex-col gap-0.5">
          <div className="font-semibold">@nextjs</div>
          <div>فریم‌ورک ری‌اکت — ساخته و نگهداری‌شده توسط @vercel.</div>
          <div className="mt-1 text-xs text-muted-foreground">
            عضویت از آذر ۱۴۰۰
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
