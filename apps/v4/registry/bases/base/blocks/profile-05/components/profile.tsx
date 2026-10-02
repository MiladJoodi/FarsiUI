"use client"

import * as React from "react"
import { cn } from "cn"
import {
  CameraIcon,
  CopyIcon,
  LinkIcon,
  MoreHorizontalIcon,
  Share2Icon,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"
import { Textarea } from "@/registry/bases/base/ui/textarea"

const NAV = [
  { id: "public", label: "نمای عمومی" },
  { id: "edit", label: "ویرایش" },
  { id: "privacy", label: "حریم خصوصی" },
] as const

type NavId = (typeof NAV)[number]["id"]

export function ProfileHub() {
  const [section, setSection] = React.useState<NavId>("public")
  const [visibility, setVisibility] = React.useState("public")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <Badge variant="secondary" className="mb-3">
          مرکز پروفایل
        </Badge>
        <h2 className="text-3xl font-bold tracking-tight">پروفایل من</h2>
        <p className="mt-2 text-muted-foreground">
          کاور، اطلاعات عمومی، حریم خصوصی و اشتراک‌گذاری
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="relative h-40 bg-muted md:h-48">
          <img
            src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1400&auto=format&fit=crop&q=80"
            alt="کاور پروفایل"
            className="size-full object-cover"
          />
          <Button
            type="button"
            size="sm"
            variant="secondary"
            className="absolute end-3 bottom-3 gap-1.5"
          >
            <CameraIcon className="size-3.5" />
            تغییر کاور
          </Button>
        </div>

        <div className="flex flex-col gap-4 border-b px-5 py-4 sm:flex-row sm:items-end sm:justify-between md:px-6">
          <div className="flex items-end gap-4">
            <div className="relative -mt-14">
              <Avatar className="size-24 border-4 border-card">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
                  alt="سارا محمدی"
                />
                <AvatarFallback>سم</AvatarFallback>
              </Avatar>
              <Button
                type="button"
                size="icon-sm"
                variant="secondary"
                className="absolute end-0 bottom-0 rounded-full"
              >
                <CameraIcon className="size-3.5" />
                <span className="sr-only">تغییر تصویر</span>
              </Button>
            </div>
            <div className="pb-1">
              <h3 className="text-xl font-semibold">سارا محمدی</h3>
              <p className="text-sm text-muted-foreground">
                <bdi dir="ltr">sara@example.com</bdi>
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" onClick={() => setSection("edit")}>
              ویرایش
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
                <Share2Icon className="size-4" />
                اشتراک
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuLabel>اشتراک‌گذاری</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CopyIcon className="size-4" />
                  کپی لینک پروفایل
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LinkIcon className="size-4" />
                  کپی نام کاربری
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline" size="icon-sm" />}
              >
                <MoreHorizontalIcon className="size-4" />
                <span className="sr-only">بیشتر</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start">
                <DropdownMenuItem>دانلود دادهٔ پروفایل</DropdownMenuItem>
                <DropdownMenuItem>مشاهده به‌عنوان مهمان</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  حذف پروفایل
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="md:grid md:grid-cols-[11rem_1fr]">
          <aside className="border-b bg-muted/30 p-3 md:border-b-0 md:border-l">
            <p className="mb-2 px-2 text-xs font-medium text-muted-foreground">
              بخش‌ها
            </p>
            <nav className="flex gap-1 overflow-x-auto md:flex-col">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSection(item.id)}
                  className={cn(
                    "rounded-lg px-3 py-2 text-start text-sm transition-colors hover:bg-muted",
                    section === item.id && "bg-muted font-medium text-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="p-5 md:p-6">
            {section === "public" ? (
              <div className="space-y-4">
                <Header
                  title="نمای عمومی"
                  description="آنچه دیگران از پروفایل شما می‌بینند"
                />
                <div className="rounded-lg border p-4">
                  <p className="font-medium">سارا محمدی</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    طراح محصول · تهران
                  </p>
                  <p className="mt-3 text-sm leading-relaxed">
                    علاقه‌مند به رابط‌های فارسی، تایپوگرافی و تجربهٔ کاربری
                    راست‌چین. عضو تیم FarsiUI.
                  </p>
                  <Separator className="my-4" />
                  <dl className="grid gap-2 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-muted-foreground">نام کاربری</dt>
                      <dd>
                        <bdi dir="ltr">@sara.m</bdi>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground">وب‌سایت</dt>
                      <dd>
                        <bdi dir="ltr">farsiui.ir</bdi>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            ) : null}

            {section === "edit" ? (
              <div className="space-y-4">
                <Header
                  title="ویرایش اطلاعات"
                  description="نام، تماس و بیوگرافی"
                />
                <form onSubmit={(e) => e.preventDefault()}>
                  <FieldGroup>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field>
                        <FieldLabel htmlFor="p5-name">نام نمایشی</FieldLabel>
                        <Input
                          id="p5-name"
                          placeholder="سارا محمدی"
                          defaultValue="سارا محمدی"
                          dir="rtl"
                        />
                      </Field>
                      <Field>
                        <FieldLabel htmlFor="p5-job">عنوان شغلی</FieldLabel>
                        <Input
                          id="p5-job"
                          placeholder="طراح محصول"
                          defaultValue="طراح محصول"
                          dir="rtl"
                        />
                      </Field>
                    </div>
                    <Field>
                      <FieldLabel htmlFor="p5-username">نام کاربری</FieldLabel>
                      <Input
                        id="p5-username"
                        placeholder="sara.m"
                        defaultValue="sara.m"
                        dir="ltr"
                        className="text-start"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="p5-email">ایمیل</FieldLabel>
                      <Input
                        id="p5-email"
                        type="email"
                        placeholder="name@example.com"
                        defaultValue="sara@example.com"
                        dir="ltr"
                        className="text-start"
                      />
                      <FieldDescription>
                        برای ورود و اعلان‌های مهم استفاده می‌شود
                      </FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="p5-phone">شماره موبایل</FieldLabel>
                      <Input
                        id="p5-phone"
                        type="tel"
                        inputMode="tel"
                        placeholder="۰۹۱۲۱۲۳۴۵۶۷"
                        defaultValue="۰۹۱۲۱۲۳۴۵۶۷"
                        dir="ltr"
                        className="text-start"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="p5-city">شهر</FieldLabel>
                      <Select defaultValue="tehran">
                        <SelectTrigger id="p5-city" dir="rtl" className="w-full">
                          <SelectValue placeholder="انتخاب شهر" />
                        </SelectTrigger>
                        <SelectContent dir="rtl" lang="fa">
                          <SelectItem value="tehran">تهران</SelectItem>
                          <SelectItem value="isfahan">اصفهان</SelectItem>
                          <SelectItem value="shiraz">شیراز</SelectItem>
                          <SelectItem value="mashhad">مشهد</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="p5-website">وب‌سایت</FieldLabel>
                      <Input
                        id="p5-website"
                        type="url"
                        placeholder="https://example.com"
                        defaultValue="https://farsiui.ir"
                        dir="ltr"
                        className="text-start"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="p5-bio">بیوگرافی</FieldLabel>
                      <Textarea
                        id="p5-bio"
                        placeholder="چند خط دربارهٔ خودتان بنویسید…"
                        defaultValue="علاقه‌مند به رابط‌های فارسی و تایپوگرافی."
                        className="min-h-24"
                        dir="rtl"
                      />
                    </Field>
                    <div className="flex justify-end gap-2 pt-2">
                      <Button type="button" variant="outline">
                        انصراف
                      </Button>
                      <Button type="submit">ذخیره تغییرات</Button>
                    </div>
                  </FieldGroup>
                </form>
              </div>
            ) : null}

            {section === "privacy" ? (
              <div className="space-y-6">
                <Header
                  title="حریم خصوصی"
                  description="نحوهٔ نمایش پروفایل برای دیگران"
                />
                <Field>
                  <FieldLabel>سطح نمایش</FieldLabel>
                  <Select
                    value={visibility}
                    onValueChange={(v) => setVisibility((v as string) ?? "public")}
                  >
                    <SelectTrigger dir="rtl" className="w-full sm:max-w-xs">
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="public">عمومی</SelectItem>
                      <SelectItem value="followers">فقط دنبال‌کنندگان</SelectItem>
                      <SelectItem value="private">خصوصی</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    پروفایل خصوصی فقط برای شما قابل مشاهده است
                  </FieldDescription>
                </Field>
                <Separator />
                <div className="space-y-4">
                  <PrivacyRow
                    id="p5-show-email"
                    title="نمایش ایمیل"
                    desc="ایمیل در پروفایل عمومی دیده شود"
                  />
                  <PrivacyRow
                    id="p5-show-activity"
                    title="نمایش فعالیت‌ها"
                    desc="فهرست فعالیت‌های اخیر عمومی باشد"
                    defaultChecked
                  />
                  <PrivacyRow
                    id="p5-index"
                    title="نمایه در جستجو"
                    desc="اجازهٔ ایندکس شدن در موتورهای جستجو"
                    defaultChecked
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

function Header({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

function PrivacyRow({
  id,
  title,
  desc,
  defaultChecked,
}: {
  id: string
  title: string
  desc: string
  defaultChecked?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="space-y-0.5">
        <Label htmlFor={id}>{title}</Label>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
      <Switch id={id} defaultChecked={defaultChecked} />
    </div>
  )
}
