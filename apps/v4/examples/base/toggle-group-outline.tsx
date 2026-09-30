import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-nova/ui/toggle-group"

export function ToggleGroupOutline() {
  return (
    <div dir="rtl">
      <ToggleGroup variant="outline" defaultValue={["all"]}>
        <ToggleGroupItem value="all" aria-label="همه">
          همه
        </ToggleGroupItem>
        <ToggleGroupItem value="missed" aria-label="ازدست‌رفته">
          ازدست‌رفته
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
