import { Badge } from "@/styles/base-rhea/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import { Item, ItemContent } from "@/styles/base-rhea/ui/item"
import { Separator } from "@/styles/base-rhea/ui/separator"

const netRoyalties = 1248.75
const processingFee = 37.46
const totalClaimable = netRoyalties - processingFee

const formatCurrency = (amount: number) =>
  amount.toLocaleString("fa-IR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

export function ClaimableBalance() {
  return (
    <Card>
      <CardHeader>
        <CardDescription>موجودی قابل برداشت</CardDescription>
        <CardTitle className="text-3xl tracking-normal whitespace-nowrap">
          {formatCurrency(totalClaimable)} تومان
        </CardTitle>
        <Badge variant="outline">
          <span className="size-2 rounded-full bg-yellow-500" />
          در انتظار راه‌اندازی
        </Badge>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-end">
        <Item variant="muted" className="flex-col items-stretch">
          <ItemContent className="gap-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                خالص حق‌الامتیاز
              </span>
              <span className="text-sm font-medium tracking-normal">
                {formatCurrency(netRoyalties)} تومان
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">کارمزد پردازش</span>
              <span className="text-sm font-medium tracking-normal">
                −{formatCurrency(processingFee)} تومان
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                مجموع آمادهٔ برداشت
              </span>
              <span className="text-sm font-semibold tracking-normal">
                {formatCurrency(totalClaimable)} تومان
              </span>
            </div>
          </ItemContent>
        </Item>
      </CardContent>
      <CardFooter>
        <CardDescription>
          پس از اتصال حساب بانکی، موجودی‌های بالای ۱۰٬۰۰۰ تومان در پانزدهم هر ماه
          به‌صورت خودکار برای واریز ماهانه واجد شرایط می‌شوند.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
