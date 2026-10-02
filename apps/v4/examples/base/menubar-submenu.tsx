import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/styles/base-nova/ui/menubar"

export default function MenubarSubmenu() {
  return (
    <div dir="rtl" lang="fa">
      <Menubar className="w-80">
        <MenubarMenu>
          <MenubarTrigger>فایل</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>اشتراک‌گذاری</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>لینک ایمیل</MenubarItem>
                <MenubarItem>پیام‌ها</MenubarItem>
                <MenubarItem>یادداشت‌ها</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              چاپ... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>ویرایش</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              واگرد <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              ازنو <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>یافتن</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>یافتن...</MenubarItem>
                <MenubarItem>بعدی</MenubarItem>
                <MenubarItem>قبلی</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>برش</MenubarItem>
            <MenubarItem>کپی</MenubarItem>
            <MenubarItem>جای‌گذاری</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
