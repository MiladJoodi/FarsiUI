"use client"

import * as React from "react"
import { useChat } from "@ai-sdk/react"
import {
  ArrowUpIcon,
  MessageCircleDashedIcon,
  RotateCwIcon,
} from "lucide-react"

import { createChat } from "@/lib/ai"
import {
  MESSAGE_ANIMATIONS,
  type MessageAnimationId,
} from "@/lib/message-animations"
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
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-rhea/ui/select"

const chat = createChat()
  .user(
    "می‌شود پیام‌های کاربر مثل iMessage ظاهر شوند بدون اینکه لنگر خراب شود؟"
  )
  .sleep(1000)
  .assistant(
    "بله. ردیف کاربر را با transform و opacity پویانمایی کنید و بگذارید پاسخ دستیار زیر آن عادی استریم شود.\n\nاندازه‌گیری ردیف قابل‌پیش‌بینی می‌ماند و در عین حال حباب تازه‌فرستاده‌شده ورود ملموس‌تری دارد."
  )
  .user("چه چیزی پویانمایی را بیشتر شبیه iMessage می‌کند؟")
  .sleep(1000)
  .assistant(
    "از یک اسپرینگ سریع از لبهٔ دنباله‌دار استفاده کنید: کمی مقیاس، حرکت کوتاه به بالا، و بدون پویانمایی layout.\n\nحباب ملموس حس می‌شود، اما ردیف اندازه‌گیری‌شده قابل‌پیش‌بینی می‌ماند؛ پس لنگر و اسکرول خودکار مجبور نیستند با layout در حال تغییر بجنگند."
  )
  .user("می‌توانم هنگام تست همان نخ بین presetها جابه‌جا شوم؟")
  .sleep(1000)
  .assistant(
    "بله. گفتگو را سر جایش نگه دارید، preset را عوض کنید، سپس پیام بعدی را بفرستید تا ورود جدید را در همان زمینه مقایسه کنید.\n\nقضاوت تفاوت بین fade ملایم، pop تند و tilt سه‌بعدی پررنگ بدون بازسازی سناریو آسان‌تر می‌شود."
  )

const initialMessages = chat.get(0)
const transport = chat.transport({ delayMs: 15 })

export function MessageScrollerAnimation() {
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: initialMessages,
    transport,
  })
  const [presetId, setPresetId] = React.useState<MessageAnimationId>("fade")
  const nextMessage = chat.next(messages)
  const isBusy = status === "submitted" || status === "streaming"
  const preset = MESSAGE_ANIMATIONS[presetId as MessageAnimationId]

  return (
    <div dir="rtl" className="relative flex flex-col gap-4">
      <Card className="mx-auto h-140 w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>پویانمایی</CardTitle>
          <CardDescription>
            نحوهٔ پویانمایی پیام‌های کاربر هنگام افزودن به گفتگو را انتخاب کنید.
          </CardDescription>
          <CardAction className="flex items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="بازنشانی پیام‌های پویا"
              disabled={messages.length === 0 || isBusy}
              onClick={() => setMessages(initialMessages)}
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
                <EmptyTitle>هنوز پیامی نیست</EmptyTitle>
                <EmptyDescription>
                  برای ارسال اولین پیام دکمهٔ پایین را بزنید.
                </EmptyDescription>
              </EmptyHeader>
            </Empty>
          ) : (
            <MessageScrollerProvider>
              <MessageScroller>
                <MessageScrollerViewport>
                  <MessageScrollerContent
                    aria-busy={isBusy}
                    className="p-(--card-spacing)"
                  >
                    {messages.map((message) => (
                      <MessageAnimated
                        key={message.id}
                        message={message}
                        animationPreset={preset}
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
        <CardFooter className="border-t">
          <Select
            value={presetId}
            onValueChange={(value) => {
              setPresetId(value as MessageAnimationId)
            }}
          >
            <SelectTrigger aria-label="پیش‌تنظیم پویانمایی">
              <SelectValue>{preset.name}</SelectValue>
            </SelectTrigger>
            <SelectContent align="start" side="top">
              <SelectGroup>
                {Object.values(MESSAGE_ANIMATIONS).map((animation) => (
                  <SelectItem key={animation.id} value={animation.id}>
                    {animation.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            type="button"
            size="icon"
            className="ms-auto"
            disabled={!nextMessage || isBusy}
            onClick={() => {
              if (!nextMessage || isBusy) {
                return
              }

              void sendMessage(nextMessage)
            }}
          >
            <ArrowUpIcon />
            <span className="sr-only">ارسال پیام</span>
          </Button>
        </CardFooter>
      </Card>
      <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
        یک پویانمایی انتخاب کنید؛ سپس ارسال را بزنید تا ببینید.
      </div>
    </div>
  )
}
