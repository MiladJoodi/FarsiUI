export default function BlocksLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto flex w-full max-w-6xl min-w-0 flex-col gap-8 px-4 pb-8 md:px-6"
      aria-hidden
    >
      <div className="flex flex-col gap-3">
        <div className="h-8 w-40 max-w-full animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-72 max-w-full animate-pulse rounded-md bg-muted" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="h-56 animate-pulse rounded-xl bg-muted md:h-72"
          />
        ))}
      </div>
    </div>
  )
}
