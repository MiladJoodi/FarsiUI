"use client"

import { CheckCircle2Icon, FileTextIcon, HomeIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export function SuccessCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge className="bg-emerald-600 text-white hover:bg-emerald-600">
            موفق
          </Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <CheckCircle2Icon className="size-6 text-emerald-600 dark:text-emerald-400" />
              </EmptyMedia>
              <EmptyTitle>پرداخت انجام شد</EmptyTitle>
              <EmptyDescription>
                مبلغ{" "}
                <bdi dir="ltr" className="font-medium text-foreground">
                  ۱٬۲۹۵٬۰۰۰
                </bdi>{" "}
                تومان با موفقیت پرداخت شد. کد پیگیری:{" "}
                <bdi dir="ltr" className="font-medium text-foreground">
                  PAY-938271
                </bdi>
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <FileTextIcon data-icon="inline-start" />
                مشاهده رسید
              </Button>
              <Button variant="outline">
                <HomeIcon data-icon="inline-start" />
                خانه
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs text-muted-foreground">
          رسید به <bdi dir="ltr" className="mx-1">name@example.com</bdi> ارسال شد
        </CardFooter>
      </Card>
    </section>
  )
}
