"use client"

import * as React from "react"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/styles/base-nova/ui/input-otp"

export default function InputOTPControlled() {
  const [value, setValue] = React.useState("")

  return (
    <div dir="rtl" className="space-y-2">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
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
      <div className="text-center text-sm">
        {value === "" ? (
          <>رمز یک‌بارمصرف خود را وارد کنید.</>
        ) : (
          <>مقدار واردشده: {value}</>
        )}
      </div>
    </div>
  )
}
