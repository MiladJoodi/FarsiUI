import { Button } from "@/registry/bases/base/ui/button"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function ButtonLoading() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center gap-2">
      <Button variant="outline" disabled>
        <Spinner data-icon="inline-start" />
        در حال تولید
      </Button>
      <Button variant="secondary" disabled>
        در حال دانلود
        <Spinner data-icon="inline-start" />
      </Button>
    </div>
  )
}
