"use client"

import * as React from "react"
import { cn } from "cn"
import { CheckIcon, FileTextIcon, UploadIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import { Separator } from "@/registry/base-mira/ui/separator"

type DocStatus = "todo" | "uploaded"

const DOCS = [
  { id: "national", title: "تصویر روی کارت ملی", hint: "JPG یا PNG" },
  { id: "birth", title: "صفحه اول شناسنامه", hint: "همه اطلاعات خوانا باشد" },
  { id: "residence", title: "مدرک محل سکونت", hint: "قبض یا اجاره‌نامه" },
] as const

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function DocumentChecklist() {
  const [status, setStatus] = React.useState<Record<string, DocStatus>>({
    national: "todo",
    birth: "todo",
    residence: "todo",
  })

  const doneCount = Object.values(status).filter((s) => s === "uploaded").length
  const allDone = doneCount === DOCS.length

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle>مدارک موردنیاز</CardTitle>
            <CardDescription>
              برای تکمیل پرونده، این مدارک را بارگذاری کنید
            </CardDescription>
          </div>
          <Badge variant={allDone ? "default" : "secondary"}>
            {toFa(doneCount)} از {toFa(DOCS.length)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-0">
        {DOCS.map((doc, index) => {
          const uploaded = status[doc.id] === "uploaded"
          return (
            <div key={doc.id}>
              {index > 0 ? <Separator className="my-3" /> : null}
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border",
                    uploaded
                      ? "border-primary bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {uploaded ? (
                    <CheckIcon className="size-4" />
                  ) : (
                    <FileTextIcon className="size-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1 space-y-2">
                  <div>
                    <p className="text-sm font-medium">{doc.title}</p>
                    <p className="text-xs text-muted-foreground">{doc.hint}</p>
                  </div>
                  <Button
                    type="button"
                    size="sm"
                    variant={uploaded ? "secondary" : "outline"}
                    onClick={() =>
                      setStatus((prev) => ({
                        ...prev,
                        [doc.id]: uploaded ? "todo" : "uploaded",
                      }))
                    }
                  >
                    <UploadIcon />
                    {uploaded ? "بارگذاری شد" : "انتخاب فایل"}
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
        <Button className="mt-6 w-full" disabled={!allDone}>
          ارسال مدارک برای بررسی
        </Button>
      </CardContent>
    </Card>
  )
}
