import { siteConfig } from "@/lib/config"

export { cn } from "cn"

export function absoluteUrl(path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.url}${normalized}`
}
