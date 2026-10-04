export default function ShimmerSpread() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-muted-foreground sm:grid-cols-2"
    >
      <div className="flex flex-col gap-3">
        <p className="shimmer shimmer-spread-4">در حال ایجاد پاسخ&hellip;</p>
        <p className="font-mono text-xs">shimmer-spread-4</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="shimmer shimmer-spread-24">در حال ایجاد پاسخ&hellip;</p>
        <p className="font-mono text-xs">shimmer-spread-24</p>
      </div>
    </div>
  )
}
