import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputButtonGroup() {
  return (
    <Field dir="rtl">
      <FieldLabel htmlFor="input-button-group">جستجو</FieldLabel>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="برای جستجو تایپ کنید..." />
        <Button variant="outline">جستجو</Button>
      </ButtonGroup>
    </Field>
  )
}
