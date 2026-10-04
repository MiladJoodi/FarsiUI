import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Switch } from "@/registry/bases/base/ui/switch"

export default function SwitchDescription() {
  return (
    <Field orientation="horizontal" className="max-w-sm" dir="rtl">
      <FieldContent>
        <FieldLabel htmlFor="switch-focus-mode">اشتراک بین دستگاه‌ها</FieldLabel>
        <FieldDescription>
          تمرکز بین دستگاه‌ها به اشتراک گذاشته می‌شود و هنگام خروج از برنامه
          خاموش می‌شود.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-focus-mode" />
    </Field>
  )
}
