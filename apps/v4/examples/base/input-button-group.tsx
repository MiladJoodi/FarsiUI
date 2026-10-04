import { Button } from "@/registry/bases/base/ui/button"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputButtonGroup() {
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
