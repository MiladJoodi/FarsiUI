"use client"

import { cn } from "cn"

export const LOGOS = [
  { src: "/farsiui/companies/amazon.png", alt: "Amazon", scale: 0.88 },
  { src: "/farsiui/companies/apple.png", alt: "Apple", scale: 1.2 },
  { src: "/farsiui/companies/github.png", alt: "GitHub", scale: 1.18 },
  { src: "/farsiui/companies/google.png", alt: "Google", scale: 0.86 },
  { src: "/farsiui/companies/microsoft.png", alt: "Microsoft", scale: 0.92 },
  { src: "/farsiui/companies/netflix.png", alt: "Netflix", scale: 0.94 },
  { src: "/farsiui/companies/Spotify.png", alt: "Spotify", scale: 1 },
  { src: "/farsiui/companies/vercel.png", alt: "Vercel", scale: 1 },
] as const

type LogoSize = "sm" | "md" | "lg"

const SIZE_CLASS: Record<LogoSize, string> = {
  sm: "h-7 w-[6.75rem]",
  md: "h-8 w-[7.5rem]",
  lg: "h-10 w-[9rem]",
}

export default function LogoImage({
  src,
  alt,
  scale = 1,
  size = "md",
  className,
  imgClassName,
}: {
  src: string
  alt: string
  scale?: number
  size?: LogoSize
  className?: string
  imgClassName?: string
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        SIZE_CLASS[size],
        className
      )}
    >
      <img
        src={src}
        alt={alt}
        style={{ transform: `scale(${scale})` }}
        className={cn(
          "max-h-full max-w-full object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0",
          imgClassName
        )}
      />
    </span>
  )
}
