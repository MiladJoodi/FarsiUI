import { type Metadata } from "next"

import { getShowcaseProjects } from "@/lib/showcase"
import { ShowcaseProjectList } from "@/components/showcase-project-list"

export const metadata: Metadata = {
  alternates: {
    canonical: "/showcase",
  },
}

export default function ShowcasePage() {
  const projects = getShowcaseProjects()

  return <ShowcaseProjectList projects={projects} />
}
