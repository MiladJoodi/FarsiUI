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
            <AvatarImage src="/avatars/03.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>
              بیلد هنگام نصب وابستگی‌ها شکست خورد.
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>می‌توانید خطای دقیق را بفرستید؟</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/03.png" alt="@avatar" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>این خطا از لاگ‌ها است</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>
                مشکلی در بیلد پیش آمد. کتابخانه‌ها درست نصب نشده‌اند. دوباره
                بیلد را اجرا کنید.
              </BubbleContent>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
    </div>
  )
}
