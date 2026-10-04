"use client"

import * as React from "react"
import { CameraIcon } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
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

const RATIO_ITEMS = [
  { value: "مربع ۱:۱", label: "مربع ۱:۱" },
  { value: "۴:۵", label: "۴:۵" },
  { value: "دایره", label: "دایره" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function AvatarUploadForm() {
  const [preview, setPreview] = React.useState<string | null>(null)
  const [fileName, setFileName] = React.useState<string | null>(null)
  const [progress, setProgress] = React.useState(0)
  const [ratio, setRatio] = React.useState("مربع ۱:۱")
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setProgress(0)
    const url = URL.createObjectURL(file)
    setPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev)
      return url
    })
  }

  function upload() {
    if (!preview) return
    let value = 0
    const id = window.setInterval(() => {
      value += 25
      setProgress(value)
      if (value >= 100) window.clearInterval(id)
    }, 120)
  }

  React.useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-start">
          <CardTitle>بارگذاری تصویر پروفایل</CardTitle>
          <CardDescription>
            تنظیمات نمایش و ایمیل اطلاع‌رسانی LTR
          </CardDescription>
        </CardHeader>
        <CardContent>
          <FieldGroup className="gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="size-20">
                  {preview ? (
                    <AvatarImage src={preview} alt="پروفایل" />
                  ) : null}
                  <AvatarFallback className="text-xl">م‌ر</AvatarFallback>
                </Avatar>
                <Button
                  type="button"
                  size="icon-sm"
                  variant="secondary"
                  className="absolute end-0 bottom-0 rounded-full"
                  onClick={() => inputRef.current?.click()}
                  aria-label="انتخاب تصویر"
                >
                  <CameraIcon className="size-3.5" />
                </Button>
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={onFile}
                />
              </div>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-sm font-medium">مریم رضایی</p>
                <p className="truncate text-xs text-muted-foreground">
                  {fileName ? (
                    <bdi dir="ltr">{fileName}</bdi>
                  ) : (
                    "هنوز تصویری انتخاب نشده"
                  )}
                </p>
                {fileName ? (
                  <div className="space-y-1">
                    <Progress value={progress} />
                    <p className="text-xs tracking-normal text-muted-foreground">
                      {toFa(progress)}٪
                    </p>
                  </div>
                ) : null}
              </div>
            </div>

            <Field>
              <FieldLabel>نسبت تصویر</FieldLabel>
              <Select
                items={[...RATIO_ITEMS]}
                value={ratio}
                onValueChange={(value) => {
                  if (RATIO_ITEMS.some((item) => item.value === value)) {
                    setRatio(value as string)
                  }
                }}
              >
                <SelectTrigger className="w-full" dir="rtl">
                  <SelectValue placeholder="نسبت" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  {RATIO_ITEMS.map((item) => (
                    <SelectItem key={item.value} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <FieldLabel htmlFor="au3-email">ایمیل حساب</FieldLabel>
              <Input
                id="au3-email"
                type="email"
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <FieldDescription>برای تأیید تغییر تصویر</FieldDescription>
            </Field>

            <div className="flex items-center justify-between gap-2">
              <Label htmlFor="au3-public">نمایش عمومی</Label>
              <Switch id="au3-public" defaultChecked />
            </div>
          </FieldGroup>
        </CardContent>
        <CardFooter className="gap-2 border-t">
          <Button className="flex-1" onClick={upload} disabled={!preview}>
            ذخیره تصویر
          </Button>
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => {
              if (preview) URL.revokeObjectURL(preview)
              setPreview(null)
              setFileName(null)
              setProgress(0)
              if (inputRef.current) inputRef.current.value = ""
            }}
          >
            حذف
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
