"use client"

import * as React from "react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-lyra/ui/field"
import { Input } from "@/registry/base-lyra/ui/input"

export default function NewsletterCard() {
  const [done, setDone] = React.useState(false)
  const [email, setEmail] = React.useState("")

  if (done) {
    return (
      <Card dir="rtl" lang="fa">
        <CardHeader className="text-center">
          <CardTitle>عضویت ثبت شد</CardTitle>
          <CardDescription>
            لینک تأیید به{" "}
            <span dir="ltr" className="font-medium text-foreground">
              {email}
            </span>{" "}
            ارسال شد
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => setDone(false)}
          >
            تغییر ایمیل
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>عضویت در خبرنامه</CardTitle>
        <CardDescription>
          تازه‌های FarsiUI را هر هفته در ایمیل دریافت کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="nl-email">ایمیل</FieldLabel>
              <Input
                id="nl-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Button type="submit" className="w-full">
              عضویت
            </Button>
            <FieldDescription className="text-center">
              هر زمان می‌توانید لغو اشتراک کنید
            </FieldDescription>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
