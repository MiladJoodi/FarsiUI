"use client"

import * as React from "react"
import { MoreHorizontalIcon, SearchIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-luma/ui/avatar"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-luma/ui/card"
import { Checkbox } from "@/registry/base-luma/ui/checkbox"
import { Input } from "@/registry/base-luma/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-luma/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-luma/ui/select"
import { Separator } from "@/registry/base-luma/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-luma/ui/table"

type User = {
  id: string
  name: string
  email: string
  role: string
  status: string
  joined: string
  initials: string
}

const INITIAL: User[] = [
  {
    id: "1",
    name: "سارا محمدی",
    email: "sara@example.com",
    role: "مدیر",
    status: "فعال",
    joined: "۱۴۰۳/۱۱/۰۲",
    initials: "س‌م",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    role: "ویرایشگر",
    status: "فعال",
    joined: "۱۴۰۵/۰۱/۱۵",
    initials: "ع‌ر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "مشاهده‌گر",
    status: "دعوت‌شده",
    joined: "۱۴۰۵/۰۶/۰۱",
    initials: "م‌ک",
  },
  {
    id: "4",
    name: "رضا نوری",
    email: "reza@example.com",
    role: "ویرایشگر",
    status: "معلق",
    joined: "۱۴۰۳/۰۴/۰۹",
    initials: "ر‌ن",
  },
  {
    id: "5",
    name: "نگار احمدی",
    email: "negar@example.com",
    role: "مدیر",
    status: "فعال",
    joined: "۱۴۰۲/۰۸/۲۰",
    initials: "ن‌ا",
  },
  {
    id: "6",
    name: "حسین کاظمی",
    email: "hossein@example.com",
    role: "مشاهده‌گر",
    status: "دعوت‌شده",
    joined: "۱۴۰۵/۰۷/۰۱",
    initials: "ه‌ک",
  },
  {
    id: "7",
    name: "لیلا موسوی",
    email: "leila@example.com",
    role: "ویرایشگر",
    status: "فعال",
    joined: "۱۴۰۳/۰۹/۲۸",
    initials: "ل‌م",
  },
  {
    id: "8",
    name: "امیر حسینی",
    email: "amir@example.com",
    role: "مشاهده‌گر",
    status: "فعال",
    joined: "۱۴۰۵/۰۲/۱۲",
    initials: "ا‌ح",
  },
]

const STATUS_ITEMS = [
  { value: "همه", label: "همه وضعیت‌ها" },
  { value: "فعال", label: "فعال" },
  { value: "دعوت‌شده", label: "دعوت‌شده" },
  { value: "معلق", label: "معلق" },
] as const

const ROLE_FILTER_ITEMS = [
  { value: "همه", label: "همه نقش‌ها" },
  { value: "مدیر", label: "مدیر" },
  { value: "ویرایشگر", label: "ویرایشگر" },
  { value: "مشاهده‌گر", label: "مشاهده‌گر" },
] as const

const ROLE_ITEMS = [
  { value: "مدیر", label: "مدیر" },
  { value: "ویرایشگر", label: "ویرایشگر" },
  { value: "مشاهده‌گر", label: "مشاهده‌گر" },
] as const

const SORT_ITEMS = [
  { value: "نام", label: "نام" },
  { value: "نقش", label: "نقش" },
  { value: "وضعیت", label: "وضعیت" },
  { value: "عضویت", label: "تاریخ عضویت" },
] as const

const PAGE_SIZE_ITEMS = [
  { value: "3", label: "۳ ردیف" },
  { value: "5", label: "۵ ردیف" },
  { value: "8", label: "۸ ردیف" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export function UserManagementHub() {
  const [users, setUsers] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("همه")
  const [role, setRole] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("نام")
  const [selected, setSelected] = React.useState<string[]>([])
  const [pageSize, setPageSize] = React.useState("5")
  const [page, setPage] = React.useState(0)
  const [openId, setOpenId] = React.useState<string | null>(null)

  const filtered = React.useMemo(() => {
    let list = users.filter((user) => {
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
    list = [...list].sort((a, b) => {
      if (sort === "نقش") return a.role.localeCompare(b.role, "fa")
      if (sort === "وضعیت") return a.status.localeCompare(b.status, "fa")
      if (sort === "عضویت") return a.joined.localeCompare(b.joined, "fa")
      return a.name.localeCompare(b.name, "fa")
    })
    return list
  }, [users, query, status, role, sort])

  React.useEffect(() => {
    setPage(0)
  }, [query, status, role, pageSize])

  const size = Number(pageSize) || 5
  const pageCount = Math.max(1, Math.ceil(filtered.length / size))
  const safePage = Math.min(page, pageCount - 1)
  const slice = filtered.slice(safePage * size, safePage * size + size)

  const activeCount = users.filter((u) => u.status === "فعال").length
  const invitedCount = users.filter((u) => u.status === "دعوت‌شده").length

  const sliceIds = slice.map((u) => u.id)
  const allPageSelected =
    sliceIds.length > 0 && sliceIds.every((id) => selected.includes(id))

  function togglePage(checked: boolean) {
    if (checked) {
      setSelected((prev) => Array.from(new Set([...prev, ...sliceIds])))
    } else {
      setSelected((prev) => prev.filter((id) => !sliceIds.includes(id)))
    }
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 space-y-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            ادمین
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            مرکز مدیریت کاربران
          </h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر، مرتب‌سازی، صفحه‌بندی و دعوت
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardDescription>کل کاربران</CardDescription>
              <CardTitle className="text-2xl tracking-normal">
                {toFa(users.length)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardDescription>فعال</CardDescription>
              <CardTitle className="text-2xl tracking-normal">
                {toFa(activeCount)}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="bg-card">
            <CardHeader className="pb-2">
              <CardDescription>دعوت‌شده</CardDescription>
              <CardTitle className="text-2xl tracking-normal">
                {toFa(invitedCount)}
              </CardTitle>
            </CardHeader>
          </Card>
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
            items={[...ROLE_FILTER_ITEMS]}
            value={role}
            onValueChange={(value) => {
              if (ROLE_FILTER_ITEMS.some((item) => item.value === value)) {
                setRole(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {ROLE_FILTER_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            items={[...SORT_ITEMS]}
            value={sort}
            onValueChange={(value) => {
              if (SORT_ITEMS.some((item) => item.value === value)) {
                setSort(value as SortKey)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-44" dir="rtl">
              <SelectValue placeholder="مرتب‌سازی" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {SORT_ITEMS.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {selected.length > 0 && (
          <p className="text-sm text-muted-foreground">
            {toFa(selected.length)} کاربر انتخاب شده
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed bg-card px-6 py-16 text-center text-sm text-muted-foreground">
          کاربری با این فیلتر پیدا نشد.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-14 ps-4 pe-2">
                    <Checkbox
                      checked={allPageSelected}
                      onCheckedChange={(v) => togglePage(!!v)}
                      aria-label="انتخاب صفحه"
                    />
                  </TableHead>
                  <TableHead className="text-start">کاربر</TableHead>
                  <TableHead className="text-start">ایمیل</TableHead>
                  <TableHead className="text-start">نقش</TableHead>
                  <TableHead className="text-start">وضعیت</TableHead>
                  <TableHead className="text-start">عضویت</TableHead>
                  <TableHead className="pe-4 text-start">عملیات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slice.map((user) => (
                  <TableRow
                    key={user.id}
                    data-state={
                      selected.includes(user.id) ? "selected" : undefined
                    }
                  >
                    <TableCell className="ps-4 pe-2">
                      <Checkbox
                        checked={selected.includes(user.id)}
                        onCheckedChange={(v) =>
                          setSelected((prev) =>
                            v
                              ? [...prev, user.id]
                              : prev.filter((id) => id !== user.id)
                          )
                        }
                        aria-label={`انتخاب ${user.name}`}
                      />
                    </TableCell>
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
                    <TableCell className="text-start tracking-normal">
                      {user.joined}
                    </TableCell>
                    <TableCell className="pe-4">
                      <Popover
                        open={openId === user.id}
                        onOpenChange={(open) =>
                          setOpenId(open ? user.id : null)
                        }
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
                          <p className="px-2 py-1.5 text-sm font-medium">
                            عملیات
                          </p>
                          <Button
                            type="button"
                            variant="ghost"
                            className="h-8 w-full justify-start"
                            onClick={() => setOpenId(null)}
                          >
                            ویرایش
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
                            className="h-8 w-full justify-start text-destructive hover:text-destructive"
                            onClick={() => {
                              setUsers((prev) =>
                                prev.filter((u) => u.id !== user.id)
                              )
                              setOpenId(null)
                            }}
                          >
                            حذف
                          </Button>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Select
                items={[...PAGE_SIZE_ITEMS]}
                value={pageSize}
                onValueChange={(value) => {
                  if (PAGE_SIZE_ITEMS.some((item) => item.value === value)) {
                    setPageSize(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-36" dir="rtl">
                  <SelectValue>
                    {(value: string | null) =>
                      PAGE_SIZE_ITEMS.find((item) => item.value === value)
                        ?.label ?? "۵ ردیف"
                    }
                  </SelectValue>
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {PAGE_SIZE_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm tracking-normal text-muted-foreground">
                صفحه {toFa(safePage + 1)} از {toFa(pageCount)}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={safePage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                قبلی
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={safePage >= pageCount - 1}
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              >
                بعدی
              </Button>
            </div>
          </div>
        </>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa" className="bg-card">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">دعوت کاربر جدید</CardTitle>
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
            <Select items={[...ROLE_ITEMS]} defaultValue="مشاهده‌گر">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نقش" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {ROLE_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button type="submit" className="sm:shrink-0">
              ارسال دعوت
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
