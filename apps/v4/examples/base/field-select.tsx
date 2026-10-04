import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"

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
    <div className="w-full max-w-sm" dir="rtl" lang="fa">
      <Field>
        <FieldLabel>بخش</FieldLabel>
        <Select items={items}>
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent dir="rtl" alignItemWithTrigger={false} align="start">
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={String(item.value)} value={item.value}>
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
