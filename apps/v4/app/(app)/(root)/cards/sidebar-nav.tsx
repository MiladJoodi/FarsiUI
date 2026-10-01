import * as React from "react"
import {
  ActivityIcon,
  Analytics01Icon,
  AnalyticsUpIcon,
  ArrowDataTransferHorizontalIcon,
  BankIcon,
  BookOpen02Icon,
  Calendar03Icon,
  ChartBarLineIcon,
  CreditCardIcon,
  File02Icon,
  Globe02Icon,
  HelpCircleIcon,
  Message01Icon,
  Notification03Icon,
  PaintBoardIcon,
  PieChartIcon,
  ShieldIcon,
  Target02Icon,
  UserIcon,
  Wallet01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "cn"

import { Card } from "@/styles/base-rhea/ui/card"
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
} from "@/styles/base-rhea/ui/sidebar"

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
    <Card className={cn("w-full overflow-hidden rounded-3xl py-0", className)}>
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
      <SidebarSection
        label="نمای کلی"
        className="xl:col-start-1 xl:row-start-2"
      >
        <SidebarMenuItem>
          <SidebarMenuButton isActive>
            <HugeiconsIcon icon={Analytics01Icon} strokeWidth={2} />
            تحلیل‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon
              icon={ArrowDataTransferHorizontalIcon}
              strokeWidth={2}
            />
            تراکنش‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={AnalyticsUpIcon} strokeWidth={2} />
            سرمایه‌گذاری‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={BankIcon} strokeWidth={2} />
            حساب‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={PieChartIcon} strokeWidth={2} />
            هزینه‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarSection>

      <SidebarSection
        label="برنامه‌ریزی"
        className="xl:col-start-1 xl:row-start-1"
      >
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={File02Icon} strokeWidth={2} />
            اسناد
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={Wallet01Icon} strokeWidth={2} />
            بودجه
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={ChartBarLineIcon} strokeWidth={2} />
            گزارش‌ها
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={Target02Icon} strokeWidth={2} />
            اهداف
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton>
            <HugeiconsIcon icon={Calendar03Icon} strokeWidth={2} />
            تقویم
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarSection>

      <SidebarSection
        label="پشتیبانی"
        className="flex xl:col-start-2 xl:row-start-1"
      >
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

      <SidebarSection
        label="حساب کاربری"
        className="flex xl:col-start-2 xl:row-start-2"
      >
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
