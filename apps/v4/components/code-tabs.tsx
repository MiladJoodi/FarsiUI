"use client"

import * as React from "react"

import { useConfig } from "@/hooks/use-config"
import { Tabs } from "@/registry/new-york-v4/ui/tabs"

export function CodeTabs({ children }: React.ComponentProps<typeof Tabs>) {
  const [config, setConfig] = useConfig()

  const installationType = React.useMemo(() => {
    return config.installationType || "cli"
  }, [config])

  return (
    <Tabs
      value={installationType}
      onValueChange={(value) =>
        setConfig({ ...config, installationType: value as "cli" | "manual" })
      }
      dir="rtl"
      className="relative mt-6 w-full *:data-[slot=tabs-list]:ml-auto *:data-[slot=tabs-list]:gap-6 [&_[data-rehype-pretty-code-figure]]:dir-ltr [&_pre]:dir-ltr"
    >
      {children}
    </Tabs>
  )
}
