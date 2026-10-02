"use client"

import { cn } from "cn"

import { NationalIdInput } from "@/registry/bases/base/blocks/national-id-01/components/national-id-input"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
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
          <CardTitle>کد ملی</CardTitle>
          <CardDescription>
            کد ملی را همان‌طور که روی کارت چاپ شده وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="national-id">کد ملی</Label>
            <NationalIdInput id="national-id" name="nationalId" />
          </div>
          <Button type="button" className="w-full">
            ادامه
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
