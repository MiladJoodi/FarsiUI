import { Cloud } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-nova/ui/empty"

export default function EmptyOutline() {
  return (
    <div dir="rtl">
      <Empty className="border border-dashed">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Cloud />
          </EmptyMedia>
          <EmptyTitle>فضای ابری خالی است</EmptyTitle>
          <EmptyDescription>
            فایل‌ها را در فضای ابری آپلود کنید تا از هر جا به آن‌ها دسترسی داشته
            باشید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            آپلود فایل
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
