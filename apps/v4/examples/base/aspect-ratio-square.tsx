import Image from "next/image"

import { AspectRatio } from "@/registry/bases/base/ui/aspect-ratio"

export default function AspectRatioSquare() {
  return (
    <AspectRatio
      ratio={1 / 1}
      className="w-full max-w-[12rem] rounded-lg bg-muted"
      dir="rtl"
    >
      <Image
        src="https://avatar.vercel.sh/farsiui"
        alt="نمونه تصویر مربعی"
        fill
        className="rounded-lg object-cover grayscale dark:brightness-20"
      />
    </AspectRatio>
  )
}
