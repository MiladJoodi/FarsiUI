"use client"

import * as React from "react"
import { UploadIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import { Progress } from "@/registry/bases/base/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Switch } from "@/registry/bases/base/ui/switch"

export function FileUploadForm() {
  const [fileName, setFileName] = React.useState<string | null>(null)
  const [progress, setProgress] = React.useState(0)
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
    const id = window.setInterval(() => {
      value += 25
      setProgress(value)
      if (value >= 100) window.clearInterval(id)
    }, 140)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-lg flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>بارگذاری فایل</CardTitle>
          <CardDescription>
            نوع فایل، مسیر و ایمیل اطلاع‌رسانی
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel>نوع فایل</FieldLabel>
              <Select defaultValue="doc">
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectItem value="doc">سند</SelectItem>
                  <SelectItem value="image">تصویر</SelectItem>
                  <SelectItem value="archive">آرشیو</SelectItem>
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="fu3-path">مسیر نمایشی</FieldLabel>
              <Input
                id="fu3-path"
                defaultValue="/uploads/docs"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>مسیر انگلیسی LTR</FieldDescription>
            </Field>

            <Field>
              <FieldLabel htmlFor="fu3-email">ایمیل اطلاع‌رسانی</FieldLabel>
              <Input
                id="fu3-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
            </Field>

            <label className="flex h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-muted/40">
              <UploadIcon className="size-5" />
              <span>
                {fileName ? (
                  <bdi dir="ltr">{fileName}</bdi>
                ) : (
                  "انتخاب فایل"
                )}
              </span>
              <input
                ref={inputRef}
                type="file"
                className="sr-only"
                onChange={onFile}
              />
            </label>

            {fileName ? (
              <div className="space-y-2">
                <Progress value={progress} />
                <p className="text-xs text-muted-foreground">
                  <bdi dir="ltr">{progress}%</bdi>
                </p>
              </div>
            ) : null}

            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="fu3-public">عمومی باشد</Label>
              <Switch id="fu3-public" />
            </div>
          </FieldGroup>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1" onClick={upload} disabled={!fileName}>
            بارگذاری
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              setFileName(null)
              setProgress(0)
              if (inputRef.current) inputRef.current.value = ""
            }}
          >
            پاک کردن
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
