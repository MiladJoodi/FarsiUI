import { Toggle } from "@/styles/base-nova/ui/toggle"

export default function ToggleDisabled() {
  return (
    <div dir="rtl" className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="غیرفعال" disabled>
        غیرفعال
      </Toggle>
      <Toggle variant="outline" aria-label="غیرفعال با حاشیه" disabled>
        غیرفعال
      </Toggle>
    </div>
  )
}
