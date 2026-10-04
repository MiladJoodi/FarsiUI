import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function FieldInput() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <FieldSet>
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
