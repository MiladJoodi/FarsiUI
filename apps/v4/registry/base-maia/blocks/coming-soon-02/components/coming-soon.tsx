"use client"

import * as React from "react"
import { BellIcon, SparklesIcon } from "lucide-react"

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
import { Input } from "@/registry/base-maia/ui/input"

export function ComingSoonCard() {
  const [email, setEmail] = React.useState("")

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge>
            <bdi dir="ltr">Coming Soon</bdi>
          </Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <SparklesIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>نسخهٔ جدید در راه است</EmptyTitle>
              <EmptyDescription>
                ایمیل بگذارید تا روز انتشار خبرتان کنیم.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 w-full max-w-sm gap-2">
              <Input
                type="email"
                dir="ltr"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="text-start"
              />
              <Button className="w-full">
                <BellIcon data-icon="inline-start" />
                اطلاع‌رسانی
              </Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs text-muted-foreground">
          تاریخ تقریبی:{" "}
          <bdi dir="ltr" className="mx-1">
            ۱۴۰۵/۰۸
          </bdi>
        </CardFooter>
      </Card>
    </section>
  )
}
