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
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"
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
      className={cn("bg-muted text-foreground flex min-h-[420px] flex-col items-center justify-center gap-4 p-6", className)}
      {...props}
    >
      <Drawer>
        <DrawerTrigger render={<Button variant="outline" />}>
          باز کردن تأیید OTP
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader>
            <DrawerTitle>تأیید کد یکبارمصرف</DrawerTitle>
            <DrawerDescription>کد را وارد کنید تا ادامه دهید</DrawerDescription>
          </DrawerHeader>
          <div className="flex justify-center px-4 pb-2" dir="ltr">
            <InputOTP maxLength={4}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="size-10 text-base" />
                <InputOTPSlot index={1} className="size-10 text-base" />
                <InputOTPSlot index={2} className="size-10 text-base" />
                <InputOTPSlot index={3} className="size-10 text-base" />
              </InputOTPGroup>
            </InputOTP>
          </div>
          <DrawerFooter>
            <Button>تأیید</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
