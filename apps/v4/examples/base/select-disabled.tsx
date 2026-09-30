import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

export function SelectDisabled() {
  const items = [
    { label: "انتخاب میوه", value: null },
    { label: "سیب", value: "apple" },
    { label: "موز", value: "banana" },
    { label: "بلوبری", value: "blueberry" },
    { label: "انگور", value: "grapes", disabled: true },
    { label: "آناناس", value: "pineapple" },
  ]
  return (
    <div dir="rtl">
      <Select items={items} disabled>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem
                key={item.value}
                value={item.value}
                disabled={item.disabled}
              >
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
