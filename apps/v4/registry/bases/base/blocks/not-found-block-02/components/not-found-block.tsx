"use client"

import { ArrowRightIcon, HomeIcon, SearchIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/bases/base/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"

export function NotFoundCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge variant="secondary">
            <bdi dir="ltr">۴۰۴</bdi>
          </Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SearchIcon className="size-6" />
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
                جستجو
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs text-muted-foreground">
          مسیر: <bdi dir="ltr" className="ms-1">/docs/missing-page</bdi>
        </CardFooter>
      </Card>
    </section>
  )
}
