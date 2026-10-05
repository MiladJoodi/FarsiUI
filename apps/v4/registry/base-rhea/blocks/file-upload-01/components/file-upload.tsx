"use client"

import { UploadIcon } from "lucide-react"

import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"

export default function FileUploadSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>بارگذاری فایل</CardTitle>
          <CardDescription>
            فایل را بکشید و رها کنید یا انتخاب کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <label className="flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-muted/40">
            <UploadIcon className="size-6" />
            <span>رها کردن فایل‌ها اینجا</span>
            <span className="text-xs">حداکثر ۱۰ مگابایت</span>
            <input type="file" className="sr-only" />
          </label>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">بارگذاری</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
