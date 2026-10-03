"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Progress } from "@/registry/base-nova/ui/progress"
import { Spinner } from "@/registry/base-nova/ui/spinner"

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function LoadingProgress() {
  const [value, setValue] = React.useState(12)

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setValue((v) => (v >= 92 ? 18 : v + 7))
    }, 450)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
      aria-busy="true"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>بارگذاری فایل</CardTitle>
          <CardDescription>پیشرفت آپلود</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm tracking-normal">
              <span className="text-muted-foreground">گزارش-فصل۳.pdf</span>
              <span>{toFa(value)}٪</span>
            </div>
            <Progress value={value} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">پردازش نامشخص</span>
              <Spinner className="size-4" />
            </div>
            <div
              className="h-2 w-full overflow-hidden rounded-full bg-primary/15"
              role="progressbar"
              aria-label="پیشرفت نامشخص"
            >
              <div className="h-full w-1/3 animate-[loading-slide_1.2s_ease-in-out_infinite] rounded-full bg-primary" />
            </div>
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <Spinner className="size-4" />
            لطفاً پنجره را نبندید…
          </p>
        </CardContent>
      </Card>
      <style>{`
        @keyframes loading-slide {
          0% { transform: translateX(200%); }
          100% { transform: translateX(-400%); }
        }
      `}</style>
    </section>
  )
}
