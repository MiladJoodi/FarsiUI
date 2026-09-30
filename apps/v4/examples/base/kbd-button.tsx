import { Button } from "@/styles/base-nova/ui/button"
import { Kbd } from "@/styles/base-nova/ui/kbd"

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
