import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-rhea/ui/table"

const USERS = [
  { name: "سارا محمدی", status: "فعال", joined: "۱۴۰۵/۰۷/۱۰" },
  { name: "علی رضایی", status: "در انتظار", joined: "۱۴۰۵/۰۷/۱۱" },
  { name: "مینا کریمی", status: "معلق", joined: "۱۴۰۵/۰۷/۱۲" },
  { name: "رضا نوری", status: "فعال", joined: "۱۴۰۵/۰۷/۱۳" },
] as const

export function UserManagementSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">مدیریت کاربران</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            جدول ساده بدون فیلتر
          </p>
        </div>
        <Button size="sm">افزودن کاربر</Button>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">نام</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">عضویت</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {USERS.map((user) => (
              <TableRow key={user.name}>
                <TableCell className="text-start font-medium">
                  {user.name}
                </TableCell>
                <TableCell className="text-start">
                  <Badge variant="outline" className="border">
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-start tracking-normal">
                  {user.joined}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
