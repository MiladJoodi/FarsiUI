import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

const SIZE = { width: 1200, height: 630 } as const

const DEFAULT_TITLE = "کتابخانه کامپوننت فارسی"
const DEFAULT_DESCRIPTION =
  "راست‌چین از پایه، اعداد فارسی، تقویم شمسی، ۵۰۰+ کامپوننت آماده و ۶ دیزاین سیستم"

async function readProjectFile(...segments: string[]) {
  const candidates = [
    join(process.cwd(), ...segments),
    join(process.cwd(), "apps/v4", ...segments),
  ]
  for (const path of candidates) {
    try {
      return await readFile(path)
    } catch {
      // try next candidate
    }
  }
  throw new Error(`OG asset not found: ${segments.join("/")}`)
}

async function loadFonts() {
  const [regular, semibold] = await Promise.all([
    readProjectFile("app/og/fonts/Estedad-Regular.ttf"),
    readProjectFile("app/og/fonts/Estedad-SemiBold.ttf"),
  ])
  return [
    {
      name: "Estedad",
      data: regular,
      weight: 400 as const,
      style: "normal" as const,
    },
    {
      name: "Estedad",
      data: semibold,
      weight: 600 as const,
      style: "normal" as const,
    },
  ]
}

/**
 * Satori still lays out RTL runs poorly (word order). Reverse space-separated
 * tokens so Persian titles read correctly in the generated PNG.
 */
function forSatoriRtl(text: string) {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .reverse()
    .join(" ")
}

function FarsiUIMark({ size = 56, color = "#18181b" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="130" width="135" height="25" rx="5" />
      <rect x="45" y="85" width="105" height="25" rx="5" />
      <rect x="85" y="48" width="65" height="22" rx="5" />
      <rect x="160" y="20" width="18" height="145" rx="2" />
    </svg>
  )
}

export async function createOgImage({
  title,
  description,
}: {
  title?: string | null
  description?: string | null
} = {}) {
  const resolvedTitle = (title && title.trim()) || DEFAULT_TITLE
  const resolvedDescription =
    (description && description.trim()) || DEFAULT_DESCRIPTION

  const [fonts, demoPng, logoPng] = await Promise.all([
    loadFonts(),
    readProjectFile("public/farsiui/demo.png"),
    readProjectFile("public/farsiui/logo.png"),
  ])

  const demoSrc = `data:image/png;base64,${demoPng.toString("base64")}`
  const logoSrc = `data:image/png;base64,${logoPng.toString("base64")}`
  const titleSize =
    resolvedTitle.length > 28 ? 40 : resolvedTitle.length > 18 ? 48 : 54

  return new ImageResponse(
    (
      <div
        tw="flex h-full w-full relative"
        style={{ fontFamily: "Estedad", background: "#09090b" }}
      >
        {/* Full-bleed product shot */}
        <img
          src={demoSrc}
          alt=""
          width={1200}
          height={630}
          tw="absolute inset-0 h-full w-full"
          style={{ objectFit: "cover", objectPosition: "top center" }}
        />

        {/* Soft wash so brand text stays readable */}
        <div
          tw="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,9,11,0.15) 0%, rgba(9,9,11,0.35) 45%, rgba(9,9,11,0.82) 100%)",
          }}
        />

        {/* Brand column */}
        <div tw="absolute inset-y-0 right-0 flex w-[460px] flex-col items-end justify-between px-12 py-12">
          <div tw="flex items-center" style={{ gap: 14 }}>
            <div tw="flex flex-col items-end">
              <div
                tw="text-[28px] text-white"
                style={{ fontWeight: 600, lineHeight: 1.15 }}
              >
                FarsiUI
              </div>
              <div
                tw="mt-1 text-[18px] text-zinc-300"
                style={{ fontWeight: 400, lineHeight: 1.2 }}
              >
                farsiui.ir
              </div>
            </div>
            <div
              tw="flex h-16 w-16 items-center justify-center rounded-2xl bg-white"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
            >
              <img src={logoSrc} alt="" width={40} height={40} />
            </div>
          </div>

          <div tw="flex flex-col items-end" style={{ gap: 14, maxWidth: 400 }}>
            <div
              tw="text-right text-white"
              style={{
                fontWeight: 600,
                fontSize: titleSize,
                lineHeight: 1.3,
              }}
            >
              {forSatoriRtl(resolvedTitle)}
            </div>
            <div
              tw="text-right text-[22px] text-zinc-200"
              style={{
                fontWeight: 400,
                lineHeight: 1.45,
              }}
            >
              {forSatoriRtl(resolvedDescription)}
            </div>
          </div>

          <div
            tw="flex items-center rounded-full bg-white/10 px-4 py-2 text-[18px] text-zinc-100"
            style={{ fontWeight: 400, gap: 10 }}
          >
            <FarsiUIMark size={18} color="#fafafa" />
            <span>Persian UI · RTL · Design Systems</span>
          </div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts,
    }
  )
}

export { SIZE as OG_SIZE, DEFAULT_TITLE, DEFAULT_DESCRIPTION }
