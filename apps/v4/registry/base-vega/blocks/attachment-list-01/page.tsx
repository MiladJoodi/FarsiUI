import { cn } from "cn"

import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/base-vega/ui/table"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("min-h-[480px] bg-muted p-6 text-foreground", className)}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">پیوست‌ها</h2>
        <Button size="sm">افزودن</Button>
      </div>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-start">نام</TableHead>
              <TableHead className="text-start">وضعیت</TableHead>
              <TableHead className="text-start">تاریخ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {["سارا محمدی", "علی رضایی", "مینا کریمی"].map((name, i) => (
              <TableRow key={name}>
                <TableCell>{name}</TableCell>
                <TableCell>
                  <Badge variant="secondary">
                    {["فعال", "در انتظار", "بسته"][i]}
                  </Badge>
                </TableCell>
                <TableCell className="tabular-nums">
                  {["۱۴۰۴/۰۷/۱۰", "۱۴۰۴/۰۷/۱۱", "۱۴۰۴/۰۷/۱۲"][i]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
