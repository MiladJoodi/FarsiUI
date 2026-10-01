export function SiteFooter() {
  return (
    <footer className="group-has-[.docs-nav]/body:pb-20 group-has-[.section-soft]/body:bg-surface/40 group-has-[[data-slot=designer]]/body:hidden group-has-[[data-slot=docs]]/body:hidden group-has-[.docs-nav]/body:sm:pb-0 dark:bg-transparent dark:group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent">
      <div className="container-wrapper px-4 xl:px-6">
        <div className="flex h-(--footer-height) items-center justify-between">
          <div
            dir="rtl"
            lang="fa"
            className="w-full px-1 text-center text-xs leading-loose text-muted-foreground sm:text-sm"
          >
            فارسیUI متن‌باز و رایگان در اختیار همه
          </div>
        </div>
      </div>
    </footer>
  )
}
