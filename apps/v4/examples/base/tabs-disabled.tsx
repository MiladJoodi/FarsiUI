import { Tabs, TabsList, TabsTrigger } from "@/styles/base-nova/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs defaultValue="home" dir="rtl">
      <TabsList>
        <TabsTrigger value="home">خانه</TabsTrigger>
        <TabsTrigger value="settings" disabled>
          غیرفعال
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
