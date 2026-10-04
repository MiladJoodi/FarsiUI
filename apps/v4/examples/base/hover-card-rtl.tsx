import { Button } from "@/styles/base-nova/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/styles/base-nova/ui/hover-card"

const physicalSides = [
  { side: "left", label: "چپ" },
  { side: "top", label: "بالا" },
  { side: "bottom", label: "پایین" },
  { side: "right", label: "راست" },
] as const

const logicalSides = [
  { side: "inline-start", label: "شروع خط" },
  { side: "inline-end", label: "پایان خط" },
] as const

export default function HoverCardRtl() {
  return (
    <div dir="rtl" className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map(({ side, label }) => (
          <HoverCard key={side}>
            <HoverCardTrigger
              delay={10}
              closeDelay={100}
              render={<Button variant="outline" />}
            >
              {label}
            </HoverCardTrigger>
            <HoverCardContent dir="rtl"
              side={side}
              className="flex w-64 flex-col gap-1"
            >
              <div className="font-semibold">هدفون بی‌سیم</div>
              <div className="text-sm text-muted-foreground">۹۹۹٬۰۰۰ تومان</div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map(({ side, label }) => (
          <HoverCard key={side}>
            <HoverCardTrigger
              delay={10}
              closeDelay={100}
              render={<Button variant="outline" />}
            >
              {label}
            </HoverCardTrigger>
            <HoverCardContent dir="rtl"
              side={side}
              className="flex w-64 flex-col gap-1"
            >
              <div className="font-semibold">هدفون بی‌سیم</div>
              <div className="text-sm text-muted-foreground">۹۹۹٬۰۰۰ تومان</div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  )
}
