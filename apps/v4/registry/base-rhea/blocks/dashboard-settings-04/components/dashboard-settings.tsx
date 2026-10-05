"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-rhea/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Switch } from "@/registry/base-rhea/ui/switch"

const ROLE_ITEMS = [
  { value: "مالک", label: "مالک" },
  { value: "مدیر", label: "مدیر" },
  { value: "عضو", label: "عضو" },
  { value: "مهمان", label: "مهمان" },
] as const

const MEMBERS = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    role: "مالک",
    initials: "س‌م",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    role: "مدیر",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "عضو",
    initials: "م‌ک",
  },
] as const

export default function DashboardSettingsTeam() {
  const [members, setMembers] = React.useState(MEMBERS.map((m) => ({ ...m })))
  const [openId, setOpenId] = React.useState<string | null>(null)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="space-y-6">
        <Card className="bg-card">
          <CardHeader className="text-start">
            <CardTitle>فضای کاری</CardTitle>
            <CardDescription>
              نام فارسی راست‌چین؛ شناسه انگلیسی چپ‌چین
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="ds4-ws">نام فضای کاری</FieldLabel>
                <Input
                  id="ds4-ws"
                  defaultValue="تیم محصول FarsiUI"
                  placeholder="نام تیم یا شرکت"
                  dir="rtl"
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="ds4-slug">شناسه</FieldLabel>
                <Input
                  id="ds4-slug"
                  defaultValue="farsiui-product"
                  placeholder="workspace-slug"
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </FieldGroup>
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <Label htmlFor="ds4-invite">دعوت اعضای جدید آزاد باشد</Label>
                <p className="text-sm text-muted-foreground">
                  اعضا بتوانند همکار دعوت کنند
                </p>
              </div>
              <Switch id="ds4-invite" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="text-start">
            <CardTitle>اعضای تیم</CardTitle>
            <CardDescription>
              نقش با Select راست‌چین؛ منوی عملیات راست‌چین
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            {members.map((member, index) => (
              <div key={member.id}>
                {index > 0 ? <Separator className="my-3" /> : null}
                <div className="flex items-center gap-3">
                  <Avatar className="size-9 shrink-0">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{member.name}</p>
                      {member.role === "مالک" && (
                        <Badge variant="outline" className="border">
                          مالک
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span
                        dir="ltr"
                        className="inline-block text-start tracking-normal"
                      >
                        {member.email}
                      </span>
                    </p>
                  </div>
                  <Select
                    items={[...ROLE_ITEMS]}
                    value={member.role}
                    onValueChange={(value) => {
                      if (!ROLE_ITEMS.some((item) => item.value === value)) {
                        return
                      }
                      setMembers((prev) =>
                        prev.map((m) =>
                          m.id === member.id ? { ...m, role: value } : m
                        )
                      )
                    }}
                    disabled={member.role === "مالک"}
                  >
                    <SelectTrigger className="w-28" dir="rtl" size="sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      {ROLE_ITEMS.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Popover
                    open={openId === member.id}
                    onOpenChange={(open) => setOpenId(open ? member.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8 shrink-0"
                          disabled={member.role === "مالک"}
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">منوی عضو</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="end"
                      className="w-40 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        ارسال ایمیل
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => {
                          setMembers((prev) =>
                            prev.filter((m) => m.id !== member.id)
                          )
                          setOpenId(null)
                        }}
                      >
                        حذف از تیم
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader className="text-start">
            <CardTitle>دعوت عضو جدید</CardTitle>
            <CardDescription>
              نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="text"
                placeholder="نام و نام خانوادگی"
                dir="rtl"
                className="sm:flex-1"
              />
              <Input
                type="email"
                required
                placeholder="name@example.com"
                dir="ltr"
                className="text-start sm:flex-1"
              />
              <Button type="submit" className="sm:shrink-0">
                ارسال دعوت
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
