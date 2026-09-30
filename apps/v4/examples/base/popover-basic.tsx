import { Button } from "@/styles/base-nova/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export function PopoverBasic() {
  return (
    <div dir="rtl">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" className="w-fit" />}>
          باز کردن پاپ‌اور
        </PopoverTrigger>
        <PopoverContent align="start">
          <PopoverHeader>
            <PopoverTitle>ابعاد</PopoverTitle>
            <PopoverDescription>
              ابعاد لایه را تنظیم کنید.
            </PopoverDescription>
          </PopoverHeader>
        </PopoverContent>
      </Popover>
    </div>
  )
}
