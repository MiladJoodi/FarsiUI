export default function ShimmerRtl() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="mx-auto grid w-full max-w-lg gap-6 text-center text-sm text-muted-foreground sm:grid-cols-2"
    >
      <div className="flex flex-col gap-3">
        <p dir="rtl" lang="fa" className="shimmer">
          در حال ایجاد پاسخ&hellip;
        </p>
        <p className="font-mono text-xs">dir=&quot;rtl&quot;</p>
      </div>
      <div className="flex flex-col gap-3">
        <p dir="ltr" lang="en" className="shimmer">
          Generating response&hellip;
        </p>
        <p className="font-mono text-xs">dir=&quot;ltr&quot;</p>
      </div>
    </div>
  )
}
