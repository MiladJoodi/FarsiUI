import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/styles/base-nova/ui/field"
import { Switch } from "@/styles/base-nova/ui/switch"

export default function SwitchChoiceCard() {
  return (
    <FieldGroup dir="rtl" className="w-full max-w-sm">
      <FieldLabel htmlFor="switch-share">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>اشتراک بین دستگاه‌ها</FieldTitle>
            <FieldDescription>
              تمرکز بین دستگاه‌ها به اشتراک گذاشته می‌شود و هنگام خروج از برنامه
              خاموش می‌شود.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-share" />
        </Field>
      </FieldLabel>
      <FieldLabel htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <FieldContent>
            <FieldTitle>فعال‌سازی اعلان‌ها</FieldTitle>
            <FieldDescription>
              هنگام روشن یا خاموش شدن حالت تمرکز، اعلان دریافت کنید.
            </FieldDescription>
          </FieldContent>
          <Switch id="switch-notifications" defaultChecked />
        </Field>
      </FieldLabel>
    </FieldGroup>
  )
}
