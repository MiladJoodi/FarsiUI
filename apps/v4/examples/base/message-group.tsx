import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-rhea/ui/avatar"
import { Bubble, BubbleContent } from "@/styles/base-rhea/ui/bubble"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
} from "@/styles/base-rhea/ui/message"

export function MessageGroupDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-6 py-12">
      <MessageGroup>
        <Message>
          <MessageAvatar />
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>آدرس‌های رجیستری رو چک کردم.</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Message>
          <MessageAvatar>
            <Avatar>
              <AvatarImage src="/avatars/02.png" alt="رضا" />
              <AvatarFallback>ر</AvatarFallback>
            </Avatar>
          </MessageAvatar>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>
                JSON کامپوننت و مثال الان زیر رجیستری UI هستن.
              </BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
      </MessageGroup>
    </div>
  )
}
