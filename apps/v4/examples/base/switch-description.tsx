import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import { Switch } from "@/styles/base-nova/ui/switch"

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
