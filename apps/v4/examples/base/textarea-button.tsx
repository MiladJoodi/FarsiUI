import { Button } from "@/styles/base-nova/ui/button"
import { Textarea } from "@/styles/base-nova/ui/textarea"

export default function TextareaButton() {
  return (
    <div dir="rtl" className="grid w-full gap-2">
      <Textarea placeholder="پیام خود را بنویسید..." />
      <Button>ارسال پیام</Button>
    </div>
  )
}
