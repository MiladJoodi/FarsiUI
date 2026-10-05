"use client"

import * as React from "react"

import PlateInput, {
  EMPTY_PLATE,
  isPlate,
  PLATE_LETTERS,
  stringifyPlate,
  type PlateValue,
} from "@/registry/base-mira/blocks/license-plate-04/components/plate-input"
import { Button } from "@/registry/base-mira/ui/button"
import { Card, CardContent } from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"

function toFa(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function LicensePlateSplit() {
  const [plate, setPlate] = React.useState<PlateValue>(EMPTY_PLATE)
  const [done, setDone] = React.useState(false)
  const complete = isPlate(plate)
  const letterLabel = PLATE_LETTERS.find(
    (item) => item.letter === plate.letter
  )?.label

  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="grid p-0 md:grid-cols-2">
        <div className="p-6 md:p-8">
          {done ? (
            <div className="flex h-full flex-col justify-center gap-4">
              <div className="space-y-2 text-center md:text-start">
                <h1 className="text-2xl font-bold">پلاک تأیید شد</h1>
                <p className="text-muted-foreground">
                  <span
                    dir="ltr"
                    className="font-medium text-foreground tabular-nums"
                  >
                    {toFa(stringifyPlate(plate))}
                  </span>
                  {letterLabel ? ` · ${letterLabel}` : null}
                </p>
              </div>
              <Button variant="outline" onClick={() => setDone(false)}>
                تغییر پلاک
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault()
                if (complete) setDone(true)
              }}
            >
              <FieldGroup>
                <div className="flex flex-col items-center gap-2 text-center md:items-start md:text-start">
                  <h1 className="text-2xl font-bold">پلاک خودرو</h1>
                  <p className="text-balance text-muted-foreground">
                    برای ادامه، پلاک خودرو را وارد کنید
                  </p>
                </div>
                <Field>
                  <FieldLabel htmlFor="plate-04">شماره پلاک</FieldLabel>
                  <div className="flex justify-center py-1 md:justify-start">
                    <PlateInput
                      id="plate-04"
                      value={plate}
                      onChange={(next) => setPlate(next)}
                    />
                  </div>
                </Field>
                <Field>
                  <Button type="submit" className="w-full" disabled={!complete}>
                    تأیید پلاک
                  </Button>
                </Field>
                <FieldDescription className="text-center md:text-start">
                  پلاک فقط برای شناسایی خودرو استفاده می‌شود
                </FieldDescription>
              </FieldGroup>
            </form>
          )}
        </div>
        <div className="relative hidden bg-muted md:block">
          <img
            src="/farsiui/parsian.jpg"
            alt="Parsian"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </CardContent>
    </Card>
  )
}
