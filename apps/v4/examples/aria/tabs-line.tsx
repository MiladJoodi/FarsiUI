import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/aria/ui/tabs"

export default function TabsLine() {
  return (
    <Tabs defaultSelectedKey="overview">
      <TabsList variant="line">
        <TabsTrigger id="overview">Overview</TabsTrigger>
        <TabsTrigger id="analytics">Analytics</TabsTrigger>
        <TabsTrigger id="reports">Reports</TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
