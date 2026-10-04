"use client"

import { cn } from "cn"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-nova/ui/avatar"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-nova/ui/field"
import { Input } from "@/registry/base-nova/ui/input"
import { Label } from "@/registry/base-nova/ui/label"
import { Separator } from "@/registry/base-nova/ui/separator"
import { Switch } from "@/registry/base-nova/ui/switch"
import { Textarea } from "@/registry/base-nova/ui/textarea"

export default function PersonalInfoForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <Card>
        <CardHeader>
          <CardTitle>ویرایش پروفایل</CardTitle>
          <CardDescription>
            تصویر، مشخصات عمومی و تنظیمات نمایش پروفایل را مدیریت کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Avatar className="size-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="پروفایل" />
              <AvatarFallback>س‌م</AvatarFallback>
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

          <form>
            <FieldGroup>
              <Field className="grid gap-4 sm:grid-cols-2">
                <Field>
                  <FieldLabel htmlFor="display-name">نام نمایشی</FieldLabel>
                  <Input id="display-name" defaultValue="سارا محمدی" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="username">نام کاربری</FieldLabel>
                  <Input
                    id="username"
                    defaultValue="sara"
                    dir="ltr"
                    className="text-start"
                  />
                </Field>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">ایمیل</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  defaultValue="sara@example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="website">وب‌سایت</FieldLabel>
                <Input
                  id="website"
                  type="url"
                  placeholder="https://example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="bio">بیوگرافی</FieldLabel>
                <Textarea
                  id="bio"
                  defaultValue="طراح محصول و علاقه‌مند به رابط‌های فارسی."
                  className="min-h-24"
                />
                <FieldDescription>
                  این متن در صفحهٔ عمومی پروفایل نمایش داده می‌شود.
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="public-profile">پروفایل عمومی</Label>
                <p className="text-sm text-muted-foreground">
                  اجازه دهید دیگران پروفایل شما را ببینند
                </p>
              </div>
              <Switch id="public-profile" defaultChecked />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="show-email">نمایش ایمیل</Label>
                <p className="text-sm text-muted-foreground">
                  ایمیل در پروفایل عمومی نمایش داده شود
                </p>
              </div>
              <Switch id="show-email" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t">
          <Button type="button" variant="outline">
            انصراف
          </Button>
          <Button type="submit">ذخیره تغییرات</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
