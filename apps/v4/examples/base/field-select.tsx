import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

const items = [
  { label: "انتخاب بخش", value: null },
  { label: "مهندسی", value: "engineering" },
  { label: "طراحی", value: "design" },
  { label: "بازاریابی", value: "marketing" },
  { label: "فروش", value: "sales" },
  { label: "پشتیبانی مشتری", value: "support" },
  { label: "منابع انسانی", value: "hr" },
  { label: "مالی", value: "finance" },
  { label: "عملیات", value: "operations" },
]

export default function FieldSelect() {
  return (
    <div dir="rtl">
      <Field className="w-full max-w-xs">
        <FieldLabel>بخش</FieldLabel>
        <Select items={items}>
          <SelectTrigger>
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
        <FieldDescription>بخش یا حوزهٔ کاری خود را انتخاب کنید.</FieldDescription>
      </Field>
    </div>
  )
}
