"use client"

import { FolderOpenIcon, PlusIcon } from "lucide-react"

import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-nova/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/base-nova/ui/empty"

export default function EmptyStateIconCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="items-center pb-2 text-center">
          <Badge variant="secondary">پروژه‌ها</Badge>
        </CardHeader>
        <CardContent>
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <FolderOpenIcon className="size-6" />
              </EmptyMedia>
              <EmptyTitle>هنوز پروژه‌ای نیست</EmptyTitle>
              <EmptyDescription>
                اولین پروژه را بسازید تا تیم، فایل‌ها و وظایف در یک جا جمع شوند.
              </EmptyDescription>
            </EmptyHeader>
            <EmptyContent className="mt-4 flex-row justify-center gap-2">
              <Button>
                <PlusIcon data-icon="inline-start" />
                پروژه جدید
              </Button>
              <Button variant="outline">راهنما</Button>
            </EmptyContent>
          </Empty>
        </CardContent>
        <CardFooter className="justify-center border-t text-xs text-muted-foreground">
          مسیر نمونه:{" "}
          <bdi dir="ltr" className="ms-1">
            /projects
          </bdi>
        </CardFooter>
      </Card>
    </section>
  )
}
