import { Button } from "@/styles/base-nova/ui/button"
import { Field } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export default function InputInline() {
  return (
    <Field orientation="horizontal" dir="rtl">
      <Input type="search" placeholder="جستجو..." />
      <Button>جستجو</Button>
    </Field>
  )
}
