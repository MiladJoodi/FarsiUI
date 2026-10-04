"use client"

import { Button } from "@/registry/base-nova/ui/button"

export default function HeaderWithAction() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b px-6 py-8 md:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
              بلوک‌های فارسی
            </h1>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              بخش‌های آمادهٔ راست‌چین برای ساخت سریع رابط محصول
            </p>
          </div>
          <Button className="w-fit shrink-0">بلوک جدید</Button>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        عنوان، توضیح و یک اکشن
      </main>
    </div>
  )
}
