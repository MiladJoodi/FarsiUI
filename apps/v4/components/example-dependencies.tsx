"use client"

import { HookInstallNotes } from "@/components/hook-install-notes"
import { cn } from "cn"

/** Example-only hook install notes. Shown only when the example imports the hook. */
export function ExampleDependencies({
  dependencies,
  className,
}: {
  dependencies?: string[]
  className?: string
}) {
  return (
    <HookInstallNotes
      dependencies={dependencies}
      scope="example"
      className={cn("mt-3", className)}
    />
  )
}
