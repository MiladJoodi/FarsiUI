"use client"

import * as React from "react"
import { MoreHorizontalIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
} from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

type User = {
  id: string
  name: string
  email: string
  role: string
  status: string
  initials: string
}

const ROLE_ITEMS = [
  { value: "مدیر", label: "مدیر" },
  { value: "ویرایشگر", label: "ویرایشگر" },
  { value: "مشاهده‌گر", label: "مشاهده‌گر" },
] as const

const INITIAL: User[] = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    role: "مدیر",
    status: "فعال",
    initials: "س‌م",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    role: "ویرایشگر",
    status: "فعال",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "مشاهده‌گر",
    status: "دعوت‌شده",
    initials: "م‌ک",
  },
  {
    id: "4",
    name: "رضا نوری",
    email: "reza@example.com",
    role: "ویرایشگر",
    status: "معلق",
    initials: "ر‌ن",
  },
  {
    id: "5",
    name: "نگار احمدی",
    email: "negar@example.com",
    role: "مشاهده‌گر",
    status: "فعال",
    initials: "ن‌ا",
  },
]

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export function UserManagementActions() {
  const [users, setUsers] = React.useState(INITIAL)
  const [selected, setSelected] = React.useState<string[]>([])
  const [bulkRole, setBulkRole] = React.useState("ویرایشگر")
  const [openId, setOpenId] = React.useState<string | null>(null)

  const allIds = users.map((u) => u.id)
  const allSelected =
    allIds.length > 0 && allIds.every((id) => selected.includes(id))

  function toggleAll(checked: boolean) {
    setSelected(checked ? allIds : [])
  }

  function toggleOne(id: string, checked: boolean) {
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((x) => x !== id)
    )
  }

  function applyBulkRole() {
    if (selected.length === 0) return
    setUsers((prev) =>
      prev.map((u) =>
        selected.includes(u.id) ? { ...u, role: bulkRole } : u
      )
    )
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">عملیات گروهی</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            انتخاب ردیف، تغییر نقش و منوی عملیات راست‌چین
          </p>
        </div>
        {selected.length > 0 && (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              {toFa(selected.length)} انتخاب‌شده
            </p>
            <Select
              items={[...ROLE_ITEMS]}
              value={bulkRole}
              onValueChange={(value) => {
                if (ROLE_ITEMS.some((item) => item.value === value)) {
                  setBulkRole(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
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
            <Button type="button" size="sm" onClick={applyBulkRole}>
              اعمال نقش
            </Button>
          </div>
        )}
      </div>

      <div className="overflow-x-auto rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-14 ps-4 pe-2">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={(v) => toggleAll(!!v)}
                  aria-label="انتخاب همه"
                />
              </TableHead>
              <TableHead className="text-start">کاربر</TableHead>
              <TableHead className="text-start">ایمیل</TableHead>
              <TableHead className="text-start">نقش</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start pe-4">عملیات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                data-state={selected.includes(user.id) ? "selected" : undefined}
              >
                <TableCell className="ps-4 pe-2">
                  <Checkbox
                    checked={selected.includes(user.id)}
                    onCheckedChange={(v) => toggleOne(user.id, !!v)}
                    aria-label={`انتخاب ${user.name}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8 shrink-0">
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="text-start font-medium">{user.name}</span>
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
                <TableCell className="pe-4">
                  <Popover
                    open={openId === user.id}
                    onOpenChange={(open) => setOpenId(open ? user.id : null)}
                  >
                    <PopoverTrigger
                      render={
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="size-8"
                        />
                      }
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">منوی کاربر</span>
                    </PopoverTrigger>
                    <PopoverContent
                      dir="rtl"
                      lang="fa"
                      align="end"
                      className="w-44 space-y-1 p-2"
                    >
                      <p className="px-2 py-1.5 text-sm font-medium">عملیات</p>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start"
                        onClick={() => setOpenId(null)}
                      >
                        ویرایش پروفایل
                      </Button>
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
                        className="h-8 w-full justify-start"
                        onClick={() => {
                          setUsers((prev) =>
                            prev.map((u) =>
                              u.id === user.id
                                ? {
                                    ...u,
                                    status:
                                      u.status === "معلق" ? "فعال" : "معلق",
                                  }
                                : u
                            )
                          )
                          setOpenId(null)
                        }}
                      >
                        {user.status === "معلق" ? "فعال‌سازی" : "تعلیق"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-full justify-start text-destructive hover:text-destructive"
                        onClick={() => {
                          setUsers((prev) =>
                            prev.filter((u) => u.id !== user.id)
                          )
                          setOpenId(null)
                        }}
                      >
                        حذف کاربر
                      </Button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
