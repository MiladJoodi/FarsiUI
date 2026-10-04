import { Field, FieldError, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

const items = [
  { label: "انتخاب میوه", value: null },
  { label: "سیب", value: "apple" },
  { label: "موز", value: "banana" },
  { label: "بلوبری", value: "blueberry" },
]

export default function SelectInvalid() {
  return (
    <Field data-invalid className="w-full max-w-48" dir="rtl">
      <FieldLabel>میوه</FieldLabel>
      <Select items={items}>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <FieldError>لطفاً یک میوه انتخاب کنید.</FieldError>
    </Field>
  )
}
