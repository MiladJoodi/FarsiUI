import { Button } from "@/registry/bases/aria/ui/button"
import { Field } from "@/registry/bases/aria/ui/field"
import { Input } from "@/registry/bases/aria/ui/input"

export default function InputInline() {
  return (
    <Field orientation="horizontal">
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  )
}
