"use client"

import * as React from "react"
import { Clock2Icon } from "lucide-react"

import { Calendar } from "@/styles/base-nova/ui/calendar"
import { Card, CardContent, CardFooter } from "@/styles/base-nova/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"

function toPersianDigits(value: string) {
  return value.replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]!)
}

function toLatinDigits(value: string) {
  return value.replace(/[۰-۹]/g, (digit) =>
    String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit))
  )
}

function TimeField({
  id,
  label,
  defaultValue,
}: {
  id: string
  label: string
  defaultValue: string
}) {
  const reactId = React.useId()
  const inputId = `${id}-${reactId}`
  const [value, setValue] = React.useState(() => toPersianDigits(defaultValue))

  return (
    <Field>
      <FieldLabel htmlFor={inputId}>{label}</FieldLabel>
      <InputGroup>
        <InputGroupInput
          id={inputId}
          type="text"
          inputMode="numeric"
          dir="ltr"
          lang="fa"
          autoComplete="off"
          placeholder="۰۰:۰۰:۰۰"
          value={value}
          onChange={(event) => {
            const next = toLatinDigits(event.target.value)
              .replace(/[^\d:]/g, "")
              .slice(0, 8)
            setValue(toPersianDigits(next))
          }}
          onBlur={() => {
            const [h = "00", m = "00", s = "00"] = toLatinDigits(value).split(":")
            setValue(
              toPersianDigits(
                `${h.padStart(2, "0").slice(0, 2)}:${m.padStart(2, "0").slice(0, 2)}:${s.padStart(2, "0").slice(0, 2)}`
              )
            )
          }}
        />
        <InputGroupAddon>
          <Clock2Icon className="text-muted-foreground" />
        </InputGroupAddon>
      </InputGroup>
    </Field>
  )
}

export default function CalendarWithTime() {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 12)
  )

  return (
    <Card size="sm" className="mx-auto w-fit">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="border-t bg-card">
        <FieldGroup>
          <TimeField id="time-from" label="ساعت شروع" defaultValue="10:30:00" />
          <TimeField id="time-to" label="ساعت پایان" defaultValue="12:30:00" />
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}
