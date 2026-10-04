"use client"

export default function HeaderSimple() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b px-6 py-8 md:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            پروژه‌ها
          </h1>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
    </div>
  )
}
