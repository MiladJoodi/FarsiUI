"use client"

import * as React from "react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/base-vega/ui/breadcrumb"

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function BreadcrumbWithTitle() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b px-6 py-8 md:px-10">
        <div className="mx-auto w-full max-w-5xl space-y-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={demoNavClick}>
                  خانه
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#" onClick={demoNavClick}>
                  پروژه‌ها
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>فروشگاه آنلاین</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            فروشگاه آنلاین
          </h1>
          <p className="text-sm text-muted-foreground">
            مدیریت صفحات، محصولات و تنظیمات فروشگاه
          </p>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        مسیر بالای عنوان صفحه
      </main>
    </div>
  )
}
