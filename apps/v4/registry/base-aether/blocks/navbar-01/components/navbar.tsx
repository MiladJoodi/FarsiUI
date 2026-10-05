"use client"

import * as React from "react"

import { Button } from "@/registry/base-aether/ui/button"

const LINKS = ["محصولات", "قیمت‌ها", "مستندات"] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function NavbarSimple() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-4 md:px-6">
          <a
            href="#"
            onClick={demoNavClick}
            className="text-sm font-bold tracking-tight"
          >
            FarsiUI
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
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
          <Button size="sm" variant="outline" type="button">
            ورود
          </Button>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center text-sm text-muted-foreground">
        محتوای صفحه
      </main>
    </div>
  )
}
