import { Button } from "@/registry/bases/base/ui/button"
import { Field } from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"

export default function InputInline() {
  return (
    <Field orientation="horizontal" dir="rtl">
      <Input type="search" placeholder="جستجو..." />
      <Button>جستجو</Button>
    </Field>
  )
}
