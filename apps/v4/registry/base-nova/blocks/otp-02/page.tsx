import { cn } from "cn"

import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/base-nova/ui/drawer"
import { Input } from "@/registry/base-nova/ui/input"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/registry/base-nova/ui/input-otp"
import { Label } from "@/registry/base-nova/ui/label"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "flex min-h-[420px] flex-col items-center justify-center gap-4 bg-muted p-6 text-foreground",
        className
      )}
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
