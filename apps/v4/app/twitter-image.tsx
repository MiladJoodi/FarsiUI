import { siteConfig } from "@/lib/config"

import {
  createOgImage,
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  OG_SIZE,
} from "./og/create-og-image"

export const runtime = "nodejs"
export const alt = siteConfig.name
export const size = OG_SIZE
export const contentType = "image/png"

export default async function TwitterImage() {
  return createOgImage({
    title: DEFAULT_TITLE,
    description: siteConfig.description || DEFAULT_DESCRIPTION,
  })
}
