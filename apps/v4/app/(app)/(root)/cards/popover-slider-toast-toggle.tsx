"use client"

import { BookmarkIcon } from "lucide-react"
import { toast } from "sonner"

import { Button } from "@/styles/base-rhea/ui/button"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
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

export function PopoverSliderToastToggle() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>
              پاپ‌اور
            </PopoverTrigger>
            <PopoverContent align="start" dir="rtl">
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
            نمایش توست
          </Button>
          <Toggle aria-label="نشانه‌گذاری" size="sm" variant="outline">
            <BookmarkIcon className="group-aria-pressed/toggle:fill-foreground" />
            نشانه‌گذاری
          </Toggle>
        </div>
        {/* dir only on parent Card — duplicate dir on Slider causes wrong fill/thumb */}
        <Slider defaultValue={[75]} max={100} step={1} />
      </CardContent>
    </Card>
  )
}
