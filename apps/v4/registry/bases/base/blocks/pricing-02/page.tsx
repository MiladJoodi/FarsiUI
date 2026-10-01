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

const planPrices = [199000, 499000, 1200000]

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground min-h-[520px] p-6 md:p-10", className)}
      {...props}
    >
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">قیمت‌گذاری</h2>
        <p className="mt-2 text-muted-foreground">پلن مناسب خود را انتخاب کنید</p>
      </div>
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
        {["پایه", "حرفه‌ای", "سازمانی"].map((plan, i) => (
          <Card key={plan} className={i === 1 ? "border-primary shadow-md" : ""}>
            <CardHeader>
              {i === 1 ? <Badge className="w-fit">پیشنهادی</Badge> : null}
              <CardTitle>{plan}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold text-foreground">{planPrices[i].toLocaleString("fa-IR")}</span>
                <span className="text-muted-foreground"> تومان / ماه</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              دسترسی به امکانات قیمت‌گذاری با پشتیبانی فارسی و راست‌چین کامل.
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={i === 1 ? "default" : "outline"}>انتخاب پلن</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
