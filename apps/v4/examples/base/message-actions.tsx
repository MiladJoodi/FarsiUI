import {
  CopyIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react"

import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Message,
  MessageContent,
  MessageFooter,
} from "@/styles/base-rhea/ui/message"

export default function MessageActionsDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Message>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              ارور نصب از پکیج workspace می‌آد.
            </BubbleContent>
          </Bubble>
          <MessageFooter>
            <Button variant="ghost" size="icon" aria-label="کپی" title="کپی">
              <CopyIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="پسند"
              title="پسند"
            >
              <ThumbsUpIcon />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="نپسندیدن"
              title="نپسندیدن"
            >
              <ThumbsDownIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>باشه لینک رو بفرست، دارم نگاه می‌کنم...</BubbleContent>
          </Bubble>
          <MessageFooter className="gap-2">
            <span className="font-normal text-destructive">ارسال نشد</span>
            <Button
              variant="ghost"
              size="icon-xs"
              title="تلاش مجدد"
              aria-label="تلاش مجدد"
            >
              <RefreshCcwIcon />
            </Button>
          </MessageFooter>
        </MessageContent>
      </Message>
    </div>
  )
}
