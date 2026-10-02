"use client"

import * as React from "react"

const LINKS = ["مستندات", "بلاک‌ها", "قیمت‌گذاری", "تماس"] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export function FooterLinks() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between md:px-10">
          <a
            href="#"
            onClick={demoNavClick}
            className="text-sm font-bold tracking-tight"
          >
            FarsiUI
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
            {LINKS.map((label) => (
              <a
                key={label}
                href="#"
                onClick={demoNavClick}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">© ۱۴۰۵</p>
        </div>
      </footer>
    </div>
  )
}
