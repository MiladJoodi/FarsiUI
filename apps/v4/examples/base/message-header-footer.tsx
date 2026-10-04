import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/styles/base-rhea/ui/message"

export default function MessageHeaderFooterDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <MessageHeader>مریم</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>لاگ‌ها رو قبلاً چک کردم.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              گزارش رو برای تیم بفرست. اگر کمک خواستی به علی پیام بده.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <div>
              خوانده‌شده <span className="font-normal">دیروز</span>
            </div>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
