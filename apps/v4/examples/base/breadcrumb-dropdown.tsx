"use client"

import { ChevronDownIcon, DotIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/styles/base-nova/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

function preventNav(e: React.MouseEvent) {
  e.preventDefault()
}

export default function BreadcrumbDropdown() {
  return (
    <div dir="rtl" className="flex w-full justify-center">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#" onClick={preventNav}>
              خانه
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <DotIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<button className="flex items-center gap-1" />}
              >
                کامپوننت‌ها
                <ChevronDownIcon data-icon="inline-end" className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem>مستندات</DropdownMenuItem>
                  <DropdownMenuItem>تم‌ها</DropdownMenuItem>
                  <DropdownMenuItem>گیت‌هاب</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <DotIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>مسیر</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
