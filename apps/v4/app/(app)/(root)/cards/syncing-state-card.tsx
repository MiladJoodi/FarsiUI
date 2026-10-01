import { Button } from "@/styles/base-rhea/ui/button"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/styles/base-rhea/ui/empty"
import { Spinner } from "@/styles/base-rhea/ui/spinner"

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
