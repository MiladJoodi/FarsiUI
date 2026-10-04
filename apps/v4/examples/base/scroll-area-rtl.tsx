import * as React from "react"

import { ScrollArea } from "@/registry/bases/base/ui/scroll-area"
import { Separator } from "@/registry/bases/base/ui/separator"

const tags = Array.from({ length: 50 }, (_, i) => {
  const n = 50 - i
  return `نسخه ۱.۲.۰ — بتا ${n.toLocaleString("fa-IR")}`
})

export default function ScrollAreaRtl() {
  return (
    <div dir="rtl">
      <ScrollArea className="h-72 w-48 rounded-md border">
        <div className="p-4">
          <h4 className="mb-4 text-sm leading-none font-medium">برچسب‌ها</h4>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div className="text-sm">{tag}</div>
              <Separator className="my-2" />
            </React.Fragment>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}
