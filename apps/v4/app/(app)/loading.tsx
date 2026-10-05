export default function AppLoading() {
  return (
    <div
      aria-busy="true"
      aria-label="در حال بارگذاری"
      className="flex flex-1 flex-col gap-4 px-4 py-8 md:px-6"
    >
      <div className="mx-auto w-full max-w-5xl space-y-4">
        <div className="h-7 w-40 max-w-[40%] animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-full max-w-md animate-pulse rounded-md bg-muted/80" />
        <div className="mt-6 min-h-[40vh] animate-pulse rounded-xl bg-muted/60" />
      </div>
    </div>
  )
}
