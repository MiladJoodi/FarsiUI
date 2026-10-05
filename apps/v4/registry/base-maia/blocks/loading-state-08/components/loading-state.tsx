"use client"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Spinner } from "@/registry/base-maia/ui/spinner"

export default function LoadingOverlay() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="relative">
        <Card className="pointer-events-none opacity-40 blur-[1px] select-none">
          <CardHeader className="text-start">
            <CardTitle>تنظیمات حساب</CardTitle>
            <CardDescription>نام، ایمیل و اعلان‌ها</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>مریم رضایی</p>
            <bdi dir="ltr" className="block text-muted-foreground">
              maryam@example.com
            </bdi>
            <Button className="w-full">ذخیره تغییرات</Button>
          </CardContent>
        </Card>

        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-xl bg-background/70 backdrop-blur-[2px]"
          aria-busy="true"
          aria-live="polite"
        >
          <Spinner className="size-8" />
          <p className="text-sm font-medium">در حال ذخیره…</p>
          <p className="text-xs text-muted-foreground">لطفاً صبر کنید</p>
        </div>
      </div>
    </section>
  )
}
