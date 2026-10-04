import { Button } from "@/registry/bases/base/ui/button"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function SpinnerButton() {
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
