"use client"

import * as React from "react"
import { CreditCardIcon, WalletIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Label } from "@/registry/bases/base/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/bases/base/ui/radio-group"
import { Separator } from "@/registry/bases/base/ui/separator"

export function PaymentMethodsCard() {
  const [method, setMethod] = React.useState("card")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            امن
          </Badge>
          <CardTitle>روش پرداخت</CardTitle>
          <CardDescription className="tracking-normal">
            مبلغ: ۱٬۲۹۵٬۰۰۰ تومان
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            value={method}
            onValueChange={setMethod}
            className="gap-3"
          >
            <Label
              htmlFor="pay2-card"
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                method === "card" ? "border-primary bg-primary/5" : ""
              }`}
            >
              <RadioGroupItem value="card" id="pay2-card" className="mt-0.5" />
              <div className="flex flex-1 items-start gap-3">
                <CreditCardIcon className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">کارت بانکی</p>
                  <p className="text-xs text-muted-foreground">
                    درگاه بانکی آنلاین
                  </p>
                </div>
              </div>
            </Label>
            <Label
              htmlFor="pay2-wallet"
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                method === "wallet" ? "border-primary bg-primary/5" : ""
              }`}
            >
              <RadioGroupItem
                value="wallet"
                id="pay2-wallet"
                className="mt-0.5"
              />
              <div className="flex flex-1 items-start gap-3">
                <WalletIcon className="mt-0.5 size-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">کیف پول</p>
                  <p className="text-xs text-muted-foreground tracking-normal">
                    موجودی: ۵۲۰٬۰۰۰ تومان
                  </p>
                </div>
              </div>
            </Label>
            <Label
              htmlFor="pay2-cod"
              className={`flex cursor-pointer items-start gap-3 rounded-lg border p-3 ${
                method === "cod" ? "border-primary bg-primary/5" : ""
              }`}
            >
              <RadioGroupItem value="cod" id="pay2-cod" className="mt-0.5" />
              <div>
                <p className="font-medium">پرداخت در محل</p>
                <p className="text-xs text-muted-foreground">
                  نقدی یا کارت‌خوان
                </p>
              </div>
            </Label>
          </RadioGroup>
          <Separator />
          <div className="flex justify-between text-sm font-medium tracking-normal">
            <span>قابل پرداخت</span>
            <span>۱٬۲۹۵٬۰۰۰ تومان</span>
          </div>
        </CardContent>
        <CardFooter className="border-t">
          <Button className="w-full">ادامه پرداخت</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
