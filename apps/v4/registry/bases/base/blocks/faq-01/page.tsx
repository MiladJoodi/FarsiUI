import { cn } from "cn"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"

export default function Page({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      dir="rtl"
      lang="fa"
      className={cn("bg-background text-foreground mx-auto min-h-[420px] max-w-2xl p-6", className)}
      {...props}
    >
      <h2 className="mb-6 text-center text-2xl font-bold">پرسش‌های متداول</h2>
      <Accordion type="single" collapsible className="w-full">
        {["چطور شروع کنم؟", "آیا راست‌چین پشتیبانی می‌شود؟", "هزینه اشتراک چقدر است؟"].map((q, i) => (
          <AccordionItem key={q} value={"item-" + i}>
            <AccordionTrigger>{q}</AccordionTrigger>
            <AccordionContent>
              پاسخ نمونه برای «{q}» — همهٔ متن‌ها فارسی و راست‌چین هستند.
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
