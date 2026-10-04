import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

export default function SelectRtl() {
  const fruits = [
    { label: "سیب", value: "apple" },
    { label: "موز", value: "banana" },
    { label: "بلوبری", value: "blueberry" },
    { label: "انگور", value: "grapes" },
    { label: "آناناس", value: "pineapple" },
  ]

  const vegetables = [
    { label: "هویج", value: "carrot" },
    { label: "بروکلی", value: "broccoli" },
    { label: "اسفناج", value: "spinach" },
  ]

  const allItems = [
    { label: "انتخاب میوه", value: null },
    ...fruits,
    ...vegetables,
  ]

  return (
    <div dir="rtl">
      <Select items={allItems}>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>میوه‌ها</SelectLabel>
            {fruits.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>سبزیجات</SelectLabel>
            {vegetables.map((item) => (
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
