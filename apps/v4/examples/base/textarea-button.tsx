import { Button } from "@/registry/bases/base/ui/button"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export default function TextareaButton() {
  return (
    <div dir="rtl" className="grid w-full gap-2">
      <Textarea placeholder="پیام خود را بنویسید..." />
      <Button>ارسال پیام</Button>
    </div>
  )
}
