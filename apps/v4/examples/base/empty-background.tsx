import { Bell, RefreshCcwIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-nova/ui/empty"

export default function EmptyMuted() {
  return (
    <div dir="rtl" className="h-full">
      <Empty className="h-full bg-muted/30">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Bell />
          </EmptyMedia>
          <EmptyTitle>اعلانی نیست</EmptyTitle>
          <EmptyDescription className="max-w-xs text-pretty">
            همه‌چیز به‌روز است. اعلان‌های جدید اینجا ظاهر می‌شوند.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline">
            <RefreshCcwIcon data-icon="inline-start" />
            تازه‌سازی
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
