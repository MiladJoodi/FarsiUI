import { Button } from "@/registry/bases/base/ui/button"
import { Card, CardContent } from "@/registry/bases/base/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export function SyncingStateCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent className="p-0">
        <Empty className="p-4">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Spinner />
            </EmptyMedia>
            <EmptyTitle>در حال همگام‌سازی حساب‌ها</EmptyTitle>
            <EmptyDescription>
              آخرین تراکنش‌ها در حال بارگذاری است. معمولاً چند ثانیه طول می‌کشد.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline">انصراف</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
