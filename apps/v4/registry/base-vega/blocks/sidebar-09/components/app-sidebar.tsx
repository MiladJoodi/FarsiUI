"use client"

import * as React from "react"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { NavUser } from "@/registry/base-vega/blocks/sidebar-09/components/nav-user"
import { Label } from "@/registry/base-vega/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/registry/base-vega/ui/sidebar"
import { Switch } from "@/registry/base-vega/ui/switch"

// This is sample data
const data = {
  user: {
    name: "سارا محمدی",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "صندوق ورودی",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="InboxIcon"
          tabler="IconInbox"
          hugeicons="InboxIcon"
          phosphor="TrayIcon"
          remixicon="RiInboxLine"
        />
      ),
      isActive: true,
    },
    {
      title: "پیش‌نویس‌ها",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="FileIcon"
          tabler="IconFile"
          hugeicons="FileIcon"
          phosphor="FileIcon"
          remixicon="RiFileLine"
        />
      ),
      isActive: false,
    },
    {
      title: "ارسال‌شده",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="SendIcon"
          tabler="IconSend"
          hugeicons="SentIcon"
          phosphor="PaperPlaneTiltIcon"
          remixicon="RiSendPlaneLine"
        />
      ),
      isActive: false,
    },
    {
      title: "هرزنامه",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="ArchiveXIcon"
          tabler="IconArchiveOff"
          hugeicons="ArchiveIcon"
          phosphor="ArchiveIcon"
          remixicon="RiArchiveLine"
        />
      ),
      isActive: false,
    },
    {
      title: "سطل زباله",
      url: "#",
      icon: (
        <IconPlaceholder
          lucide="Trash2Icon"
          tabler="IconTrash"
          hugeicons="Delete02Icon"
          phosphor="TrashIcon"
          remixicon="RiDeleteBinLine"
        />
      ),
      isActive: false,
    },
  ],
  mails: [
    {
      name: "علی رضایی",
      email: "ali.rezaei@example.com",
      subject: "جلسه فردا",
      date: "۰۹:۳۴",
      teaser:
        "سلام تیم، یادآوری جلسه فردا ساعت ۱۰.\nلطفاً به‌روزرسانی پروژه‌ها را آماده داشته باشید.",
    },
    {
      name: "مریم احمدی",
      email: "maryam@example.com",
      subject: "پاسخ: به‌روزرسانی پروژه",
      date: "دیروز",
      teaser:
        "ممنون از به‌روزرسانی. پیشرفت عالی است.\nبرای گام بعدی یک تماس هماهنگ کنیم.",
    },
    {
      name: "حسین کریمی",
      email: "hossein@example.com",
      subject: "برنامه آخر هفته",
      date: "۲ روز پیش",
      teaser:
        "سلام! برای آخر هفته یک گردش تیمی در نظر دارم.\nعلاقه‌ای به کوهنوردی یا ساحل دارید؟",
    },
    {
      name: "نرگس موسوی",
      email: "narges@example.com",
      subject: "پاسخ: سوال درباره بودجه",
      date: "۲ روز پیش",
      teaser:
        "اعداد بودجه را بررسی کردم.\nبرای چند اصلاح احتمالی یک تماس کوتاه بگذاریم.",
    },
    {
      name: "امیر حسینی",
      email: "amir@example.com",
      subject: "اطلاعیه مهم",
      date: "۱ هفته پیش",
      teaser:
        "جمعه ساعت ۱۵ جلسه عمومی داریم.\nخبرهای خوبی درباره آینده شرکت داریم.",
    },
    {
      name: "سارا محمدی",
      email: "sara@example.com",
      subject: "پاسخ: بازخورد پیشنهاد",
      date: "۱ هفته پیش",
      teaser:
        "پیشنهاد را دیدم و چند نکته دارم.\nبرای جزئیات یک جلسه تنظیم کنیم.",
    },
    {
      name: "رضا نوری",
      email: "reza@example.com",
      subject: "ایده پروژه جدید",
      date: "۱ هفته پیش",
      teaser:
        "ایده جالبی برای پروژه جدید دارم.\nاین هفته وقت دارید درباره امکان‌سنجی صحبت کنیم؟",
    },
    {
      name: "لیلا جعفری",
      email: "leila@example.com",
      subject: "برنامه مرخصی",
      date: "۱ هفته پیش",
      teaser:
        "ماه آینده دو هفته مرخصی دارم.\nقبل از رفتن همه پروژه‌ها را به‌روز می‌کنم.",
    },
    {
      name: "پارسا اکبری",
      email: "parsa@example.com",
      subject: "پاسخ: ثبت‌نام کنفرانس",
      date: "۱ هفته پیش",
      teaser: "ثبت‌نام کنفرانس تکمیل شد.\nاگر اطلاعات دیگری لازم است بگویید.",
    },
    {
      name: "نیلوفر باقری",
      email: "niloofar@example.com",
      subject: "شام تیمی",
      date: "۱ هفته پیش",
      teaser: "برای جشن موفقیت پروژه شام تیمی می‌خواهیم.\nجمعه شب وقت دارید؟",
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen } = useSidebar()
  return (
    <Sidebar
      dir="rtl"
      lang="fa"
      collapsible="icon"
      className="overflow-hidden *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="md:h-8 md:p-0"
                render={<a href="#" />}
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <IconPlaceholder
                    lucide="TerminalIcon"
                    tabler="IconCommand"
                    hugeicons="CommandIcon"
                    phosphor="CommandIcon"
                    remixicon="RiCommandLine"
                    className="size-4"
                  />
                </div>
                <div className="grid flex-1 text-start text-sm leading-tight">
                  <span className="truncate font-medium">FarsiUI</span>
                  <span className="truncate text-xs">سازمانی</span>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        const mail = data.mails.sort(() => Math.random() - 0.5)
                        setMails(
                          mail.slice(
                            0,
                            Math.max(5, Math.floor(Math.random() * 10) + 1)
                          )
                        )
                        setOpen(true)
                      }}
                      isActive={activeItem?.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      {item.icon}
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="text-base font-medium text-foreground">
              {activeItem?.title}
            </div>
            <Label className="flex items-center gap-2 text-sm">
              <span>خوانده‌نشده</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="جستجو..." />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {mails.map((mail) => (
                <a
                  href="#"
                  key={mail.email}
                  className="flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ms-auto text-xs">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  )
}
