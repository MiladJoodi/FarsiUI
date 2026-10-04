import { CopyIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/base/ui/input-group"

export default function InputGroupBlockStart() {
  return (
    <FieldGroup dir="rtl" lang="fa" className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-start-input">ورودی</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput
            id="block-start-input"
            placeholder="نام خود را وارد کنید"
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>نام کامل</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>هدر بالای ورودی قرار گرفته است.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-start-textarea">متن‌بلند</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="نظر خود را بنویسید..."
          />
          <InputGroupAddon align="block-start">
            <InputGroupText className="font-medium">بازخورد</InputGroupText>
            <InputGroupButton size="icon-xs" className="ms-auto" aria-label="کپی">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>هدر بالای متن‌بلند قرار گرفته است.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}
