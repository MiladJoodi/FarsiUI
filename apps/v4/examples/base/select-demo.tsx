import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

const items = [
  { label: "انتخاب میوه", value: null },
  { label: "سیب", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "بلوبری", value: "blueberry" },
  { label: "انگور", value: "grapes" },
  { label: "آناناس", value: "pineapple" },
]

export function SelectDemo() {
  return (
    <div dir="rtl">
      <Select items={items}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>میوه‌ها</SelectLabel>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
