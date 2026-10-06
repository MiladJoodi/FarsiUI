export default function DocsLoading() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto flex w-full max-w-3xl min-w-0 flex-col gap-6 px-4 py-8 md:px-6"
      aria-hidden
    >
      <div className="h-8 w-48 max-w-full animate-pulse rounded-md bg-muted" />
      <div className="flex flex-col gap-3">
        <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-[92%] animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-[78%] animate-pulse rounded-md bg-muted" />
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-[88%] animate-pulse rounded-md bg-muted" />
        <div className="h-4 w-[64%] animate-pulse rounded-md bg-muted" />
      </div>
      <div className="mt-2 h-40 w-full animate-pulse rounded-xl bg-muted" />
    </div>
  )
}
