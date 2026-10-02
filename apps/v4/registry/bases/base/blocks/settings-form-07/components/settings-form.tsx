"use client"

import * as React from "react"

import { Avatar, AvatarFallback } from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

const MEMBERS = [
  { name: "سارا محمدی", email: "sara@example.com", role: "مالک", initials: "سم" },
  { name: "رضا کریمی", email: "reza@example.com", role: "ادمین", initials: "رک" },
  { name: "نیما پناهی", email: "nima@example.com", role: "عضو", initials: "نپ" },
]

export function SettingsTeam() {
  const [inviteOpen, setInviteOpen] = React.useState(false)

  return (
    <div dir="rtl" lang="fa" className="space-y-6">
      <Card>
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle>اعضای فضای کاری</CardTitle>
            <CardDescription>
              نقش‌ها و دسترسی اعضای تیم را مدیریت کنید
            </CardDescription>
          </div>
          <Button type="button" onClick={() => setInviteOpen((v) => !v)}>
            دعوت عضو
          </Button>
        </CardHeader>
        <CardContent className="space-y-0">
          {inviteOpen ? (
            <div className="mb-4 rounded-xl border bg-muted/30 p-4">
              <form
                className="grid gap-3 sm:grid-cols-[1fr_auto_auto]"
                onSubmit={(e) => {
                  e.preventDefault()
                  setInviteOpen(false)
                }}
              >
                <Field>
                  <FieldLabel htmlFor="invite-email">ایمیل</FieldLabel>
                  <Input
                    id="invite-email"
                    type="email"
                    placeholder="colleague@company.com"
                    dir="ltr"
                    className="text-start"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="invite-role">نقش</FieldLabel>
                  <Select
                    items={[
                      { value: "member", label: "عضو" },
                      { value: "admin", label: "ادمین" },
                    ]}
                    defaultValue="member"
                  >
                    <SelectTrigger id="invite-role" className="w-full sm:w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl">
                      <SelectGroup>
                        <SelectItem value="member">عضو</SelectItem>
                        <SelectItem value="admin">ادمین</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <div className="flex items-end">
                  <Button type="submit" className="w-full">
                    ارسال دعوت
                  </Button>
                </div>
              </form>
            </div>
          ) : null}

          {MEMBERS.map((member, index) => (
            <div key={member.email}>
              {index > 0 ? <Separator className="my-3" /> : null}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{member.name}</p>
                      <Badge variant="secondary">{member.role}</Badge>
                    </div>
                    <p dir="ltr" className="text-sm text-muted-foreground">
                      {member.email}
                    </p>
                  </div>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  disabled={member.role === "مالک"}
                >
                  حذف
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>دسترسی فضای کاری</CardTitle>
          <CardDescription>
            سیاست‌های امنیتی برای همهٔ اعضا
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="team-2fa">اجبار ورود دو مرحله‌ای</Label>
              <p className="text-sm text-muted-foreground">
                همه اعضا باید ۲FA فعال داشته باشند
              </p>
            </div>
            <Switch id="team-2fa" defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-0.5">
              <Label htmlFor="team-domain">محدود به دامنه شرکت</Label>
              <p className="text-sm text-muted-foreground">
                فقط ایمیل‌های @company.com
              </p>
            </div>
            <Switch id="team-domain" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
