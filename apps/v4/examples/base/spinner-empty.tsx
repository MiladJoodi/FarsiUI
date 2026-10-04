import { Button } from "@/registry/bases/base/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function SpinnerEmpty() {
  return (
    <div dir="rtl">
      <Empty className="w-full">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Spinner />
          </EmptyMedia>
          <EmptyTitle>در حال پردازش درخواست شما</EmptyTitle>
          <EmptyDescription>
            لطفاً صبر کنید تا درخواستتان پردازش شود. صفحه را تازه‌سازی نکنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button variant="outline" size="sm">
            لغو
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
