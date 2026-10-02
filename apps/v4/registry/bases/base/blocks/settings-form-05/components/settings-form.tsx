"use client"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Separator } from "@/registry/bases/base/ui/separator"

const SESSIONS = [
  {
    id: "1",
    device: "Chrome · ویندوز",
    location: "تهران، ایران",
    time: "الان فعال",
    current: true,
  },
  {
    id: "2",
    device: "Safari · آیفون",
    location: "اصفهان، ایران",
    time: "۲ ساعت پیش",
    current: false,
  },
  {
    id: "3",
    device: "Firefox · مک",
    location: "شیراز، ایران",
    time: "دیروز",
    current: false,
  },
]

export function SettingsSessions() {
  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>نشست‌های فعال</CardTitle>
        <CardDescription>
          دستگاه‌هایی که الان به حساب شما وارد شده‌اند را مدیریت کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-0">
        {SESSIONS.map((session, index) => (
          <div key={session.id}>
            {index > 0 ? <Separator className="my-3" /> : null}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-medium">{session.device}</p>
                  {session.current ? (
                    <Badge variant="secondary">همین دستگاه</Badge>
                  ) : null}
                </div>
                <p className="text-sm text-muted-foreground">
                  {session.location} · {session.time}
                </p>
              </div>
              <Button
                type="button"
                variant={session.current ? "outline" : "ghost"}
                size="sm"
                disabled={session.current}
              >
                {session.current ? "نشست فعلی" : "خروج از دستگاه"}
              </Button>
            </div>
          </div>
        ))}
        <Button variant="destructive" className="mt-6 w-full">
          خروج از همه دستگاه‌ها
        </Button>
      </CardContent>
    </Card>
  )
}
