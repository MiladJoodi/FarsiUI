"use client"

import * as React from "react"
import { MoreHorizontalIcon, SearchIcon } from "lucide-react"

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

const ROWS = [
  {
    id: "u1",
    name: "سارا محمدی",
    email: "sara@example.com",
    team: "محصول",
    status: "فعال",
    joined: "۱۴۰۳/۱۱/۰۲",
  },
  {
    id: "u2",
    name: "علی رضایی",
    email: "ali@example.com",
    team: "طراحی",
    status: "دعوت‌شده",
    joined: "۱۴۰۵/۰۱/۱۵",
  },
  {
    id: "u3",
    name: "مینا کریمی",
    email: "mina@example.com",
    team: "مهندسی",
    status: "فعال",
    joined: "۱۴۰۲/۰۸/۲۰",
  },
  {
    id: "u4",
    name: "رضا نوری",
    email: "reza@example.com",
    team: "پشتیبانی",
    status: "معلق",
    joined: "۱۴۰۳/۰۴/۰۹",
  },
  {
    id: "u5",
    name: "نگار احمدی",
    email: "negar@example.com",
    team: "مهندسی",
    status: "فعال",
    joined: "۱۴۰۳/۰۹/۲۸",
  },
  {
    id: "u6",
    name: "حسین کاظمی",
    email: "hossein@example.com",
    team: "فروش",
    status: "دعوت‌شده",
    joined: "۱۴۰۵/۰۶/۰۱",
  },
] as const

const TEAM_ITEMS = [
  { value: "همه", label: "همه تیم‌ها" },
  { value: "محصول", label: "محصول" },
  { value: "طراحی", label: "طراحی" },
  { value: "مهندسی", label: "مهندسی" },
  { value: "پشتیبانی", label: "پشتیبانی" },
  { value: "فروش", label: "فروش" },
] as const

const SORT_ITEMS = [
  { value: "نام", label: "نام" },
  { value: "تیم", label: "تیم" },
  { value: "وضعیت", label: "وضعیت" },
  { value: "عضویت", label: "تاریخ عضویت" },
] as const

type SortKey = (typeof SORT_ITEMS)[number]["value"]

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function DataTableHub() {
  const [query, setQuery] = React.useState("")
  const [team, setTeam] = React.useState("همه")
  const [sort, setSort] = React.useState<SortKey>("نام")
  const [selected, setSelected] = React.useState<string[]>([])
  const [openRow, setOpenRow] = React.useState<string | null>(null)

  const filtered = React.useMemo(() => {
    let list = ROWS.filter((row) => {
      const matchTeam = team === "همه" || row.team === team
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        row.name.includes(query) ||
        row.email.toLowerCase().includes(q) ||
        row.team.includes(query) ||
        row.status.includes(query)
      return matchTeam && matchQuery
    })
    list = [...list].sort((a, b) => {
      if (sort === "تیم") return a.team.localeCompare(b.team, "fa")
      if (sort === "وضعیت") return a.status.localeCompare(b.status, "fa")
      if (sort === "عضویت") return a.joined.localeCompare(b.joined, "fa")
      return a.name.localeCompare(b.name, "fa")
    })
    return list
  }, [query, team, sort])

  const allIds = filtered.map((r) => r.id)
  const allSelected =
    allIds.length > 0 && allIds.every((id) => selected.includes(id))

  function toggleAll(checked: boolean) {
    if (checked) {
      setSelected((prev) => Array.from(new Set([...prev, ...allIds])))
    } else {
      setSelected((prev) => prev.filter((id) => !allIds.includes(id)))
    }
  }

  function toggleOne(id: string, checked: boolean) {
    setSelected((prev) =>
      checked ? [...prev, id] : prev.filter((x) => x !== id)
    )
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
            مدیریت اعضا
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            جدول کامل کاربران
          </h2>
          <p className="mt-2 text-muted-foreground">
            جستجو، فیلتر تیم، مرتب‌سازی، انتخاب ردیف و منوی عملیات
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="جستجو نام، ایمیل یا تیم…"
              className="ps-9"
              dir="rtl"
            />
          </div>
          <Select
            items={[...TEAM_ITEMS]}
            value={team}
            onValueChange={(value) => {
              if (TEAM_ITEMS.some((item) => item.value === value)) {
                setTeam(value as string)
              }
            }}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              {TEAM_ITEMS.map((item) => (
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
            {toFa(selected.length)} ردیف انتخاب شده
          </p>
        )}
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
                <TableHead className="w-10">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={(v) => toggleAll(!!v)}
                    aria-label="انتخاب همه"
                  />
                </TableHead>
                <TableHead className="text-start">نام</TableHead>
                <TableHead className="text-start">ایمیل</TableHead>
                <TableHead className="text-start">تیم</TableHead>
                <TableHead className="text-start">وضعیت</TableHead>
                <TableHead className="text-start">عضویت</TableHead>
                <TableHead className="text-start">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={
                    selected.includes(row.id) ? "selected" : undefined
                  }
                >
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(row.id)}
                      onCheckedChange={(v) => toggleOne(row.id, !!v)}
                      aria-label={`انتخاب ${row.name}`}
                    />
                  </TableCell>
                  <TableCell className="text-start font-medium">
                    {row.name}
                  </TableCell>
                  <TableCell>
                    <span
                      dir="ltr"
                      className="block text-start text-sm tracking-normal"
                    >
                      {row.email}
                    </span>
                  </TableCell>
                  <TableCell className="text-start">{row.team}</TableCell>
                  <TableCell className="text-start">
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                  <TableCell className="text-start tracking-normal">
                    {row.joined}
                  </TableCell>
                  <TableCell>
                    <Popover
                      open={openRow === row.id}
                      onOpenChange={(open) => setOpenRow(open ? row.id : null)}
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
                        <span className="sr-only">منوی عملیات</span>
                      </PopoverTrigger>
                      <PopoverContent
                        dir="rtl"
                        lang="fa"
                        align="end"
                        className="w-40 space-y-1 p-2"
                      >
                        <p className="px-2 py-1.5 text-sm font-medium">
                          عملیات
                        </p>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenRow(null)}
                        >
                          ویرایش پروفایل
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start"
                          onClick={() => setOpenRow(null)}
                        >
                          ارسال ایمیل
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          className="h-8 w-full justify-start text-destructive hover:text-destructive"
                          onClick={() => setOpenRow(null)}
                        >
                          تعلیق حساب
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Separator className="my-10" />

      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <CardTitle className="text-lg">دعوت عضو جدید</CardTitle>
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
    </section>
  )
}
