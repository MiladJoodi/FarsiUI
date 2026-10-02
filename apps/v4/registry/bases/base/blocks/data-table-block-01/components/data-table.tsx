import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

const ROWS = [
  { name: "سارا محمدی", status: "فعال", date: "۱۴۰۵/۰۷/۱۰" },
  { name: "علی رضایی", status: "در انتظار", date: "۱۴۰۵/۰۷/۱۱" },
  { name: "مینا کریمی", status: "بسته", date: "۱۴۰۵/۰۷/۱۲" },
  { name: "رضا نوری", status: "فعال", date: "۱۴۰۵/۰۷/۱۳" },
] as const

export function DataTableSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">جدول سادهٔ کاربران</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          نام، وضعیت و تاریخ — بدون فیلتر
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">نام</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{row.status}</Badge>
                </TableCell>
                <TableCell>
                  <bdi dir="ltr" className="tabular-nums">
                    {row.date}
                  </bdi>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
