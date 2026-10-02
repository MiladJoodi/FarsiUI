"use client"

const LINKS = [
  { href: "#", label: "مستندات" },
  { href: "#", label: "بلاک‌ها" },
  { href: "#", label: "قیمت‌گذاری" },
  { href: "#", label: "تماس" },
] as const

export function FooterLinks() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <a href="#" className="text-sm font-bold tracking-tight">
            FarsiUI
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">© ۱۴۰۴</p>
        </div>
      </footer>
    </div>
  )
}
