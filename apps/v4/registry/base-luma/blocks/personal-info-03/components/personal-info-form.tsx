"use client"

import { cn } from "cn"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Textarea } from "@/registry/base-luma/ui/textarea"

export function PersonalInfoForm({
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
          <CardTitle>اطلاعات شخصی و آدرس</CardTitle>
          <CardDescription>
            مشخصات فردی و محل سکونت خود را وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field className="grid grid-cols-2 gap-4">
                <Field>
                  <FieldLabel htmlFor="first-name">نام</FieldLabel>
                  <Input id="first-name" placeholder="سارا" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="last-name">نام خانوادگی</FieldLabel>
                  <Input id="last-name" placeholder="محمدی" required />
                </Field>
              </Field>
              <Field>
                <FieldLabel htmlFor="email">ایمیل</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">شماره موبایل</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                  dir="ltr"
                  className="text-start"
                  required
                />
              </Field>
              <FieldSeparator>آدرس</FieldSeparator>
              <Field>
                <FieldLabel htmlFor="province">استان</FieldLabel>
                <Select
                  defaultValue="tehran"
                  items={[
                    { label: "تهران", value: "tehran" },
                    { label: "اصفهان", value: "isfahan" },
                    { label: "فارس", value: "fars" },
                    { label: "خراسان رضوی", value: "razavi" },
                    { label: "سایر", value: "other" },
                  ]}
                >
                  <SelectTrigger id="province" className="w-full">
                    <SelectValue placeholder="انتخاب استان" />
                  </SelectTrigger>
                  <SelectContent dir="rtl">
                    <SelectGroup>
                      <SelectItem value="tehran">تهران</SelectItem>
                      <SelectItem value="isfahan">اصفهان</SelectItem>
                      <SelectItem value="fars">فارس</SelectItem>
                      <SelectItem value="razavi">خراسان رضوی</SelectItem>
                      <SelectItem value="other">سایر</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </Field>
              <Field>
                <FieldLabel htmlFor="city">شهر</FieldLabel>
                <Input id="city" placeholder="تهران" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="address">آدرس کامل</FieldLabel>
                <Textarea
                  id="address"
                  placeholder="خیابان، کوچه، پلاک…"
                  className="min-h-20"
                />
                <FieldDescription>
                  برای ارسال مرسوله و فاکتور استفاده می‌شود.
                </FieldDescription>
              </Field>
              <Field>
                <FieldLabel htmlFor="postal">کد پستی</FieldLabel>
                <Input
                  id="postal"
                  inputMode="numeric"
                  placeholder="۱۲۳۴۵۶۷۸۹۰"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <Button type="submit">ذخیره اطلاعات</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
