import {
  NativeSelect,
  NativeSelectOption,
} from "@/styles/base-nova/ui/native-select"

export default function NativeSelectDemo() {
  return (
    <div dir="rtl">
      <NativeSelect>
        <NativeSelectOption value="">انتخاب وضعیت</NativeSelectOption>
        <NativeSelectOption value="todo">انجام‌دادنی</NativeSelectOption>
        <NativeSelectOption value="in-progress">در حال انجام</NativeSelectOption>
        <NativeSelectOption value="done">انجام‌شده</NativeSelectOption>
        <NativeSelectOption value="cancelled">لغوشده</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}
