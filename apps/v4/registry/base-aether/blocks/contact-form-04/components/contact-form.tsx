"use client"

import { Button } from "@/registry/base-aether/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-aether/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-aether/ui/field"
import { Input } from "@/registry/base-aether/ui/input"
import { Label } from "@/registry/base-aether/ui/label"
import { Separator } from "@/registry/base-aether/ui/separator"
import { Switch } from "@/registry/base-aether/ui/switch"
import { Textarea } from "@/registry/base-aether/ui/textarea"

export default function ContactFormBusiness() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>همکاری تجاری</CardTitle>
        <CardDescription>
          برای پیشنهاد همکاری یا فروش سازمانی پیام بفرستید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form onSubmit={(e) => e.preventDefault()}>
          <FieldGroup>
            <Field className="grid gap-4 sm:grid-cols-2">
              <Field>
                <FieldLabel htmlFor="cf4-company">نام شرکت</FieldLabel>
                <Input id="cf4-company" placeholder="شرکت نمونه" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="cf4-role">سمت شما</FieldLabel>
                <Input id="cf4-role" placeholder="مدیر محصول" />
              </Field>
            </Field>
            <Field>
              <FieldLabel htmlFor="cf4-email">ایمیل کاری</FieldLabel>
              <Input
                id="cf4-email"
                type="email"
                placeholder="you@company.com"
                dir="ltr"
                className="text-start"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="cf4-msg">شرح درخواست</FieldLabel>
              <Textarea id="cf4-msg" className="min-h-28" required />
            </Field>
          </FieldGroup>
        </form>
        <Separator />
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-0.5">
            <Label htmlFor="cf4-call">درخواست تماس تلفنی</Label>
            <p className="text-sm text-muted-foreground">
              تیم فروش با شما تماس بگیرد
            </p>
          </div>
          <Switch id="cf4-call" />
        </div>
        <Button className="w-full">ارسال درخواست</Button>
      </CardContent>
    </Card>
  )
}
