import { Avatar, AvatarFallback } from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-rhea/ui/table"

const ROWS = [
  {
    name: "سارا محمدی",
    email: "sara@example.com",
    role: "مدیر محصول",
    status: "فعال",
    initials: "سم",
  },
  {
    name: "علی رضایی",
    email: "ali@example.com",
    role: "طراح UI",
    status: "در انتظار",
    initials: "عر",
  },
  {
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "توسعه‌دهنده",
    status: "فعال",
    initials: "مک",
  },
  {
    name: "رضا نوری",
    email: "reza@example.com",
    role: "پشتیبانی",
    status: "غیرفعال",
    initials: "رن",
  },
] as const

export function DataTableWithEmail() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          جدول با ایمیل و نقش
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          نام فارسی راست‌چین؛ ایمیل انگلیسی چپ‌چین
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border">
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
            {ROWS.map((row) => (
              <TableRow key={row.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarFallback>{row.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{row.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span dir="ltr" className="inline-block text-start text-sm">
                    {row.email}
                  </span>
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Badge
                    variant={row.status === "فعال" ? "default" : "secondary"}
                  >
                    {row.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
