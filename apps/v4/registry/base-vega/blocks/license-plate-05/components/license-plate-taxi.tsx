"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import PlateInput, {
  EMPTY_PLATE,
  isPlate,
  stringifyPlate,
  type PlateValue,
} from "@/registry/base-vega/blocks/license-plate-05/components/plate-input"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-vega/ui/field"

function toFa(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function LicensePlateTaxi() {
  const [plate, setPlate] = React.useState<PlateValue>(EMPTY_PLATE)
  const complete = isPlate(plate)

  return (
    <div className="flex flex-col gap-6">
      <a href="#" className="flex items-center gap-2 self-center font-medium">
        <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <IconPlaceholder
            lucide="GalleryVerticalEndIcon"
            tabler="IconLayoutRows"
            hugeicons="LayoutBottomIcon"
            phosphor="RowsIcon"
            remixicon="RiGalleryLine"
            className="size-4"
          />
        </div>
        FarsiUI
      </a>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <form onSubmit={(event) => event.preventDefault()}>
          <FieldGroup>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold">پلاک تاکسی</h1>
                <Badge variant={complete ? "default" : "secondary"}>
                  {complete ? "کامل" : "ناقص"}
                </Badge>
              </div>
              <FieldDescription>
                فقط حرف «ت» برای ناوگان تاکسی مجاز است
              </FieldDescription>
            </div>
            <Field>
              <FieldLabel htmlFor="plate-05">شماره پلاک</FieldLabel>
              <div className="flex justify-center py-1">
                <PlateInput
                  id="plate-05"
                  letters={["ت"]}
                  value={plate}
                  onChange={(next) => setPlate(next)}
                />
              </div>
            </Field>
            <Button type="submit" className="w-full" disabled={!complete}>
              ثبت تاکسی
            </Button>
          </FieldGroup>
        </form>
      </div>

      <FieldDescription className="text-center">
        {complete ? (
          <span dir="ltr" className="tabular-nums">
            {toFa(stringifyPlate(plate))}
          </span>
        ) : (
          "پلاک تاکسی هنوز کامل نشده است"
        )}
      </FieldDescription>
    </div>
  )
}
