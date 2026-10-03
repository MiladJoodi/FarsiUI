"use client"

import * as React from "react"
import { DirectionProvider } from "@base-ui/react/direction-provider"
import { BookmarkIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/styles/base-rhea/ui/button"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/styles/base-rhea/ui/combobox"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/base-rhea/ui/popover"
import { Slider } from "@/styles/base-rhea/ui/slider"
import { Toggle } from "@/styles/base-rhea/ui/toggle"

const cities = [
  "تهران",
  "اصفهان",
  "شیراز",
  "مشهد",
  "تبریز",
  "اهواز",
] as const

export function PopoverSliderToastToggle() {
  const [sliderValue, setSliderValue] = React.useState([75])
  const percent = sliderValue[0] ?? 0

  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              پاپ‌اور
            </PopoverTrigger>
            <PopoverContent align="start" dir="rtl" className="text-start">
              <PopoverHeader>
                <PopoverTitle>ابعاد</PopoverTitle>
                <PopoverDescription>
                  ابعاد لایه را تنظیم کنید.
                </PopoverDescription>
              </PopoverHeader>
            </PopoverContent>
          </Popover>
          <Button
            variant="outline"
            onClick={() =>
              toast("رویداد ساخته شد", {
                description: "یکشنبه، ۳ آذر، ساعت ۹:۰۰",
              })
            }
          >
            نمایش اعلان
          </Button>
          <Toggle aria-label="نشانه‌گذاری" size="sm" variant="outline">
            <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
            نشانه‌گذاری
          </Toggle>
        </div>
        <Combobox items={cities}>
          <ComboboxInput placeholder="انتخاب شهر..." />
          <ComboboxContent dir="rtl" className="text-start">
            <ComboboxEmpty className="text-start">موردی پیدا نشد.</ComboboxEmpty>
            <ComboboxList>
              {(item) => (
                <ComboboxItem key={item} value={item} className="text-start">
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            dir="ltr"
            className="inline-block w-[3.25rem] shrink-0 text-end text-sm tabular-nums text-muted-foreground [font-variant-numeric:tabular-nums]"
          >
            {Math.round(percent).toLocaleString("fa-IR")}٪
          </span>
          <DirectionProvider direction="rtl">
            <Slider
              className="min-w-0 flex-1"
              value={sliderValue}
              onValueChange={(value) => {
                const next = Array.isArray(value) ? value : [value]
                const rounded = next.map((n) => Math.round(Number(n)))
                setSliderValue(rounded)
              }}
              max={100}
              step={1}
              aria-label="درصد"
            />
          </DirectionProvider>
        </div>
      </CardContent>
    </Card>
  )
}
