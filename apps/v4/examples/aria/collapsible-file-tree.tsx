import {
  BookTypeIcon,
  BracesIcon,
  ChevronRightIcon,
  Code2Icon,
  FileIcon,
  FolderIcon,
} from "lucide-react"

import { Button } from "@/styles/aria-nova/ui/button"
import { Card, CardContent, CardHeader } from "@/styles/aria-nova/ui/card"
import {
  Collapsible,
  CollapsibleContent,
} from "@/styles/aria-nova/ui/collapsible"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/styles/aria-nova/ui/tabs"

type FileTreeItem = { name: string } | { name: string; items: FileTreeItem[] }

type OutlineKind = "function" | "type" | "variable"

type OutlineItem =
  | { name: string; kind: OutlineKind }
  | { name: string; kind: OutlineKind; items: OutlineItem[] }

function OutlineIcon({ kind }: { kind: OutlineKind }) {
  if (kind === "function") return <Code2Icon />
  if (kind === "type") return <BookTypeIcon />
  return <BracesIcon />
}

export function CollapsibleFileTree() {
  const fileTree: FileTreeItem[] = [
    {
      name: "components",
      items: [
        {
          name: "ui",
          items: [
            { name: "button.tsx" },
            { name: "card.tsx" },
            { name: "dialog.tsx" },
            { name: "input.tsx" },
            { name: "select.tsx" },
            { name: "table.tsx" },
          ],
        },
        { name: "login-form.tsx" },
        { name: "register-form.tsx" },
      ],
    },
    {
      name: "lib",
      items: [{ name: "utils.ts" }, { name: "cn.ts" }, { name: "api.ts" }],
    },
    {
      name: "hooks",
      items: [
        { name: "use-media-query.ts" },
        { name: "use-debounce.ts" },
        { name: "use-local-storage.ts" },
      ],
    },
    {
      name: "types",
      items: [{ name: "index.d.ts" }, { name: "api.d.ts" }],
    },
    {
      name: "public",
      items: [
        { name: "favicon.ico" },
        { name: "logo.svg" },
        { name: "images" },
      ],
    },
    { name: "app.tsx" },
    { name: "layout.tsx" },
    { name: "globals.css" },
    { name: "package.json" },
    { name: "tsconfig.json" },
    { name: "README.md" },
    { name: ".gitignore" },
  ]

  const outline: OutlineItem[] = [
    {
      name: "CollapsibleFileTree",
      kind: "function",
      items: [
        { name: "fileTree", kind: "variable" },
        { name: "renderItem", kind: "function" },
      ],
    },
    { name: "FileTreeItem", kind: "type" },
    { name: "OutlineItem", kind: "type" },
  ]

  const renderItem = (fileItem: FileTreeItem) => {
    if ("items" in fileItem) {
      return (
        <Collapsible key={fileItem.name}>
          <Button
            slot="trigger"
            variant="ghost"
            size="sm"
            className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
            <FolderIcon />
            {fileItem.name}
          </Button>
          <CollapsibleContent>
            <div className="mt-1 ml-5 flex flex-col gap-1 style-lyra:ml-4">
              {fileItem.items.map((child) => renderItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={fileItem.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2 text-foreground"
      >
        <FileIcon />
        <span>{fileItem.name}</span>
      </Button>
    )
  }

  const renderOutlineItem = (item: OutlineItem) => {
    if ("items" in item) {
      return (
        <Collapsible key={item.name} defaultExpanded>
          <Button
            slot="trigger"
            variant="ghost"
            size="sm"
            className="group w-full justify-start transition-none hover:bg-accent hover:text-accent-foreground"
          >
            <ChevronRightIcon className="transition-transform group-data-[state=open]:rotate-90" />
            <OutlineIcon kind={item.kind} />
            {item.name}
          </Button>
          <CollapsibleContent>
            <div className="mt-1 ml-5 flex flex-col gap-1 style-lyra:ml-4">
              {item.items.map((child) => renderOutlineItem(child))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    return (
      <Button
        key={item.name}
        variant="link"
        size="sm"
        className="w-full justify-start gap-2 text-foreground"
      >
        <OutlineIcon kind={item.kind} />
        <span>{item.name}</span>
      </Button>
    )
  }

  return (
    <Card className="mx-auto w-full max-w-[16rem] gap-2" size="sm">
      <Tabs defaultSelectedKey="explorer" className="gap-2">
        <CardHeader>
          <TabsList className="w-full">
            <TabsTrigger id="explorer">Explorer</TabsTrigger>
            <TabsTrigger id="outline">Outline</TabsTrigger>
          </TabsList>
        </CardHeader>
        <CardContent dir="ltr">
          <TabsContent id="explorer" className="mt-0">
            <div className="flex flex-col gap-1">
              {fileTree.map((item) => renderItem(item))}
            </div>
          </TabsContent>
          <TabsContent id="outline" className="mt-0">
            <div className="flex flex-col gap-1">
              {outline.map((item) => renderOutlineItem(item))}
            </div>
          </TabsContent>
        </CardContent>
      </Tabs>
    </Card>
  )
}
