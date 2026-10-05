"use client"

import { Button } from "@/registry/base-rose/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rose/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-rose/ui/field"
import { Input } from "@/registry/base-rose/ui/input"
import { Label } from "@/registry/base-rose/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/base-rose/ui/radio-group"
import { Textarea } from "@/registry/base-rose/ui/textarea"

export default function SupportPriorityForm() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>تیکت پشتیبانی</CardTitle>
        <CardDescription>
          اولویت و جزئیات مشکل را مشخص کنید تا سریع‌تر رسیدگی شود
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="sp2-title">عنوان مشکل</FieldLabel>
              <Input
                id="sp2-title"
                placeholder="مثلاً خطای ورود به حساب"
                required
              />
            </Field>
            <Field>
              <FieldLabel>اولویت</FieldLabel>
              <RadioGroup defaultValue="normal" className="grid gap-3">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="low" id="prio-low" />
                  <Label htmlFor="prio-low" className="font-normal">
                    کم · اختلال جزئی
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="normal" id="prio-normal" />
                  <Label htmlFor="prio-normal" className="font-normal">
                    معمولی · نیاز به پیگیری
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="high" id="prio-high" />
                  <Label htmlFor="prio-high" className="font-normal">
                    بالا · سرویس قطع شده
                  </Label>
                </div>
              </RadioGroup>
            </Field>
            <Field>
              <FieldLabel htmlFor="sp2-email">ایمیل پاسخ</FieldLabel>
              <Input
                id="sp2-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="sp2-msg">شرح مشکل</FieldLabel>
              <Textarea id="sp2-msg" className="min-h-28" required />
              <FieldDescription>
                مراحل بازتولید مشکل را بنویسید
              </FieldDescription>
            </Field>
            <Button type="submit" className="w-full">
              ایجاد تیکت
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
