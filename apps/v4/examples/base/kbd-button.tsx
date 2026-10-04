import { Button } from "@/registry/bases/base/ui/button"
import { Kbd } from "@/registry/bases/base/ui/kbd"

export default function KbdButton() {
  return (
    <div dir="rtl">
      <Button variant="outline">
        پذیرش{" "}
        <Kbd data-icon="inline-end" className="translate-x-0.5">
          ⏎
        </Kbd>
      </Button>
    </div>
  )
}
