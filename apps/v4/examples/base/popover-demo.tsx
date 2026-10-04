import { Button } from "@/registry/bases/base/ui/button"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

export default function PopoverDemo() {
  return (
    <div dir="rtl">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" />}>
          باز کردن پاپ‌اور
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="leading-none font-medium">ابعاد</h4>
              <p className="text-sm text-muted-foreground">
                ابعاد لایه را تنظیم کنید.
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">عرض</Label>
                <Input
                  id="width"
                  defaultValue="۱۰۰٪"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxWidth">حداکثر عرض</Label>
                <Input
                  id="maxWidth"
                  defaultValue="۳۰۰px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">ارتفاع</Label>
                <Input
                  id="height"
                  defaultValue="۲۵px"
                  className="col-span-2 h-8"
                />
              </div>
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="maxHeight">حداکثر ارتفاع</Label>
                <Input
                  id="maxHeight"
                  defaultValue="بدون محدودیت"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
