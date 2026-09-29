import * as React from "react"

import { formatCode } from "@/lib/format-code"
import { highlightCode } from "@/lib/highlight-code"
import { getDemoItem, getRegistryComponent } from "@/lib/registry"
import {
  ComponentVariantPreviewClient,
  type VariantPreviewItem,
} from "@/components/component-variant-preview-client"

export type ComponentVariantPreviewExample = {
  name: string
  label: string
  direction?: "ltr" | "rtl"
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
        const Component = getRegistryComponent(example.name, styleName)
        if (!Component) {
          return null
        }

        const demo = await getDemoItem(example.name, styleName)
        const raw = demo?.files?.[0]?.content
        if (!raw) {
          return null
        }

        let code = await formatCode(raw, styleName)
        code = code.replaceAll(
          "/* eslint-disable react/no-children-prop */\n",
          ""
        )
        const highlightedCode = await highlightCode(code, "tsx")

        return {
          meta: {
            name: example.name,
            label: example.label,
            code,
            highlightedCode,
            direction: example.direction,
          } satisfies VariantPreviewItem,
          preview: (
            <div key={example.name} data-variant={example.name}>
              {React.createElement(Component)}
            </div>
          ),
        }
      })
    )
  ).filter(Boolean) as {
    meta: VariantPreviewItem
    preview: React.ReactElement
  }[]

  if (prepared.length === 0) {
    return null
  }

  return (
    <ComponentVariantPreviewClient items={prepared.map((item) => item.meta)}>
      {prepared.map((item) => item.preview)}
    </ComponentVariantPreviewClient>
  )
}
