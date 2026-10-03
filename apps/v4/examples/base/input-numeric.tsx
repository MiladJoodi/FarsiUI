"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function InputNumeric() {
  const [amount, setAmount] = React.useState("123456")
  const [phone, setPhone] = React.useState("09121234567")

  return (
    <div className="mx-auto grid w-full max-w-xs gap-4" dir="rtl" lang="fa">
      <Field>
        <FieldLabel htmlFor="amount">مبلغ</FieldLabel>
        <Input
          id="amount"
          inputMode="decimal"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="0"
        />
        <FieldDescription>
          نمایش: ارقام فارسی — مقدار منطقی:{" "}
          <span className="font-mono" dir="ltr">
            {amount || "—"}
          </span>
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="phone">تلفن</FieldLabel>
        <Input
          id="phone"
          type="tel"
          dir="ltr"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          placeholder="09121234567"
        />
        <FieldDescription>
          type=&quot;tel&quot; در زمینهٔ فارسی ارقام فارسی نشان می‌دهد؛ state
          همچنان ASCII است.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="english">English / LTR</FieldLabel>
        <Input
          id="english"
          inputMode="numeric"
          dir="ltr"
          lang="en"
          persianDigits={false}
          defaultValue="123456"
          placeholder="123456"
        />
        <FieldDescription>
          با persianDigits=false نمایش لاتین می‌ماند.
        </FieldDescription>
      </Field>
    </div>
  )
}
