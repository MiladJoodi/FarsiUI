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
import { PersianDigits } from "@/registry/bases/base/ui/persian-digits"
import { useIframeScrollPassthrough } from "@/hooks/use-iframe-scroll-passthrough"
import { useMediaQuery } from "@/hooks/use-media-query"
import { useDesignSystemPreview } from "@/components/design-system-preview"
import { getIconForLanguageExtension } from "@/components/icons"
import { type Style } from "@/registry/_legacy-styles"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { BlockDemoSkeleton } from "@/components/route-skeletons"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/new-york-v4/ui/tabs"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/new-york-v4/ui/toggle-group"

type HighlightedFile = z.infer<typeof registryItemFileSchema> & {
  highlightedContent: string
}

type Viewport = "100%" | "60%" | "30%"

function resolvePreviewViewport(
  viewport: Viewport,
  isPhone: boolean,
  isTablet: boolean
): Viewport {
  if (isPhone) return "100%"
  if (isTablet && viewport === "30%") return "100%"
  return viewport
}

function resolveCardIframeHeight(metaHeight?: string) {
  const raw = metaHeight ?? "400px"
  const value = Number.parseInt(raw, 10)
  if (!Number.isFinite(value)) return "400px"
  return `${Math.min(value, 400)}px`
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
  const { styleName: designSystemStyleName } = useDesignSystemPreview()
  // Prefer the header Design System style (e.g. base-glass) over the page's
  // default registry style so blocks match the installable style.
  const previewStyleName = designSystemStyleName || styleName
  const isPhone = useMediaQuery("(max-width: 767px)")
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
  const previewViewport = resolvePreviewViewport(viewport, isPhone, isTablet)

  const activeFile =
    files.find((file) => getInstallPath(file) === activePath) ?? files[0]

  const language = (activeFile?.path ?? "").replace(/\\/g, "/").split(".").pop() ?? "tsx"
  const iframeHeight = resolveCardIframeHeight(item.meta?.iframeHeight)
  const installInfo = activeFile
    ? describeInstallPath(getInstallPath(activeFile))
    : null

  React.useEffect(() => {
    setPreviewLoaded(false)
  }, [previewStyleName, item.name])

  // theme-* / style-* on the iframe body come from ActiveThemeProvider +
  // DesignSystemPreviewProvider (header pickers).
  const handleIframeLoad = React.useCallback(() => {
    setPreviewLoaded(true)
  }, [])

  const { scrollShield, dismissShield } = useIframeScrollPassthrough(
    iframeRef,
    [previewStyleName, item.name]
  )

  React.useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const onLoad = () => setPreviewLoaded(true)
    iframe.addEventListener("load", onLoad)
    if (iframe.contentDocument?.readyState === "complete") {
      onLoad()
    }

    return () => {
      iframe.removeEventListener("load", onLoad)
    }
  }, [previewStyleName, item.name])

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
    <PersianDigits>
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
          <div className="ms-auto flex h-8 items-center gap-0.5 rounded-lg border bg-muted p-1">
            <TabsList className="grid h-auto! w-fit grid-cols-2 gap-0.5 rounded-none bg-transparent p-0 shadow-none *:data-[slot=tabs-trigger]:h-6 *:data-[slot=tabs-trigger]:rounded-sm *:data-[slot=tabs-trigger]:px-2.5 *:data-[slot=tabs-trigger]:text-xs">
              <TabsTrigger value="preview">مشاهده</TabsTrigger>
              <TabsTrigger value="code">کد</TabsTrigger>
            </TabsList>
            <Separator orientation="vertical" className="mx-0.5 h-4!" />
            <ToggleGroup
              type="single"
              value={previewViewport}
              onValueChange={(value) => {
                if (!value || value === viewport) return
                setViewport(value as Viewport)
                setTab("preview")
              }}
              className="hidden gap-0.5 md:flex *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:cursor-pointer! *:data-[slot=toggle-group-item]:rounded-sm!"
            >
              <ToggleGroupItem value="100%" title="دسکتاپ">
                <Monitor className="size-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem value="60%" title="تبلت">
                <Tablet className="size-3.5" />
              </ToggleGroupItem>
              <ToggleGroupItem
                value="30%"
                title="موبایل"
                className="hidden lg:inline-flex!"
              >
                <Smartphone className="size-3.5" />
              </ToggleGroupItem>
            </ToggleGroup>
            <Separator
              orientation="vertical"
              className="mx-0.5 hidden h-4! md:block"
            />
            <Button
              asChild
              size="icon"
              variant="ghost"
              className="size-6 cursor-pointer rounded-sm"
              title="باز کردن در تب جدید"
            >
              <Link
                href={`/view/${previewStyleName}/${item.name}`}
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
                previewViewport === "100%"
                  ? "bg-muted/40"
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
                style={{ width: previewViewport }}
              >
                {!previewLoaded ? (
                  <div className="absolute inset-0 z-10">
                    <BlockDemoSkeleton />
                  </div>
                ) : null}
                <iframe
                  key={`${previewStyleName}:${item.name}`}
                  ref={iframeRef}
                  src={`/view/${previewStyleName}/${item.name}?embed=1`}
                  title={item.name}
                  height={iframeHeight}
                  loading="lazy"
                  className={cn(
                    "no-scrollbar h-full w-full bg-background transition-opacity duration-200",
                    scrollShield && "pointer-events-none",
                    previewLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={handleIframeLoad}
                />
                {scrollShield ? (
                  <div
                    aria-hidden
                    className="absolute inset-0 z-20 cursor-default"
                    onClick={dismissShield}
                  />
                ) : null}
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="code"
            data-slot="code"
            data-not-typeset
            forceMount
            className="absolute inset-0 mt-0 data-[state=inactive]:pointer-events-none data-[state=inactive]:invisible"
          >
            <div
              dir="ltr"
              lang="en"
              className="flex size-full flex-col overflow-hidden rounded-xl border bg-code text-code-foreground"
            >
              {flatFiles.length > 1 ? (
                <div className="flex shrink-0 items-center gap-1 overflow-x-auto border-b px-2 py-1.5">
                  {flatFiles.map((file) => (
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
                  ))}
                </div>
              ) : null}

              <figure
                data-rehype-pretty-code-figure=""
                className="m-0! flex min-h-0 flex-1 flex-col"
              >
                <figcaption
                  className="flex h-9 shrink-0 items-center gap-1.5 border-b px-3 text-xs [&_svg]:size-3.5 [&_svg]:opacity-70"
                  data-language={language}
                >
                  {getIconForLanguageExtension(language)}
                  {installInfo ? (
                    <span dir="ltr" lang="en" className="truncate font-mono">
                      {installInfo.fileName}
                    </span>
                  ) : null}
                  <Button
                    variant="ghost"
                    size="icon"
                    data-slot="copy-button"
                    className="size-7 shrink-0 cursor-pointer"
                    disabled={!activeFile?.content}
                    title="کپی کد"
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
    </PersianDigits>
  )
}
