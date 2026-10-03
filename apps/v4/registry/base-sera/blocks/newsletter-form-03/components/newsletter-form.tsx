"use client"

import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import { Separator } from "@/registry/base-sera/ui/separator"
import { Switch } from "@/registry/base-sera/ui/switch"

export function NewsletterTopics() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>خبرنامه موضوعی</CardTitle>
        <CardDescription>
          موضوع‌های موردعلاقه را انتخاب کنید و عضو شوید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="nl3-name">نام</FieldLabel>
            <Input id="nl3-name" placeholder="سارا" />
          </Field>
          <Field>
            <FieldLabel htmlFor="nl3-email">ایمیل</FieldLabel>
            <Input
              id="nl3-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
              required
            />
          </Field>
        </FieldGroup>
        <Separator />
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="nl3-comp">کامپوننت‌های جدید</Label>
              <p className="text-sm text-muted-foreground">هفتگی</p>
            </div>
            <Switch id="nl3-comp" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="nl3-guide">راهنما و آموزش</Label>
              <p className="text-sm text-muted-foreground">دو هفته یک‌بار</p>
            </div>
            <Switch id="nl3-guide" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="nl3-event">رویداد و وبینار</Label>
              <p className="text-sm text-muted-foreground">گاه‌به‌گاه</p>
            </div>
            <Switch id="nl3-event" />
          </div>
        </div>
        <Button className="w-full">عضویت در خبرنامه</Button>
      </CardContent>
    </Card>
  )
}
