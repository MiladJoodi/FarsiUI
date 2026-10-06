import { type Metadata } from "next"

import { ChartsShowcase } from "@/components/charts-showcase"

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  alternates: {
    canonical: "/charts",
  },
}

export default function ChartsPage() {
  return <ChartsShowcase />
}
