"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Label } from "@/registry/base-luma/ui/label"
import { SidebarInput } from "@/registry/base-luma/ui/sidebar"

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <div className="relative">
        <Label htmlFor="search" className="sr-only">
          جستجو
        </Label>
        <SidebarInput id="search" placeholder="جستجو..." className="h-8 ps-7" />
        <IconPlaceholder
          lucide="SearchIcon"
          tabler="IconSearch"
          hugeicons="SearchIcon"
          phosphor="MagnifyingGlassIcon"
          remixicon="RiSearchLine"
          className="pointer-events-none absolute start-2 top-1/2 size-4 -translate-y-1/2 opacity-50 select-none"
        />
      </div>
    </form>
  )
}
