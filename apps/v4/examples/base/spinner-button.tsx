import { Button } from "@/styles/base-nova/ui/button"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export function SpinnerButton() {
  return (
    <div dir="rtl" className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner data-icon="inline-start" />
        در حال بارگذاری...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        لطفاً صبر کنید
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner data-icon="inline-start" />
        در حال پردازش
      </Button>
    </div>
  )
}
