"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const CITY_ITEMS = [
  { value: "تهران", label: "تهران" },
  { value: "اصفهان", label: "اصفهان" },
  { value: "شیراز", label: "شیراز" },
  { value: "مشهد", label: "مشهد" },
  { value: "تبریز", label: "تبریز" },
] as const

export function ProfileEdit() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader>
          <div className="mb-4 flex items-center gap-4">
            <Avatar className="size-14">
              <AvatarImage
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
                alt="سارا محمدی"
              />
              <AvatarFallback>س‌م</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>ویرایش پروفایل</CardTitle>
              <CardDescription>اطلاعات عمومی حساب را به‌روز کنید</CardDescription>
            </div>
          </div>
          <Button type="button" variant="outline" size="sm" className="w-fit">
            تغییر تصویر
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-0">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="p3-name">نام نمایشی</FieldLabel>
                <Input
                  id="p3-name"
                  placeholder="سارا محمدی"
                  defaultValue="سارا محمدی"
                  dir="rtl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="p3-username">نام کاربری</FieldLabel>
                <Input
                  id="p3-username"
                  placeholder="sara.m"
                  defaultValue="sara.m"
                  dir="ltr"
                  className="text-start"
                />
                <FieldDescription>فقط حروف انگلیسی، عدد و نقطه</FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="p3-email">ایمیل</FieldLabel>
                <Input
                  id="p3-email"
                  type="email"
                  placeholder="name@example.com"
                  defaultValue="sara@example.com"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="p3-city">شهر</FieldLabel>
                <Select items={[...CITY_ITEMS]} defaultValue="تهران">
                  <SelectTrigger id="p3-city" dir="rtl" className="w-full">
                    <SelectValue placeholder="انتخاب شهر" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    {CITY_ITEMS.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="p3-bio">بیوگرافی</FieldLabel>
                <Textarea
                  id="p3-bio"
                  placeholder="چند خط دربارهٔ خودتان بنویسید…"
                  defaultValue="طراح محصول · علاقه‌مند به رابط‌های فارسی"
                  className="min-h-24"
                  dir="rtl"
                />
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter className="justify-end gap-2 border-t">
          <Button type="button" variant="outline">
            انصراف
          </Button>
          <Button type="submit">ذخیره</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
