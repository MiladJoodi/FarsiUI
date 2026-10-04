"use client"

import * as React from "react"
import { RotateCwIcon } from "lucide-react"
import { toast } from "sonner"

import { createChat, getMessageText } from "@/lib/ai"
import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
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
import { Marker, MarkerContent } from "@/styles/base-rhea/ui/marker"
import { Message, MessageContent } from "@/styles/base-rhea/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/styles/base-rhea/ui/message-scroller"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/styles/base-rhea/ui/tooltip"

const chat = createChat()
  .user("می‌توانید کانال حادثه را خلاصه کنید؟")
  .assistant(
    "اولین هشدار یک کار export تأخیری بود. حدود ۰۹:۴۲ UTC صف شروع به انباشت کرد و وقتی صف تلاش مجدد از آستانه گذشت، هشدار فعال شد.\n\nمسیرهای checkout رو به مشتری آسیب ندید، اما exportهای فضاهای کاری بزرگ حدود ۱۲ دقیقه عقب بودند."
  )
  .user("آیا checkout آسیب دید؟")
  .assistant(
    "هیچ خطای checkout گزارش نشد. تأیید پرداخت، ایجاد سفارش و ایمیل‌های تأیید داخل باند تأخیر عادی ماندند.\n\nتنها متریک بالا عمق صف export بود که به دانلودهای analytics مربوط است نه checkout."
  )
  .user("در آخرین دیپلوی چه عوض شد؟")
  .assistant(
    "فقط worker صف export عوض شد. دیپلوی کارهای CSV بزرگ را روی سیاست تلاش مجدد مشترک برد که باعث شد هر تلاش ناموفق اسلات worker را طولانی‌تر نگه دارد.\n\nدیپلوی اپ تغییر checkout، قیمت‌گذاری یا API صورتحساب نداشت."
  )
  .user("باید rollback کنیم؟")
  .assistant(
    "هنوز نه. عمق صف بعد از کاهش هم‌زمانی تلاش مجدد در حال بهبود است و قدیمی‌ترین کار در انتظار الان کمتر از پنج دقیقه سن دارد.\n\nاگر صف دوباره بالا رفت rollback را آماده نگه دارید، اما روند فعلی به سمت بازیابی است."
  )
  .user("مراقب مسائل دیده‌شده توسط مشتری بمانید.")
  .assistant(
    "۱۵ دقیقهٔ دیگر صف و تگ‌های پشتیبانی را زیر نظر می‌گیرم. شکست‌های export، درخواست‌های دانلود تأخیری و هر نخ پشتیبانی که به گزارش‌های گم‌شده اشاره کند را ردیابی می‌کنم.\n\nاگر تا پنجرهٔ دستهٔ بعدی ساکت بمانند، می‌توانیم این را به‌عنوان افت داخلی ببندیم."
  )

const history = chat.get()
const INITIAL_VISIBLE_COUNT = 5

export default function MessageScrollerLoadHistory() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE_COUNT)
  const visibleMessages = history.slice(-visibleCount)
  const canLoadHistory = visibleCount < history.length

  return (
    <MessageScrollerProvider>
      <div dir="rtl" className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>بارگذاری تاریخچه</CardTitle>
            <CardDescription>
              پیام‌های پیش‌افزوده موقعتان را حفظ می‌کنند.
            </CardDescription>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="بازنشانی پیام‌های بارگذاری‌شده"
                      disabled={visibleCount === INITIAL_VISIBLE_COUNT}
                      onClick={() => {
                        setVisibleCount(INITIAL_VISIBLE_COUNT)
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
            <MessageScroller key={demoKey}>
              <MessageScrollerViewport>
                <MessageScrollerContent className="p-(--card-spacing)">
                  {visibleMessages.map((message) => {
                    const isUserMessage = message.role === "user"

                    return (
                      <MessageScrollerItem
                        key={message.id}
                        messageId={message.id}
                      >
                        <Message align={isUserMessage ? "end" : "start"}>
                          <MessageContent>
                            <Bubble variant={isUserMessage ? "muted" : "ghost"}>
                              <BubbleContent className="space-y-2">
                                {getMessageText(message)
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
                  <MessageScrollerItem scrollAnchor={false}>
                    <Marker variant="separator">
                      <MarkerContent>پایان گفتگو</MarkerContent>
                    </Marker>
                  </MessageScrollerItem>
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 border-t">
            <Button
              type="button"
              disabled={!canLoadHistory}
              onClick={() => {
                setVisibleCount(history.length)
                toast("تاریخچه بارگذاری شد", {
                  description: "برای دیدن پیام‌های قبلی به بالا اسکرول کنید.",
                })
              }}
              className="w-full"
              variant="secondary"
            >
              {canLoadHistory ? "بارگذاری تاریخچه" : "تاریخچه بارگذاری شد"}
            </Button>
            <p className="text-xs text-muted-foreground">
              پیام‌های قبلی را با حفظ جایگاهتان بازیابی کنید.
            </p>
          </CardFooter>
        </Card>
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
          برای بارگذاری کل گفتگو، بارگذاری تاریخچه را بزنید
        </div>
      </div>
    </MessageScrollerProvider>
  )
}
