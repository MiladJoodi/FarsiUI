import { cn } from "cn"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Textarea } from "@/registry/base-luma/ui/textarea"

export function PersonalInfoForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      dir="rtl"
      lang="fa"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">پروفایل شما</h1>
          <p className="text-sm text-balance text-muted-foreground">
            اطلاعات تماس و معرفی کوتاه خود را تکمیل کنید
          </p>
        </div>
        <Field className="grid grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="first-name">نام</FieldLabel>
            <Input
              id="first-name"
              placeholder="سارا"
              required
              className="bg-background"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">نام خانوادگی</FieldLabel>
            <Input
              id="last-name"
              placeholder="محمدی"
              required
              className="bg-background"
            />
          </Field>
        </Field>
        <Field>
          <FieldLabel htmlFor="email">ایمیل</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="name@example.com"
            dir="ltr"
            className="bg-background text-start"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="phone">موبایل</FieldLabel>
          <Input
            id="phone"
            type="tel"
            inputMode="tel"
            placeholder="۰۹۱۲۱۲۳۴۵۶۷"
            dir="ltr"
            className="bg-background text-start"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="bio">درباره من</FieldLabel>
          <Textarea
            id="bio"
            placeholder="چند جمله درباره خودتان بنویسید…"
            className="min-h-24 bg-background"
          />
          <FieldDescription>حداکثر ۲۰۰ کاراکتر.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit">ذخیره پروفایل</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
