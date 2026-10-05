"use client"

import { CreditCardIcon } from "lucide-react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import { Separator } from "@/registry/base-maia/ui/separator"

const METHODS = [
  { bank: "ملت", last4: "۴۲۱۸", exp: "۰۸/۰۷" },
  { bank: "سامان", last4: "۹۱۰۳", exp: "۱۲/۰۶" },
] as const

export default function PaymentMethodsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>روش‌های پرداخت</CardTitle>
          <CardDescription>کارت‌های ذخیره‌شده</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {METHODS.map((m, i) => (
            <div key={m.last4}>
              {i > 0 ? <Separator className="mb-3" /> : null}
              <div className="flex items-center gap-3 text-sm">
                <CreditCardIcon className="size-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{m.bank}</p>
                  <p className="text-xs tracking-normal text-muted-foreground">
                    **** {m.last4} · {m.exp}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        <CardFooter className="border-t">
          <Button variant="outline" className="w-full">
            افزودن کارت
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
