import { ShowcaseTileSkeleton } from "@/components/route-skeletons"

export default function ChartsLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto w-full max-w-6xl px-4 pb-8 md:px-6"
      aria-hidden
    >
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ShowcaseTileSkeleton key={i} variant="chart" />
        ))}
      </div>
    </div>
  )
}
