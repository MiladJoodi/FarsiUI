import { CopyIcon, FileCodeIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/styles/base-nova/ui/input-group"

export function InputGroupBlockStart() {
  return (
    <FieldGroup dir="rtl" className="max-w-sm">
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
            placeholder="console.log('سلام دنیا!');"
            className="font-mono text-sm"
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">script.js</InputGroupText>
            <InputGroupButton size="icon-xs" className="ms-auto">
              <CopyIcon />
              <span className="sr-only">کپی</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>هدر بالای متن‌بلند قرار گرفته است.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}
