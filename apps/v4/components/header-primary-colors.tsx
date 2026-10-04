"use client"

import { usePathname } from "next/navigation"

import { PrimaryColorPalette } from "@/components/primary-color-palette"

export function HeaderPrimaryColors() {
  const pathname = usePathname()
  const isShowcase =
    pathname === "/showcase" || pathname.startsWith("/showcase/")

  if (isShowcase) {
    return null
  }

  return (
    <div data-slot="header-primary-colors">
      <PrimaryColorPalette compact />
    </div>
  )
}
