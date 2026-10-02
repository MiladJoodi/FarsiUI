"use client"

import { cn } from "cn"

import { NationalIdInput } from "@/registry/bases/base/blocks/identity-check-01/components/national-id-input"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "bg-muted text-foreground flex min-h-[520px] items-center justify-center p-6",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>بررسی هویت</CardTitle>
          <CardDescription>
            کد ملی، تاریخ تولد و شماره موبایل را وارد کنید تا هویت شما با
            سامانهٔ ثبت‌احوال مطابقت داده شود
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="identity-national-id">کد ملی</Label>
            <NationalIdInput id="identity-national-id" name="nationalId" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="identity-birthdate">تاریخ تولد</Label>
            <Input
              id="identity-birthdate"
              name="birthdate"
              inputMode="numeric"
              placeholder="۱۳۷۰/۰۱/۱۵"
              dir="ltr"
              className="text-start"
            />
            <p className="text-[11px] text-muted-foreground">
              به صورت شمسی، مطابق کارت ملی
            </p>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="identity-mobile">شماره موبایل</Label>
            <Input
              id="identity-mobile"
              name="mobile"
              type="tel"
              inputMode="tel"
              placeholder="۰۹۱۲۱۲۳۴۵۶۷"
              dir="ltr"
              className="text-start"
            />
          </div>
          <Button type="button" className="w-full">
            بررسی هویت
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
