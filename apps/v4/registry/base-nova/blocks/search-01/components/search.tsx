"use client"

import { SearchIcon } from "lucide-react"

import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"
import { Input } from "@/registry/base-nova/ui/input"

export function SearchSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card className="bg-card">
        <CardHeader className="text-start">
          <CardTitle>جستجو</CardTitle>
          <CardDescription>عبارت فارسی را جستجو کنید</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="جستجو کنید…" className="ps-9" dir="rtl" />
            </div>
            <Button type="submit">جستجو</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
