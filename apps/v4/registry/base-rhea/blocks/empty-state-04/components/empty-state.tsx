"use client"

import { FileTextIcon, FilterIcon, PlusIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-rhea/ui/empty"
import { Input } from "@/registry/base-rhea/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"

export default function EmptyStateInContext() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">اسناد</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            مدیریت فایل‌ها و پیش‌نویس‌ها
          </p>
        </div>
        <Button size="sm">
          <PlusIcon data-icon="inline-start" />
          سند جدید
        </Button>
      </div>

      <Card>
        <CardHeader className="gap-4 space-y-0 text-start">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <CardTitle className="text-base">همه اسناد</CardTitle>
              <CardDescription>
                <bdi dir="ltr">۰</bdi> مورد
              </CardDescription>
            </div>
            <Badge variant="outline">خالی</Badge>
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="relative min-w-[12rem] flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="جستجوی سند…"
                dir="rtl"
                className="ps-9"
                disabled
              />
            </div>
            <Select disabled defaultValue="all">
              <SelectTrigger className="w-[140px]" dir="rtl" size="sm">
                <FilterIcon className="size-3.5 opacity-60" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="all">همه انواع</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="border-t py-16">
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FileTextIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>سندی برای نمایش نیست</EmptyTitle>
              <EmptyDescription>
                فیلترها خالی‌اند چون هنوز سندی نساخته‌اید. با ساخت اولین سند
                شروع کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <PlusIcon data-icon="inline-start" />
                ساخت سند
              </Button>
              <Button variant="outline">بارگذاری فایل</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
      </Card>
    </section>
  )
}
