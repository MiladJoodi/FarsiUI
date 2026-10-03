"use client"

import * as React from "react"
import { SearchIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Input } from "@/registry/base-maia/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-maia/ui/table"

const USERS = [
  {
    name: "سارا محمدی",
    email: "sara@example.com",
    role: "مدیر",
    status: "فعال",
    initials: "س‌م",
  },
  {
    name: "علی رضایی",
    email: "ali@example.com",
    role: "ویرایشگر",
    status: "دعوت‌شده",
    initials: "ع‌ر",
  },
  {
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "مشاهده‌گر",
    status: "فعال",
    initials: "م‌ک",
  },
  {
    name: "رضا نوری",
    email: "reza@example.com",
    role: "ویرایشگر",
    status: "معلق",
    initials: "ر‌ن",
  },
  {
    name: "نگار احمدی",
    email: "negar@example.com",
    role: "مدیر",
    status: "فعال",
    initials: "ن‌ا",
  },
  {
    name: "حسین کاظمی",
    email: "hossein@example.com",
    role: "مشاهده‌گر",
    status: "دعوت‌شده",
    initials: "ه‌ک",
  },
] as const

const STATUS_ITEMS = [
  { value: "همه", label: "همه وضعیت‌ها" },
  { value: "فعال", label: "فعال" },
  { value: "دعوت‌شده", label: "دعوت‌شده" },
  { value: "معلق", label: "معلق" },
] as const

const ROLE_ITEMS = [
  { value: "همه", label: "همه نقش‌ها" },
  { value: "مدیر", label: "مدیر" },
  { value: "ویرایشگر", label: "ویرایشگر" },
  { value: "مشاهده‌گر", label: "مشاهده‌گر" },
] as const

export function UserManagementFilterable() {
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("همه")
  const [role, setRole] = React.useState("همه")

  const filtered = USERS.filter((user) => {
    const matchStatus = status === "همه" || user.status === status
    const matchRole = role === "همه" || user.role === role
    const q = query.trim().toLowerCase()
    const matchQuery =
      !q ||
      user.name.includes(query) ||
      user.email.toLowerCase().includes(q) ||
      user.role.includes(query)
    return matchStatus && matchRole && matchQuery
  })

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 space-y-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            جستجو و فیلتر کاربران
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Select وضعیت و نقش راست‌چین
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام یا ایمیل…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...STATUS_ITEMS]}
            value={status}
            onValueChange={(value) => {
              if (STATUS_ITEMS.some((item) => item.value === value)) {
                setStatus(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {STATUS_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            items={[...ROLE_ITEMS]}
            value={role}
            onValueChange={(value) => {
              if (ROLE_ITEMS.some((item) => item.value === value)) {
                setRole(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
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
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          کاربری با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-start">کاربر</TableHead>
                <TableHead className="text-start">ایمیل</TableHead>
                <TableHead className="text-start">نقش</TableHead>
                <TableHead className="text-start">وضعیت</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8 shrink-0">
                        <AvatarFallback>{user.initials}</AvatarFallback>
                      </Avatar>
                      <span className="text-start font-medium">
                        {user.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      dir="ltr"
                      className="block text-start text-sm tracking-normal"
                    >
                      {user.email}
                    </span>
                  </TableCell>
                  <TableCell className="text-start">
                    <Badge variant="outline" className="border">
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-start">
                    <Badge variant="outline" className="border">
                      {user.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </section>
  )
}
