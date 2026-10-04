import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/registry/bases/base/ui/field"

export default function FieldCheckbox() {
  return (
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">
            این موارد را روی دسکتاپ نشان بده
          </FieldLegend>
          <FieldDescription>
            مواردی را که می‌خواهید روی دسکتاپ دیده شوند انتخاب کنید.
          </FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" defaultChecked />
              <FieldLabel
                htmlFor="finder-pref-9k2-hard-disks-ljj"
                className="font-normal"
              >
                دیسک‌های سخت
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel
                htmlFor="finder-pref-9k2-external-disks-1yg"
                className="font-normal"
              >
                دیسک‌های خارجی
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel
                htmlFor="finder-pref-9k2-cds-dvds-fzt"
                className="font-normal"
              >
                سی‌دی، دی‌وی‌دی و آیپاد
              </FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel
                htmlFor="finder-pref-9k2-connected-servers-6l2"
                className="font-normal"
              >
                سرورهای متصل
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">
              همگام‌سازی پوشهٔ دسکتاپ و اسناد
            </FieldLabel>
            <FieldDescription>
              پوشه‌های دسکتاپ و اسناد با آی‌کلود همگام می‌شوند. می‌توانید از
              دستگاه‌های دیگر به آن‌ها دسترسی داشته باشید.
            </FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  )
}
