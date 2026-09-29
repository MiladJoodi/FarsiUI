import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"

export default function ButtonSize() {
  return (
    <div
      dir="rtl"
      className="flex flex-col flex-wrap items-center justify-center gap-6 sm:flex-row sm:gap-8"
    >
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">
          خیلی کوچک
        </Button>
        <Button size="icon-xs" aria-label="ارسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          کوچک
        </Button>
        <Button size="icon-sm" aria-label="ارسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">معمولی</Button>
        <Button size="icon" aria-label="ارسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          بزرگ
        </Button>
        <Button size="icon-lg" aria-label="ارسال" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}
