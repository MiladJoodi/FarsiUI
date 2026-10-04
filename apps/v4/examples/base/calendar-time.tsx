"use client"

import * as React from "react"
import { Clock2Icon } from "lucide-react"

import { Calendar } from "@/registry/bases/base/ui/calendar"
import { Card, CardContent, CardFooter } from "@/registry/bases/base/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/bases/base/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group"

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
  const [value, setValue] = React.useState(defaultValue)

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
          placeholder="00:00:00"
          value={value}
          onChange={(event) => {
            const next = event.target.value.replace(/[^\d:]/g, "").slice(0, 8)
            setValue(next)
          }}
          onBlur={() => {
            const [h = "00", m = "00", s = "00"] = value.split(":")
            setValue(
              `${h.padStart(2, "0").slice(0, 2)}:${m.padStart(2, "0").slice(0, 2)}:${s.padStart(2, "0").slice(0, 2)}`
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
    <Card size="sm" className="mx-auto w-fit max-w-full">
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-0"
        />
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-3 border-t bg-card!">
        <FieldGroup className="gap-3">
          <TimeField id="time-from" label="ساعت شروع" defaultValue="10:30:00" />
          <TimeField id="time-to" label="ساعت پایان" defaultValue="12:30:00" />
        </FieldGroup>
      </CardFooter>
    </Card>
  )
}
