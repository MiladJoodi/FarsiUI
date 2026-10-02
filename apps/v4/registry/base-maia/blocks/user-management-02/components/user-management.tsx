import { Avatar, AvatarFallback } from "@/registry/base-maia/ui/avatar"
import { Badge } from "@/registry/base-maia/ui/badge"
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
    initials: "سم",
  },
  {
    name: "علی رضایی",
    email: "ali@example.com",
    role: "ویرایشگر",
    status: "دعوت‌شده",
    initials: "عر",
  },
  {
    name: "مینا کریمی",
    email: "mina@example.com",
    role: "مشاهده‌گر",
    status: "فعال",
    initials: "مک",
  },
  {
    name: "رضا نوری",
    email: "reza@example.com",
    role: "ویرایشگر",
    status: "معلق",
    initials: "رن",
  },
] as const

export function UserManagementWithRoles() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">کاربران و نقش‌ها</h2>
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
            {USERS.map((user) => (
              <TableRow key={user.email}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarFallback>{user.initials}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{user.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span dir="ltr" className="inline-block text-start text-sm">
                    {user.email}
                  </span>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "فعال" ? "default" : "secondary"}
                  >
                    {user.status}
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
