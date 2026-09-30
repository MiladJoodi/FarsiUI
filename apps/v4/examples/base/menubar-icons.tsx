import {
  FileIcon,
  FolderIcon,
  HelpCircleIcon,
  SaveIcon,
  SettingsIcon,
  TrashIcon,
} from "lucide-react"

import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/styles/base-nova/ui/menubar"

export function MenubarIcons() {
  return (
    <div dir="rtl">
      <Menubar className="w-80">
        <MenubarMenu>
          <MenubarTrigger>فایل</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <FileIcon />
              پروندهٔ جدید <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              <FolderIcon />
              باز کردن پوشه
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <SaveIcon />
              ذخیره <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>بیشتر</MenubarTrigger>
          <MenubarContent>
            <MenubarGroup>
              <MenubarItem>
                <SettingsIcon />
                تنظیمات
              </MenubarItem>
              <MenubarItem>
                <HelpCircleIcon />
                راهنما
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem variant="destructive">
                <TrashIcon />
                حذف
              </MenubarItem>
            </MenubarGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
