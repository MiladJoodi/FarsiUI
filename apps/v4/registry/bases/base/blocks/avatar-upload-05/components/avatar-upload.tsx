"use client"

import * as React from "react"
import {
  CameraIcon,
  MoreHorizontalIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Field,
  FieldDescription,
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
import { Separator } from "@/registry/bases/base/ui/separator"
import { Switch } from "@/registry/bases/base/ui/switch"

const SUGGESTIONS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
] as const

export function AvatarUploadHub() {
  const [preview, setPreview] = React.useState<string>(SUGGESTIONS[0])
  const [fileName, setFileName] = React.useState("avatar.jpg")
  const [progress, setProgress] = React.useState(100)
  const [crop, setCrop] = React.useState("circle")
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setProgress(0)
    const url = URL.createObjectURL(file)
    setPreview(url)
    let value = 0
    const id = window.setInterval(() => {
      value += 20
      setProgress(value)
      if (value >= 100) window.clearInterval(id)
    }, 100)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            پروفایل
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">
            بارگذاری تصویر پروفایل
          </h2>
          <p className="mt-2 text-muted-foreground">
            برش، پیش‌نمایش و تنظیمات نمایش
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </DropdownMenuTrigger>
          <DropdownMenuContent dir="rtl" lang="fa" align="start">
            <DropdownMenuLabel>عملیات</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => inputRef.current?.click()}>
              بارگذاری جدید
            </DropdownMenuItem>
            <DropdownMenuItem>دانلود فعلی</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setPreview("")
                setFileName("")
                setProgress(0)
              }}
            >
              حذف تصویر
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[1fr_14rem]">
        <div className="space-y-6 p-5 md:p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="relative">
              <Avatar
                className={
                  crop === "circle" ? "size-32" : "size-32 rounded-xl after:rounded-xl"
                }
              >
                {preview ? <AvatarImage src={preview} alt="پروفایل" /> : null}
                <AvatarFallback className="text-3xl">مر</AvatarFallback>
              </Avatar>
              <Button
                type="button"
                size="icon-sm"
                variant="secondary"
                className="absolute end-1 bottom-1 rounded-full"
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
            <div className="min-w-0 flex-1 space-y-3 text-center sm:text-start">
              <div>
                <p className="text-lg font-semibold">مریم رضایی</p>
                <p className="text-sm text-muted-foreground">
                  {fileName ? (
                    <>
                      فایل: <bdi dir="ltr">{fileName}</bdi>
                    </>
                  ) : (
                    "تصویری انتخاب نشده"
                  )}
                </p>
              </div>
              {fileName && progress < 100 ? (
                <div className="space-y-1">
                  <Progress value={progress} />
                  <p className="text-xs text-muted-foreground">
                    <bdi dir="ltr">{progress}%</bdi> تکمیل‌شده
                  </p>
                </div>
              ) : null}
              <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                <Button
                  size="sm"
                  className="gap-2"
                  onClick={() => inputRef.current?.click()}
                >
                  <UploadIcon className="size-3.5" />
                  بارگذاری
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2"
                  onClick={() => {
                    setPreview("")
                    setFileName("")
                    setProgress(0)
                  }}
                >
                  <Trash2Icon className="size-3.5" />
                  حذف
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <p className="mb-3 text-sm font-medium">پیشنهادها</p>
            <div className="flex flex-wrap gap-3">
              {SUGGESTIONS.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className="rounded-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  onClick={() => {
                    setPreview(src)
                    setFileName(`suggestion-${i + 1}.jpg`)
                    setProgress(100)
                  }}
                >
                  <Avatar className="size-14">
                    <AvatarImage src={src} alt={`پیشنهاد ${i + 1}`} />
                    <AvatarFallback>پ</AvatarFallback>
                  </Avatar>
                </button>
              ))}
            </div>
          </div>

          <label className="flex h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-muted/40">
            <UploadIcon className="size-5" />
            <span>رها کردن تصویر اینجا</span>
            <span className="text-xs">
              حداکثر <bdi dir="ltr">۵ MB</bdi> · JPG یا PNG
            </span>
            <input
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={onFile}
            />
          </label>
        </div>

        <aside className="space-y-4 border-t bg-muted/30 p-4 md:border-t-0 md:border-r">
          <p className="text-sm font-medium">تنظیمات</p>

          <Field>
            <FieldLabel>شکل برش</FieldLabel>
            <Select
              value={crop}
              onValueChange={(v) => setCrop((v as string) ?? "circle")}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="شکل" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                <SelectItem value="circle">دایره</SelectItem>
                <SelectItem value="square">مربع</SelectItem>
              </SelectContent>
            </Select>
          </Field>

          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" className="w-full" />}
            >
              میانبر شکل
            </DropdownMenuTrigger>
            <DropdownMenuContent dir="rtl" lang="fa" align="start" className="w-40">
              <DropdownMenuRadioGroup
                value={crop}
                onValueChange={(v) => setCrop(v ?? "circle")}
              >
                <DropdownMenuRadioItem value="circle">
                  دایره
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="square">
                  مربع
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Field>
            <FieldLabel htmlFor="au5-email">ایمیل تأیید</FieldLabel>
            <Input
              id="au5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>اختیاری</FieldDescription>
          </Field>

          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="au5-public">نمایش عمومی</Label>
            <Switch id="au5-public" defaultChecked />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="au5-hd">کیفیت بالا</Label>
            <Switch id="au5-hd" />
          </div>

          <Button className="w-full">ذخیره تغییرات</Button>
        </aside>
      </div>
    </section>
  )
}
