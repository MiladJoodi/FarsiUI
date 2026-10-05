"use client"

import { BellIcon, ConstructionIcon, MailIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-nova/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-nova/ui/empty"

export default function MaintenanceCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge variant="secondary">نگهداری برنامه‌ریزی‌شده</Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <ConstructionIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>سرویس موقتاً قطع است</EmptyTitle>
              <EmptyDescription>
                از{" "}
                <bdi dir="ltr" className="font-medium text-foreground">
                  ۲۳:۰۰
                </bdi>{" "}
                تا{" "}
                <bdi dir="ltr" className="font-medium text-foreground">
                  ۰۱:۳۰
                </bdi>{" "}
                به‌وقت تهران در حال به‌روزرسانی هستیم.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <BellIcon data-icon="inline-start" />
                خبرم کن
              </Button>
              <Button variant="outline">
                <MailIcon data-icon="inline-start" />
                پشتیبانی
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs text-muted-foreground">
          وضعیت زنده:{" "}
          <bdi dir="ltr" className="mx-1">
            status.farsiui.ir
          </bdi>
        </CardFooter>
      </Card>
    </section>
  )
}
