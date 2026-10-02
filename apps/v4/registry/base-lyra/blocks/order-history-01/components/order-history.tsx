import { Badge } from "@/registry/base-lyra/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-lyra/ui/table"

const ORDERS = [
  {
    id: "#۱۴۰۴۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۴",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
  },
  {
    id: "#۱۴۰۴۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۴",
    status: "در حال ارسال",
    total: "۳٬۱۵۰٬۰۰۰",
  },
  {
    id: "#۱۴۰۴۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۴",
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

      <div className="overflow-hidden rounded-xl border">
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
                <TableCell>
                  <bdi dir="ltr" className="font-mono text-xs">
                    {order.id}
                  </bdi>
                </TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{order.status}</Badge>
                </TableCell>
                <TableCell>
                  <bdi dir="ltr" className="tabular-nums">
                    {order.total}
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
