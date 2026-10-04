import { PlusIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export default function EmptyAvatarGroup() {
  return (
    <div dir="rtl">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <div className="flex -space-x-2 rtl:space-x-reverse *:data-[slot=avatar]:size-12 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="کاربر ۱" />
                <AvatarFallback>ک۱</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/maxleiter.png"
                  alt="کاربر ۲"
                />
                <AvatarFallback>ک۲</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage
                  src="https://github.com/evilrabbit.png"
                  alt="کاربر ۳"
                />
                <AvatarFallback>ک۳</AvatarFallback>
              </Avatar>
            </div>
          </EmptyMedia>
          <EmptyTitle>عضوی در تیم نیست</EmptyTitle>
          <EmptyDescription>
            اعضای تیم را دعوت کنید تا روی این پروژه همکاری کنند.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button size="sm">
            <PlusIcon />
            دعوت اعضا
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
