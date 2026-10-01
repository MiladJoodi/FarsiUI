"use client"

import { lazy, Suspense } from "react"
import { SquareIcon } from "lucide-react"
import type { IconLibraryName } from "farsiui/icons"

const IconLucide = lazy(() =>
  import("@/registry/icons/icon-lucide").then((mod) => ({
    default: mod.IconLucide,
  }))
)

export function IconPlaceholder({
  ...props
}: {
  [K in IconLibraryName]: string
} & React.ComponentProps<"svg">) {
  const iconName = props.lucide

  if (!iconName) {
    return null
  }

  return (
    <Suspense fallback={<SquareIcon {...props} />}>
      <IconLucide name={iconName} {...props} />
    </Suspense>
  )
}
