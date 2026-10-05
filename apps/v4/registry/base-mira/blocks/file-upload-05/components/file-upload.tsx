"use client"

import * as React from "react"
import { FileIcon, MoreHorizontalIcon, UploadIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/base-mira/ui/badge"
import { Button } from "@/registry/base-mira/ui/button"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/base-mira/ui/field"
import { Input } from "@/registry/base-mira/ui/input"
import { Label } from "@/registry/base-mira/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/base-mira/ui/popover"
import { Progress } from "@/registry/base-mira/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/base-mira/ui/select"
import { Separator } from "@/registry/base-mira/ui/separator"
import { Switch } from "@/registry/base-mira/ui/switch"

type UploadItem = {
  id: string
  name: string
  size: string
  progress: number
  status: "uploading" | "done" | "queued"
}

const FOLDER_ITEMS = [
  { value: "اسناد", label: "اسناد" },
  { value: "تصاویر", label: "تصاویر" },
  { value: "آرشیو", label: "آرشیو" },
] as const

const INITIAL: UploadItem[] = [
  {
    id: "1",
    name: "contract-v2.pdf",
    size: "۲٫۴ مگابایت",
    progress: 100,
    status: "done",
  },
  {
    id: "2",
    name: "assets.zip",
    size: "۱۸ مگابایت",
    progress: 54,
    status: "uploading",
  },
]

function toFa(n: number) {
  return n.toLocaleString("fa-IR")
}

function formatSize(bytes: number) {
  if (bytes >= 1024 * 1024) {
    const mb = bytes / (1024 * 1024)
    return `${mb.toLocaleString("fa-IR", { maximumFractionDigits: 1 })} مگابایت`
  }
  const kb = Math.max(1, Math.round(bytes / 1024))
  return `${toFa(kb)} کیلوبایت`
}

export default function FileUploadHub() {
  const [files, setFiles] = React.useState(INITIAL)
  const [folder, setFolder] = React.useState("اسناد")
  const [headerOpen, setHeaderOpen] = React.useState(false)
  const [openId, setOpenId] = React.useState<string | null>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const uploading = files.filter((f) => f.status === "uploading").length
  const done = files.filter((f) => f.status === "done").length

  function remove(id: string) {
    setFiles((prev) => prev.filter((f) => f.id !== id))
    setOpenId(null)
  }

  function onPick(event: React.ChangeEvent<HTMLInputElement>) {
    const picked = event.target.files
    if (!picked?.length) return
    const next: UploadItem[] = Array.from(picked).map((file, i) => ({
      id: `${Date.now()}-${i}`,
      name: file.name,
      size: formatSize(file.size),
      progress: 8,
      status: "uploading" as const,
    }))
    setFiles((prev) => [...next, ...prev])
    if (inputRef.current) inputRef.current.value = ""
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <Badge variant="secondary" className="mb-3">
            رسانه
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">بارگذاری فایل</h2>
          <p className="mt-2 tracking-normal text-muted-foreground">
            {toFa(done)} تمام · {toFa(uploading)} در حال بارگذاری
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
                setFiles([])
                setHeaderOpen(false)
              }}
            >
              پاک کردن همه
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setHeaderOpen(false)}
            >
              توقف همه
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-full justify-start"
              onClick={() => setHeaderOpen(false)}
            >
              دانلود گزارش
            </Button>
          </PopoverContent>
        </Popover>
      </div>

      <div className="overflow-hidden rounded-xl border bg-card shadow-sm md:grid md:grid-cols-[15rem_1fr]">
        <aside className="space-y-4 border-b bg-muted/30 p-4 md:border-b-0 md:border-l">
          <p className="text-sm font-medium">تنظیمات</p>
          <Field>
            <FieldLabel>پوشه مقصد</FieldLabel>
            <Select
              items={[...FOLDER_ITEMS]}
              value={folder}
              onValueChange={(value) => {
                if (FOLDER_ITEMS.some((item) => item.value === value)) {
                  setFolder(value as string)
                }
              }}
            >
              <SelectTrigger className="w-full" dir="rtl">
                <SelectValue placeholder="پوشه" />
              </SelectTrigger>
              <SelectContent dir="rtl" lang="fa">
                {FOLDER_ITEMS.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
          <Field>
            <FieldLabel htmlFor="fu5-path">مسیر</FieldLabel>
            <Input
              id="fu5-path"
              defaultValue="/uploads/media"
              dir="ltr"
              className="text-start"
            />
            <FieldDescription>مسیر انگلیسی</FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="fu5-email">ایمیل اطلاع‌رسانی</FieldLabel>
            <Input
              id="fu5-email"
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
          </Field>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="fu5-pub">عمومی</Label>
            <Switch id="fu5-pub" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <Label htmlFor="fu5-zip">فشرده‌سازی</Label>
            <Switch id="fu5-zip" defaultChecked />
          </div>
        </aside>

        <div className="p-4 md:p-5">
          <label className="mb-4 flex h-36 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-sm text-muted-foreground transition-colors hover:bg-muted/40">
            <UploadIcon className="size-6" />
            <span>فایل‌ها را اینجا رها کنید یا کلیک کنید</span>
            <span className="text-xs">حداکثر ۲۵ مگابایت برای هر فایل</span>
            <input
              ref={inputRef}
              type="file"
              multiple
              className="sr-only"
              onChange={onPick}
            />
          </label>

          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-medium">صف بارگذاری</p>
            <Button
              size="sm"
              variant="outline"
              className="gap-2"
              onClick={() => inputRef.current?.click()}
            >
              <UploadIcon className="size-3.5" />
              افزودن بیشتر
            </Button>
          </div>

          <div className="overflow-hidden rounded-lg border">
            {files.length === 0 ? (
              <p className="p-10 text-center text-sm text-muted-foreground">
                صفی وجود ندارد
              </p>
            ) : (
              files.map((file, i) => (
                <div key={file.id}>
                  {i > 0 && <Separator />}
                  <div className="flex items-start gap-3 px-4 py-3">
                    <FileIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="min-w-0 flex-1 truncate text-sm font-medium">
                          <bdi dir="ltr">{file.name}</bdi>
                        </p>
                        <Badge
                          variant={
                            file.status === "done" ? "secondary" : "outline"
                          }
                        >
                          {file.status === "done"
                            ? "تمام"
                            : file.status === "queued"
                              ? "در صف"
                              : "در حال بارگذاری"}
                        </Badge>
                      </div>
                      <p className="text-xs tracking-normal text-muted-foreground">
                        {file.size}
                        {" · "}
                        {folder}
                      </p>
                      {file.status !== "done" ? (
                        <div className="space-y-1">
                          <Progress value={file.progress} />
                          <p className="text-xs tracking-normal text-muted-foreground">
                            {toFa(file.progress)}٪
                          </p>
                        </div>
                      ) : null}
                    </div>
                    <Popover
                      open={openId === file.id}
                      onOpenChange={(open) => setOpenId(open ? file.id : null)}
                    >
                      <PopoverTrigger
                        render={
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                          />
                        }
                      >
                        <MoreHorizontalIcon className="size-4" />
                        <span className="sr-only">عملیات</span>
                      </PopoverTrigger>
                      <PopoverContent
                        dir="rtl"
                        lang="fa"
                        align="start"
                        className="w-40 p-1"
                      >
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          باز کردن
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => setOpenId(null)}
                        >
                          کپی لینک
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => remove(file.id)}
                        >
                          حذف
                        </Button>
                      </PopoverContent>
                    </Popover>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => remove(file.id)}
                      aria-label="حذف"
                    >
                      <XIcon className="size-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
