"use client"

import * as React from "react"
import { MoreHorizontalIcon, SearchIcon } from "lucide-react"

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
import { Checkbox } from "@/registry/base-maia/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-maia/ui/dropdown-menu"
import { Input } from "@/registry/base-maia/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-maia/ui/select"
import { Separator } from "@/registry/base-maia/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-maia/ui/table"

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
    initials: "سم",
  },
  {
    id: "2",
    name: "علی رضایی",
    email: "ali@example.com",
    role: "ویرایشگر",
    status: "فعال",
    joined: "۱۴۰۴/۰۱/۱۵",
    initials: "عر",
  },
  {
    id: "3",
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "مشاهده‌گر",
    status: "دعوت‌شده",
    joined: "۱۴۰۴/۰۶/۰۱",
    initials: "مک",
  },
  {
    id: "4",
    name: "رضا نوری",
    email: "reza@example.com",
    role: "ویرایشگر",
    status: "معلق",
    joined: "۱۴۰۳/۰۴/۰۹",
    initials: "رن",
  },
  {
    id: "5",
    name: "نگار احمدی",
    email: "negar@example.com",
    role: "مدیر",
    status: "فعال",
    joined: "۱۴۰۲/۰۸/۲۰",
    initials: "نا",
  },
  {
    id: "6",
    name: "حسین کاظمی",
    email: "hossein@example.com",
    role: "مشاهده‌گر",
    status: "دعوت‌شده",
    joined: "۱۴۰۴/۰۷/۰۱",
    initials: "هک",
  },
  {
    id: "7",
    name: "لیلا موسوی",
    email: "leila@example.com",
    role: "ویرایشگر",
    status: "فعال",
    joined: "۱۴۰۳/۰۹/۲۸",
    initials: "لم",
  },
  {
    id: "8",
    name: "امیر حسینی",
    email: "amir@example.com",
    role: "مشاهده‌گر",
    status: "فعال",
    joined: "۱۴۰۴/۰۲/۱۲",
    initials: "اح",
  },
]

type SortKey = "name" | "role" | "status" | "joined"

const SORT_LABELS: Record<SortKey, string> = {
  name: "نام",
  role: "نقش",
  status: "وضعیت",
  joined: "تاریخ عضویت",
}

export function UserManagementHub() {
  const [users, setUsers] = React.useState(INITIAL)
  const [query, setQuery] = React.useState("")
  const [status, setStatus] = React.useState("all")
  const [role, setRole] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("name")
  const [selected, setSelected] = React.useState<string[]>([])
  const [pageSize, setPageSize] = React.useState("5")
  const [page, setPage] = React.useState(0)

  const filtered = React.useMemo(() => {
    let list = users.filter((user) => {
      const matchStatus = status === "all" || user.status === status
      const matchRole = role === "all" || user.role === role
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        user.name.includes(query) ||
        user.email.toLowerCase().includes(q) ||
        user.role.includes(query)
      return matchStatus && matchRole && matchQuery
    })
    list = [...list].sort((a, b) => a[sort].localeCompare(b[sort], "fa"))
    return list
  }, [users, query, status, role, sort])

  React.useEffect(() => {
    setPage(0)
  }, [query, status, role, pageSize])

  const size = Number(pageSize)
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
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>کل کاربران</CardDescription>
              <CardTitle className="text-2xl">
                <bdi dir="ltr">{users.length}</bdi>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>فعال</CardDescription>
              <CardTitle className="text-2xl">
                <bdi dir="ltr">{activeCount}</bdi>
              </CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>دعوت‌شده</CardDescription>
              <CardTitle className="text-2xl">
                <bdi dir="ltr">{invitedCount}</bdi>
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
            value={status}
            onValueChange={(value) => setStatus((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-36" dir="rtl">
              <SelectValue placeholder="وضعیت" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه وضعیت‌ها</SelectItem>
              <SelectItem value="فعال">فعال</SelectItem>
              <SelectItem value="دعوت‌شده">دعوت‌شده</SelectItem>
              <SelectItem value="معلق">معلق</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={role}
            onValueChange={(value) => setRole((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-36" dir="rtl">
              <SelectValue placeholder="نقش" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه نقش‌ها</SelectItem>
              <SelectItem value="مدیر">مدیر</SelectItem>
              <SelectItem value="ویرایشگر">ویرایشگر</SelectItem>
              <SelectItem value="مشاهده‌گر">مشاهده‌گر</SelectItem>
            </SelectContent>
          </Select>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full sm:w-auto" />}
            >
              مرتب‌سازی
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              className="w-44"
            >
              <DropdownMenuLabel>مرتب‌سازی بر اساس</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={sort}
                onValueChange={(v) => setSort((v as SortKey) ?? "name")}
              >
                {(Object.keys(SORT_LABELS) as SortKey[]).map((key) => (
                  <DropdownMenuRadioItem key={key} value={key}>
                    {SORT_LABELS[key]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {selected.length > 0 && (
          <p className="text-sm text-muted-foreground">
            <bdi dir="ltr">{selected.length}</bdi> کاربر انتخاب شده
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          کاربری با این فیلتر پیدا نشد.
        </p>
      ) : (
        <>
          <div className="overflow-x-auto rounded-xl border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-10">
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
                  <TableHead className="w-12">
                    <span className="sr-only">عملیات</span>
                  </TableHead>
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
                    <TableCell>
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
                        <Avatar className="size-8">
                          <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{user.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span
                        dir="ltr"
                        className="inline-block text-start text-sm"
                      >
                        {user.email}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{user.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <bdi dir="ltr" className="text-sm tabular-nums">
                        {user.joined}
                      </bdi>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          render={
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8"
                            />
                          }
                        >
                          <MoreHorizontalIcon className="size-4" />
                          <span className="sr-only">منوی کاربر</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          dir="rtl"
                          lang="fa"
                          align="end"
                          className="w-44"
                        >
                          <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>ویرایش</DropdownMenuItem>
                          <DropdownMenuItem>ارسال ایمیل</DropdownMenuItem>
                          <DropdownMenuItem
                            variant="destructive"
                            onClick={() =>
                              setUsers((prev) =>
                                prev.filter((u) => u.id !== user.id)
                              )
                            }
                          >
                            حذف
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Select
                value={pageSize}
                onValueChange={(value) => setPageSize((value as string) ?? "5")}
              >
                <SelectTrigger className="w-32" dir="rtl">
                  <SelectValue placeholder="تعداد" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="3">۳ ردیف</SelectItem>
                  <SelectItem value="5">۵ ردیف</SelectItem>
                  <SelectItem value="8">۸ ردیف</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                صفحه <bdi dir="ltr">{safePage + 1}</bdi> از{" "}
                <bdi dir="ltr">{pageCount}</bdi>
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                disabled={safePage === 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                قبلی
              </Button>
              <Button
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

      <Card dir="rtl" lang="fa">
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
            <Select defaultValue="مشاهده‌گر">
              <SelectTrigger className="w-full sm:w-36" dir="rtl">
                <SelectValue placeholder="نقش" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="مدیر">مدیر</SelectItem>
                <SelectItem value="ویرایشگر">ویرایشگر</SelectItem>
                <SelectItem value="مشاهده‌گر">مشاهده‌گر</SelectItem>
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
