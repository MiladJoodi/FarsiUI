import { Tabs, TabsList, TabsTrigger } from "@/registry/bases/aria/ui/tabs"

export default function TabsDisabled() {
  return (
    <Tabs defaultSelectedKey="home">
      <TabsList>
        <TabsTrigger id="home">Home</TabsTrigger>
        <TabsTrigger id="settings" isDisabled>
          Disabled
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}
