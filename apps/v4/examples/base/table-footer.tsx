import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

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
]

export default function TableFooterExample() {
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
          <TableCell>۷٬۵۰۰٬۰۰۰ تومان</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
