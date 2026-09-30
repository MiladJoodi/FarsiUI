"use client"

import * as React from "react"
import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
} from "lucide-react"

import { MessageAnimated } from "@/components/message-animated"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-rhea/ui/empty"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/styles/base-rhea/ui/message-scroller"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-rhea/ui/toggle-group"

type AnchorRole = "user" | "assistant"

type ChatMessage = {
  id: string
  role: AnchorRole
  text: string
}

const scriptedMessages: ChatMessage[] = [
  {
    id: "anchor-1-user",
    role: "user",
    text: "می‌توانید نشان دهید لنگر وقتی پرامپت جدید نوبت را شروع می‌کند چطور رفتار می‌کند؟",
  },
  {
    id: "anchor-1-assistant",
    role: "assistant",
    text: "ابتدا پرامپت کاربر را اضافه کنید، سپس پاسخ دستیار را. با انتخاب «کاربر»، پرامپت نزدیک بالا می‌نشیند و پاسخ دستیار زیر آن پر می‌شود.",
  },
  {
    id: "anchor-2-user",
    role: "user",
    text: "وقتی پیام‌های دستیار لنگر باشند چه تغییری می‌کند؟",
  },
  {
    id: "anchor-2-assistant",
    role: "assistant",
    text: "حالا هر پاسخ دستیار آیتمی است که `MessageScroller` در دید نگه می‌دارد. وقتی می‌خواهید خواننده بعد از هر نوبت روی پاسخ فرود بیاید مفید است.",
  },
  {
    id: "anchor-3-user",
    role: "user",
    text: "می‌توانم نقش را عوض کنم و همچنان نوبت اضافه کنم؟",
  },
  {
    id: "anchor-3-assistant",
    role: "assistant",
    text: "بله. پیام بعدی با نقش انتخاب‌شده لنگر می‌شود؛ پس بدون بازنشانی دمو می‌توانید لنگر کاربر و دستیار را مقایسه کنید.",
  },
]

export function MessageScrollerAnchoring() {
  const [anchorRole, setAnchorRole] = React.useState<AnchorRole>("user")
  const [messages, setMessages] = React.useState<ChatMessage[]>([])
  const [messageIndex, setMessageIndex] = React.useState(0)
  const nextMessage = scriptedMessages[messageIndex]

  return (
    <div dir="rtl" className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>لنگر نوبت‌ها</CardTitle>
          <CardDescription>
            نقش لنگر را نزدیک لبهٔ بالا انتخاب کنید
          </CardDescription>
          <CardAction>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="بازنشانی نوبت‌های لنگرشده"
              disabled={messages.length === 0}
              onClick={() => {
                setMessages([])
                setMessageIndex(0)
              }}
            >
              <RotateCwIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 overflow-hidden p-0">
          {messages.length === 0 ? (
            <Empty className="h-full">
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <MessageCircleDashedIcon />
                </EmptyMedia>
                <EmptyTitle>هنوز پیام لنگرشده‌ای نیست</EmptyTitle>
                <EmptyDescription>
                  اولین پیام را بفرستید تا نقش انتخاب‌شده لنگر شود
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        scrollAnchor={message.role === anchorRole}
                        userVariant="muted"
                        assistantVariant="ghost"
                      />
                    ))}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          )}
        </CardContent>
        <CardFooter>
          <ToggleGroup
            aria-label="انتخاب نقش لنگر اسکرول"
            value={[anchorRole]}
            onValueChange={(value) => {
              const nextValue = value[0]

              if (nextValue === "user" || nextValue === "assistant") {
                setAnchorRole(nextValue)
                setMessages([])
                setMessageIndex(0)
              }
            }}
          >
            <ToggleGroupItem value="user" aria-label="لنگر پیام‌های کاربر">
              کاربر
            </ToggleGroupItem>
            <ToggleGroupItem
              value="assistant"
              aria-label="لنگر پیام‌های دستیار"
            >
              دستیار
            </ToggleGroupItem>
          </ToggleGroup>
          <Button
            type="button"
            size="icon"
            className="ms-auto"
            disabled={!nextMessage}
            onClick={() => {
              if (!nextMessage) {
                return
              }

              setMessages((messages) => [...messages, nextMessage])
              setMessageIndex((index) => index + 1)
            }}
          >
            <ArrowUpIcon />
            <span className="sr-only">ارسال پیام</span>
          </Button>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-xs px-0.5 text-center text-xs text-muted-foreground">
        نقش لنگر را عوض کنید، سپس پیام بفرستید تا ببینید نوبت‌ها کجا می‌نشینند.
      </div>
    </div>
  )
}
