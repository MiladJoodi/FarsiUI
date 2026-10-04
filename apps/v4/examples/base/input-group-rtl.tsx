"use client"

import { Search } from "lucide-react"

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
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function InputGroupRtl() {
  return (
    <div dir="rtl" className="grid w-full max-w-sm gap-6">
      <InputGroup className="max-w-xs">
        <InputGroupInput placeholder="جستجو..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">۱۲ نتیجه</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="در حال جستجو..." />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="در حال ذخیرهٔ تغییرات..." />
        <InputGroupAddon align="inline-end">
          <InputGroupText>در حال ذخیره...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="rtl-textarea">متن‌بلند</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="rtl-textarea"
              placeholder="نظر خود را بنویسید..."
            />
            <InputGroupAddon align="block-end">
              <InputGroupText>۰/۲۸۰</InputGroupText>
              <InputGroupButton variant="default" size="sm" className="ms-auto">
                ارسال
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            فوتر پایین متن‌بلند قرار گرفته است.
          </FieldDescription>
        </Field>
      </FieldGroup>
    </div>
  )
}
