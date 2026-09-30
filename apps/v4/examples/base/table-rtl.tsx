import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/styles/base-nova/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "پرداخت‌شده",
    totalAmount: "۲٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
  {
    invoice: "INV002",
    paymentStatus: "در انتظار",
    totalAmount: "۱٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "پی‌پال",
  },
  {
    invoice: "INV003",
    paymentStatus: "پرداخت‌نشده",
    totalAmount: "۳٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "انتقال بانکی",
  },
  {
    invoice: "INV004",
    paymentStatus: "پرداخت‌شده",
    totalAmount: "۴٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
  {
    invoice: "INV005",
    paymentStatus: "پرداخت‌شده",
    totalAmount: "۵٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "پی‌پال",
  },
  {
    invoice: "INV006",
    paymentStatus: "در انتظار",
    totalAmount: "۲٬۰۰۰٬۰۰۰ تومان",
    paymentMethod: "انتقال بانکی",
  },
  {
    invoice: "INV007",
    paymentStatus: "پرداخت‌نشده",
    totalAmount: "۳٬۰۰۰٬۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
]

export function TableRtl() {
  return (
    <Table dir="rtl">
      <TableCaption>فهرستی از فاکتورهای اخیر شما.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">فاکتور</TableHead>
          <TableHead>وضعیت</TableHead>
          <TableHead>روش</TableHead>
          <TableHead className="text-end">مبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-end">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>جمع</TableCell>
          <TableCell className="text-end">۲۵٬۰۰۰٬۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
