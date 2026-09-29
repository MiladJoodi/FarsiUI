import { formatCode } from "@/lib/format-code"
import { highlightCode } from "@/lib/highlight-code"
import { getDemoItem, getRegistryComponent } from "@/lib/registry"
import { ComponentVariantPreviewClient } from "@/components/component-variant-preview-client"
import {
  BUTTON_SIZE_OPTIONS,
  ICON_SIZE_BY_BUTTON_SIZE,
  type ButtonSizeId,
  type VariantPreviewDemo,
  type VariantPreviewItem,
  type VariantPreviewSizedCode,
} from "@/components/component-variant-preview-shared"

export type ComponentVariantPreviewExample = {
  name: string
  label: string
  direction?: "ltr" | "rtl"
  variant?: string
  demo?: VariantPreviewDemo
  sizeable?: boolean
}

function sizeProp(size: ButtonSizeId) {
  return size === "default" ? "" : ` size="${size}"`
}

function iconSizeProp(size: ButtonSizeId) {
  const iconSize = ICON_SIZE_BY_BUTTON_SIZE[size]
  return iconSize === "icon" ? ` size="icon"` : ` size="${iconSize}"`
}

function buildSizedCode(
  example: ComponentVariantPreviewExample,
  size: ButtonSizeId
) {
  if (example.variant) {
    const variantProp =
      example.variant === "default" ? "" : ` variant="${example.variant}"`
    return `import { Button } from "@/components/ui/button"

export function Example() {
  return <Button${variantProp}${sizeProp(size)}>${example.label}</Button>
}
`
  }

  if (example.demo === "disabled") {
    return `import { Button } from "@/components/ui/button"

export function Example() {
  return <Button${sizeProp(size)} disabled>${example.label}</Button>
}
`
  }

  if (example.demo === "icon") {
    return `import { CircleFadingArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <Button variant="outline"${iconSizeProp(size)} aria-label="${example.label}">
      <CircleFadingArrowUpIcon />
    </Button>
  )
}
`
  }

  if (example.demo === "with-icon") {
    return `import { IconGitBranch, IconGitFork } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button variant="outline"${sizeProp(size)}>
        فورک
        <IconGitFork data-icon="inline-end" />
      </Button>
      <Button variant="outline"${sizeProp(size)}>
        <IconGitBranch data-icon="inline-start" /> شاخه جدید
      </Button>
    </div>
  )
}
`
  }

  if (example.demo === "rounded") {
    return `import { ArrowUpIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <div className="flex gap-2">
      <Button variant="outline"${iconSizeProp(size)} className="rounded-full">
        <ArrowUpIcon />
      </Button>
      <Button${sizeProp(size)} className="rounded-full">
        شروع کنید
      </Button>
    </div>
  )
}
`
  }

  if (example.demo === "spinner") {
    return `import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function Example() {
  return (
    <Button variant="outline"${sizeProp(size)} disabled>
      <Spinner data-icon="inline-start" />
      در حال تولید
    </Button>
  )
}
`
  }

  if (example.demo === "rtl") {
    return `import { ArrowRightIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function Example() {
  return (
    <div className="flex flex-wrap items-center gap-2" dir="rtl">
      <Button variant="outline"${sizeProp(size)}>دکمه</Button>
      <Button variant="destructive"${sizeProp(size)}>حذف</Button>
      <Button variant="outline"${sizeProp(size)}>
        ارسال
        <ArrowRightIcon className="rtl:rotate-180" data-icon="inline-end" />
      </Button>
      <Button variant="outline"${iconSizeProp(size)} aria-label="افزودن">
        <PlusIcon />
      </Button>
      <Button variant="secondary"${sizeProp(size)} disabled>
        <Spinner data-icon="inline-start" /> در حال بارگذاری
      </Button>
    </div>
  )
}
`
  }

  if (example.demo === "group") {
    return `import { ArrowLeftIcon, MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Example() {
  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline"${iconSizeProp(size)} aria-label="بازگشت">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline"${sizeProp(size)}>بایگانی</Button>
        <Button variant="outline"${sizeProp(size)}>گزارش</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline"${sizeProp(size)}>بعداً</Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline"${iconSizeProp(size)} aria-label="گزینه‌های بیشتر" />
            }
          >
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">...</DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
`
  }

  return null
}

function buildAsLinkCode(size: ButtonSizeId) {
  const linkSize = size === "default" ? "sm" : size
  return `import { buttonVariants } from "@/components/ui/button"

export function Example() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "${linkSize}" })}
    >
      ورود
    </a>
  )
}
`
}

export async function ComponentVariantPreview({
  styleName = "base-nova",
  examples,
}: {
  styleName?: string
  examples: ComponentVariantPreviewExample[]
}) {
  const prepared = (
    await Promise.all(
      examples.map(async (example) => {
        const demo = await getDemoItem(example.name, styleName)
        const Component = getRegistryComponent(example.name, styleName)
        const raw = demo?.files?.[0]?.content
        if (!raw && !example.variant && !example.demo) {
          return null
        }

        const sizeable = example.sizeable !== false && Boolean(example.variant || example.demo)

        // Build sized source strings; only highlight the default size to keep SSR fast.
        const sizedEntries = await Promise.all(
          BUTTON_SIZE_OPTIONS.map(async (option) => {
            let sizedSource =
              example.demo === "as-link"
                ? buildAsLinkCode(option.id)
                : buildSizedCode(example, option.id)

            if (!sizedSource) {
              return null
            }

            const formatted = await formatCode(sizedSource, styleName)
            const shouldHighlight = option.id === "default"
            const highlighted = shouldHighlight
              ? await highlightCode(formatted, "tsx")
              : ""

            return [
              option.id,
              {
                code: formatted,
                highlightedCode: highlighted,
              },
            ] as const
          })
        )

        const sized = Object.fromEntries(
          sizedEntries.filter(Boolean) as Array<
            readonly [ButtonSizeId, VariantPreviewSizedCode]
          >
        ) as Record<ButtonSizeId, VariantPreviewSizedCode>

        let code = sized.default?.code
        if (!code) {
          code = raw
            ? await formatCode(raw, styleName)
            : buildSizedCode(example, "default") ?? ""
          code = code.replaceAll(
            "/* eslint-disable react/no-children-prop */\n",
            ""
          )
        }

        const highlightedCode =
          sized.default?.highlightedCode || (await highlightCode(code, "tsx"))

        return {
          meta: {
            name: example.name,
            label: example.label,
            code,
            highlightedCode,
            direction: example.direction,
            variant: example.variant,
            demo: example.demo,
            sizeable,
            sized: Object.keys(sized).length > 0 ? sized : undefined,
          } satisfies VariantPreviewItem,
          hasComponent: Boolean(Component),
        }
      })
    )
  ).filter(Boolean) as {
    meta: VariantPreviewItem
    hasComponent: boolean
  }[]

  if (prepared.length === 0) {
    return null
  }

  return (
    <ComponentVariantPreviewClient items={prepared.map((item) => item.meta)} />
  )
}
