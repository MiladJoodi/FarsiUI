import { ArrowUpRightIcon, FolderIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export default function EmptyInCard() {
  return (
    <div dir="rtl">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FolderIcon />
          </EmptyMedia>
          <EmptyTitle>هنوز پروژه‌ای نیست</EmptyTitle>
          <EmptyDescription>
            هنوز پروژه‌ای نساخته‌اید. با ساخت اولین پروژه شروع کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button render={<a href="#" />} nativeButton={false}>
              ساخت پروژه
            </Button>
            <Button variant="outline">ورود پروژه</Button>
          </div>
          <Button
            variant="link"
            render={<a href="#" />}
            className="text-muted-foreground"
            nativeButton={false}
          >
            بیشتر بدانید{" "}
            <ArrowUpRightIcon
              className="rtl:rotate-270"
              data-icon="inline-end"
            />
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
