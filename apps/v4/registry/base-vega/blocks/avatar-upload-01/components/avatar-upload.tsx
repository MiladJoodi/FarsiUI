"use client"

import { Avatar, AvatarFallback } from "@/registry/base-vega/ui/avatar"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"

export function AvatarUploadSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle>بارگذاری تصویر پروفایل</CardTitle>
          <CardDescription>یک تصویر مربع انتخاب کنید</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <Avatar className="size-24">
            <AvatarFallback className="text-2xl">م‌ر</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="relative">
            انتخاب تصویر
            <input
              type="file"
              accept="image/*"
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
