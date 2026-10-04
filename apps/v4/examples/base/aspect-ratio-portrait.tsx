import Image from "next/image"

import { AspectRatio } from "@/registry/bases/base/ui/aspect-ratio"

export default function AspectRatioPortrait() {
  return (
    <AspectRatio
      ratio={9 / 16}
      className="w-full max-w-[10rem] rounded-lg bg-muted"
      dir="rtl"
    >
      <Image
        src="https://avatar.vercel.sh/farsiui"
        alt="نمونه تصویر عمودی"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
