"use client"

import * as React from "react"

import PlateInput, {
  EMPTY_PLATE,
  isPlate,
  PLATE_LETTERS,
  stringifyPlate,
  type PlateValue,
} from "@/registry/base-aether/blocks/license-plate-02/components/plate-input"
import { Badge } from "@/registry/base-aether/ui/badge"
import { Button } from "@/registry/base-aether/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-aether/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-aether/ui/field"
import { Separator } from "@/registry/base-aether/ui/separator"

function toFa(value: string) {
  return value.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function LicensePlateInspector() {
  const [plate, setPlate] = React.useState<PlateValue>(EMPTY_PLATE)
  const complete = isPlate(plate)
  const letterMeta = PLATE_LETTERS.find((item) => item.letter === plate.letter)

  return (
    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
      <Card>
        <CardHeader>
          <CardTitle>ورود پلاک</CardTitle>
          <CardDescription>
            با تکمیل بخش‌ها، جزئیات پلاک در پنل کناری نمایش داده می‌شود
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="plate-02">شماره پلاک</FieldLabel>
              <div className="flex justify-center py-1">
                <PlateInput
                  id="plate-02"
                  value={plate}
                  onChange={(next) => setPlate(next)}
                />
              </div>
            </Field>
            <Button
              type="button"
              variant="outline"
              disabled={
                !plate.left && !plate.letter && !plate.middle && !plate.region
              }
              onClick={() => setPlate(EMPTY_PLATE)}
            >
              پاک کردن
            </Button>
          </FieldGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle className="text-base">جزئیات پلاک</CardTitle>
            <Badge variant={complete ? "default" : "secondary"}>
              {complete ? "کامل" : "ناقص"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <Row
            label="نمایش"
            value={
              plate.left || plate.letter || plate.middle || plate.region
                ? toFa(stringifyPlate(plate).replace(/-$/, ""))
                : "—"
            }
            ltr
          />
          <Separator />
          <Row label="حرف" value={plate.letter || "—"} />
          <Separator />
          <Row label="نوع" value={letterMeta?.label ?? "—"} />
          <Separator />
          <Row
            label="کد شهر"
            value={plate.region ? toFa(plate.region) : "—"}
            ltr
          />
        </CardContent>
      </Card>
    </div>
  )
}

function Row({
  label,
  value,
  ltr,
}: {
  label: string
  value: string
  ltr?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium tabular-nums" dir={ltr ? "ltr" : undefined}>
        {value}
      </span>
    </div>
  )
}
