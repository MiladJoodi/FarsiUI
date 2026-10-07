import { ChartCardSkeleton } from "@/components/route-skeletons"

export default function ChartTypeLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-8 px-4 pb-8 md:px-6"
      aria-hidden
    >
      <div className="grid flex-1 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <ChartCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
