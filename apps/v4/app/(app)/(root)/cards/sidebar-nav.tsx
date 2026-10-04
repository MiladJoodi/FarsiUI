import * as React from "react"
import {
  ActivityIcon,
  BookOpen02Icon,
  CreditCardIcon,
  Globe02Icon,
  HelpCircleIcon,
  Message01Icon,
  Notification03Icon,
  PaintBoardIcon,
  ShieldIcon,
  UserIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"

import { Card } from "@/registry/bases/base/ui/card"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/registry/bases/base/ui/sidebar"

function SidebarSection({
  label,
  children,
  className,
}: {
  label: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Card className={cn("w-full rounded-3xl py-0", className)}>
      <SidebarProvider className="min-h-0" dir="rtl">
        <Sidebar collapsible="none" className="w-full bg-transparent" side="right">
          <SidebarContent className="gap-0 overflow-hidden">
            <SidebarGroup>
              <SidebarGroupLabel>{label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="gap-1">{children}</SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </Card>
  )
}

export function SidebarNav() {
  return (
    <div className="grid w-full grid-cols-2 gap-4 xl:gap-6">
      <SidebarSection label="پشتیبانی">
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={HelpCircleIcon} strokeWidth={2} />
            مرکز کمک
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={BookOpen02Icon} strokeWidth={2} />
            مستندات
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={Message01Icon} strokeWidth={2} />
            تماس با ما
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={ActivityIcon} strokeWidth={2} />
            وضعیت
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={Globe02Icon} strokeWidth={2} />
            انجمن
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarSection>

      <SidebarSection label="حساب کاربری">
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={UserIcon} strokeWidth={2} />
            پروفایل
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton isActive>
            <HugeiconsIcon icon={CreditCardIcon} strokeWidth={2} />
            صورت‌حساب
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={Notification03Icon} strokeWidth={2} />
            اعلان‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={ShieldIcon} strokeWidth={2} />
            امنیت
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={PaintBoardIcon} strokeWidth={2} />
            ظاهر
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarSection>
    </div>
  )
}
