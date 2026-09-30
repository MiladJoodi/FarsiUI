import { Button } from "@/styles/base-nova/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

const physicalSides = [
  { side: "left" as const, label: "چپ" },
  { side: "top" as const, label: "بالا" },
  { side: "bottom" as const, label: "پایین" },
  { side: "right" as const, label: "راست" },
]

const logicalSides = [
  { side: "inline-start" as const, label: "شروع درون‌خطی" },
  { side: "inline-end" as const, label: "پایان درون‌خطی" },
]

export function PopoverRtl() {
  return (
    <div dir="rtl" className="grid gap-4">
      <div className="flex flex-wrap justify-center gap-2">
        {physicalSides.map(({ side, label }) => (
          <Popover key={side}>
            <PopoverTrigger render={<Button variant="outline" />}>
              {label}
            </PopoverTrigger>
            <PopoverContent side={side}>
              <PopoverHeader>
                <PopoverTitle>ابعاد</PopoverTitle>
                <PopoverDescription>
                  ابعاد لایه را تنظیم کنید.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {logicalSides.map(({ side, label }) => (
          <Popover key={side}>
            <PopoverTrigger render={<Button variant="outline" />}>
              {label}
            </PopoverTrigger>
            <PopoverContent side={side}>
              <PopoverHeader>
                <PopoverTitle>ابعاد</PopoverTitle>
                <PopoverDescription>
                  ابعاد لایه را تنظیم کنید.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
        ))}
      </div>
    </div>
  )
}
