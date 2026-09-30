import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-nova/ui/toggle-group"

export function ToggleGroupSpacing() {
  return (
    <div dir="rtl">
      <ToggleGroup
        size="sm"
        defaultValue={["top"]}
        variant="outline"
        spacing={2}
      >
        <ToggleGroupItem value="top" aria-label="بالا">
          بالا
        </ToggleGroupItem>
        <ToggleGroupItem value="bottom" aria-label="پایین">
          پایین
        </ToggleGroupItem>
        <ToggleGroupItem value="left" aria-label="چپ">
          چپ
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="راست">
          راست
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
