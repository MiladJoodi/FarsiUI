"use client"

import * as React from "react"
import { MaximizeIcon, MinimizeIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base-nova/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/styles/base-nova/ui/collapsible"
import { Field, FieldGroup, FieldLabel } from "@/styles/base-nova/ui/field"
import { Input } from "@/styles/base-nova/ui/input"

export function CollapsibleSettings() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Card className="mx-auto w-full max-w-xs" size="sm" dir="rtl">
      <CardHeader>
        <CardTitle>شعاع گوشه</CardTitle>
        <CardDescription>شعاع گوشه‌های عنصر را تنظیم کنید.</CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="flex items-start gap-2"
        >
          <FieldGroup className="grid w-full grid-cols-2 gap-2">
            <Field>
              <FieldLabel htmlFor="radius-x" className="sr-only">
                شعاع افقی
              </FieldLabel>
              <Input
                id="radius-x"
                dir="ltr"
                placeholder="۰"
                defaultValue={0}
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="radius-y" className="sr-only">
                شعاع عمودی
              </FieldLabel>
              <Input
                id="radius-y"
                dir="ltr"
                placeholder="۰"
                defaultValue={0}
              />
            </Field>
            <CollapsibleContent className="col-span-full grid grid-cols-subgrid gap-2">
              <Field>
                <FieldLabel htmlFor="radius-x-extra" className="sr-only">
                  شعاع افقی اضافی
                </FieldLabel>
                <Input
                  id="radius-x-extra"
                  dir="ltr"
                  placeholder="۰"
                  defaultValue={0}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="radius-y-extra" className="sr-only">
                  شعاع عمودی اضافی
                </FieldLabel>
                <Input
                  id="radius-y-extra"
                  dir="ltr"
                  placeholder="۰"
                  defaultValue={0}
                />
              </Field>
            </CollapsibleContent>
          </FieldGroup>
          <CollapsibleTrigger
            render={<Button variant="outline" size="icon" />}
            aria-label={isOpen ? "بستن تنظیمات" : "باز کردن تنظیمات"}
          >
            {isOpen ? <MinimizeIcon /> : <MaximizeIcon />}
          </CollapsibleTrigger>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
