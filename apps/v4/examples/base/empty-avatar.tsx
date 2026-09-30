import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-nova/ui/avatar"
import { Button } from "@/styles/base-nova/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-nova/ui/empty"

export default function EmptyAvatar() {
  return (
    <div dir="rtl">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="default">
            <Avatar className="size-12">
              <AvatarImage
                src="https://github.com/shadcn.png"
                className="grayscale"
              />
              <AvatarFallback>ار</AvatarFallback>
            </Avatar>
          </EmptyMedia>
          <EmptyTitle>کاربر آفلاین است</EmptyTitle>
          <EmptyDescription>
            این کاربر الان آفلاین است. می‌توانید پیام بگذارید یا بعداً دوباره
            تلاش کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">ارسال پیام</Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
