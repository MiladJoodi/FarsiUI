import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-rhea/ui/avatar"
import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/styles/base-rhea/ui/bubble"
import { Marker, MarkerContent } from "@/styles/base-rhea/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
} from "@/styles/base-rhea/ui/message"

export function MessageDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-sm flex-col gap-6 py-12">
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@me" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>الان سریع روی prod دیپلوی می‌کنم.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/02.png" alt="@rabbit" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble variant="muted">
            <BubbleContent>ساعت ۱۶:۵۵ است. جمعه.</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/10.png" alt="@me" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>فقط یک خط تغییر است.</BubbleContent>
          </Bubble>
          <MessageFooter>تحویل شد</MessageFooter>
        </MessageContent>
      </Message>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarImage src="/avatars/02.png" alt="@rabbit" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <BubbleGroup>
            <Bubble variant="muted">
              <BubbleContent>همیشه می‌گویند فقط یک خط است 😭.</BubbleContent>
            </Bubble>
            <Bubble variant="muted">
              <BubbleContent>باشه، بگذارید نگاهی بیندازم.</BubbleContent>
              <BubbleReactions aria-label="واکنش‌ها: پسند">
                <span>👍</span>
              </BubbleReactions>
            </Bubble>
          </BubbleGroup>
        </MessageContent>
      </Message>
      <Marker role="status">
        <MarkerContent className="shimmer">
          <span className="font-medium">الیور</span> در حال تایپ است...
        </MarkerContent>
      </Marker>
    </div>
  )
}
