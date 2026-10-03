"use client"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { Separator } from "@/registry/base-lyra/ui/separator"

export function PaymentSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>پرداخت</CardTitle>
          <CardDescription>خلاصه مبلغ قابل پرداخت</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">جمع کالا</span>
            <span>۱٬۲۵۰٬۰۰۰ تومان</span>
          </div>
          <div className="flex justify-between gap-3 tracking-normal">
            <span className="text-muted-foreground">ارسال</span>
            <span>۴۵٬۰۰۰ تومان</span>
          </div>
          <Separator />
          <div className="flex justify-between gap-3 font-medium tracking-normal">
            <span>قابل پرداخت</span>
            <span>۱٬۲۹۵٬۰۰۰ تومان</span>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">پرداخت</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
