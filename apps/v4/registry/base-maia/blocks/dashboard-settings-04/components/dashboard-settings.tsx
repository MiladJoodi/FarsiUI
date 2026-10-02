"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-maia/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-maia/ui/field"
import { Input } from "@/registry/base-maia/ui/input"
import { Label } from "@/registry/base-maia/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import { Switch } from "@/registry/base-maia/ui/switch"

const MEMBERS = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    role: "مالک",
    initials: "سم",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    role: "مدیر",
    initials: "عر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "عضو",
    initials: "مک",
  },
] as const

export function DashboardSettingsTeam() {
  const [members, setMembers] = React.useState(MEMBERS.map((m) => ({ ...m })))

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="space-y-6">
        <Card>
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
                  defaultValue="تیم محصول فارسی‌UI"
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

        <Card>
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
                  <Avatar className="size-9">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-medium">{member.name}</p>
                      {member.role === "مالک" && (
                        <Badge variant="secondary">مالک</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      <span dir="ltr" className="inline-block text-start">
                        {member.email}
                      </span>
                    </p>
                  </div>
                  <Select
                    value={member.role}
                    onValueChange={(value) =>
                      setMembers((prev) =>
                        prev.map((m) =>
                          m.id === member.id
                            ? { ...m, role: (value as string) ?? m.role }
                            : m
                        )
                      )
                    }
                    disabled={member.role === "مالک"}
                  >
                    <SelectTrigger className="w-28" dir="rtl" size="sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent dir="rtl" lang="fa">
                      <SelectItem value="مالک">مالک</SelectItem>
                      <SelectItem value="مدیر">مدیر</SelectItem>
                      <SelectItem value="عضو">عضو</SelectItem>
                      <SelectItem value="مهمان">مهمان</SelectItem>
                    </SelectContent>
                  </Select>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button
                          variant="ghost"
                          size="icon"
                          className="size-8"
                          disabled={member.role === "مالک"}
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">منوی عضو</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      dir="rtl"
                      lang="fa"
                      align="end"
                      className="w-40"
                    >
                      <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>ارسال ایمیل</DropdownMenuItem>
                      <DropdownMenuItem
                        variant="destructive"
                        onClick={() =>
                          setMembers((prev) =>
                            prev.filter((m) => m.id !== member.id)
                          )
                        }
                      >
                        حذف از تیم
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
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
