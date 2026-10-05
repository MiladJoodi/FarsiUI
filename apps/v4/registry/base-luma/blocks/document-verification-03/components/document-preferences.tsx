"use client"

import * as React from "react"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import { Label } from "@/registry/base-luma/ui/label"
import { Separator } from "@/registry/base-luma/ui/separator"
import { Switch } from "@/registry/base-luma/ui/switch"

export default function DocumentPreferences() {
  const [publicDocs, setPublicDocs] = React.useState(false)
  const [notifySms, setNotifySms] = React.useState(true)
  const [autoResubmit, setAutoResubmit] = React.useState(false)
  const [saved, setSaved] = React.useState(false)

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>تنظیمات تأیید مدارک</CardTitle>
        <CardDescription>
          نحوهٔ نمایش و اطلاع‌رسانی مدارک بارگذاری‌شده را مشخص کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-0">
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="space-y-0.5">
            <Label htmlFor="public-docs">نمایش عمومی مدارک</Label>
            <p className="text-sm text-muted-foreground">
              فقط وضعیت تأیید دیده شود؛ فایل‌ها عمومی نشوند
            </p>
          </div>
          <Switch
            id="public-docs"
            checked={publicDocs}
            onCheckedChange={setPublicDocs}
          />
        </div>
        <Separator />
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="space-y-0.5">
            <Label htmlFor="notify-sms">اطلاع‌رسانی پیامکی</Label>
            <p className="text-sm text-muted-foreground">
              نتیجهٔ بررسی مدارک با پیامک اعلام شود
            </p>
          </div>
          <Switch
            id="notify-sms"
            checked={notifySms}
            onCheckedChange={setNotifySms}
          />
        </div>
        <Separator />
        <div className="flex items-center justify-between gap-4 py-3">
          <div className="space-y-0.5">
            <Label htmlFor="auto-resubmit">ارسال خودکار اصلاحیه</Label>
            <p className="text-sm text-muted-foreground">
              پس از رفع ایراد، مدرک دوباره برای بررسی ارسال شود
            </p>
          </div>
          <Switch
            id="auto-resubmit"
            checked={autoResubmit}
            onCheckedChange={setAutoResubmit}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-between gap-2 border-t">
        <p className="text-xs text-muted-foreground">
          {saved ? "تنظیمات ذخیره شد" : "تغییرات هنوز ذخیره نشده"}
        </p>
        <Button
          type="button"
          onClick={() => {
            setSaved(true)
            window.setTimeout(() => setSaved(false), 2000)
          }}
        >
          ذخیره تنظیمات
        </Button>
      </CardFooter>
    </Card>
  )
}
