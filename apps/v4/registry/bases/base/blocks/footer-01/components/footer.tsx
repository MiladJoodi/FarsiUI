"use client"

export function FooterSimple() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="border-t px-6 py-6">
        <p className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
          © ۱۴۰۵ FarsiUI · همهٔ حقوق محفوظ است
        </p>
      </footer>
    </div>
  )
}
