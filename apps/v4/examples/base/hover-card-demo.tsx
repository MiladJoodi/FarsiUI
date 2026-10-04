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
        <HoverCardContent dir="rtl" className="flex w-64 flex-col gap-0.5">
          <div className="font-semibold">نکست‌جی‌اس</div>
          <div>
            فریم‌ورک ری‌اکت برای ساخت وب‌اپ‌های مدرن؛ توسعه و پشتیبانی توسط
            Vercel.
          </div>
          <div className="mt-1 text-xs text-muted-foreground">
            عضویت از آذر ۱۴۰۰
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}
