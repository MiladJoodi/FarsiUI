import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-nova/ui/empty"

export default function EmptyDemo() {
  return (
    <div dir="rtl">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <IconFolderCode />
          </EmptyMedia>
          <EmptyTitle>هنوز پروژه‌ای نیست</EmptyTitle>
          <EmptyDescription>
            هنوز پروژه‌ای نساخته‌اید. با ساخت اولین پروژه شروع کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row justify-center gap-2">
          <Button>ساخت پروژه</Button>
          <Button variant="outline">ورود پروژه</Button>
        </EmptyContent>
        <Button
          variant="link"
          render={<a href="#" />}
          className="text-muted-foreground"
          size="sm"
          nativeButton={false}
        >
          بیشتر بدانید{" "}
          <ArrowUpRightIcon className="rtl:rotate-270" data-icon="inline-end" />
        </Button>
      </Empty>
    </div>
  )
}
