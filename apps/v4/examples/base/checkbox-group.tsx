import { Checkbox } from "@/styles/base-nova/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/styles/base-nova/ui/field"

export function CheckboxGroup() {
  return (
    <FieldSet dir="rtl">
      <FieldLegend variant="label">
        این موارد روی دسکتاپ نمایش داده شوند:
      </FieldLegend>
      <FieldDescription>
        مواردی را که می‌خواهید روی دسکتاپ ببینید انتخاب کنید.
      </FieldDescription>
      <FieldGroup className="gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-hard-disks-ljj-checkbox"
            name="finder-pref-9k2-hard-disks-ljj-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-hard-disks-ljj-checkbox"
            className="font-normal"
          >
            دیسک‌های سخت
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-external-disks-1yg-checkbox"
            name="finder-pref-9k2-external-disks-1yg-checkbox"
            defaultChecked
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-external-disks-1yg-checkbox"
            className="font-normal"
          >
            دیسک‌های خارجی
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-cds-dvds-fzt-checkbox"
            name="finder-pref-9k2-cds-dvds-fzt-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-cds-dvds-fzt-checkbox"
            className="font-normal"
          >
            سی‌دی، دی‌وی‌دی و آیپاد
          </FieldLabel>
        </Field>
        <Field orientation="horizontal">
          <Checkbox
            id="finder-pref-9k2-connected-servers-6l2-checkbox"
            name="finder-pref-9k2-connected-servers-6l2-checkbox"
          />
          <FieldLabel
            htmlFor="finder-pref-9k2-connected-servers-6l2-checkbox"
            className="font-normal"
          >
            سرورهای متصل
          </FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
  )
}
