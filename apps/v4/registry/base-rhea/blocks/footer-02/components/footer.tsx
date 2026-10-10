"use client"

import * as React from "react"

const LINKS = ["مستندات", "بلوک‌ها", "قیمت‌گذاری", "تماس"] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function FooterLinks() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh min-w-0 flex-col overflow-x-hidden bg-background"
    >
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="min-w-0 border-t">
        <div className="mx-auto flex w-full min-w-0 max-w-5xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:gap-6 md:px-10">
          <a
            href="#"
            onClick={demoNavClick}
            className="shrink-0 text-sm font-bold tracking-tight"
          >
            FarsiUI
          </a>
          <nav className="flex min-w-0 flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground md:justify-center">
            {LINKS.map((label) => (
              <a
                key={label}
                href="#"
                onClick={demoNavClick}
                className="shrink-0 transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="shrink-0 text-sm text-muted-foreground">© ۱۴۰۵</p>
        </div>
      </footer>
    </div>
  )
}
