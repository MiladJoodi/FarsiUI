"use client"

import { LifeBuoyIcon, RefreshCwIcon, ServerCrashIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-sera/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-sera/ui/empty"

export default function ErrorStateIconCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge variant="destructive">خطای سرور</Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <ServerCrashIcon className="size-6 text-destructive" />
              </EmptyMedia>
              <EmptyTitle>اتصال برقرار نشد</EmptyTitle>
              <EmptyDescription>
                سرور پاسخ نداد. کد خطا:{" "}
                <span className="font-medium tracking-normal [letter-spacing:0] text-foreground">
                  ۵۰۳
                </span>
                . می‌توانید دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <RefreshCwIcon data-icon="inline-start" />
                تلاش مجدد
              </Button>
              <Button variant="outline">
                <LifeBuoyIcon data-icon="inline-start" />
                پشتیبانی
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs tracking-normal text-muted-foreground">
          شناسه رهگیری: خطا-۹۴۲۱
        </CardFooter>
      </Card>
    </section>
  )
}
