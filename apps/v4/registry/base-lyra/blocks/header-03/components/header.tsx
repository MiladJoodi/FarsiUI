"use client"

import { PlusIcon } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/base-lyra/ui/breadcrumb"
import { Button } from "@/registry/base-lyra/ui/button"

export default function HeaderBreadcrumb() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b px-6 py-6 md:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">خانه</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">پروژه‌ها</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>فروشگاه آنلاین</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              فروشگاه آنلاین
            </h1>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm">
                تنظیمات
              </Button>
              <Button size="sm">
                <PlusIcon className="size-4" />
                صفحه جدید
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        مسیر صفحه، عنوان و اکشن‌ها
      </main>
    </div>
  )
}
