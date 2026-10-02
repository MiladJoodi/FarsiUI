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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-luma/ui/dropdown-menu"
import { Input } from "@/registry/base-luma/ui/input"
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
    joined: "۱۴۰۴/۰۱/۱۵",
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
    joined: "۱۴۰۴/۰۶/۰۱",
  },
] as const

type SortKey = "name" | "team" | "status" | "joined"

const SORT_LABELS: Record<SortKey, string> = {
  name: "نام",
  team: "تیم",
  status: "وضعیت",
  joined: "تاریخ عضویت",
}

export function DataTableHub() {
  const [query, setQuery] = React.useState("")
  const [team, setTeam] = React.useState("all")
  const [sort, setSort] = React.useState<SortKey>("name")
  const [selected, setSelected] = React.useState<string[]>([])

  const filtered = React.useMemo(() => {
    let list = ROWS.filter((row) => {
      const matchTeam = team === "all" || row.team === team
      const q = query.trim().toLowerCase()
      const matchQuery =
        !q ||
        row.name.includes(query) ||
        row.email.toLowerCase().includes(q) ||
        row.team.includes(query) ||
        row.status.includes(query)
      return matchTeam && matchQuery
    })
    list = [...list].sort((a, b) => a[sort].localeCompare(b[sort], "fa"))
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
            value={team}
            onValueChange={(value) => setTeam((value as string) ?? "all")}
          >
            <SelectTrigger className="w-full sm:w-40" dir="rtl">
              <SelectValue placeholder="تیم" />
            </SelectTrigger>
            <SelectContent dir="rtl" lang="fa">
              <SelectItem value="all">همه تیم‌ها</SelectItem>
              <SelectItem value="محصول">محصول</SelectItem>
              <SelectItem value="طراحی">طراحی</SelectItem>
              <SelectItem value="مهندسی">مهندسی</SelectItem>
              <SelectItem value="پشتیبانی">پشتیبانی</SelectItem>
              <SelectItem value="فروش">فروش</SelectItem>
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
            <bdi dir="ltr">{selected.length}</bdi> ردیف انتخاب شده
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-xl border border-dashed px-6 py-16 text-center text-sm text-muted-foreground">
          کاربری با این فیلتر پیدا نشد.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border">
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
                <TableHead className="w-12">
                  <span className="sr-only">عملیات</span>
                </TableHead>
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
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell>
                    <span dir="ltr" className="inline-block text-start text-sm">
                      {row.email}
                    </span>
                  </TableCell>
                  <TableCell>{row.team}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{row.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <bdi dir="ltr" className="text-sm tabular-nums">
                      {row.joined}
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
                        <span className="sr-only">منوی عملیات</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        dir="rtl"
                        lang="fa"
                        align="end"
                        className="w-40"
                      >
                        <DropdownMenuLabel>عملیات</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>ویرایش پروفایل</DropdownMenuItem>
                        <DropdownMenuItem>ارسال ایمیل</DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          تعلیق حساب
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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
