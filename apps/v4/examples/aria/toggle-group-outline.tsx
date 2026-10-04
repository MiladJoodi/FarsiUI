import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/bases/aria/ui/toggle-group"

export default function ToggleGroupOutline() {
  return (
    <ToggleGroup variant="outline" defaultSelectedKeys={["all"]}>
      <ToggleGroupItem id="all" aria-label="Toggle all">
        All
      </ToggleGroupItem>
      <ToggleGroupItem id="missed" aria-label="Toggle missed">
        Missed
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
