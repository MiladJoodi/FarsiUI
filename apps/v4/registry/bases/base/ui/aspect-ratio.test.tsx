import { renderToStaticMarkup } from "react-dom/server"
import { describe, expect, it } from "vitest"

import { AspectRatio } from "./aspect-ratio"

describe("AspectRatio", () => {
  it("creates a padding-bottom box so fill children get a non-zero height parent", () => {
    const html = renderToStaticMarkup(
      <AspectRatio ratio={16 / 9} className="max-w-sm">
        <img alt="test" src="https://avatar.vercel.sh/farsiui" />
      </AspectRatio>
    )

    expect(html).toContain('data-slot="aspect-ratio"')
    expect(html).toContain('data-slot="aspect-ratio-content"')
    expect(html).toContain(`padding-bottom:${100 / (16 / 9)}%`)
    expect(html).toContain("relative")
    expect(html).toContain("w-full")
    expect(html).toContain("absolute")
    expect(html).toContain("inset-0")
    expect(html.indexOf("aspect-ratio-content")).toBeLessThan(
      html.indexOf("<img")
    )
  })

  it("supports portrait ratios used with next/image fill", () => {
    const html = renderToStaticMarkup(
      <AspectRatio ratio={9 / 16}>
        <img alt="portrait" src="https://avatar.vercel.sh/farsiui" />
      </AspectRatio>
    )

    expect(html).toContain(`padding-bottom:${100 / (9 / 16)}%`)
  })
})
