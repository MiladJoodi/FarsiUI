import * as React from "react"

import { ScrollArea } from "@/styles/radix-nova/ui/scroll-area"
import { Separator } from "@/styles/radix-nova/ui/separator"

const tags = Array.from({ length: 50 }, (_, i) => `v1.2.0-beta.${50 - i}`)

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
        {tags.map((tag) => (
          <React.Fragment key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </React.Fragment>
        ))}
      </div>
    </ScrollArea>
  )
}
