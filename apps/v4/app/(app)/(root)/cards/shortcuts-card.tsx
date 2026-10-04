"use client"

import * as React from "react"

import { Card, CardContent } from "@/registry/bases/base/ui/card"
import {
  Item,
  ItemActions,
  ItemGroup,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Kbd } from "@/registry/bases/base/ui/kbd"

const shortcuts = [
  { label: "جستجو", keys: ["⌘", "K"] },
  { label: "اقدام سریع", keys: ["⌘", "J"] },
  { label: "فایل جدید", keys: ["⌘", "N"] },
  { label: "ذخیره", keys: ["⌘", "S"] },
  { label: "نوار کناری", keys: ["⌘", "B"] },
] as const

export function ShortcutsCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <div className="flex flex-col gap-3">
          <div className="text-sm font-medium">میانبرها</div>
          <ItemGroup className="gap-2 text-muted-foreground" data-size="xs">
            {shortcuts.map(({ label, keys }, i) => (
              <React.Fragment key={label}>
                {i > 0 ? <ItemSeparator /> : null}
                <Item variant="default" size="xs" className="border-0 px-0 py-0">
                  <ItemHeader>
                    <ItemTitle className="font-normal">{label}</ItemTitle>
                    <ItemActions>
                      <div className="flex gap-1">
                        {keys.map((key) => (
                          <Kbd key={key}>{key}</Kbd>
                        ))}
                      </div>
                    </ItemActions>
                  </ItemHeader>
                </Item>
              </React.Fragment>
            ))}
          </ItemGroup>
        </div>
      </CardContent>
    </Card>
  )
}
