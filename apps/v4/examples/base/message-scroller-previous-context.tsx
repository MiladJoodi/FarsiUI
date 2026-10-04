"use client"

import * as React from "react"
import { useChat } from "@ai-sdk/react"
import {
  ArrowUpIcon,
  GlobeIcon,
  ImageIcon,
  PaperclipIcon,
  PlusIcon,
  RotateCwIcon,
  TelescopeIcon,
} from "lucide-react"

import { createChat, getMessageText } from "@/lib/ai"
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-rhea/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/styles/base-rhea/ui/input-group"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/styles/base-rhea/ui/message-scroller"
import { Slider } from "@/styles/base-rhea/ui/slider"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-rhea/ui/tooltip"

const DEFAULT_PEEK = 64

const chat = createChat()
  .user(
    "دارم برای اپ‌مان چت می‌سازم و رفتار اسکرول دیوانه‌ام کرده. هر بار که AI جواب را استریم می‌کند، کل نخ می‌پرد."
  )
  .sleep(1000)
  .assistant(
    "این مشکل کلاسیک اسکرول استریم است. لیست پیام را در `MessageScroller` بپیچید و `autoScroll` را روشن کنید — ویوپورت با ورود توکن‌ها به پایین می‌چسبد تا کاربر همیشه آخرین متن را در جای درست ببیند.\n\nنکته مهم: فقط وقتی خواننده از قبل پایین است خودکار اسکرول می‌کند. به محض اسکرول به بالا برای خواندن پیام قبلی، خودکار اسکرول عقب می‌کشد و موقعیت حفظ می‌شود. استریم روان بدون جنگ با نیت کاربر."
  )
  .user(
    "باشه، ولی وقتی کسی پیام جدید می‌فرستد هنوز دید ناگهانی است — انگار کل گفتگو از بالا دوباره لود می‌شود."
  )
  .sleep(1000)
  .assistant(
    "`MessageScrollerItem` با لنگر نوبت این را درست می‌کند. `scrollAnchor` را روی نوبتی بگذارید که باید نزدیک بالا بنشیند، نه اینکه کورکورانه به ته سند بپرد.\n\nهمچنین کمی از تبادل قبلی بالای لنگر دیده می‌ماند تا زمینه از دست نرود. پاسخ بدون آن پرش گیج‌کنندهٔ overflow ساده در دید شروع می‌شود."
  )
  .user(
    "و اگر به بالا اسکرول کرده باشند تا جواب قدیمی را دوباره بخوانند؟ نمی‌خواهم ناگهان پایین بکشمشان."
  )
  .sleep(1000)
  .assistant(
    "نمی‌کشید. خودکار اسکرول فقط وقتی ویوپورت به پایین چسبیده است اجرا می‌شود؛ پس اسکرول به بالا انصراف عمدی است — جایشان در نخ حفظ می‌شود حتی وقتی توکن‌های جدید پایین می‌آیند.\n\nوقتی محتوایی ندیده‌اند، `MessageScrollerButton` پایین ویوپورت ظاهر می‌شود. یک ضربه به جدیدترین پیام می‌برد و خودکار اسکرول را دوباره فعال می‌کند. مثل Slack یا iMessage: وقتی به‌روزید ساکت، وقتی نیستید مفید."
  )
  .user("آخری — با فناوری کمکی کار می‌کند؟")
  .sleep(1000)
  .assistant(
    '`MessageScrollerContent` به‌صورت پیش‌فرض `role="log"` و `aria-relevant="additions"` می‌گذارد تا صفحه‌خوان پیام‌های جدید را هنگام استریم اعلام کند.\n\nدکمهٔ اسکرول یک `<button>` واقعی با برچسب sr-only است و وقتی پایین هستید از ترتیب تب حذف می‌شود — بدون توقف فوکوس شبح.'
  )
const initialMessages = chat.get(2)
const transport = chat.transport({ delayMs: 35 })

export default function MessageScrollerPreviousContext() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [peek, setPeek] = React.useState(DEFAULT_PEEK)
  const { messages, sendMessage, setMessages, status } = useChat({
    messages: initialMessages,
    transport,
  })
  const nextMessage = chat.next(messages)
  const isBusy = status === "submitted" || status === "streaming"

  return (
    <MessageScrollerProvider
      key={demoKey}
      scrollMargin={24}
      scrollPreviousItemPeek={peek}
    >
      <div dir="rtl" className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>حفظ زمینه در دید</CardTitle>
            <CardDescription>
              نوبت‌های جدید بخشی از پاسخ قبلی را در دید نگه می‌دارند.
            </CardDescription>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="بازنشانی نمونهٔ زمینه"
                      disabled={isBusy}
                      onClick={() => {
                        setMessages(initialMessages)
                        setPeek(DEFAULT_PEEK)
                        setDemoKey((key) => key + 1)
                      }}
                    />
                  }
                >
                  <RotateCwIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p>بازنشانی</p>
                </TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
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
                      scrollAnchor={message.role === "user"}
                    />
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (!nextMessage || isBusy) {
                  return
                }
                void sendMessage(nextMessage)
              }}
              className="w-full"
            >
              <InputGroup>
                <div className="h-14 w-full px-3 py-2.5">
                  <span
                    className="line-clamp-2 opacity-60 data-[status=ready]:opacity-100"
                    data-status={status}
                  >
                    {nextMessage ? (
                      getMessageText(nextMessage)
                    ) : (
                      <span className="text-muted-foreground">
                        پیامی در صف نیست. زمینه را بازنشانی کنید.
                      </span>
                    )}
                  </span>
                </div>
                <InputGroupAddon align="block-end" className="pt-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <InputGroupButton
                          aria-label="افزودن فایل"
                          type="button"
                          size="icon-sm"
                          variant="outline"
                        />
                      }
                    >
                      <PlusIcon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      side="top"
                      className="w-44"
                    >
                      <DropdownMenuItem>
                        <PaperclipIcon />
                        افزودن عکس و فایل
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <ImageIcon />
                        ساخت تصویر
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <TelescopeIcon />
                        پژوهش عمیق
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <GlobeIcon />
                        جستجوی وب
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <div className="flex w-28 items-center gap-2">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {peek}px
                    </span>
                    <Slider
                      aria-label="نمای کوتاه زمینهٔ قبلی"
                      value={[peek]}
                      min={64}
                      max={128}
                      step={1}
                      disabled={isBusy}
                      onValueChange={(value) => {
                        const nextValue = Array.isArray(value)
                          ? value[0]
                          : value

                        setPeek(nextValue ?? DEFAULT_PEEK)
                      }}
                    />
                  </div>
                  <InputGroupButton
                    type="submit"
                    variant="default"
                    size="icon-sm"
                    disabled={!nextMessage || isBusy}
                    className="ms-auto"
                  >
                    <ArrowUpIcon />
                    <span className="sr-only">ارسال</span>
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </CardFooter>
        </Card>
        <div className="px-0.5 text-center text-xs text-muted-foreground">
          اسلایدر را تنظیم کنید و ارسال کنید. نمای کوتاه پیام قبلی را ببینید
        </div>
      </div>
    </MessageScrollerProvider>
  )
}
