"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-sera/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Separator } from "@/registry/base-sera/ui/separator"

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

const BANK_ITEMS = [
  { value: "ملی", label: "ملی" },
  { value: "ملت", label: "ملت" },
  { value: "سامان", label: "سامان" },
] as const

export default function CheckoutAddressBook() {
  const [selected, setSelected] = React.useState<(typeof ADDRESSES)[number]>(
    ADDRESSES[0]
  )
  const [addressOpen, setAddressOpen] = React.useState(false)

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
          <Card className="bg-card">
            <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
              <CardTitle className="text-base">آدرس تحویل</CardTitle>
              <Popover open={addressOpen} onOpenChange={setAddressOpen}>
                <PopoverTrigger
                  render={<Button type="button" variant="outline" size="sm" />}
                >
                  {selected.label}
                  <ChevronDownIcon className="size-4" />
                </PopoverTrigger>
                <PopoverContent
                  dir="rtl"
                  lang="fa"
                  align="end"
                  className="w-56 space-y-1 p-2"
                >
                  <p className="px-2 py-1.5 text-sm font-medium">
                    آدرس‌های ذخیره‌شده
                  </p>
                  {ADDRESSES.map((addr) => (
                    <Button
                      key={addr.id}
                      type="button"
                      variant="ghost"
                      className="h-auto w-full flex-col items-start gap-0.5 py-2"
                      onClick={() => {
                        setSelected(addr)
                        setAddressOpen(false)
                      }}
                    >
                      <span>{addr.label}</span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {addr.detail}
                      </span>
                    </Button>
                  ))}
                  <Button
                    type="button"
                    variant="ghost"
                    className="h-8 w-full justify-start"
                    onClick={() => setAddressOpen(false)}
                  >
                    افزودن آدرس جدید
                  </Button>
                </PopoverContent>
              </Popover>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-muted/30 p-4 text-sm">
                <Badge variant="outline" className="mb-2 border">
                  {selected.label}
                </Badge>
                <p>{selected.detail}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader>
              <CardTitle className="text-base">اطلاعات کارت</CardTitle>
            </CardHeader>
            <CardContent>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="c4-card">شماره کارت</FieldLabel>
                  <Input
                    id="c4-card"
                    placeholder="۶۰۳۷-••••-••••-••••"
                    dir="ltr"
                    className="text-start font-mono tracking-normal"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="c4-exp">انقضا</FieldLabel>
                    <Input
                      id="c4-exp"
                      placeholder="ماه / سال"
                      dir="rtl"
                      className="tracking-normal"
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
                  <Select items={[...BANK_ITEMS]} defaultValue="ملی">
                    <SelectTrigger id="c4-bank" className="w-full" dir="rtl">
                      <SelectValue placeholder="بانک" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {BANK_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-base">خلاصه</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm tracking-normal">
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">جمع کالاها</span>
              <span>۷٬۴۴۰٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">ارسال</span>
              <span>رایگان</span>
            </div>
            <Separator />
            <div className="flex justify-between gap-3 font-semibold">
              <span>قابل پرداخت</span>
              <span>۷٬۴۴۰٬۰۰۰ تومان</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="button" className="w-full" size="lg">
              پرداخت امن
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}
