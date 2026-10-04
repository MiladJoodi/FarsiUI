import { Button } from "@/styles/base-nova/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export default function PopoverForm() {
  return (
    <div dir="rtl">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          باز کردن پاپ‌اور
        </PopoverTrigger>
        <PopoverContent className="w-64" align="start">
          <PopoverHeader>
            <PopoverTitle>ابعاد</PopoverTitle>
            <PopoverDescription>
              ابعاد لایه را تنظیم کنید.
            </PopoverDescription>
          </PopoverHeader>
          <FieldGroup className="gap-4">
            <Field orientation="horizontal">
              <FieldLabel htmlFor="popover-width" className="w-1/2">
                عرض
              </FieldLabel>
              <Input id="popover-width" defaultValue="۱۰۰٪" />
            </Field>
            <Field orientation="horizontal">
              <FieldLabel htmlFor="popover-height" className="w-1/2">
                ارتفاع
              </FieldLabel>
              <Input id="popover-height" defaultValue="۲۵px" />
            </Field>
          </FieldGroup>
        </PopoverContent>
      </Popover>
    </div>
  )
}
