import { Badge } from "@/registry/base-maia/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-maia/ui/table"

const ORDERS = [
  {
    id: "#۱۴۰۵۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
  },
  {
    id: "#۱۴۰۵۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۵",
    status: "در حال ارسال",
    total: "۳٬۱۵۰٬۰۰۰",
  },
  {
    id: "#۱۴۰۵۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۵",
    status: "لغو شده",
    total: "۱٬۸۵۰٬۰۰۰",
  },
] as const

export function OrderHistorySimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">تاریخچه سفارش‌ها</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          جدول ساده بدون فیلتر
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">شماره</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">مبلغ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ORDERS.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="tracking-normal">{order.id}</TableCell>
                <TableCell className="tracking-normal">{order.date}</TableCell>
                <TableCell>
                  <Badge variant="outline" className="border">
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="tracking-normal">{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
