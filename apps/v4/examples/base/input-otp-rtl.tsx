"use client"

import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/styles/base-nova/ui/input-otp"

export default function InputOTPRtl() {
  return (
    <Field dir="rtl" className="mx-auto max-w-xs">
      <FieldLabel htmlFor="input-otp-rtl">کد تأیید</FieldLabel>
      <InputOTP
        maxLength={6}
        defaultValue="123456"
        dir="rtl"
        id="input-otp-rtl"
      >
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
