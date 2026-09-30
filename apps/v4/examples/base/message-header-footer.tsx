import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import {
  Message,
  MessageContent,
  MessageFooter,
  MessageHeader,
} from "@/styles/base-rhea/ui/message"

export function MessageHeaderFooterDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <MessageHeader>اولیویا</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>لاگ‌ها را قبلاً بررسی کردم.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              گزارش را برای تیم بفرستید. اگر کمک لازم داشتید به @shadcn پیام
              دهید.
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
