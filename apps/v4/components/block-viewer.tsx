"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "cn"
import {
  Check,
  ChevronRight,
  Copy,
  File,
  Folder,
  Fullscreen,
  Monitor,
  RotateCw,
  Smartphone,
  Tablet,
} from "lucide-react"
import {
  type registryItemFileSchema,
  type registryItemSchema,
} from "farsiui/schema"
import { type z } from "zod"

import { trackEvent } from "@/lib/events"
import {
  type createFileTreeForRegistryItemFiles,
  type FileTree,
} from "@/lib/registry"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useIframeScrollPassthrough } from "@/hooks/use-iframe-scroll-passthrough"
import { getIconForLanguageExtension } from "@/components/icons"
import { type Style } from "@/registry/_legacy-styles"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/new-york-v4/ui/collapsible"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarProvider,
} from "@/registry/new-york-v4/ui/sidebar"
import { Tabs, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

type BlockViewerContext = {
  item: z.infer<typeof registryItemSchema>
  view: "code" | "preview"
  setView: (view: "code" | "preview") => void
  activeFile: string | null
  setActiveFile: (file: string) => void
  tree: ReturnType<typeof createFileTreeForRegistryItemFiles> | null
  highlightedFiles:
    | (z.infer<typeof registryItemFileSchema> & {
        highlightedContent: string
      })[]
    | null
  iframeKey?: number
  setIframeKey?: React.Dispatch<React.SetStateAction<number>>
  viewport: "100%" | "60%" | "30%"
  setViewport: (value: "100%" | "60%" | "30%") => void
}

const BlockViewerContext = React.createContext<BlockViewerContext | null>(null)

function useBlockViewer() {
  const context = React.useContext(BlockViewerContext)
  if (!context) {
    throw new Error("useBlockViewer must be used within a BlockViewerProvider.")
  }
  return context
}

function BlockViewerProvider({
  item,
  tree,
  highlightedFiles,
  children,
}: Pick<BlockViewerContext, "item" | "tree" | "highlightedFiles"> & {
  children: React.ReactNode
}) {
  const [view, setView] = React.useState<BlockViewerContext["view"]>("preview")
  const [activeFile, setActiveFile] = React.useState<
    BlockViewerContext["activeFile"]
  >(highlightedFiles?.[0].target ?? null)
  const [iframeKey, setIframeKey] = React.useState(0)
  const [viewport, setViewport] =
    React.useState<BlockViewerContext["viewport"]>("100%")

  return (
    <BlockViewerContext.Provider
      value={{
        item,
        view,
        setView,
        activeFile,
        setActiveFile,
        tree,
        highlightedFiles,
        iframeKey,
        setIframeKey,
        viewport,
        setViewport,
      }}
    >
      <div
        id={item.name}
        data-slot="block-viewer"
        data-view={view}
        className="group/block-view-wrapper flex min-w-0 scroll-mt-24 flex-col items-stretch gap-4 overflow-hidden"
        style={
          {
            "--height": item.meta?.iframeHeight ?? "930px",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlockViewerContext.Provider>
  )
}

type BlockViewerProps = Pick<
  BlockViewerContext,
  "item" | "tree" | "highlightedFiles"
> & {
  children: React.ReactNode
  styleName: Style["name"]
}

function BlockViewerToolbar({ styleName }: { styleName: Style["name"] }) {
  const { setView, view, item, setIframeKey, viewport, setViewport } =
    useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const installCommand = `npx farsiui@latest add ${item.name}`

  return (
    <div
      dir="rtl"
      lang="fa"
      className="hidden w-full items-center gap-2 ps-2 md:pe-6 lg:flex"
    >
      <a
        href={`#${item.name}`}
        data-block-variant-title=""
        className="min-w-0 flex-1 truncate text-start font-medium underline-offset-2 hover:underline"
      >
        {item.description?.replace(/\.$/, "")}
      </a>
      <div className="ms-auto flex h-8 items-center gap-0.5 rounded-lg border bg-muted p-1 shadow-none">
        <Tabs
          value={view}
          onValueChange={(value) => setView(value as "preview" | "code")}
        >
          <TabsList
            data-block-preview-label=""
            className="grid h-auto! grid-cols-2 items-center gap-0.5 rounded-none bg-transparent p-0 shadow-none *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2 *:data-[slot=tabs-trigger]:text-[14px]"
          >
            <TabsTrigger value="preview">پیش‌نمایش</TabsTrigger>
            <TabsTrigger value="code">کد</TabsTrigger>
          </TabsList>
        </Tabs>
        <Separator orientation="vertical" className="mx-0.5 h-4!" />
        <ToggleGroup
          type="single"
          value={viewport}
          onValueChange={(value) => {
            if (!value) return
            setViewport(value as "100%" | "60%" | "30%")
            setView("preview")
          }}
          className="gap-0.5 *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
        >
          <ToggleGroupItem value="100%" title="دسکتاپ">
            <Monitor />
          </ToggleGroupItem>
          <ToggleGroupItem value="60%" title="تبلت">
            <Tablet />
          </ToggleGroupItem>
          <ToggleGroupItem value="30%" title="موبایل">
            <Smartphone />
          </ToggleGroupItem>
        </ToggleGroup>
        <Separator orientation="vertical" className="mx-0.5 h-4!" />
        <Button
          size="icon"
          variant="ghost"
          className="size-6 rounded-sm p-0"
          asChild
          title="باز کردن در تب جدید"
        >
          <Link href={`/view/${styleName}/${item.name}`} target="_blank">
            <span className="sr-only">باز کردن در تب جدید</span>
            <Fullscreen />
          </Link>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="size-6 rounded-sm p-0"
          title="تازه‌سازی پیش‌نمایش"
          onClick={() => {
            setIframeKey?.((k) => k + 1)
          }}
        >
          <RotateCw />
          <span className="sr-only">تازه‌سازی پیش‌نمایش</span>
        </Button>
        <Separator orientation="vertical" className="mx-0.5 h-4!" />
        <Button
          variant="ghost"
          data-slot="copy-button"
          className="h-6 w-fit max-w-[min(100%,18rem)] cursor-pointer gap-1.5 rounded-sm px-2 shadow-none"
          size="sm"
          title="کپی دستور نصب"
          onClick={() => {
            copyToClipboard(installCommand)
          }}
        >
          {isCopied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          <span dir="ltr" lang="en" className="truncate font-mono text-xs">
            {installCommand}
          </span>
        </Button>
      </div>
    </div>
  )
}

function BlockViewerIframe({
  className,
  styleName,
}: {
  className?: string
  styleName: Style["name"]
}) {
  const { item, iframeKey } = useBlockViewer()
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const { scrollShield, dismissShield } = useIframeScrollPassthrough(
    iframeRef,
    [iframeKey, item.name, styleName]
  )

  return (
    <div className="relative size-full min-h-0">
      <iframe
        ref={iframeRef}
        key={iframeKey}
        src={`/view/${styleName}/${item.name}?embed=1`}
        height={item.meta?.iframeHeight ?? 930}
        loading="lazy"
        title={item.name}
        className={cn(
          "relative z-20 no-scrollbar h-full w-full bg-background",
          scrollShield && "pointer-events-none",
          className
        )}
        style={{ height: "100%" }}
      />
      {scrollShield ? (
        <div
          aria-hidden
          className="absolute inset-0 z-30 cursor-default"
          onClick={dismissShield}
        />
      ) : null}
    </div>
  )
}

function BlockViewerView({ styleName }: { styleName: Style["name"] }) {
  const { viewport } = useBlockViewer()

  return (
    <div className="hidden group-data-[view=code]/block-view-wrapper:hidden md:h-(--height) lg:flex">
      <div
        className={cn(
          "relative flex h-full w-full justify-center overflow-hidden rounded-xl border border-border/80",
          "bg-muted/50 [background-image:radial-gradient(color-mix(in_oklab,var(--color-foreground)_18%,transparent)_1px,transparent_1px)] [background-size:16px_16px]",
          "dark:bg-muted/30 dark:[background-image:radial-gradient(color-mix(in_oklab,var(--color-foreground)_28%,transparent)_1px,transparent_1px)]"
        )}
      >
        <div
          className="relative h-full overflow-hidden rounded-lg border bg-background shadow-sm transition-[width] duration-200 ease-out"
          style={{ width: viewport }}
        >
          <BlockViewerIframe
            styleName={styleName}
            className="h-full min-h-0"
          />
        </div>
      </div>
    </div>
  )
}

function BlockViewerMobile({ children }: { children: React.ReactNode }) {
  const { item } = useBlockViewer()

  return (
    <div dir="rtl" lang="fa" className="flex flex-col gap-2 lg:hidden">
      <div className="flex items-center gap-2 px-2">
        <div className="line-clamp-1 text-sm font-medium">
          {item.description}
        </div>
        <div
          dir="ltr"
          lang="en"
          className="ms-auto shrink-0 font-mono text-xs text-muted-foreground"
        >
          {item.name}
        </div>
      </div>
      {item.meta?.mobile === "component" ? (
        children
      ) : (
        <div className="overflow-hidden rounded-xl border">
          <Image
            src={`/r/styles/new-york/${item.name}-light.png`}
            alt={item.name}
            data-block={item.name}
            width={1440}
            height={900}
            className="object-cover dark:hidden"
          />
          <Image
            src={`/r/styles/new-york/${item.name}-dark.png`}
            alt={item.name}
            data-block={item.name}
            width={1440}
            height={900}
            className="hidden object-cover dark:block"
          />
        </div>
      )}
    </div>
  )
}

function BlockViewerCode() {
  const { activeFile, highlightedFiles } = useBlockViewer()

  const file = React.useMemo(() => {
    return highlightedFiles?.find((file) => file.target === activeFile)
  }, [highlightedFiles, activeFile])

  if (!file) {
    return null
  }

  const language = file.path.split(".").pop() ?? "tsx"

  return (
    <div
      data-slot="code"
      dir="ltr"
      lang="en"
      className="me-[14px] flex overflow-hidden rounded-xl border bg-code text-code-foreground group-data-[view=preview]/block-view-wrapper:hidden md:h-(--height)"
    >
      <div className="w-72 shrink-0 border-e">
        <BlockViewerFileTree />
      </div>
      <figure
        data-rehype-pretty-code-figure=""
        className="mx-0! mt-0 flex min-w-0 flex-1 flex-col rounded-xl border-none"
      >
        <figcaption
          className="flex h-12 shrink-0 items-center gap-1.5 border-b px-4 py-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70"
          data-language={language}
        >
          {getIconForLanguageExtension(language)}
          <span className="truncate font-mono text-sm">{file.target}</span>
          <BlockCopyCodeButton />
        </figcaption>
        <div
          key={file?.path}
          dangerouslySetInnerHTML={{ __html: file?.highlightedContent ?? "" }}
          className="no-scrollbar overflow-y-auto text-start"
        />
      </figure>
    </div>
  )
}

export function BlockViewerFileTree() {
  const { tree } = useBlockViewer()

  if (!tree) {
    return null
  }

  return (
    <SidebarProvider
      dir="ltr"
      className="flex min-h-full! flex-col border-none"
    >
      <Sidebar collapsible="none" className="w-full flex-1">
        <SidebarGroupLabel className="h-12 rounded-none border-b px-4 text-sm">
          فایل‌ها
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="translate-x-0 gap-1.5">
              {tree.map((file, index) => (
                <Tree key={index} item={file} index={1} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  )
}

function Tree({ item, index }: { item: FileTree; index: number }) {
  const { activeFile, setActiveFile } = useBlockViewer()

  if (!item.children) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          isActive={item.path === activeFile}
          onClick={() => item.path && setActiveFile(item.path)}
          className="rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
          data-index={index}
          style={
            {
              "--index": `${index * (index === 2 ? 1.2 : 1.3)}rem`,
            } as React.CSSProperties
          }
        >
          <ChevronRight className="invisible" />
          <File className="h-4 w-4" />
          {item.name}
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            className="rounded-none pl-(--index) whitespace-nowrap hover:bg-muted-foreground/15 focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15"
            style={
              {
                "--index": `${index * (index === 1 ? 1 : 1.2)}rem`,
              } as React.CSSProperties
            }
          >
            <ChevronRight className="transition-transform" />
            <Folder />
            {item.name}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <Tree key={key} item={subItem} index={index + 1} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  )
}

function BlockCopyCodeButton() {
  const { activeFile, item } = useBlockViewer()
  const { copyToClipboard, isCopied } = useCopyToClipboard()

  const file = React.useMemo(() => {
    return item.files?.find((file) => file.target === activeFile)
  }, [activeFile, item.files])

  const content = file?.content

  if (!content) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      data-slot="copy-button"
      className="size-7 cursor-pointer"
      onClick={() => {
        copyToClipboard(content)
        trackEvent({
          name: "copy_block_code",
          properties: {
            name: item.name,
            file: file.path,
          },
        })
      }}
    >
      {isCopied ? <Check /> : <Copy />}
    </Button>
  )
}

function BlockViewer({
  item,
  tree,
  highlightedFiles,
  children,
  styleName,
  ...props
}: BlockViewerProps) {
  return (
    <BlockViewerProvider
      item={item}
      tree={tree}
      highlightedFiles={highlightedFiles}
      {...props}
    >
      <BlockViewerToolbar styleName={styleName} />
      <BlockViewerView styleName={styleName} />
      <BlockViewerCode />
      <BlockViewerMobile>{children}</BlockViewerMobile>
    </BlockViewerProvider>
  )
}

export { BlockViewer }
