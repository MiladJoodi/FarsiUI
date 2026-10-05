"use client"

import { DownloadIcon, PlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-glass/ui/avatar"
import { Badge } from "@/registry/base-glass/ui/badge"
import { Button } from "@/registry/base-glass/ui/button"
import { Separator } from "@/registry/base-glass/ui/separator"

export default function HeaderShowcase() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto w-full max-w-5xl space-y-6 px-6 py-8 md:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-3">
              <Badge variant="secondary">فضای کاری</Badge>
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                گزارش رشد مهر ۱۴۰۵
              </h1>
              <p className="text-muted-foreground">
                خلاصهٔ بازدید، نصب بلوک و رضایت تیم‌های فارسی در یک نگاه
              </p>
              <div className="flex items-center gap-3 pt-1">
                <div className="flex -space-x-2 space-x-reverse">
                  {["01", "02", "03", "04"].map((id) => (
                    <Avatar
                      key={id}
                      className="size-8 border-2 border-background"
                    >
                      <AvatarImage src={`/avatars/${id}.png`} alt="" />
                      <AvatarFallback>{id}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">
                  <bdi
                    dir="ltr"
                    className="inline-block font-medium tracking-normal [letter-spacing:0] text-foreground"
                  >
                    ۱۲
                  </bdi>{" "}
                  نفر در این گزارش
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm">
                <DownloadIcon className="size-4" />
                خروجی
              </Button>
              <Button size="sm">
                <PlusIcon className="size-4" />
                گزارش جدید
              </Button>
            </div>
          </div>

          <Separator />

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <p>
              وضعیت:{" "}
              <span className="font-medium text-foreground">منتشرشده</span>
            </p>
            <p>
              به‌روزرسانی:{" "}
              <span className="font-medium text-foreground">۲ مهر ۱۴۰۵</span>
            </p>
            <p>
              مالک:{" "}
              <span className="font-medium text-foreground">مریم رضایی</span>
            </p>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        سربرگ کامل با متادیتا و تیم
      </main>
    </div>
  )
}
