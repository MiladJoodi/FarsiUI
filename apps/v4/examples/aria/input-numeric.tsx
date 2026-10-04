"use client"

import * as React from "react"

import { Field, FieldDescription, FieldLabel } from "@/registry/bases/aria/ui/field"
import { Input } from "@/registry/bases/aria/ui/input"

export default function InputNumeric() {
  const [amount, setAmount] = React.useState("123456")
  const [decimal, setDecimal] = React.useState("123.50")
  const [negative, setNegative] = React.useState("-123")

  return (
    <div className="mx-auto grid w-full max-w-xs gap-4" dir="rtl" lang="fa">
      <Field>
        <FieldLabel htmlFor="amount">مبلغ</FieldLabel>
        <Input
          id="amount"
          type="number"
          name="amount"
          lang="fa"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="0"
        />
        <FieldDescription>
          نمایش فارسی — مقدار منطقی / FormData:{" "}
          <span className="font-mono" dir="ltr">
            {amount || "—"}
          </span>
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="decimal">اعشار</FieldLabel>
        <Input
          id="decimal"
          inputMode="decimal"
          lang="fa"
          value={decimal}
          onChange={(event) => setDecimal(event.target.value)}
        />
        <FieldDescription>
          نمایش:{" "}
          <span className="font-mono" dir="ltr">
            {decimal || "—"}
          </span>{" "}
          (ASCII)
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="negative">منفی</FieldLabel>
        <Input
          id="negative"
          inputMode="numeric"
          lang="fa"
          value={negative}
          onChange={(event) => setNegative(event.target.value)}
        />
        <FieldDescription>
          <span className="font-mono" dir="ltr">
            {negative || "—"}
          </span>
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="english">English / LTR</FieldLabel>
        <Input
          id="english"
          type="number"
          dir="ltr"
          lang="en"
          defaultValue="123456"
          placeholder="123456"
        />
        <FieldDescription>
          locale=en — نمایش لاتین؛ Paste فارسی هم به ASCII نرمال می‌شود.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel htmlFor="phone">تلفن (متن آزاد)</FieldLabel>
        <Input
          id="phone"
          type="tel"
          dir="ltr"
          lang="fa"
          defaultValue="+98 912 123 4567"
          placeholder="+98 912 123 4567"
        />
        <FieldDescription>
          type=&quot;tel&quot; بدون digit formatting.
        </FieldDescription>
      </Field>
    </div>
  )
}
