import { Markdown } from "@/components/markdown"
import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import { Message, MessageContent } from "@/styles/base-rhea/ui/message"

const response = `این‌طور مارک‌داون را در پیام رندر کنید:

1. متن دستیار را با **Markdown** رندر کنید.
2. پیام‌های کاربر را متن ساده نگه دارید.
3. از حباب \`ghost\` استفاده کنید تا پاسخ بدون قاب باشد.
`

export function MessageMarkdownDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              چطور مارک‌داون را در پیام رندر کنم؟
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageContent>
          <Bubble variant="ghost">
            <BubbleContent>
              <Markdown>{response}</Markdown>
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </div>
  )
}
