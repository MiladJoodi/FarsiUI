import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/registry/bases/base/ui/native-select"

export default function NativeSelectGroups() {
  return (
    <div dir="rtl">
      <NativeSelect>
        <NativeSelectOption value="">انتخاب دپارتمان</NativeSelectOption>
        <NativeSelectOptGroup label="مهندسی">
          <NativeSelectOption value="frontend">فرانت‌اند</NativeSelectOption>
          <NativeSelectOption value="backend">بک‌اند</NativeSelectOption>
          <NativeSelectOption value="devops">DevOps</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="فروش">
          <NativeSelectOption value="sales-rep">نماینده فروش</NativeSelectOption>
          <NativeSelectOption value="account-manager">
            مدیر حساب
          </NativeSelectOption>
          <NativeSelectOption value="sales-director">
            مدیر فروش
          </NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="عملیات">
          <NativeSelectOption value="support">
            پشتیبانی مشتری
          </NativeSelectOption>
          <NativeSelectOption value="product-manager">
            مدیر محصول
          </NativeSelectOption>
          <NativeSelectOption value="ops-manager">
            مدیر عملیات
          </NativeSelectOption>
        </NativeSelectOptGroup>
      </NativeSelect>
    </div>
  )
}
