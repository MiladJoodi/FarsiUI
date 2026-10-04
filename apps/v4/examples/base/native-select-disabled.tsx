import {
  NativeSelect,
  NativeSelectOption,
} from "@/styles/base-nova/ui/native-select"

export default function NativeSelectDisabled() {
  return (
    <div dir="rtl">
      <NativeSelect disabled>
        <NativeSelectOption value="">غیرفعال</NativeSelectOption>
        <NativeSelectOption value="apple">سیب</NativeSelectOption>
        <NativeSelectOption value="banana">موز</NativeSelectOption>
        <NativeSelectOption value="blueberry">بلوبری</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
