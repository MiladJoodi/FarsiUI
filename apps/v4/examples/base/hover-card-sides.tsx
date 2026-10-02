import { Button } from "@/styles/base-nova/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/styles/base-nova/ui/hover-card"

const HOVER_CARD_SIDES = [
  { side: "left", label: "چپ" },
  { side: "top", label: "بالا" },
  { side: "bottom", label: "پایین" },
  { side: "right", label: "راست" },
] as const

export function HoverCardSides() {
  return (
    <div dir="rtl" className="flex flex-wrap justify-center gap-2">
      {HOVER_CARD_SIDES.map(({ side, label }) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            delay={100}
            closeDelay={100}
            render={<Button variant="outline" />}
          >
            {label}
          </HoverCardTrigger>
          <HoverCardContent dir="rtl" side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">کارت شناور</h4>
              <p>این کارت در سمت {label} تریگر نمایش داده می‌شود.</p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
