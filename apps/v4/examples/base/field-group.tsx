import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/styles/base-nova/ui/field"

export default function FieldGroupExample() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <FieldGroup>
        <FieldSet>
          <FieldLabel>پاسخ‌ها</FieldLabel>
          <FieldDescription>
            وقتی به درخواست‌های زمان‌بر مثل پژوهش یا تولید تصویر پاسخ داده شد،
            مطلع شوید.
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push" defaultChecked disabled />
              <FieldLabel htmlFor="push" className="font-normal">
                اعلان پوش
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLabel>کارها</FieldLabel>
          <FieldDescription>
            وقتی کارهای ساخته‌شده به‌روز شدند مطلع شوید.{" "}
            <a href="#">مدیریت کارها</a>
          </FieldDescription>
          <FieldGroup data-slot="checkbox-group">
            <Field orientation="horizontal">
              <Checkbox id="push-tasks" />
              <FieldLabel htmlFor="push-tasks" className="font-normal">
                اعلان پوش
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="email-tasks" />
              <FieldLabel htmlFor="email-tasks" className="font-normal">
                اعلان ایمیلی
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
