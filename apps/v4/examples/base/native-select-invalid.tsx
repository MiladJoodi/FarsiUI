import {
  NativeSelect,
  NativeSelectOption,
} from "@/styles/base-nova/ui/native-select"

export function NativeSelectInvalid() {
  return (
    <div dir="rtl">
      <NativeSelect aria-invalid="true">
        <NativeSelectOption value="">حالت خطا</NativeSelectOption>
        <NativeSelectOption value="apple">سیب</NativeSelectOption>
        <NativeSelectOption value="banana">موز</NativeSelectOption>
        <NativeSelectOption value="blueberry">بلوبری</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
