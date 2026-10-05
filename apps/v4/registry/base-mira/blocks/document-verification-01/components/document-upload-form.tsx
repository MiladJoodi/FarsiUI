"use client"

import * as React from "react"
import { FileTextIcon, UploadIcon, XIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Progress } from "@/registry/base-mira/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]!)
}

export default function DocumentUploadForm() {
  const [docType, setDocType] = React.useState("national-card")
  const [fileName, setFileName] = React.useState<string | null>(null)
  const [preview, setPreview] = React.useState<string | null>(null)
  const [progress, setProgress] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setDone(false)
    setProgress(0)
    const url = URL.createObjectURL(file)
    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return url
    })
  }

  function clearFile() {
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
    setFileName(null)
    setProgress(0)
    setDone(false)
    if (inputRef.current) inputRef.current.value = ""
  }

  function upload() {
    if (!fileName) return
    setProgress(0)
    let value = 0
    const id = window.setInterval(() => {
      value += 20
      setProgress(value)
      if (value >= 100) {
        window.clearInterval(id)
        setDone(true)
      }
    }, 180)
  }

  React.useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>بارگذاری مدرک</CardTitle>
        <CardDescription>
          نوع مدرک را انتخاب کنید و تصویر واضح بارگذاری کنید
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="doc-type">نوع مدرک</FieldLabel>
            <Select
              items={[
                { value: "national-card", label: "کارت ملی" },
                { value: "birth-cert", label: "شناسنامه" },
                { value: "passport", label: "گذرنامه" },
                { value: "license", label: "گواهینامه" },
              ]}
              value={docType}
              onValueChange={(value) =>
                setDocType((value as string) ?? "national-card")
              }
            >
              <SelectTrigger id="doc-type" className="w-full">
                <SelectValue placeholder="انتخاب کنید" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  <SelectItem value="national-card">کارت ملی</SelectItem>
                  <SelectItem value="birth-cert">شناسنامه</SelectItem>
                  <SelectItem value="passport">گذرنامه</SelectItem>
                  <SelectItem value="license">گواهینامه</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>

          <Field>
            <FieldLabel>فایل مدرک</FieldLabel>
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,application/pdf"
              className="sr-only"
              onChange={onFile}
            />
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="flex min-h-32 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed bg-muted/40 px-4 py-6 text-center transition-colors hover:bg-muted/70"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="پیش‌نمایش مدرک"
                  className="max-h-28 rounded-md object-contain"
                />
              ) : (
                <>
                  <UploadIcon className="size-8 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    برای انتخاب فایل کلیک کنید یا تصویر را اینجا رها کنید
                  </span>
                </>
              )}
            </button>
            {fileName ? (
              <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm">
                <span className="flex min-w-0 items-center gap-2">
                  <FileTextIcon className="size-4 shrink-0 text-muted-foreground" />
                  <span className="truncate" dir="ltr">
                    {fileName}
                  </span>
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={clearFile}
                >
                  <XIcon className="size-4" />
                </Button>
              </div>
            ) : null}
            <FieldDescription>JPG، PNG یا PDF تا ۵ مگابایت</FieldDescription>
          </Field>

          {progress > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{done ? "بارگذاری کامل شد" : "در حال بارگذاری…"}</span>
                <span className="tabular-nums">{toFa(progress)}٪</span>
              </div>
              <Progress value={progress} />
            </div>
          ) : null}

          <Button
            type="button"
            className="w-full"
            disabled={!fileName || (progress > 0 && !done)}
            onClick={upload}
          >
            {done ? "ارسال برای بررسی" : "شروع بارگذاری"}
          </Button>
        </FieldGroup>
      </CardContent>
    </Card>
  )
}
