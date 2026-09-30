import { Button } from "@/styles/base-nova/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export function PopoverAlignments() {
  return (
    <div dir="rtl" className="flex gap-6">
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>
          شروع
        </PopoverTrigger>
        <PopoverContent align="start" className="w-40">
          تراز به شروع
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>
          مرکز
        </PopoverTrigger>
        <PopoverContent align="center" className="w-40">
          تراز به مرکز
        </PopoverContent>
      </Popover>
      <Popover>
        <PopoverTrigger render={<Button variant="outline" size="sm" />}>
          پایان
        </PopoverTrigger>
        <PopoverContent align="end" className="w-40">
          تراز به پایان
        </PopoverContent>
      </Popover>
    </div>
  )
}
