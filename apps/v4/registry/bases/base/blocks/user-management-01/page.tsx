import { cn } from "cn"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Badge } from "@/registry/bases/base/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground min-h-[480px] p-6", className)}
      {...props}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold">مدیریت کاربران</h2>
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
                <TableCell><Badge variant="secondary">{["فعال", "در انتظار", "بسته"][i]}</Badge></TableCell>
                <TableCell className="tabular-nums">{["۱۴۰۴/۰۷/۱۰", "۱۴۰۴/۰۷/۱۱", "۱۴۰۴/۰۷/۱۲"][i]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
