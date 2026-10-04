import { createHash } from "crypto"
import { LRUCache } from "lru-cache"
import { codeToHtml } from "shiki"
import type { ShikiTransformer } from "shiki"

// LRU cache for cross-request caching of highlighted code.
// Shiki highlighting is CPU-intensive and deterministic, so caching is safe.
const highlightCache = new LRUCache<string, string>({
  max: 500,
  ttl: 1000 * 60 * 60, // 1 hour.
})

export const transformers = [
  {
    code(node) {
      if (node.tagName === "code") {
        const raw = this.source
        node.properties["__raw__"] = raw

        if (raw.startsWith("npm install")) {
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npm install", "yarn add")
          node.properties["__pnpm__"] = raw.replace("npm install", "pnpm add")
          node.properties["__bun__"] = raw.replace("npm install", "bun add")
        } else if (raw.startsWith("npx create-")) {
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace(
            "npx create-",
            "yarn create "
          )
          node.properties["__pnpm__"] = raw.replace(
            "npx create-",
            "pnpm create "
          )
          node.properties["__bun__"] = raw.replace("npx", "bunx --bun")
        } else if (raw.startsWith("npm create")) {
          // npm create.
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npm create", "yarn create")
          node.properties["__pnpm__"] = raw.replace("npm create", "pnpm create")
          node.properties["__bun__"] = raw.replace("npm create", "bun create")
        } else if (raw.startsWith("npx")) {
          // npx.
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npx", "yarn dlx")
          node.properties["__pnpm__"] = raw.replace("npx", "pnpm dlx")
          node.properties["__bun__"] = raw.replace("npx", "bunx --bun")
        } else if (raw.startsWith("npm run")) {
          // npm run.
          node.properties["__npm__"] = raw
          node.properties["__yarn__"] = raw.replace("npm run", "yarn")
          node.properties["__pnpm__"] = raw.replace("npm run", "pnpm")
          node.properties["__bun__"] = raw.replace("npm run", "bun")
        }
      }
    },
  },
] as ShikiTransformer[]

export async function highlightCode(code: string, language: string = "tsx") {
  // Create cache key from code content and language.
  // Prefix bumps when Persian wrapping / highlighting output shape changes.
  const cacheKey = createHash("sha256")
    .update(`fa-wrap-v2-vscode:${language}:${code}`)
    .digest("hex")

  // Check cache first.
  const cached = highlightCache.get(cacheKey)
  if (cached) {
    return cached
  }

  const html = await codeToHtml(code, {
    lang: language,
    themes: {
      // VS Code Default Dark+ / Light+
      dark: "dark-plus",
      light: "light-plus",
    },
    transformers: [
      {
        pre(node) {
          node.properties["class"] =
            "no-scrollbar min-w-0 overflow-x-auto overflow-y-auto overscroll-x-contain overscroll-y-auto px-4 py-3.5 outline-none has-[[data-highlighted-line]]:px-0 has-[[data-line-numbers]]:px-0 has-[[data-slot=tabs]]:p-0 !bg-transparent"
        },
        code(node) {
          node.properties["data-line-numbers"] = ""
        },
        line(node) {
          node.properties["data-line"] = ""
        },
      },
    ],
  })

  const withPersian = wrapPersianTextInCodeHtml(html)

  // Cache the result.
  highlightCache.set(cacheKey, withPersian)

  return withPersian
}

import { PERSIAN_RUN } from "@/lib/rehype-code-fa"

function wrapPersianTextInCodeHtml(html: string) {
  return html.replace(/>([^<]+)</g, (match, text: string) => {
    PERSIAN_RUN.lastIndex = 0
    const wrapped = text.replace(
      PERSIAN_RUN,
      '<span class="code-fa">$&</span>'
    )
    if (wrapped === text) {
      return match
    }
    return `>${wrapped}<`
  })
}
