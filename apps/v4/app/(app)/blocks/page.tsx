import { type Metadata } from "next"

import { getFeaturedBlockSamples } from "@/lib/blocks-featured"
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
  const samples = await getFeaturedBlockSamples(activeStyle.name)

  return <BlocksShowcase samples={samples} />
}
