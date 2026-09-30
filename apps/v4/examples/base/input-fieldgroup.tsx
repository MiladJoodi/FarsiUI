import { Button } from "@/styles/base-nova/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputFieldgroup() {
  return (
    <FieldGroup dir="rtl">
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">نام</FieldLabel>
        <Input id="fieldgroup-name" placeholder="علی رضایی" />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">ایمیل</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          placeholder="name@example.com"
        />
        <FieldDescription>
          به‌روزرسانی‌ها به این آدرس ارسال می‌شود.
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline">
          بازنشانی
        </Button>
        <Button type="submit">ارسال</Button>
      </Field>
    </FieldGroup>
  )
}
