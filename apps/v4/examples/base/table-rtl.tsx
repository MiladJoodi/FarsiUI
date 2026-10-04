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
    invoice: "۱",
    paymentStatus: "پرداخت‌شده",
    totalAmount: "۲٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
  {
    invoice: "۲",
    paymentStatus: "در انتظار",
    totalAmount: "۱٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "پی‌پال",
  },
  {
    invoice: "۳",
    paymentStatus: "پرداخت‌نشده",
    totalAmount: "۳٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "انتقال بانکی",
  },
  {
    invoice: "۴",
    paymentStatus: "پرداخت‌شده",
    totalAmount: "۴٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
  {
    invoice: "۵",
    paymentStatus: "پرداخت‌شده",
    totalAmount: "۵٬۵۰۰٬۰۰۰ تومان",
    paymentMethod: "پی‌پال",
  },
  {
    invoice: "۶",
    paymentStatus: "در انتظار",
    totalAmount: "۲٬۰۰۰٬۰۰۰ تومان",
    paymentMethod: "انتقال بانکی",
  },
  {
    invoice: "۷",
    paymentStatus: "پرداخت‌نشده",
    totalAmount: "۳٬۰۰۰٬۰۰۰ تومان",
    paymentMethod: "کارت اعتباری",
  },
]

export default function TableRtl() {
  return (
    <Table dir="rtl">
      <TableCaption>فهرستی از فاکتورهای اخیر شما.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">فاکتور</TableHead>
          <TableHead>وضعیت</TableHead>
          <TableHead>روش</TableHead>
          <TableHead>مبلغ</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>جمع</TableCell>
          <TableCell>۲۵٬۰۰۰٬۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
