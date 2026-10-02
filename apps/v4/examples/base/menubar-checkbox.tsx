import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/styles/base-nova/ui/menubar"

export default function MenubarCheckbox() {
  return (
    <div dir="rtl" lang="fa">
      <Menubar className="w-80">
        <MenubarMenu>
          <MenubarTrigger>نمایش</MenubarTrigger>
          <MenubarContent className="w-64">
            <MenubarCheckboxItem>
              همیشه نوار نشانک‌ها را نشان بده
            </MenubarCheckboxItem>
            <MenubarCheckboxItem checked>
              همیشه آدرس کامل را نشان بده
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem inset>
              بارگذاری مجدد <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled inset>
              بارگذاری اجباری <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>قالب‌بندی</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>خط‌خورده</MenubarCheckboxItem>
            <MenubarCheckboxItem>کد</MenubarCheckboxItem>
            <MenubarCheckboxItem>بالانویس</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
