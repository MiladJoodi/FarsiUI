"use client"

import { PlusIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/base-maia/ui/breadcrumb"
import { Button } from "@/registry/base-maia/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"
import { Separator } from "@/registry/base-maia/ui/separator"

export function BreadcrumbShowcase() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-6 md:px-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">خانه</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    render={
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        className="size-auto px-1"
                        aria-label="مسیرهای میانی"
                      />
                    }
                  >
                    <BreadcrumbEllipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" dir="rtl" lang="fa">
                    <DropdownMenuItem>فضای کاری</DropdownMenuItem>
                    <DropdownMenuItem>پروژه‌ها</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">فروشگاه آنلاین</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>صفحات</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                صفحات
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                فهرست و مدیریت صفحات فروشگاه
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                خروجی
              </Button>
              <Button size="sm">
                <PlusIcon className="size-4" />
                صفحه جدید
              </Button>
            </div>
          </div>

          <Separator />

          <p className="text-sm text-muted-foreground">
            آخرین ویرایش · ۲ مهر ۱۴۰۴ · مریم رضایی
          </p>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        مسیر کامل با عنوان، اکشن و متادیتا
      </main>
    </div>
  )
}
