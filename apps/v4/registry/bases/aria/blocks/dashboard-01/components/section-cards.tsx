"use client"

import type * as React from "react"

import { Badge } from "@/registry/bases/aria/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/aria/ui/card"
import { IconPlaceholder } from "@/components/icon-placeholder"

function StatValue({ children }: { children: React.ReactNode }) {
  return (
    <bdi
      dir="ltr"
      className="inline-block tracking-normal [letter-spacing:0] [font-variant-numeric:lining-nums]"
    >
      {children}
    </bdi>
  )
}

export default function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-linear-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 dark:*:data-[slot=card]:bg-card">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>درآمد کل</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            <StatValue>۱۲۵٬۰۰۰٬۰۰۰</StatValue>
            <span className="ms-1 text-sm font-normal text-muted-foreground">
              تومان
            </span>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconPlaceholder
                lucide="TrendingUpIcon"
                tabler="IconTrendingUp"
                hugeicons="ChartUpIcon"
                phosphor="TrendUpIcon"
                remixicon="RiArrowUpLine"
              />
              ٪۱۲٫۵+
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            رشد این ماه
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="ChartUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowUpLine"
              className="size-4"
            />
          </div>
          <div className="text-muted-foreground">بازدید شش ماه اخیر</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>مشتریان جدید</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            <StatValue>۱٬۲۳۴</StatValue>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconPlaceholder
                lucide="TrendingDownIcon"
                tabler="IconTrendingDown"
                hugeicons="ChartDownIcon"
                phosphor="TrendDownIcon"
                remixicon="RiArrowDownLine"
              />
              ٪۲۰−
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            کاهش در این دوره
            <IconPlaceholder
              lucide="TrendingDownIcon"
              tabler="IconTrendingDown"
              hugeicons="ChartDownIcon"
              phosphor="TrendDownIcon"
              remixicon="RiArrowDownLine"
              className="size-4"
            />
          </div>
          <div className="text-muted-foreground">جذب مشتری نیاز به توجه دارد</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>حساب‌های فعال</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            <StatValue>۴۵٬۶۷۸</StatValue>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconPlaceholder
                lucide="TrendingUpIcon"
                tabler="IconTrendingUp"
                hugeicons="ChartUpIcon"
                phosphor="TrendUpIcon"
                remixicon="RiArrowUpLine"
              />
              ٪۱۲٫۵+
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            ماندگاری خوب کاربران
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="ChartUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowUpLine"
              className="size-4"
            />
          </div>
          <div className="text-muted-foreground">تعامل بالاتر از هدف</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>نرخ رشد</CardDescription>
          <CardTitle className="text-2xl font-semibold @[250px]/card:text-3xl">
            <StatValue>٪۴٫۵</StatValue>
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconPlaceholder
                lucide="TrendingUpIcon"
                tabler="IconTrendingUp"
                hugeicons="ChartUpIcon"
                phosphor="TrendUpIcon"
                remixicon="RiArrowUpLine"
              />
              ٪۴٫۵+
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            رشد پایدار عملکرد
            <IconPlaceholder
              lucide="TrendingUpIcon"
              tabler="IconTrendingUp"
              hugeicons="ChartUpIcon"
              phosphor="TrendUpIcon"
              remixicon="RiArrowUpLine"
              className="size-4"
            />
          </div>
          <div className="text-muted-foreground">هم‌راستا با پیش‌بینی رشد</div>
        </CardFooter>
      </Card>
    </div>
  )
}
