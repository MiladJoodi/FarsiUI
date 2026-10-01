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
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/bases/base/ui/input-otp"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground flex min-h-[520px] items-center justify-center p-6", className)}
      {...props}
    >
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle>تأیید کد یکبارمصرف</CardTitle>
          <CardDescription>کد ۶ رقمی ارسال‌شده به موبایل را وارد کنید</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <InputOTP maxLength={6} dir="ltr">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <Button className="w-full">تأیید کد</Button>
        </CardContent>
      </Card>
    </div>
  )
}
