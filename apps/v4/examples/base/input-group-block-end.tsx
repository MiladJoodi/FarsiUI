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

export default function InputGroupBlockEnd() {
  return (
    <FieldGroup dir="rtl" lang="fa" className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-end-input">ورودی</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput id="block-end-input" placeholder="مبلغ را وارد کنید" />
          <InputGroupAddon align="block-end">
            <InputGroupText>تومان</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>فوتر پایین ورودی قرار گرفته است.</FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-end-textarea">متن‌بلند</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-end-textarea"
            placeholder="نظر خود را بنویسید..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>۰/۲۸۰</InputGroupText>
            <InputGroupButton variant="default" size="sm" className="ms-auto">
              ارسال
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>فوتر پایین متن‌بلند قرار گرفته است.</FieldDescription>
      </Field>
    </FieldGroup>
  )
}
