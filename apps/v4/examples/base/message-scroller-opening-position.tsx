"use client"

import * as React from "react"

import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import { Message, MessageContent } from "@/styles/base-rhea/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
} from "@/styles/base-rhea/ui/message-scroller"
import { Tabs, TabsList, TabsTrigger } from "@/styles/base-rhea/ui/tabs"

const messages = [
  {
    id: "open-1",
    role: "user",
    text: "این اولین پیامی است که کاربر در گفتگو فرستاده است.",
  },
  {
    id: "open-2",
    role: "assistant",
    text: "ایجاد فضای کاری ۸٪ رشد کرد، اما تکمیل اولین دعوت فقط ۲٪ بالا رفت.",
  },
  {
    id: "open-3",
    role: "user",
    text: "این آخرین پیامی است که کاربر در گفتگو فرستاده است.",
  },
  {
    id: "open-4",
    role: "assistant",
    text: "از مرحلهٔ دعوت شروع کنید. تیم‌ها فضای کاری می‌سازند اما برای افزودن همکار معطل می‌مانند.\n\nپیگیری پیشنهادی:\n\n۱. افت دعوت را بر اساس اندازهٔ حساب مقایسه کنید.\n۲. ببینید کاربرانی که دعوت را رد می‌کنند ظرف ۲۴ ساعت برمی‌گردند یا نه.\n۳. متن empty-state صفحهٔ اولین پروژه را بازبینی کنید.\n۴. فعال‌سازی را بر اساس قالب بخش‌بندی کنید؛ کاربران قالب شاید فوری به دعوت نیاز نداشته باشند.\n\nاگر این الگو برقرار باشد، آزمایش بعدی باید همکاری را زودتر مفید کند، نه اینکه دعوت را سخت‌تر فشار دهد.",
  },
] satisfies Array<{
  id: string
  role: "user" | "assistant"
  text: string
}>

const positions = [
  { value: "start", label: "start" },
  { value: "end", label: "end" },
  { value: "last-anchor", label: "last-anchor" },
] satisfies Array<{
  value: "start" | "end" | "last-anchor"
  label: string
}>

export function MessageScrollerOpeningPosition() {
  const [positionKey, setPositionKey] = React.useState(0)
  const [position, setPosition] = React.useState<
    "start" | "end" | "last-anchor"
  >("last-anchor")

  return (
    <div dir="rtl" className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="gap-1 border-b">
          <CardTitle>موقعیت باز شدن</CardTitle>
          <CardDescription>
            محل باز شدن یک رونوشت ذخیره‌شده را انتخاب کنید.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
          <MessageScrollerProvider>
            <OpeningPositionScroller
              position={position}
              positionKey={positionKey}
            />
          </MessageScrollerProvider>
        </CardContent>
        <CardFooter className="flex items-center justify-center border-t">
          <Tabs
            value={position}
            onValueChange={(value) => {
              if (
                value === "start" ||
                value === "end" ||
                value === "last-anchor"
              ) {
                setPosition(value)
                setPositionKey((key) => key + 1)
              }
            }}
            className="w-full"
          >
            <TabsList className="w-full">
              {positions.map((option) => (
                <TabsTrigger key={option.value} value={option.value}>
                  {option.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-muted-foreground">
        defaultScrollPosition را عوض کنید تا ببینید نخ هنگام باز شدن از کجا شروع
        می‌شود
      </div>
    </div>
  )
}

function OpeningPositionScroller({
  position,
  positionKey,
}: {
  position: "start" | "end" | "last-anchor"
  positionKey: number
}) {
  const { scrollToEnd, scrollToMessage, scrollToStart } = useMessageScroller()

  React.useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (position === "start") {
        scrollToStart({ behavior: "auto" })
        return
      }

      if (position === "end") {
        scrollToEnd({ behavior: "auto" })
        return
      }

      scrollToMessage("open-3", {
        align: "start",
        behavior: "auto",
        scrollMargin: 64,
      })
    })

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [position, positionKey, scrollToEnd, scrollToMessage, scrollToStart])

  return (
    <MessageScroller>
      <MessageScrollerViewport>
        <MessageScrollerContent className="p-(--card-spacing)">
          {messages.map((message) => {
            const isUserMessage = message.role === "user"

            return (
              <MessageScrollerItem
                key={message.id}
                messageId={message.id}
                scrollAnchor={isUserMessage}
              >
                <Message align={isUserMessage ? "end" : "start"}>
                  <MessageContent>
                    <Bubble variant={isUserMessage ? "muted" : "ghost"}>
                      <BubbleContent className="space-y-2">
                        {message.text
                          .split(/\n\s*\n/)
                          .map((paragraph) => paragraph.trim())
                          .filter(Boolean)
                          .map((paragraph, index) => (
                            <p key={index} className="whitespace-pre-wrap">
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
  )
}
