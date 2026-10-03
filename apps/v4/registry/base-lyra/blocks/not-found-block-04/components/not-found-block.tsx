"use client"

import {
  ArrowLeftIcon,
  FileQuestionIcon,
  HomeIcon,
  PackageIcon,
} from "lucide-react"

import { Badge } from "@/registry/base-lyra/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/base-lyra/ui/breadcrumb"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-lyra/ui/empty"

export function NotFoundInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">فروشگاه</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">محصولات</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>جزئیات</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Card>
        <CardHeader className="flex-row flex-wrap items-center justify-between gap-3 space-y-0 text-start">
          <div>
            <CardTitle className="text-base">محصول</CardTitle>
            <CardDescription className="tracking-normal">
              شناسه کالا-۸۸۴۲۱
            </CardDescription>
          </div>
          <Badge variant="outline">پیدا نشد</Badge>
        </CardHeader>
        <CardContent className="border-t py-14">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <PackageIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>این محصول موجود نیست</EmptyTitle>
              <EmptyDescription>
                یا حذف شده یا شناسه اشتباه است. از فهرست محصولات انتخاب کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <ArrowLeftIcon data-icon="inline-start" />
                فهرست محصولات
              </Button>
              <Button variant="outline">
                <HomeIcon data-icon="inline-start" />
                خانه
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>

      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <FileQuestionIcon className="size-3.5" />
        کد وضعیت <span className="tracking-normal">۴۰۴</span>
      </p>
    </section>
  )
}
