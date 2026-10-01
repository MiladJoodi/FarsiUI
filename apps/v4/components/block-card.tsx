"use client"

import * as React from "react"
import { cn } from "cn"
import { Check, Copy, Monitor, Smartphone, Tablet } from "lucide-react"
import {
  type registryItemFileSchema,
  type registryItemSchema,
} from "farsiui/schema"
import { type z } from "zod"

import { trackEvent } from "@/lib/events"
import { type FileTree } from "@/lib/registry"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import { useThemeConfig } from "@/components/active-theme"
import { getIconForLanguageExtension } from "@/components/icons"
import { type Style } from "@/registry/_legacy-styles"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

type HighlightedFile = z.infer<typeof registryItemFileSchema> & {
  highlightedContent: string
}

type Viewport = "100%" | "60%" | "30%"

function resolveCardIframeHeight(metaHeight?: string) {
  const raw = metaHeight ?? "520px"
  const value = Number.parseInt(raw, 10)
  if (!Number.isFinite(value)) return "520px"
  return `${Math.min(value, 520)}px`
}

export function BlockCard({
  item,
  highlightedFiles,
  styleName,
}: {
  item: z.infer<typeof registryItemSchema>
  tree?: FileTree[] | null
  highlightedFiles: HighlightedFile[]
  styleName: Style["name"]
}) {
  // تب کد: فقط فایل کامپوننت (نه page) تا یک فایل برای کپی باشد
  const files = React.useMemo(() => {
    const components = highlightedFiles.filter(
      (file) => file.type === "registry:component"
    )
    return components.length > 0 ? components : highlightedFiles
  }, [highlightedFiles])

  const [activePath, setActivePath] = React.useState(
    () => files[0]?.target ?? files[0]?.path ?? ""
  )
  const [viewport, setViewport] = React.useState<Viewport>("100%")
  const [tab, setTab] = React.useState<"preview" | "code">("preview")
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const fileCopy = useCopyToClipboard()
  const { activeTheme } = useThemeConfig()

  const activeFile =
    files.find((file) => (file.target ?? file.path) === activePath) ?? files[0]

  const language = activeFile?.path.split(".").pop() ?? "tsx"
  const iframeHeight = resolveCardIframeHeight(item.meta?.iframeHeight)

  const syncIframeTheme = React.useCallback(() => {
    const body = iframeRef.current?.contentDocument?.body
    if (!body) return
    Array.from(body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => body.classList.remove(className))
    body.classList.add(`theme-${activeTheme}`)
  }, [activeTheme])

  React.useEffect(() => {
    syncIframeTheme()
  }, [syncIframeTheme])

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    let detach: (() => void) | undefined

    const attachWheelPassthrough = () => {
      detach?.()
      const doc = iframe.contentDocument
      if (!doc) return

      const onWheel = (event: WheelEvent) => {
        event.preventDefault()
        window.scrollBy({ top: event.deltaY, left: event.deltaX })
      }

      doc.addEventListener("wheel", onWheel, { passive: false })
      detach = () => doc.removeEventListener("wheel", onWheel)
      syncIframeTheme()
    }

    const onLoad = () => attachWheelPassthrough()
    iframe.addEventListener("load", onLoad)
    if (iframe.contentDocument?.readyState === "complete") {
      attachWheelPassthrough()
    }

    return () => {
      iframe.removeEventListener("load", onLoad)
      detach?.()
    }
  }, [styleName, item.name, syncIframeTheme])

  const flatFiles = React.useMemo(() => {
    return files.map((file) => ({
      name:
        file.target?.split("/").pop() ??
        file.path.split("/").pop() ??
        file.path,
      path: file.target ?? file.path,
    }))
  }, [files])

  React.useEffect(() => {
    const next = files[0]?.target ?? files[0]?.path ?? ""
    if (next && !files.some((file) => (file.target ?? file.path) === activePath)) {
      setActivePath(next)
    }
  }, [files, activePath])

  return (
    <article
      id={item.name}
      dir="rtl"
      lang="fa"
      className="flex w-full min-w-0 scroll-mt-24 flex-col gap-2"
      style={{ "--height": iframeHeight } as React.CSSProperties}
    >
      <Tabs
        value={tab}
        onValueChange={(value) => setTab(value as "preview" | "code")}
        className="w-full gap-2"
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <TabsList className="h-8 w-fit grid grid-cols-2 rounded-lg p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2.5 *:data-[slot=tabs-trigger]:text-xs">
            <TabsTrigger value="preview">مشاهده</TabsTrigger>
            <TabsTrigger value="code">کد</TabsTrigger>
          </TabsList>

          <div className="flex h-8 items-center gap-1 rounded-md border p-[3px]">
            <ToggleGroup
              type="single"
              value={viewport}
              onValueChange={(value) => {
                if (!value) return
                setViewport(value as Viewport)
                setTab("preview")
              }}
              className="gap-1 *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
            >
              <ToggleGroupItem value="100%" title="دسکتاپ">
                <Monitor className="size-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="60%" title="تبلت">
                <Tablet className="size-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="30%" title="موبایل">
                <Smartphone className="size-3.5" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        <TabsContent value="preview" className="mt-0 w-full">
          <div
            className={cn(
              "flex w-full justify-center overflow-hidden rounded-xl border border-border/80",
              "bg-muted/50 [background-image:radial-gradient(color-mix(in_oklab,var(--color-foreground)_18%,transparent)_1px,transparent_1px)] [background-size:16px_16px]",
              "dark:bg-muted/30 dark:[background-image:radial-gradient(color-mix(in_oklab,var(--color-foreground)_28%,transparent)_1px,transparent_1px)]"
            )}
            style={{ height: iframeHeight }}
          >
            <div
              className="h-full overflow-hidden rounded-lg border bg-background shadow-sm transition-[width] duration-200 ease-out"
              style={{ width: viewport }}
            >
              <iframe
                ref={iframeRef}
                src={`/view/${styleName}/${item.name}`}
                title={item.name}
                height={iframeHeight}
                loading="lazy"
                className="no-scrollbar h-full w-full bg-background"
                onLoad={syncIframeTheme}
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code" className="mt-0 w-full">
          <div
            dir="ltr"
            lang="en"
            className="flex h-(--height) w-full flex-col overflow-hidden rounded-xl border bg-code text-code-foreground"
          >
            <div className="flex shrink-0 items-center gap-1 overflow-x-auto border-b px-2 py-1.5">
              {flatFiles.length > 1
                ? flatFiles.map((file) => (
                    <button
                      key={file.path}
                      type="button"
                      onClick={() => setActivePath(file.path)}
                      className={cn(
                        "shrink-0 rounded-md px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground",
                        (activeFile?.target ?? activeFile?.path) === file.path &&
                          "bg-muted text-foreground"
                      )}
                    >
                      {file.name}
                    </button>
                  ))
                : (
                    <span className="px-2.5 py-1 font-mono text-[0.6875rem] text-muted-foreground">
                      {flatFiles[0]?.name}
                    </span>
                  )}
              <Button
                variant="ghost"
                size="icon"
                className="ms-auto size-7 shrink-0"
                disabled={!activeFile?.content}
                onClick={() => {
                  if (!activeFile?.content) return
                  fileCopy.copyToClipboard(activeFile.content)
                  trackEvent({
                    name: "copy_block_code",
                    properties: {
                      name: item.name,
                      file: activeFile.path,
                    },
                  })
                }}
              >
                {fileCopy.isCopied ? (
                  <Check className="size-3.5" />
                ) : (
                  <Copy className="size-3.5" />
                )}
              </Button>
            </div>

            <figure
              data-rehype-pretty-code-figure=""
              className="m-0! flex min-h-0 flex-1 flex-col"
            >
              <figcaption
                className="flex h-9 shrink-0 items-center gap-2 border-b px-3 text-xs [&_svg]:size-3.5 [&_svg]:opacity-70"
                data-language={language}
              >
                {getIconForLanguageExtension(language)}
                <span className="truncate font-mono">
                  {activeFile?.target ?? activeFile?.path}
                </span>
              </figcaption>
              <div
                key={activeFile?.path}
                dangerouslySetInnerHTML={{
                  __html: activeFile?.highlightedContent ?? "",
                }}
                className="no-scrollbar min-h-0 flex-1 overflow-auto text-start text-[0.8125rem]"
              />
            </figure>
          </div>
        </TabsContent>
      </Tabs>
    </article>
  )
}
