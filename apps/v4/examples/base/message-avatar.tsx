import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-rhea/ui/avatar"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
} from "@/styles/base-rhea/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/styles/base-rhea/ui/message"

export function MessageAvatarDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="سارا" />
            <AvatarFallback>س</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>بیلد موقع نصب پکیج‌ها ارور داد.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="علی" />
            <AvatarFallback>ع</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>متن ارور رو می‌فرستی؟</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="سارا" />
            <AvatarFallback>س</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>این از لاگه:</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                بیلد خراب شده؛ پکیج‌ها درست نصب نشدن. یه بار دیگه بیلد رو بزن.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
    </div>
  )
}
