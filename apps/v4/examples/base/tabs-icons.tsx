import { AppWindowIcon, CodeIcon } from "lucide-react"

import { Tabs, TabsList, TabsTrigger } from "@/styles/base-nova/ui/tabs"

export function TabsIcons() {
  return (
    <Tabs defaultValue="preview" dir="rtl">
      <TabsList>
        <TabsTrigger value="preview">
          <AppWindowIcon />
          پیش‌نمایش
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon />
          کد
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
