"use client"

import * as React from "react"
import { FileIcon, UploadIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Progress } from "@/registry/base-vega/ui/progress"

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function FileUploadProgress() {
  const [fileName, setFileName] = React.useState<string | null>("report.pdf")
  const [progress, setProgress] = React.useState(45)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setProgress(0)
  }

  function upload() {
    if (!fileName) return
    let value = 0
    setProgress(0)
    const id = window.setInterval(() => {
      value += 20
      setProgress(value)
      if (value >= 100) window.clearInterval(id)
    }, 160)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>بارگذاری فایل</CardTitle>
          <CardDescription>پیشرفت بارگذاری و نام فایل</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <label className="flex h-32 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-muted/40">
            <UploadIcon className="size-5" />
            <span>انتخاب یا رها کردن فایل</span>
            <input
              ref={inputRef}
              type="file"
              className="sr-only"
              onChange={onFile}
            />
          </label>

          {fileName ? (
            <div className="space-y-2 rounded-lg border p-3">
              <div className="flex items-center gap-2">
                <FileIcon className="size-4 shrink-0 text-muted-foreground" />
                <p className="min-w-0 flex-1 truncate text-sm font-medium">
                  <bdi dir="ltr">{fileName}</bdi>
                </p>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  onClick={() => {
                    setFileName(null)
                    setProgress(0)
                    if (inputRef.current) inputRef.current.value = ""
                  }}
                  aria-label="حذف فایل"
                >
                  <XIcon className="size-4" />
                </Button>
              </div>
              <Progress value={progress} />
              <p className="text-xs tracking-normal text-muted-foreground">
                {toFa(progress)}٪ تکمیل شده
              </p>
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1" onClick={upload} disabled={!fileName}>
            بارگذاری
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => inputRef.current?.click()}
          >
            انتخاب فایل
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
