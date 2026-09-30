import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export default function FieldInput() {
  return (
    <div dir="rtl">
      <FieldSet className="w-full max-w-xs">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">نام کاربری</FieldLabel>
            <Input id="username" type="text" placeholder="علی_رضایی" />
            <FieldDescription>
              یک نام کاربری یکتا برای حساب خود انتخاب کنید.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">رمز عبور</FieldLabel>
            <FieldDescription>حداقل ۸ کاراکتر باشد.</FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
