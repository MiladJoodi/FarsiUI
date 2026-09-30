"use client"

import * as React from "react"

import { createChat, getMessageText } from "@/lib/ai"
import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/styles/base-rhea/ui/dropdown-menu"
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

const chat = createChat()
  .user(
    "بعد از ایجاد فضای کاری افت فعال‌سازی می‌بینیم. می‌توانید مرحلهٔ محتمل را پیدا کنید؟",
    { id: "command-activation" }
  )
  .assistant(
    "تندترین افت بین ساخت فضای کاری و دعوت اولین هم‌تیمی است.\n\nساخت فضای کاری هنوز سالم است، اما مرحلهٔ دعوت جایی است که کاربران مکث می‌کنند. یعنی محصول قبل از اینکه کاربر به فضای کاری اعتماد کافی داشته باشد، همکاری می‌خواهد."
  )
  .user("قبل از عوض کردن جریان onboarding چه چیزی را مقایسه کنم؟", {
    id: "command-compare",
  })
  .assistant(
    "سه گروه را مقایسه کنید:\n\n۱. کاربرانی که قبل از دعوت هم‌تیمی یک قالب انتخاب می‌کنند.\n۲. کاربرانی که از فضای کاری خالی شروع می‌کنند.\n۳. کاربرانی که دعوت را رد می‌کنند و ظرف ۲۴ ساعت برمی‌گردند.\n\nاگر کاربران قالب زودتر دعوت کنند، اصلاح احتمالاً راهنمایی بهتر اولین اجراست نه پرامپت دعوت بلندتر."
  )
  .user("می‌توانید آن را به یک آزمایش تبدیل کنید؟", {
    id: "command-experiment",
  })
  .assistant(
    "بله. واریانتی بسازید که بعد از ایجاد فضای کاری چک‌لیست کوتاهی نشان دهد:\n\n- یک قالب انتخاب کنید.\n- یک جزئیات پروژه اضافه کنید.\n- وقتی فضای کاری زمینه دارد، هم‌تیمی دعوت کنید.\n\nتکمیل اولین دعوت، نرخ بازگشت ۲۴ ساعته و اینکه تیم‌ها پروژهٔ دوم می‌سازند یا نه را اندازه بگیرید."
  )
  .user("اگر پرامپت دعوت را به تأخیر بیندازیم چه ریسکی هست؟", {
    id: "command-risk",
  })
  .assistant(
    "ریسک اصلی کاهش ساخت تیم برای حساب‌هایی است که از قبل می‌دانند چه کسی را دعوت کنند.\n\nبرای حفظ آن مسیر، اقدام دعوت را در هدر دیده‌پذیر نگه دارید و فقط راهنمای اصلی empty-state را عوض کنید. تیم‌های مطمئن مسیر مستقیم دارند بدون اینکه کاربران نامطمئن را خیلی زود از مرحلهٔ دعوت عبور دهید."
  )

const messages = chat.get()
const userMessages = messages.filter((message) => message.role === "user")

export function MessageScrollerCommands() {
  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <div dir="rtl" className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>فرمان‌ها</CardTitle>
            <CardDescription>
              رونوشت را از بیرون هدایت کنید.
            </CardDescription>
            <CardAction>
              <CommandMenu />
            </CardAction>
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
                            <Bubble variant={isUserMessage ? "muted" : "ghost"}>
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
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
          با کنترل‌ها به هر پیام در گفتگو بپرید.
        </div>
      </div>
    </MessageScrollerProvider>
  )
}

function CommandMenu() {
  const { scrollToMessage } = useMessageScroller()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button type="button" variant="secondary" />}
      >
        پرش به...
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuLabel>گفتگوها</DropdownMenuLabel>
          {userMessages.map((message) => (
            <DropdownMenuItem
              key={message.id}
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
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function getTrimmedMessageText(message: (typeof userMessages)[number]) {
  const text = getMessageText(message)

  return text.length > 42 ? `${text.slice(0, 39)}...` : text
}
