"use client"

import * as React from "react"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-luma/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-luma/ui/field"
import { Input } from "@/registry/base-luma/ui/input"
import { Label } from "@/registry/base-luma/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"
import { Switch } from "@/registry/base-luma/ui/switch"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-luma/ui/tabs"
import { Textarea } from "@/registry/base-luma/ui/textarea"

type OfficeKey = "tehran" | "isfahan" | "remote"

const OFFICES: Record<
  OfficeKey,
  { title: string; address: string; hours: string }
> = {
  tehran: {
    title: "تهران",
    address: "خیابان ولیعصر، پلاک ۱۲۰، طبقهٔ ۳",
    hours: "شنبه تا چهارشنبه · ۹ تا ۱۸",
  },
  isfahan: {
    title: "اصفهان",
    address: "خیابان چهارباغ عباسی، پلاک ۴۵",
    hours: "شنبه تا چهارشنبه · ۱۰ تا ۱۷",
  },
  remote: {
    title: "دورکاری",
    address: "پاسخگویی آنلاین در سراسر ایران",
    hours: "هر روز · ۹ تا ۲۱",
  },
}

export function ContactHub() {
  const [topic, setTopic] = React.useState("sales")
  const [office, setOffice] = React.useState<OfficeKey>("tehran")
  const [callBack, setCallBack] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3">
            مرکز تماس
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">چطور کمک کنیم؟</h2>
          <p className="mt-2 text-muted-foreground">
            کانال مناسب را انتخاب کنید یا فرم کامل را پر کنید
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            دفتر: {OFFICES[office].title}
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="end" className="w-44">
            <DropdownMenuLabel>انتخاب دفتر</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={office}
              onValueChange={(v) => setOffice((v as OfficeKey) ?? "tehran")}
            >
              <DropdownMenuRadioItem value="tehran">
                تهران
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="isfahan">
                اصفهان
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="remote">
                دورکاری
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Tabs defaultValue="form" dir="rtl" lang="fa" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="form">فرم پیام</TabsTrigger>
          <TabsTrigger value="info">اطلاعات دفتر</TabsTrigger>
        </TabsList>

        <TabsContent value="form" className="mt-6">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card dir="rtl" lang="fa">
              <CardHeader className="text-start">
                <CardTitle className="text-lg">ارسال پیام</CardTitle>
                <CardDescription>
                  فیلدهای فارسی راست‌چین و ایمیل چپ‌چین هستند
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()}>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="c5-topic">موضوع</FieldLabel>
                      <Select
                        value={topic}
                        onValueChange={(value) =>
                          setTopic((value as string) ?? "sales")
                        }
                      >
                        <SelectTrigger
                          id="c5-topic"
                          className="w-full"
                          dir="rtl"
                        >
                          <SelectValue placeholder="موضوع را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent dir="rtl" lang="fa">
                          <SelectItem value="sales">فروش</SelectItem>
                          <SelectItem value="support">پشتیبانی</SelectItem>
                          <SelectItem value="press">روابط عمومی</SelectItem>
                          <SelectItem value="career">فرصت شغلی</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="c5-name">
                          نام شرکت / شخص
                        </FieldLabel>
                        <Input
                          id="c5-name"
                          placeholder="نام کامل"
                          dir="rtl"
                          required
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="c5-city">شهر</FieldLabel>
                        <Input id="c5-city" placeholder="تهران" dir="rtl" />
                      </Field>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="c5-email">ایمیل</FieldLabel>
                      <Input
                        id="c5-email"
                        type="email"
                        placeholder="name@example.com"
                        dir="ltr"
                        className="text-start"
                        required
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="c5-msg">پیام</FieldLabel>
                      <Textarea
                        id="c5-msg"
                        placeholder="جزئیات را بنویسید…"
                        dir="rtl"
                        className="min-h-28"
                        required
                      />
                    </Field>
                    <div className="flex items-center justify-between gap-4 rounded-lg border px-3 py-2">
                      <div className="space-y-0.5">
                        <Label htmlFor="c5-call">درخواست تماس تلفنی</Label>
                        <p className="text-xs text-muted-foreground">
                          تیم مربوطه با شما تماس بگیرد
                        </p>
                      </div>
                      <Switch
                        id="c5-call"
                        checked={callBack}
                        onCheckedChange={setCallBack}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      ارسال درخواست
                    </Button>
                  </FieldGroup>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <div className="rounded-2xl border bg-muted/40 p-6">
                <p className="text-sm font-medium">
                  دفتر {OFFICES[office].title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {OFFICES[office].address}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {OFFICES[office].hours}
                </p>
              </div>
              <div className="grid gap-3">
                <a
                  href="mailto:hello@farsiui.dev"
                  className="flex items-center gap-3 rounded-xl border bg-card p-4 text-sm hover:bg-muted/40"
                >
                  <MailIcon className="size-4 shrink-0 text-muted-foreground" />
                  <span
                    dir="ltr"
                    className="font-medium tracking-normal [letter-spacing:0]"
                  >
                    hello@farsiui.dev
                  </span>
                </a>
                <div className="flex items-center gap-3 rounded-xl border bg-card p-4 text-sm">
                  <PhoneIcon className="size-4 shrink-0 text-muted-foreground" />
                  <bdi
                    dir="ltr"
                    className="font-medium tracking-normal [letter-spacing:0]"
                  >
                    ۰۲۱-۹۱۰۰۰۰۰۰
                  </bdi>
                </div>
                <div className="flex items-start gap-3 rounded-xl border bg-card p-4 text-sm">
                  <MapPinIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  <span>{OFFICES[office].address}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="info" className="mt-6">
          <Card dir="rtl" lang="fa">
            <CardHeader className="text-start">
              <CardTitle>جزئیات دفتر {OFFICES[office].title}</CardTitle>
              <CardDescription>
                آدرس و ساعات پاسخگویی برای مراجعه حضوری یا تماس
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex aspect-video items-center justify-center rounded-xl border border-dashed bg-muted/30 text-sm text-muted-foreground">
                نقشهٔ نمونه — موقعیت دفتر {OFFICES[office].title}
              </div>
              <Separator />
              <dl className="grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">آدرس</dt>
                  <dd className="mt-1 font-medium">
                    {OFFICES[office].address}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">ساعات</dt>
                  <dd className="mt-1 font-medium">{OFFICES[office].hours}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
