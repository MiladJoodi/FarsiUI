import * as React from "react"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/lib/config"
import { getBaseComponent, getBaseItem } from "@/lib/registry-api"
import { absoluteUrl } from "@/lib/utils"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { Toaster as BaseToaster } from "@/registry/bases/base/ui/toast"
import { BASES, type Base } from "@/registry/config"

import "@/app/style-registry.css"
import "streamdown/styles.css"

export const revalidate = false
export const dynamic = "force-static"
export const dynamicParams = true

const STATIC_PREVIEW_ITEMS = ["preview", "preview-02"] as const

const getCacheRegistryItem = React.cache(
  async (name: string, base: Base["name"]) => {
    return await getBaseItem(name, base)
  }
)

const getCachedRegistryComponent = React.cache(
  async (name: string, base: Base["name"]) => {
    return await getBaseComponent(name, base)
  }
)

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    base: string
    name: string
  }>
}): Promise<Metadata> {
  const paramBag = await params
  const base = BASES.find((l) => l.name === paramBag.base)

  if (!base) {
    return {}
  }
  const item = await getBaseItem(paramBag.name, base.name)

  if (!item) {
    return {}
  }

  const title = item.name
  const description = item.description

  return {
    title: item.name,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: absoluteUrl(`/preview/${base.name}/${item.name}`),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
      creator: "@shadcn",
    },
  }
}

export async function generateStaticParams() {
  return BASES.flatMap((base) =>
    STATIC_PREVIEW_ITEMS.map((name) => ({
      base: base.name,
      name,
    }))
  )
}

export default async function BlockPage({
  params,
}: {
  params: Promise<{
    base: string
    name: string
  }>
}) {
  const paramBag = await params
  const base = BASES.find((l) => l.name === paramBag.base)

  if (!base) {
    return notFound()
  }

  const [item, Component] = await Promise.all([
    getCacheRegistryItem(paramBag.name, base.name),
    getCachedRegistryComponent(paramBag.name, base.name),
  ])

  if (!item || !Component) {
    return notFound()
  }

  return (
    <>
      <style>{`html,body{height:100%;margin:0}.min-h-svh{min-height:100%!important}`}</style>
      <div className="style-nova relative min-h-full bg-background">
        <Component />
        {base.name === "base" && <BaseToaster />}
        <TailwindIndicator forceMount />
      </div>
    </>
  )
}
