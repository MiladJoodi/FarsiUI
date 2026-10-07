import { BlockPreviewCardSkeleton } from "@/components/route-skeletons"

export default function BlocksCategoryLoading() {
  return (
    <div className="flex flex-col gap-4 pb-8" dir="rtl" lang="fa" aria-hidden>
      {Array.from({ length: 3 }).map((_, i) => (
        <BlockPreviewCardSkeleton key={i} />
      ))}
    </div>
  )
}
