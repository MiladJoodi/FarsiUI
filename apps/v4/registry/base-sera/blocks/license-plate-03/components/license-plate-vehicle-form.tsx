"use client"

import * as React from "react"

import {
  EMPTY_PLATE,
  isPlate,
  PlateInput,
  type PlateValue,
} from "@/registry/base-sera/blocks/license-plate-03/components/plate-input"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"

export function LicensePlateVehicleForm() {
  const [plate, setPlate] = React.useState<PlateValue>(EMPTY_PLATE)
  const [vehicleType, setVehicleType] = React.useState("sedan")
  const complete = isPlate(plate)

  return (
    <Card>
      <CardHeader>
        <CardTitle>ثبت خودرو</CardTitle>
        <CardDescription>
          مشخصات خودرو و پلاک را برای افزودن به حساب وارد کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={(event) => event.preventDefault()}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="vehicle-title">عنوان خودرو</FieldLabel>
              <Input id="vehicle-title" placeholder="پژو ۲۰۷ سفید" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="vehicle-type">نوع خودرو</FieldLabel>
              <Select
                items={[
                  { value: "sedan", label: "سواری" },
                  { value: "suv", label: "شاسی‌بلند" },
                  { value: "van", label: "ون" },
                  { value: "truck", label: "باری" },
                ]}
                value={vehicleType}
                onValueChange={(value) =>
                  setVehicleType((value as string) ?? "sedan")
                }
              >
                <SelectTrigger id="vehicle-type" className="w-full">
                  <SelectValue placeholder="انتخاب نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl">
                  <SelectGroup>
                    <SelectItem value="sedan">سواری</SelectItem>
                    <SelectItem value="suv">شاسی‌بلند</SelectItem>
                    <SelectItem value="van">ون</SelectItem>
                    <SelectItem value="truck">باری</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="plate-03">پلاک خودرو</FieldLabel>
              <div className="flex justify-center py-1">
                <PlateInput
                  id="plate-03"
                  value={plate}
                  onChange={(next) => setPlate(next)}
                />
              </div>
              <FieldDescription>
                پلاک باید کامل و مطابق کارت خودرو باشد
              </FieldDescription>
            </Field>
            <Button type="submit" className="w-full" disabled={!complete}>
              افزودن خودرو
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
