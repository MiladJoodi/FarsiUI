"use client"

import { LaptopIcon, SmartphoneIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Separator } from "@/registry/base-mira/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-mira/ui/tabs"

const ACTIVE = [
  {
    device: "Chrome روی ویندوز",
    place: "تهران",
    time: "الان",
    current: true,
    kind: "laptop" as const,
  },
  {
    device: "Safari روی آیفون",
    place: "تهران",
    time: "۲ ساعت پیش",
    kind: "phone" as const,
  },
]

export default function SessionsTabs() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>مدیریت نشست‌ها</CardTitle>
          <CardDescription>نشست‌های فعال و هشدار ورود جدید</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active" className="w-full" dir="rtl">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">فعال</TabsTrigger>
              <TabsTrigger value="alerts">هشدار</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="mt-5 space-y-0">
              {ACTIVE.map((s, i) => {
                const Icon = s.kind === "phone" ? SmartphoneIcon : LaptopIcon
                return (
                  <div key={s.device}>
                    {i > 0 && <Separator />}
                    <div className="flex items-center gap-3 py-3">
                      <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                        <Icon className="size-4 text-muted-foreground" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">{s.device}</p>
                          {s.current ? (
                            <Badge variant="secondary">همین دستگاه</Badge>
                          ) : null}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {s.place} · {s.time}
                        </p>
                      </div>
                      {!s.current ? (
                        <Button size="sm" variant="outline">
                          پایان
                        </Button>
                      ) : null}
                    </div>
                  </div>
                )
              })}
              <Button className="mt-4 w-full" variant="outline">
                خروج از بقیهٔ دستگاه‌ها
              </Button>
            </TabsContent>

            <TabsContent value="alerts" className="mt-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="se2-email">ایمیل هشدار</FieldLabel>
                    <Input
                      id="se2-email"
                      type="email"
                      defaultValue="reza@example.com"
                      placeholder="name@example.com"
                      dir="ltr"
                      className="text-start"
                    />
                    <FieldDescription>
                      ورود از مکان ناآشنا به این آدرس اطلاع داده می‌شود
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="se2-label">برچسب دستگاه</FieldLabel>
                    <Input
                      id="se2-label"
                      placeholder="مثلاً لپ‌تاپ منزل"
                      dir="rtl"
                    />
                  </Field>
                  <Button type="submit">ذخیره هشدار</Button>
                </FieldGroup>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
