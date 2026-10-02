import { EyeOffIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"

export default function InputGroupInlineEnd() {
  return (
    <Field dir="rtl" lang="fa" className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">ورودی</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id="inline-end-input"
          type="password"
          placeholder="رمز عبور را وارد کنید"
        />
        <InputGroupAddon align="inline-end">
          <EyeOffIcon />
        </InputGroupAddon>
      </InputGroup>
      <FieldDescription>آیکون در پایان خط قرار گرفته است.</FieldDescription>
    </Field>
  )
}
