"use client"

import { REGEXP_ONLY_DIGITS } from "input-otp"

import { Field, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/base/ui/input-otp"

export default function InputOTPPattern() {
  return (
    <Field dir="rtl" className="w-fit">
      <FieldLabel htmlFor="digits-only">فقط رقم</FieldLabel>
      <InputOTP id="digits-only" maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Field>
  )
}
