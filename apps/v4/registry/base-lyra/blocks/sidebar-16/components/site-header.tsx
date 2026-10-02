"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { SearchForm } from "@/registry/base-lyra/blocks/sidebar-16/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/base-lyra/ui/breadcrumb"
import { Button } from "@/registry/base-lyra/ui/button"
import { Separator } from "@/registry/base-lyra/ui/separator"
import { useSidebar } from "@/registry/base-lyra/ui/sidebar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <IconPlaceholder
            lucide="PanelLeftIcon"
            tabler="IconLayoutSidebar"
            hugeicons="SidebarLeftIcon"
            phosphor="SidebarIcon"
            remixicon="RiLayoutLeftLine"
          />
        </Button>
        <Separator
          orientation="vertical"
          className="me-2 data-vertical:h-4 data-vertical:self-auto"
        />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">ساخت اپلیکیشن</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>دریافت داده</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <SearchForm className="w-full sm:ms-auto sm:w-auto" />
      </div>
    </header>
  )
}
