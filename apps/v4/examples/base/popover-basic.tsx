import { Button } from "@/registry/bases/base/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"

export default function PopoverBasic() {
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
