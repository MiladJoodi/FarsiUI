import Image from "next/image"

import { AspectRatio } from "@/styles/base-nova/ui/aspect-ratio"

export default function AspectRatioDemo() {
  return (
    <AspectRatio
      ratio={16 / 9}
      className="w-full max-w-sm rounded-lg bg-muted"
      dir="rtl"
    >
      <Image
        src="https://avatar.vercel.sh/farsiui"
        alt="نمونه تصویر افقی"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
