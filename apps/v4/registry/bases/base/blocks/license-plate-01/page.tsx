"use client"

import { cn } from "cn"

import { PlateInput } from "@/registry/bases/base/blocks/license-plate-01/components/plate-input"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Label } from "@/registry/bases/base/ui/label"

export default function Page({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn(
        "bg-muted text-foreground flex min-h-[520px] items-center justify-center p-6",
        className
      )}
      {...props}
    >
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>پلاک خودرو</CardTitle>
          <CardDescription>
            شماره پلاک را مانند پلاک فلزی وارد کنید
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid justify-items-center gap-2">
            <Label htmlFor="plate" className="w-full text-start">
              شماره پلاک
            </Label>
            <PlateInput id="plate" name="plate" />
          </div>
          <Button type="button" className="w-full">
            ادامه
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
