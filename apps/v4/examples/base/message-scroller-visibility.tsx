"use client"

import { createChat, getMessageText } from "@/lib/ai"
import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/styles/base-rhea/ui/hover-card"
import { Message, MessageContent } from "@/styles/base-rhea/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerVisibility,
} from "@/styles/base-rhea/ui/message-scroller"

const chat = createChat()
  .user("تحویل حادثه را مرور کن و بگو اول چه چیزی را بخوانم.", {
    id: "vis-brief",
  })
  .assistant(
    "از خلاصه و بخش تأثیر شروع کنید. رگرسیون صف آپلود را تحت تأثیر قرار داد، اما مسیر بازیابی برای هر کار در صف کامل شد."
  )
  .user("تأثیر روی مشتری چه بود؟", {
    id: "vis-impact",
  })
  .assistant(
    "تأثیر محدود به تأخیر پردازش بود.\n\nهیچ رکوردی از دست نرفت و worker تطبیق هر دستهٔ تلاش مجدد را تأیید کرد. پشتیبانی سردرگمی از دو مشتری دید، اما خطای checkout یا صورتحساب نبود."
  )
  .user("چه اقدام‌هایی باز است؟", {
    id: "vis-actions",
  })
  .assistant(
    "پنجرهٔ تلاش مجدد را تا دیپلوی بعدی روشن نگه دارید؛ سپس هشدار عمق صف را به‌عنوان اصلاح بلندمدت اضافه کنید.\n\nهشدار باید روی رشد پایدار صف شلیک کند، نه یک اسپایک کوتاه."
  )
  .user("چک‌لیست پیگیری را بده.", {
    id: "vis-checklist",
  })
  .assistant(
    "بعد از آن، نمودار بازیابی صف را با زمان‌بندی دیپلوی مقایسه کنید تا تحویل دقیقاً نشان دهد پردازش چه زمانی به خط پایه برگشت. پشتیبانی و مهندسی می‌توانند همان سوال‌های مشتری را بدون بازخوانی کل نخ حادثه جواب دهند.\n\nکنار هر آیتم پیگیری یک یادداشت کوتاه مالک هم اضافه می‌کنم. چک‌لیست کوچک است، اما مالکیت جلوی پراکنده شدن تصمیم پنجرهٔ تلاش مجدد، تنظیم هشدار و ماکرو پشتیبانی در گفتگوهای جدا را می‌گیرد.\n\nپنجرهٔ تلاش مجدد را تا دیپلوی بعدی روشن نگه دارید؛ سپس هشدار عمق صف را به‌عنوان اصلاح بلندمدت اضافه کنید.\n\nهشدار باید روی رشد پایدار صف شلیک کند، نه یک اسپایک کوتاه."
  )

const messages = chat.get()
const userMessages = messages.filter((message) => message.role === "user")

export default function MessageScrollerVisibility() {
  return (
    <MessageScrollerProvider scrollMargin={12}>
      <div dir="rtl" className="relative flex flex-col gap-4">
        <div className="relative mx-auto w-full max-w-sm">
          <Card className="h-140 w-full gap-0">
            <CardHeader className="gap-1 border-b">
              <CardTitle>طرح کلی رونوشت</CardTitle>
              <CardDescription>
                نوبت لنگرشدهٔ فعلی را دنبال کنید.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden p-0">
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {messages.map((message) => {
                      const isUserMessage = message.role === "user"
                      const text = getMessageText(message)

                      return (
                        <MessageScrollerItem
                          key={message.id}
                          messageId={message.id}
                          scrollAnchor={isUserMessage}
                        >
                          <Message align={isUserMessage ? "end" : "start"}>
                            <MessageContent>
                              <Bubble
                                variant={isUserMessage ? "muted" : "ghost"}
                              >
                                <BubbleContent className="space-y-2">
                                  {text
                                    .split(/\n\s*\n/)
                                    .map((paragraph) => paragraph.trim())
                                    .filter(Boolean)
                                    .map((paragraph, index) => (
                                      <p
                                        key={index}
                                        className="whitespace-pre-wrap"
                                      >
                                        {paragraph}
                                      </p>
                                    ))}
                                </BubbleContent>
                              </Bubble>
                            </MessageContent>
                          </Message>
                        </MessageScrollerItem>
                      )
                    })}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 -end-12 -translate-y-1/2">
            <TranscriptOutline />
          </div>
        </div>
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-muted-foreground">
          طرح کلی را باز کنید تا هنگام خواندن بین نوبت‌های لنگرشده بپرید.
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function TranscriptOutline() {
  const { scrollToMessage } = useMessageScroller()
  const { currentAnchorId } = useMessageScrollerVisibility()

  return (
    <HoverCard>
      <HoverCardTrigger
        render={
          <button
            type="button"
            aria-label="باز کردن طرح کلی رونوشت"
            className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-md transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        }
      >
        {userMessages.map((message) => (
          <span
            key={message.id}
            data-current={message.id === currentAnchorId}
            className="h-0.5 w-4 rounded-full bg-muted-foreground/40 data-[current=true]:bg-foreground"
          />
        ))}
      </HoverCardTrigger>
      <HoverCardContent
        align="center"
        side="left"
        sideOffset={-28}
        className="flex w-64 flex-col gap-1 rounded-2xl p-1"
      >
        {userMessages.map((message) => (
          <button
            key={message.id}
            type="button"
            aria-current={
              currentAnchorId === message.id ? "location" : undefined
            }
            className="flex min-h-7 items-center rounded-xl px-2 py-1.5 text-start text-sm transition-colors outline-none hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground aria-current:bg-accent aria-current:text-accent-foreground"
            onClick={() =>
              scrollToMessage(message.id, {
                align: "start",
                behavior: "smooth",
              })
            }
          >
            <span className="line-clamp-1 min-w-0">
              {getTrimmedMessageText(message)}
            </span>
          </button>
        ))}
      </HoverCardContent>
    </HoverCard>
  )
}

function getTrimmedMessageText(message: (typeof userMessages)[number]) {
  const text = getMessageText(message)

  return text.length > 42 ? `${text.slice(0, 39)}...` : text
}
