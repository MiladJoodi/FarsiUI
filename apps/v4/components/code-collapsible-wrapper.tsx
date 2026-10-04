"use client"

import * as React from "react"
import { IconChevronUp, IconEye } from "@tabler/icons-react"
import { cn } from "cn"

import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"

const viewCodeButtonClassName =
  "relative z-10 gap-1.5 rounded-lg bg-background font-sans text-foreground shadow-none hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted"

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false)

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className={cn("group/collapsible relative md:-mx-1", className)}
      {...props}
    >
      {isOpened ? (
        <CollapsibleTrigger asChild>
          <div className="absolute top-1.5 end-9 z-10 flex items-center">
            <Button
              variant="outline"
              size="sm"
              className={cn(viewCodeButtonClassName, "h-7 px-2")}
            >
              <IconChevronUp className="size-4" />
              بستن
            </Button>
          </div>
        </CollapsibleTrigger>
      ) : null}

      <CollapsibleContent
        forceMount
        className="relative mt-6 overflow-hidden data-[state=closed]:max-h-64 data-[state=closed]:[content-visibility:auto] [&>figure]:mt-0 [&>figure]:md:mx-0!"
      >
        {children}
      </CollapsibleContent>

      {!isOpened ? (
        <div className="absolute inset-x-0 bottom-0 z-10 flex h-24 items-center justify-center rounded-b-lg">
          <div
            className="absolute inset-0 rounded-b-lg"
            style={{
              background:
                "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)",
            }}
          />
          <CollapsibleTrigger asChild>
            <Button
              type="button"
              size="sm"
              variant="outline"
              className={viewCodeButtonClassName}
            >
              <IconEye className="size-4" />
              مشاهده کد
            </Button>
          </CollapsibleTrigger>
        </div>
      ) : null}
    </Collapsible>
  )
}
