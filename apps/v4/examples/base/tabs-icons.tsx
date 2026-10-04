import { CodeIcon, EyeIcon } from "lucide-react"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/base-nova/ui/tabs"

export default function TabsIcons() {
  return (
    <Tabs defaultValue="preview" className="w-full max-w-md gap-4" dir="rtl">
      <TabsList>
        <TabsTrigger value="preview">
          <EyeIcon className="size-4" />
          پیش‌نمایش
        </TabsTrigger>
        <TabsTrigger value="code">
          <CodeIcon className="size-4" />
          کد
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="rounded-lg border p-4 text-sm text-muted-foreground"
      >
        نتیجهٔ زندهٔ کامپوننت را اینجا ببینید.
      </TabsContent>
      <TabsContent
        value="code"
        className="rounded-lg border bg-code p-4 font-mono text-xs text-code-foreground"
        dir="ltr"
        lang="en"
      >
        {`<Button>خرید</Button>`}
      </TabsContent>
    </Tabs>
  )
}
