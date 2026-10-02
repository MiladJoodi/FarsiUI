"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-mira/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"

const ADDRESSES = [
  {
    id: "home",
    label: "خانه",
    detail: "تهران، سعادت‌آباد، پلاک ۱۲",
  },
  {
    id: "office",
    label: "دفتر",
    detail: "تهران، ونک، برج آسمان، طبقه ۸",
  },
] as const

export function CheckoutAddressBook() {
  const [selected, setSelected] = React.useState<(typeof ADDRESSES)[number]>(
    ADDRESSES[0]
  )

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          تسویه با دفترچه آدرس
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          انتخاب آدرس از منوی کشویی راست‌چین
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
              <CardTitle className="text-base">آدرس تحویل</CardTitle>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={<Button variant="outline" size="sm" />}
                >
                  {selected.label}
                  <ChevronDownIcon className="size-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  dir="rtl"
                  lang="fa"
                  align="end"
                  className="w-56"
                >
                  <DropdownMenuLabel>آدرس‌های ذخیره‌شده</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {ADDRESSES.map((addr) => (
                    <DropdownMenuItem
                      key={addr.id}
                      onClick={() => setSelected(addr)}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span>{addr.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {addr.detail}
                        </span>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>افزودن آدرس جدید</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-muted/30 p-4 text-sm">
                <Badge variant="secondary" className="mb-2">
                  {selected.label}
                </Badge>
                <p>{selected.detail}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">اطلاعات کارت</CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="c4-card">شماره کارت</FieldLabel>
                  <Input
                    id="c4-card"
                    placeholder="6037-****-****-****"
                    dir="ltr"
                    className="text-start font-mono"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="c4-exp">انقضا</FieldLabel>
                    <Input
                      id="c4-exp"
                      placeholder="MM/YY"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="c4-cvv">CVV2</FieldLabel>
                    <Input
                      id="c4-cvv"
                      placeholder="•••"
                      dir="ltr"
                      className="text-start"
                    />
                  </Field>
                </div>
                <Field>
                  <FieldLabel htmlFor="c4-bank">بانک</FieldLabel>
                  <Select defaultValue="melli">
                    <SelectTrigger id="c4-bank" className="w-full" dir="rtl">
                      <SelectValue placeholder="بانک" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="melli">ملی</SelectItem>
                      <SelectItem value="mellat">ملت</SelectItem>
                      <SelectItem value="saman">سامان</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">جمع کالاها</span>
              <bdi dir="ltr" className="tabular-nums">
                ۷٬۴۴۰٬۰۰۰
              </bdi>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">ارسال</span>
              <span>رایگان</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-3 font-semibold">
              <span>قابل پرداخت</span>
              <span>
                <bdi dir="ltr" className="tabular-nums">
                  ۷٬۴۴۰٬۰۰۰
                </bdi>{" "}
                تومان
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" size="lg">
              پرداخت امن
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
