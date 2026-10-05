"use client"

import { HomeIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-maia/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-maia/ui/empty"

export default function NotFoundCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge variant="secondary" className="tracking-normal">
            ۴۰۴
          </Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon className="size-6 -scale-x-100" />
              </EmptyMedia>
              <EmptyTitle>موردی پیدا نشد</EmptyTitle>
              <EmptyDescription>
                شاید لینک منقضی شده باشد. می‌توانید به خانه برگردید یا جستجو
                کنید.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <HomeIcon data-icon="inline-start" />
                خانه
              </Button>
              <Button variant="outline">
                <SearchIcon data-icon="inline-start" className="-scale-x-100" />
                جستجو
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs text-muted-foreground">
          مسیر پیدا نشد
        </CardFooter>
      </Card>
    </section>
  )
}
