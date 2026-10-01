"use client"

import { usePathname } from "next/navigation"

import { PrimaryColorPalette } from "@/components/primary-color-palette"
import { Separator } from "@/registry/new-york-v4/ui/separator"

export function HeaderPrimaryColors() {
  const pathname = usePathname()
  const isShowcase =
    pathname === "/showcase" || pathname.startsWith("/showcase/")

  if (isShowcase) {
    return null
  }

  return (
    <>
      <PrimaryColorPalette compact className="hidden sm:flex" />
      <Separator orientation="vertical" className="hidden sm:block" />
    </>
  )
}
