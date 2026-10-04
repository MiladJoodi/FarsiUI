import { Add01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

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

export function EmptyDistributeTrack() {
  return (
    <Card>
      <CardContent>
        <Empty className="p-4">
          <EmptyMedia variant="icon">
            <HugeiconsIcon icon={Add01Icon} strokeWidth={2} />
          </EmptyMedia>
          <EmptyHeader>
            <EmptyTitle>افزودن</EmptyTitle>
            <EmptyDescription>
              فایل‌هاتون رو اینجا آپلود کنید تا سریع‌تر بهشون دسترسی داشته باشید.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button>ایجاد انتشار</Button>
          </EmptyContent>
        </Empty>
      </CardContent>
    </Card>
  )
}
