"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-sera/ui/avatar"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Separator } from "@/registry/base-sera/ui/separator"

export default function ProfileFormAvatar() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>پروفایل عمومی</CardTitle>
        <CardDescription>
          تصویر و اطلاعات تماس عمومی خود را به‌روز کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Avatar className="size-16">
            <AvatarImage src="https://github.com/shadcn.png" alt="پروفایل" />
            <AvatarFallback>ن‌پ</AvatarFallback>
          </Avatar>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="outline" size="sm">
              تغییر تصویر
            </Button>
            <Button type="button" variant="ghost" size="sm">
              حذف
            </Button>
          </div>
        </div>
        <Separator />
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="pf2-first">نام</FieldLabel>
                <Input id="pf2-first" defaultValue="نیما" />
              </Field>
              <Field>
                <FieldLabel htmlFor="pf2-last">نام خانوادگی</FieldLabel>
                <Input id="pf2-last" defaultValue="پناهی" />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="pf2-email">ایمیل عمومی</FieldLabel>
              <Input
                id="pf2-email"
                type="email"
                defaultValue="nima@example.com"
                dir="ltr"
                className="text-start"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="pf2-city">شهر</FieldLabel>
              <Input id="pf2-city" defaultValue="تهران" />
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="justify-end gap-2 border-t">
        <Button variant="outline">انصراف</Button>
        <Button>ذخیره</Button>
      </CardFooter>
    </Card>
  )
}
