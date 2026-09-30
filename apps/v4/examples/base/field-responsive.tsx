import { Button } from "@/styles/base-nova/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function FieldResponsive() {
  return (
    <div className="w-full max-w-lg" dir="rtl">
      <form>
        <FieldSet>
          <FieldLegend>پروفایل</FieldLegend>
          <FieldDescription>اطلاعات پروفایل خود را وارد کنید.</FieldDescription>
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">نام</FieldLabel>
                <FieldDescription>
                  نام کامل خود را برای شناسایی وارد کنید
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="علی رضایی" required />
            </Field>
            <Field orientation="responsive">
              <Button type="submit">ثبت</Button>
              <Button type="button" variant="outline">
                انصراف
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
