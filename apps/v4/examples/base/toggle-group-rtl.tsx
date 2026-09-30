import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-nova/ui/toggle-group"

export function ToggleGroupRtl() {
  return (
    <div dir="rtl">
      <ToggleGroup variant="outline" defaultValue={["list"]}>
        <ToggleGroupItem value="list" aria-label="فهرست">
          فهرست
        </ToggleGroupItem>
        <ToggleGroupItem value="grid" aria-label="شبکه">
          شبکه
        </ToggleGroupItem>
        <ToggleGroupItem value="cards" aria-label="کارت‌ها">
          کارت‌ها
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
