"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "cn"
import { Check, Copy, Fullscreen, Monitor, Smartphone, Tablet } from "lucide-react"
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
import { Skeleton } from "@/registry/new-york-v4/ui/skeleton"
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

function getInstallPath(file: HighlightedFile) {
  const raw = (file.target || file.path || "").replace(/\\/g, "/")
  // Never show registry source paths as install targets.
  if (raw.includes("registry/") || raw.includes("blocks/")) {
    const fileName = raw.split("/").pop() ?? "file.tsx"
    if (file.type === "registry:page") return `app/${fileName}`
    return `components/${fileName}`
  }
  return raw
}

function describeInstallPath(installPath: string) {
  const fileName = installPath.split("/").pop() ?? installPath
  const dir = installPath.includes("/")
    ? installPath.slice(0, installPath.lastIndexOf("/"))
    : "."
  return { fileName, dir, installPath }
}

function BlockPreviewSkeleton() {
  return (
    <div className="flex size-full items-center justify-center p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col items-center gap-3">
        <Skeleton className="size-8 rounded-md" />
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-2 h-3 w-16 self-start" />
        <Skeleton className="h-9 w-full rounded-md" />
        <Skeleton className="h-9 w-full rounded-md" />
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  )
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
    () => (files[0] ? getInstallPath(files[0]) : "")
  )
  const [viewport, setViewport] = React.useState<Viewport>("100%")
  const [tab, setTab] = React.useState<"preview" | "code">("preview")
  const [previewLoaded, setPreviewLoaded] = React.useState(false)
  const iframeRef = React.useRef<HTMLIFrameElement>(null)
  const fileCopy = useCopyToClipboard()
  const { activeTheme } = useThemeConfig()

  const activeFile =
    files.find((file) => getInstallPath(file) === activePath) ?? files[0]

  const language = (activeFile?.path ?? "").replace(/\\/g, "/").split(".").pop() ?? "tsx"
  const iframeHeight = resolveCardIframeHeight(item.meta?.iframeHeight)
  const installInfo = activeFile
    ? describeInstallPath(getInstallPath(activeFile))
    : null

  React.useEffect(() => {
    setPreviewLoaded(false)
  }, [styleName, item.name])

  const syncIframeTheme = React.useCallback(() => {
    const body = iframeRef.current?.contentDocument?.body
    if (!body) return
    Array.from(body.classList)
      .filter((className) => className.startsWith("theme-"))
      .forEach((className) => body.classList.remove(className))
    body.classList.add(`theme-${activeTheme}`)
  }, [activeTheme])

  const handleIframeLoad = React.useCallback(() => {
    setPreviewLoaded(true)
    syncIframeTheme()
  }, [syncIframeTheme])

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

    const onLoad = () => {
      setPreviewLoaded(true)
      attachWheelPassthrough()
    }
    iframe.addEventListener("load", onLoad)
    if (iframe.contentDocument?.readyState === "complete") {
      onLoad()
    }

    return () => {
      iframe.removeEventListener("load", onLoad)
      detach?.()
    }
  }, [styleName, item.name, syncIframeTheme])

  const flatFiles = React.useMemo(() => {
    return files.map((file) => {
      const installPath = getInstallPath(file)
      return {
        name: installPath.split("/").pop() ?? installPath,
        path: installPath,
      }
    })
  }, [files])

  React.useEffect(() => {
    const next = files[0] ? getInstallPath(files[0]) : ""
    if (next && !files.some((file) => getInstallPath(file) === activePath)) {
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
        <div className="flex flex-wrap items-center gap-2">
          <TabsList className="h-8 w-fit grid grid-cols-2 rounded-lg p-1 *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2.5 *:data-[slot=tabs-trigger]:text-xs">
            <TabsTrigger value="preview">مشاهده</TabsTrigger>
            <TabsTrigger value="code">کد</TabsTrigger>
          </TabsList>

          <div className="flex h-8 items-center gap-1 rounded-md border p-[3px]">
            <ToggleGroup
              type="single"
              value={viewport}
              onValueChange={(value) => {
                if (!value || value === viewport) return
                setViewport(value as Viewport)
                setTab("preview")
              }}
              className="gap-1 *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:cursor-pointer! *:data-[slot=toggle-group-item]:rounded-sm!"
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
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="size-6 cursor-pointer rounded-sm"
              title="باز کردن در تب جدید"
            >
              <Link
                href={`/view/${styleName}/${item.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <Fullscreen className="size-3.5" />
                <span className="sr-only">باز کردن در تب جدید</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative w-full" style={{ height: iframeHeight }}>
          <TabsContent
            value="preview"
            forceMount
            className="absolute inset-0 mt-0 data-[state=inactive]:pointer-events-none data-[state=inactive]:invisible"
          >
            <div
              className={cn(
                "flex size-full justify-center overflow-hidden rounded-xl border border-border/80",
                viewport === "100%"
                  ? "bg-muted"
                  : cn(
                      "bg-[#fafafa] dark:bg-[#1a1a1a]",
                      "[background-image:linear-gradient(45deg,#e5e5e5_25%,transparent_25%),linear-gradient(-45deg,#e5e5e5_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#e5e5e5_75%),linear-gradient(-45deg,transparent_75%,#e5e5e5_75%)]",
                      "dark:[background-image:linear-gradient(45deg,#2a2a2a_25%,transparent_25%),linear-gradient(-45deg,#2a2a2a_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#2a2a2a_75%),linear-gradient(-45deg,transparent_75%,#2a2a2a_75%)]",
                      "[background-size:16px_16px]",
                      "[background-position:0_0,0_8px,8px_-8px,-8px_0]"
                    )
              )}
            >
              <div
                className="relative h-full overflow-hidden rounded-lg border bg-background shadow-sm transition-[width] duration-200 ease-out"
                style={{ width: viewport }}
              >
                {!previewLoaded ? (
                  <div className="absolute inset-0 z-10">
                    <BlockPreviewSkeleton />
                  </div>
                ) : null}
                <iframe
                  ref={iframeRef}
                  src={`/view/${styleName}/${item.name}?embed=1`}
                  title={item.name}
                  height={iframeHeight}
                  loading="lazy"
                  className={cn(
                    "no-scrollbar h-full w-full bg-background transition-opacity duration-200",
                    previewLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={handleIframeLoad}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="code"
            forceMount
            className="absolute inset-0 mt-0 data-[state=inactive]:pointer-events-none data-[state=inactive]:invisible"
          >
            <div
              dir="ltr"
              lang="en"
              className="flex size-full flex-col overflow-hidden rounded-xl border bg-code text-code-foreground"
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
                          activePath === file.path && "bg-muted text-foreground"
                        )}
                      >
                        {file.name}
                      </button>
                    ))
                  : null}
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
                        file: installInfo?.installPath ?? activeFile.path,
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
                  {installInfo ? (
                    <span dir="ltr" lang="en" className="truncate font-mono">
                      {installInfo.fileName}
                    </span>
                  ) : null}
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
        </div>
      </Tabs>
    </article>
  )
}
