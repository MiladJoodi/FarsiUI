"use client"

import * as React from "react"

import {
  EMPTY_PLATE,
  isPlate,
  PLATE_LETTERS,
  PlateInput,
  stringifyPlate,
  type PlateValue,
} from "@/registry/base-luma/blocks/license-plate-01/components/plate-input"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-luma/ui/field"

function toFa(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export function LicensePlateForm() {
  const [plate, setPlate] = React.useState<PlateValue>(EMPTY_PLATE)
  const [done, setDone] = React.useState(false)
  const complete = isPlate(plate)
  const letterLabel = PLATE_LETTERS.find(
    (item) => item.letter === plate.letter
  )?.label

  if (done) {
    return (
      <Card>
        <CardHeader className="text-center">
          <CardTitle>پلاک ثبت شد</CardTitle>
          <CardDescription>
            <span
              dir="ltr"
              className="font-medium text-foreground tabular-nums"
            >
              {toFa(stringifyPlate(plate))}
            </span>
            {letterLabel ? ` · ${letterLabel}` : null}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setDone(false)
              setPlate(EMPTY_PLATE)
            }}
          >
            ویرایش پلاک
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>ثبت پلاک خودرو</CardTitle>
        <CardDescription>
          شماره پلاک را مانند پلاک فلزی وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(event) => {
            event.preventDefault()
            if (complete) setDone(true)
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="plate-01">شماره پلاک</FieldLabel>
              <div className="flex justify-center py-1">
                <PlateInput
                  id="plate-01"
                  name="plate"
                  value={plate}
                  onChange={(next) => setPlate(next)}
                />
              </div>
            </Field>
            <Field>
              <Button type="submit" className="w-full" disabled={!complete}>
                ادامه
              </Button>
              <FieldDescription className="text-center">
                حرف پلاک را از فهرست انتخاب کنید
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
