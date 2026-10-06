export default function ChartsLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-8 px-4 pb-8 md:px-6"
      aria-hidden
    >
      <div className="grid flex-1 items-stretch gap-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-9 animate-pulse rounded-lg bg-muted" />
            <div className="h-[460px] animate-pulse rounded-xl bg-muted" />
          </div>
        ))}
      </div>
    </div>
  )
}
