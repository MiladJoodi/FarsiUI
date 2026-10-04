import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/aria/ui/field"
import { Input } from "@/registry/bases/aria/ui/input"

export default function InputFile() {
  return (
    <Field>
      <FieldLabel htmlFor="picture">Picture</FieldLabel>
      <Input id="picture" type="file" />
      <FieldDescription>Select a picture to upload.</FieldDescription>
    </Field>
  )
}
