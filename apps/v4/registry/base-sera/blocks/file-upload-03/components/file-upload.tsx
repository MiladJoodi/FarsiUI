"use client"

import * as React from "react"
import { UploadIcon } from "lucide-react"

import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/registry/base-sera/ui/field"
import { Input } from "@/registry/base-sera/ui/input"
import { Label } from "@/registry/base-sera/ui/label"
import { Progress } from "@/registry/base-sera/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-sera/ui/select"
import { Switch } from "@/registry/base-sera/ui/switch"

const TYPE_ITEMS = [
  { value: "سند", label: "سند" },
  { value: "تصویر", label: "تصویر" },
  { value: "آرشیو", label: "آرشیو" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function FileUploadForm() {
  const [fileName, setFileName] = React.useState<string | null>(null)
  const [progress, setProgress] = React.useState(0)
  const [fileType, setFileType] = React.useState("سند")
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
          <CardDescription>نوع فایل، مسیر و ایمیل اطلاع‌رسانی</CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel>نوع فایل</FieldLabel>
              <Select
                items={[...TYPE_ITEMS]}
                value={fileType}
                onValueChange={(value) => {
                  if (TYPE_ITEMS.some((item) => item.value === value)) {
                    setFileType(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نوع" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {TYPE_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
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
                {fileName ? <bdi dir="ltr">{fileName}</bdi> : "انتخاب فایل"}
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
                <p className="text-xs tracking-normal text-muted-foreground">
                  {toFa(progress)}٪
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
