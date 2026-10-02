"use client"

import * as React from "react"
import {
  IconEye,
  IconGitBranch,
  IconGitFork,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CalendarPlusIcon,
  CircleFadingArrowUpIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  PlusIcon,
  TagIcon,
  Trash2Icon,
} from "lucide-react"
import { cn } from "cn"

import { CopyButton } from "@/components/copy-button"
import {
  DocsPreviewSwitcher,
  DocsPreviewSwitcherStage,
} from "@/components/docs-preview-switcher"
import {
  BUTTON_SIZE_OPTIONS,
  ICON_SIZE_BY_BUTTON_SIZE,
  type ButtonSizeId,
  type VariantPreviewItem,
  type VariantPreviewLayout,
} from "@/components/component-variant-preview-shared"
import {
  VariantPreviewSizeContext,
} from "@/components/component-variant-preview-size"
import { Button, buttonVariants } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import { DirectionProvider } from "@/styles/base-nova/ui/direction"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export type { VariantPreviewItem } from "@/components/component-variant-preview-shared"
export { BUTTON_SIZE_OPTIONS } from "@/components/component-variant-preview-shared"
export type { ButtonSizeId } from "@/components/component-variant-preview-shared"

function PreviewDemo({
  item,
  size,
}: {
  item: VariantPreviewItem
  size: ButtonSizeId
}) {
  const effectiveSize = item.sizeable === false ? "default" : size
  const effectiveIconSize =
    item.sizeable === false ? "icon" : ICON_SIZE_BY_BUTTON_SIZE[size]

  if (item.variant) {
    return (
      <Button
        type="button"
        variant={
          item.variant as React.ComponentProps<typeof Button>["variant"]
        }
        size={effectiveSize}
        tabIndex={-1}
      >
        {item.label}
      </Button>
    )
  }

  if (item.demo === "disabled") {
    return (
      <Button type="button" size={effectiveSize} disabled tabIndex={-1}>
        {item.label}
      </Button>
    )
  }

  if (item.demo === "icon") {
    return (
      <Button
        type="button"
        variant="outline"
        size={effectiveIconSize}
        aria-label={item.label}
        tabIndex={-1}
      >
        <CircleFadingArrowUpIcon />
      </Button>
    )
  }

  if (item.demo === "with-icon") {
    return (
      <div className="flex gap-2">
        <Button type="button" variant="outline" size={effectiveSize} tabIndex={-1}>
          فورک
          <IconGitFork data-icon="inline-end" />
        </Button>
        <Button type="button" variant="outline" size={effectiveSize} tabIndex={-1}>
          <IconGitBranch data-icon="inline-start" /> شاخه جدید
        </Button>
      </div>
    )
  }

  if (item.demo === "rounded") {
    return (
      <div className="flex gap-2">
        <Button
          type="button"
          variant="outline"
          size={effectiveIconSize}
          className="rounded-full"
          aria-label="ارسال"
          tabIndex={-1}
        >
          <ArrowUpIcon />
        </Button>
        <Button
          type="button"
          size={effectiveSize}
          className="rounded-full"
          tabIndex={-1}
        >
          شروع کنید
        </Button>
      </div>
    )
  }

  if (item.demo === "spinner") {
    return (
      <Button
        type="button"
        variant="outline"
        size={effectiveSize}
        disabled
        tabIndex={-1}
      >
        <Spinner data-icon="inline-start" />
        در حال تولید
      </Button>
    )
  }

  if (item.demo === "as-link") {
    return (
      <a
        href="#"
        className={buttonVariants({
          variant: "secondary",
          size: effectiveSize === "default" ? "sm" : effectiveSize,
        })}
        tabIndex={-1}
        onClick={(event) => event.preventDefault()}
      >
        ورود
      </a>
    )
  }

  if (item.demo === "rtl") {
    return (
      <div className="flex flex-wrap items-center gap-2" dir="rtl">
        <Button type="button" variant="outline" size={effectiveSize} tabIndex={-1}>
          دکمه
        </Button>
        <Button
          type="button"
          variant="destructive"
          size={effectiveSize}
          tabIndex={-1}
        >
          حذف
        </Button>
        <Button type="button" variant="outline" size={effectiveSize} tabIndex={-1}>
          ارسال
          <ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size={effectiveIconSize}
          aria-label="افزودن"
          tabIndex={-1}
        >
          <PlusIcon />
        </Button>
        <Button
          type="button"
          variant="secondary"
          size={effectiveSize}
          disabled
          tabIndex={-1}
        >
          <Spinner data-icon="inline-start" /> در حال بارگذاری
        </Button>
      </div>
    )
  }

  if (item.demo === "group") {
    return <GroupPreviewDemo size={effectiveSize} iconSize={effectiveIconSize} />
  }

  return null
}

function GroupPreviewDemo({
  size,
  iconSize,
}: {
  size: ButtonSizeId
  iconSize: "icon-xs" | "icon-sm" | "icon" | "icon-lg"
}) {
  const [label, setLabel] = React.useState("personal")

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button
          type="button"
          variant="outline"
          size={iconSize}
          aria-label="بازگشت"
          tabIndex={-1}
        >
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="button" variant="outline" size={size} tabIndex={-1}>
          بایگانی
        </Button>
        <Button type="button" variant="outline" size={size} tabIndex={-1}>
          گزارش
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button type="button" variant="outline" size={size} tabIndex={-1}>
          بعداً
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                type="button"
                variant="outline"
                size={iconSize}
                aria-label="گزینه‌های بیشتر"
                tabIndex={-1}
              />
            }
          >
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44" dir="rtl">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                علامت به‌عنوان خوانده‌شده
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                بایگانی
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                بعداً
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                افزودن به تقویم
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                افزودن به فهرست
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  برچسب به‌عنوان...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      شخصی
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      کاری
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      سایر
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                حذف
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}

export function ComponentVariantPreviewClient({
  items,
  children,
  layout = "gallery",
}: {
  items: VariantPreviewItem[]
  children?: React.ReactNode
  layout?: VariantPreviewLayout
}) {
  const [selected, setSelected] = React.useState(items[0]?.name ?? "")
  const [size, setSize] = React.useState<ButtonSizeId>("default")
  const [codeOpen, setCodeOpen] = React.useState(false)
  const previews = React.Children.toArray(children)
  const selectedIndex = Math.max(
    0,
    items.findIndex((item) => item.name === selected)
  )
  const active = items[selectedIndex] ?? items[0]
  const sizeIndex = Math.max(
    0,
    BUTTON_SIZE_OPTIONS.findIndex((option) => option.id === size)
  )

  if (!active) {
    return null
  }

  const sizeable = layout !== "switcher" && active.sizeable !== false
  const codeSize = sizeable ? size : "default"
  const sized = active.sized?.[codeSize]
  const activeCode = sized?.code ?? active.code
  // Prefer sized highlight when present; empty string means "not generated yet".
  const activeHighlighted =
    sized?.highlightedCode || active.highlightedCode

  const stepSize = (delta: number) => {
    const next = BUTTON_SIZE_OPTIONS[sizeIndex + delta]
    if (next) setSize(next.id)
  }

  const activeLivePreview =
    active.variant || active.demo ? (
      <PreviewDemo item={active} size={size} />
    ) : (
      previews[selectedIndex]
    )

  return (
    <div
      data-not-typeset
      className={cn(
        "relative mt-4 mb-12 flex flex-col",
        layout === "switcher" && "gap-2"
      )}
    >
      {layout === "switcher" ? (
        <DocsPreviewSwitcher
          className="justify-start"
          options={items.map((item) => ({
            id: item.name,
            label: item.label,
          }))}
          value={active.name}
          onValueChange={setSelected}
        />
      ) : null}
      <div
        data-slot="component-preview"
        className="group relative flex flex-col overflow-hidden rounded-2xl border"
      >
        {layout === "switcher" ? (
          <div data-slot="preview" className="relative p-4 sm:p-6">
            <DocsPreviewSwitcherStage
              role="tabpanel"
              dir={active.demo === "rtl" ? "rtl" : (active.direction ?? "rtl")}
              className="w-full [&_[data-slot=accordion]]:max-w-lg [&_[data-slot=accordion]]:w-full [&_[data-slot=alert]]:max-w-md [&_[data-slot=alert]]:w-full [&_[data-slot=chart]]:w-full [&:has([data-slot=chart])]:items-stretch"
            >
              <DirectionProvider
                direction={
                  active.demo === "rtl" ? "rtl" : (active.direction ?? "rtl")
                }
              >
                <VariantPreviewSizeContext.Provider value={size}>
                  {activeLivePreview}
                </VariantPreviewSizeContext.Provider>
              </DirectionProvider>
            </DocsPreviewSwitcherStage>
          </div>
        ) : (
        <div
          data-slot="preview"
          className="relative p-6 pb-12 sm:px-8 sm:pt-8 sm:pb-12"
        >
          <div className="preview relative flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3">
            <VariantPreviewSizeContext.Provider value={size}>
              {items.map((item, index) => {
                const isActive = item.name === active.name
                const livePreview =
                  item.variant || item.demo ? (
                    <PreviewDemo item={item} size={size} />
                  ) : (
                    previews[index]
                  )

                return (
                  <div
                    key={item.name}
                    data-active={isActive}
                    aria-label={item.label}
                    dir={item.demo === "rtl" ? "rtl" : (item.direction ?? "ltr")}
                    onClick={() => {
                      setSelected(item.name)
                    }}
                    className={cn(
                      "rounded-xl p-1 outline-none transition-shadow",
                      "focus-within:ring-2 focus-within:ring-ring",
                      isActive &&
                        "ring-2 ring-ring ring-offset-2 ring-offset-background"
                    )}
                  >
                    {livePreview}
                  </div>
                )
              })}
            </VariantPreviewSizeContext.Provider>
          </div>

          <div
            className={cn(
              "absolute end-3 bottom-3 z-10 flex items-center gap-1 rounded-full bg-background/90 p-0.5 backdrop-blur-sm",
              !sizeable && "pointer-events-none opacity-40"
            )}
          >
            <button
              type="button"
              aria-label="کوچک‌تر"
              disabled={!sizeable || sizeIndex <= 0}
              onClick={() => stepSize(-1)}
              className="inline-flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <IconMinus className="size-3.5" />
            </button>
            <span className="min-w-16 px-1 text-center text-xs text-muted-foreground">
              {BUTTON_SIZE_OPTIONS[sizeIndex]?.label}
            </span>
            <button
              type="button"
              aria-label="بزرگ‌تر"
              disabled={!sizeable || sizeIndex >= BUTTON_SIZE_OPTIONS.length - 1}
              onClick={() => stepSize(1)}
              className="inline-flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-30"
            >
              <IconPlus className="size-3.5" />
            </button>
          </div>
        </div>
        )}

        <div
          data-slot="code"
        data-mobile-code-visible={codeOpen}
        className="relative overflow-hidden border-t **:data-[slot=copy-button]:top-3 **:data-[slot=copy-button]:right-3 **:data-[slot=copy-button]:hidden data-[mobile-code-visible=true]:**:data-[slot=copy-button]:flex [&_[data-rehype-pretty-code-figure]]:m-0! [&_[data-rehype-pretty-code-figure]]:rounded-none"
      >
        {codeOpen ? (
          <div dir="ltr" className="relative max-h-72 overflow-auto">
            <figure data-rehype-pretty-code-figure="" className="m-0!">
              <CopyButton value={activeCode} />
              {sized?.highlightedCode ? (
                <div
                  data-not-typeset
                  dangerouslySetInnerHTML={{ __html: sized.highlightedCode }}
                />
              ) : activeHighlighted && codeSize === "default" ? (
                <div
                  data-not-typeset
                  dangerouslySetInnerHTML={{ __html: activeHighlighted }}
                />
              ) : (
                <pre className="overflow-x-auto p-4 font-mono text-sm">
                  <code>{activeCode}</code>
                </pre>
              )}
            </figure>
          </div>
        ) : (
          <div className="relative h-24" dir="ltr">
            <figure
              data-rehype-pretty-code-figure=""
              className="pointer-events-none m-0! h-full select-none overflow-hidden opacity-60 [&_pre]:h-full [&_pre]:max-h-24 [&_pre]:overflow-hidden"
            >
              <div
                data-not-typeset
                className="h-full overflow-hidden"
                dangerouslySetInnerHTML={{ __html: activeHighlighted }}
              />
            </figure>
            <div className="absolute inset-0 flex items-center justify-center pb-4">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, var(--color-code), color-mix(in oklab, var(--color-code) 60%, transparent), transparent)",
                }}
              />
              <Button
                type="button"
                size="sm"
                variant="outline"
                className="relative z-10 gap-1.5 rounded-lg bg-background text-foreground shadow-none hover:bg-muted dark:bg-background dark:text-foreground dark:hover:bg-muted"
                onClick={() => setCodeOpen(true)}
              >
                <IconEye className="size-4" />
                مشاهده کد
              </Button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
