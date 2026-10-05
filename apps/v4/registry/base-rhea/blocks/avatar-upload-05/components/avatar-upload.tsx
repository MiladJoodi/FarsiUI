"use client"

import * as React from "react"
import {
  CameraIcon,
  MoreHorizontalIcon,
  Trash2Icon,
  UploadIcon,
} from "lucide-react"

import { cn } from "@/registry/base-rhea/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-rhea/ui/avatar"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-rhea/ui/field"
import { Input } from "@/registry/base-rhea/ui/input"
import { Label } from "@/registry/base-rhea/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-rhea/ui/popover"
import { Progress } from "@/registry/base-rhea/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-rhea/ui/select"
import { Separator } from "@/registry/base-rhea/ui/separator"
import { Switch } from "@/registry/base-rhea/ui/switch"

const SUGGESTIONS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
] as const

const CROP_ITEMS = [
  { value: "دایره", label: "دایره" },
  { value: "مربع", label: "مربع" },
] as const

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

export default function AvatarUploadHub() {
  const [preview, setPreview] = React.useState<string>(SUGGESTIONS[0])
  const [fileName, setFileName] = React.useState("avatar.jpg")
  const [progress, setProgress] = React.useState(100)
  const [crop, setCrop] = React.useState("دایره")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [cropOpen, setCropOpen] = React.useState(false)
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
        <Popover open={headerOpen} onOpenChange={setHeaderOpen}>
          <PopoverTrigger
            render={<Button type="button" variant="outline" size="sm" />}
          >
            <MoreHorizontalIcon className="size-4" />
            بیشتر
          </PopoverTrigger>
          <PopoverContent
            dir="rtl"
            lang="fa"
            align="start"
            className="w-44 p-1"
          >
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => {
                inputRef.current?.click()
                setHeaderOpen(false)
              }}
            >
              بارگذاری جدید
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setHeaderOpen(false)}
            >
              دانلود فعلی
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => {
                setPreview("")
                setFileName("")
                setProgress(0)
                setHeaderOpen(false)
              }}
            >
              حذف تصویر
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[1fr_14rem]">
        <div className="space-y-6 p-5 md:p-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="relative">
              <Avatar
                className={
                  crop === "دایره"
                    ? "size-32"
                    : "size-32 rounded-xl after:rounded-xl"
                }
              >
                {preview ? <AvatarImage src={preview} alt="پروفایل" /> : null}
                <AvatarFallback className="text-3xl">م‌ر</AvatarFallback>
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
                  <p className="text-xs tracking-normal text-muted-foreground">
                    {toFa(progress)}٪ تکمیل‌شده
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
                  className="rounded-full ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  onClick={() => {
                    setPreview(src)
                    setFileName(`suggestion-${i + 1}.jpg`)
                    setProgress(100)
                  }}
                >
                  <Avatar className="size-14">
                    <AvatarImage src={src} alt={`پیشنهاد ${toFa(i + 1)}`} />
                    <AvatarFallback>پ</AvatarFallback>
                  </Avatar>
                </button>
              ))}
            </div>
          </div>

          <label className="flex h-28 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-muted/40">
            <UploadIcon className="size-5" />
            <span>رها کردن تصویر اینجا</span>
            <span className="text-xs">حداکثر ۵ مگابایت · JPG یا PNG</span>
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
              items={[...CROP_ITEMS]}
              value={crop}
              onValueChange={(value) => {
                if (CROP_ITEMS.some((item) => item.value === value)) {
                  setCrop(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="شکل" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {CROP_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>

          <Popover open={cropOpen} onOpenChange={setCropOpen}>
            <PopoverTrigger
              render={
                <Button type="button" variant="outline" className="w-full" />
              }
            >
              میانبر شکل
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="start"
              className="w-40 p-1"
            >
              {CROP_ITEMS.map((opt) => (
                <Button
                  key={opt.value}
                  type="button"
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "w-full justify-start",
                    crop === opt.value && "bg-muted"
                  )}
                  onClick={() => {
                    setCrop(opt.value)
                    setCropOpen(false)
                  }}
                >
                  {opt.label}
                </Button>
              ))}
            </PopoverContent>
          </Popover>

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
