"use client"

import {
  ArrowRight01Icon,
  Calendar03Icon,
  MoreHorizontalCircle01Icon,
  RefreshIcon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/registry/bases/base/ui/breadcrumb"
import { Button } from "@/registry/bases/base/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/bases/base/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"

export function Payments() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-3">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink render={<button type="button" />}>
                خانه
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      size="icon-sm"
                      variant="ghost"
                      aria-label="گزینه‌های حساب"
                    />
                  }
                >
                  <HugeiconsIcon
                    icon={MoreHorizontalCircle01Icon}
                    strokeWidth={2}
                  />
                  <span className="sr-only">گزینه‌های حساب</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" dir="rtl">
                  <DropdownMenuGroup>
                    <DropdownMenuItem>پروفایل</DropdownMenuItem>
                    <DropdownMenuItem>صورتحساب‌ها</DropdownMenuItem>
                    <DropdownMenuItem>اسناد</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>پرداخت‌ها</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          <div role="listitem" className="w-full">
            <Item variant="muted" render={<button type="button" />}>
              <ItemMedia variant="icon">
                <HugeiconsIcon icon={Settings01Icon} strokeWidth={2} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>تغییر سقف انتقال</ItemTitle>
                <ItemDescription>
                  میزان قابل ارسال از موجودی را تنظیم کنید.
                </ItemDescription>
              </ItemContent>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-4 shrink-0 text-muted-foreground rtl:rotate-180"
                strokeWidth={2}
              />
            </Item>
          </div>
          <div role="listitem" className="w-full">
            <Item variant="muted" render={<button type="button" />}>
              <ItemMedia variant="icon">
                <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>انتقال‌های زمان‌بندی‌شده</ItemTitle>
                <ItemDescription>
                  انتقالی برای ارسال در تاریخ بعد تنظیم کنید.
                </ItemDescription>
              </ItemContent>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-4 shrink-0 text-muted-foreground rtl:rotate-180"
                strokeWidth={2}
              />
            </Item>
          </div>
          <div role="listitem" className="w-full">
            <Item variant="muted" render={<button type="button" />}>
              <ItemMedia variant="icon">
                <HugeiconsIcon icon={RefreshIcon} strokeWidth={2} />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>پرداخت‌های تکراری کارت</ItemTitle>
                <ItemDescription>
                  تراکنش‌های تکراری کارت را مدیریت کنید.
                </ItemDescription>
              </ItemContent>
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                className="size-4 shrink-0 text-muted-foreground rtl:rotate-180"
                strokeWidth={2}
              />
            </Item>
          </div>
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
