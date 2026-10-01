"use client"

import { PlusSignIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import { Field, FieldLabel } from "@/styles/base-rhea/ui/field"
import { Input } from "@/styles/base-rhea/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-rhea/ui/select"
import { Separator } from "@/styles/base-rhea/ui/separator"

const ROLES = [
  { label: "مدیر", value: "admin" },
  { label: "ویرایشگر", value: "editor" },
  { label: "بازدیدکننده", value: "viewer" },
]

export function InviteTeamCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardHeader>
        <CardTitle>دعوت به تیم</CardTitle>
        <CardDescription>اعضا را به فضای کاری اضافه کنید</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          {[
            { email: "alex@example.com", role: "editor" },
            { email: "sam@example.com", role: "viewer" },
          ].map((invite) => (
            <div key={invite.email} className="flex items-center gap-2">
              <Input defaultValue={invite.email} className="flex-1" />
              <Select items={ROLES} defaultValue={invite.role}>
                <SelectTrigger className="w-28" dir="rtl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent dir="rtl" alignItemWithTrigger={false} align="start">
                  <SelectGroup>
                    {ROLES.map((role) => (
                      <SelectItem key={role.value} value={role.value}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
        <Button variant="outline">
          <HugeiconsIcon
            icon={PlusSignIcon}
            strokeWidth={2}
            data-icon="inline-start"
          />
          افزودن نفر دیگر
        </Button>
        <Separator />
      </CardContent>
      <CardFooter>
        <Button className="w-full">ارسال دعوت‌ها</Button>
      </CardFooter>
    </Card>
  )
}
