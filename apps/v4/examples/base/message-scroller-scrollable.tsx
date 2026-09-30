"use client"

import { MessageAnimated } from "@/components/message-animated"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/styles/base-rhea/ui/message-scroller"

const messages = Array.from({ length: 12 }, (_, index) => ({
  id: `scrollable-${index + 1}`,
  role: index % 2 === 0 ? "user" : "assistant",
  text:
    index % 2 === 0
      ? `نقطهٔ بررسی اسکرول ${index + 1} را مرور کنید.`
      : `نقطهٔ بررسی ${index + 1} همگام شد. هوک قابل‌اسکرول با حرکت ویوپورت به‌روز می‌شود.\n\nوقتی خواننده روی اولین پیام است، فوتر فقط باید به پایین اشاره کند. وقتی به میانهٔ رونوشت می‌رود، باید بگوید هر دو جهت در دسترس است.\n\nروی آخرین پیام، فوتر دوباره عوض می‌شود و فقط به بالا اشاره می‌کند.`,
})) satisfies Array<{
  id: string
  role: "user" | "assistant"
  text: string
}>

export function MessageScrollerScrollable() {
  return (
    <div dir="rtl" className="mx-auto flex w-full max-w-sm flex-col gap-4">
      <Card className="h-140 w-full gap-0 overflow-hidden">
        <CardHeader className="gap-1 border-b">
          <CardTitle>وضعیت اسکرول</CardTitle>
          <CardDescription>
            بر اساس موقعیت فعلی، خواننده به کجا می‌تواند اسکرول کند.
          </CardDescription>
        </CardHeader>
        <MessageScrollerProvider defaultScrollPosition="start">
          <CardContent className="flex-1 overflow-hidden p-0">
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent className="gap-4 p-(--card-spacing)">
                  <Transcript />
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <ScrollStateFooter />
        </MessageScrollerProvider>
      </Card>
      <div className="px-0.5 text-center text-xs text-muted-foreground">
        رونوشت را اسکرول کنید تا فوتر به‌روز شود.
      </div>
    </div>
  )
}

function Transcript() {
  return messages.map((message) => (
    <MessageAnimated
      key={message.id}
      message={message}
      scrollAnchor={message.role === "user"}
      userVariant="muted"
      assistantVariant="ghost"
    />
  ))
}

function ScrollStateFooter() {
  const { start, end } = useMessageScrollerScrollable()

  const status = getScrollStatus({ start, end })

  return (
    <CardFooter className="justify-center border-t text-center text-sm text-muted-foreground">
      {status}
    </CardFooter>
  )
}

function getScrollStatus({ start, end }: { start: boolean; end: boolean }) {
  if (start && end) {
    return "می‌توانید به هر دو جهت اسکرول کنید."
  }

  if (end) {
    return "بالایید. فقط می‌توانید پایین بروید."
  }

  if (start) {
    return "پایینید. فقط می‌توانید بالا بروید."
  }

  return "همهٔ پیام‌ها در ویوپورت جا می‌شوند."
}
