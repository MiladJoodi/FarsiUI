import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/styles/base-nova/ui/toggle-group"

export function ToggleGroupSizes() {
  return (
    <div dir="rtl" className="flex flex-col gap-4">
      <ToggleGroup size="sm" defaultValue={["top"]} variant="outline">
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
      <ToggleGroup defaultValue={["top"]} variant="outline">
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
