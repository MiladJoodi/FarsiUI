import Link from "next/link"

const footerLinks = [
  { href: "/docs", label: "مستندات" },
  { href: "/docs/installation", label: "نصب" },
  { href: "/docs/components", label: "کامپوننت‌ها" },
  { href: "/blocks", label: "بلوک‌ها" },
  { href: "/skills", label: "مهارت‌ها" },
  { href: "/showcase", label: "نمونه‌ها" },
  { href: "/docs/mcp", label: "MCP" },
] as const

export function SiteFooter() {
  return (
    <footer className="group-has-[.docs-nav]/body:pb-20 group-has-[.section-soft]/body:bg-surface/40 group-has-[[data-slot=docs]]/body:hidden group-has-[.docs-nav]/body:sm:pb-0 dark:bg-transparent dark:group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent">
      <div className="container-wrapper px-4 xl:px-6">
        <div
          dir="rtl"
          lang="fa"
          className="flex min-h-(--footer-height) flex-col items-start justify-center gap-3 py-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <nav aria-label="پیوندهای پاورقی">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-muted-foreground">
            <Link href="/" className="font-medium hover:text-foreground">
              FarsiUI
            </Link>
            {" — "}
            کتابخانه کامپوننت UI فارسی
          </p>
        </div>
      </div>
    </footer>
  )
}
