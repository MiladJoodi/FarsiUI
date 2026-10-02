import { type Metadata } from "next"

import { getFeaturedBlockGroups } from "@/lib/blocks-featured"
import { BlocksShowcase } from "@/components/blocks-showcase"
import { getActiveStyle } from "@/registry/_legacy-styles"

export const dynamic = "force-dynamic"
export const revalidate = false

export const metadata: Metadata = {
  alternates: {
    canonical: "/blocks",
  },
}

export default async function BlocksPage() {
  const activeStyle = await getActiveStyle()
  const groups = await getFeaturedBlockGroups(activeStyle.name)

  return <BlocksShowcase groups={groups} styleName={activeStyle.name} />
}
