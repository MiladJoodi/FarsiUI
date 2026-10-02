import { type Metadata } from "next"

const title = "مهارت‌ها"
const description =
  "مهارت‌ها فایل‌های Markdown هستند که به Agent یاد می‌دهند یک کار مشخص را چطور انجام دهد — برای Claude Code، Cursor و Codex."

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="container-wrapper relative flex flex-1 flex-col px-2 pb-12"
      dir="rtl"
      lang="fa"
      id="skills"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-foreground)_5%,transparent),transparent_65%)]"
      />
      {children}
    </div>
  )
}
