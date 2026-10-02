"use client"

import * as React from "react"
import { cn } from "cn"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Label } from "@/registry/bases/base/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/bases/base/ui/radio-group"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

const VISIBILITY = [
  {
    value: "everyone",
    title: "همه",
    desc: "پروفایل و وضعیت برای همه دیده می‌شود",
  },
  {
    value: "contacts",
    title: "فقط مخاطبین",
    desc: "فقط کسانی که با آن‌ها در ارتباط هستید",
  },
  {
    value: "nobody",
    title: "هیچ‌کس",
    desc: "وضعیت و آخرین بازدید کاملاً مخفی می‌ماند",
  },
] as const

export function SettingsPrivacy() {
  const [visibility, setVisibility] = React.useState("contacts")

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>حریم خصوصی</CardTitle>
        <CardDescription>
          مشخص کنید دیگران چه چیزهایی از شما ببینند
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm font-medium">آخرین بازدید و وضعیت آنلاین</p>
          <RadioGroup
            value={visibility}
            onValueChange={(value) =>
              setVisibility((value as string) ?? "contacts")
            }
            className="grid gap-3"
          >
            {VISIBILITY.map((item) => (
              <Label
                key={item.value}
                htmlFor={`vis-${item.value}`}
                className={cn(
                  "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-muted/50",
                  visibility === item.value && "border-primary bg-primary/5"
                )}
              >
                <RadioGroupItem
                  value={item.value}
                  id={`vis-${item.value}`}
                  className="mt-1"
                />
                <div className="min-w-0 flex-1 space-y-0.5">
                  <span className="font-medium">{item.title}</span>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-0">
          <Row
            id="priv-read"
            title="تأیید خوانده‌شدن پیام"
            desc="نشان دادن تیک آبی برای طرف مقابل"
            defaultChecked
          />
          <Separator />
          <Row
            id="priv-search"
            title="قابل‌یافتن در جستجو"
            desc="دیگران بتوانند با نام یا شماره شما را پیدا کنند"
            defaultChecked
          />
          <Separator />
          <Row
            id="priv-invite"
            title="دعوت به گروه بدون تأیید"
            desc="هر کسی بتواند شما را به گروه اضافه کند"
          />
        </div>
      </CardContent>
      <CardFooter className="border-t">
        <Button className="w-full">ذخیرهٔ حریم خصوصی</Button>
      </CardFooter>
    </Card>
  )
}

function Row({
  id,
  title,
  desc,
  defaultChecked,
}: {
  id: string
  title: string
  desc: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{title}</Label>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
