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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Progress } from "@/registry/bases/base/ui/progress"
import { Separator } from "@/registry/bases/base/ui/separator"

const HISTORY = [
  {
    id: "1",
    name: "avatar-v3.jpg",
    date: "امروز",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "avatar-v2.png",
    date: "هفتهٔ پیش",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "avatar-v1.jpg",
    date: "ماه پیش",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  },
] as const

export function AvatarUploadHistory() {
  const [preview, setPreview] = React.useState<string>(HISTORY[0].src)
  const [fileName, setFileName] = React.useState("avatar-v3.jpg")
  const [progress, setProgress] = React.useState(100)
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
      value += 25
      setProgress(value)
      if (value >= 100) window.clearInterval(id)
    }, 120)
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex items-start justify-between gap-3 border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">بارگذاری تصویر پروفایل</h2>
            <p className="text-sm text-muted-foreground">
              تاریخچه و منوی عملیات
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="ghost" size="icon-sm" />}
            >
              <MoreHorizontalIcon className="size-4" />
              <span className="sr-only">بیشتر</span>
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

        <div className="flex flex-col items-center gap-4 p-6">
          <div className="relative">
            <Avatar className="size-28">
              {preview ? <AvatarImage src={preview} alt="پروفایل" /> : null}
              <AvatarFallback className="text-2xl">م‌ر</AvatarFallback>
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
          {fileName ? (
            <div className="w-full max-w-xs space-y-2 text-center">
              <Badge variant="secondary">فعلی</Badge>
              <p className="truncate text-sm">
                <bdi dir="ltr">{fileName}</bdi>
              </p>
              {progress < 100 ? (
                <>
                  <Progress value={progress} />
                  <p className="text-xs text-muted-foreground">
                    <bdi dir="ltr">{progress}%</bdi>
                  </p>
                </>
              ) : null}
            </div>
          ) : null}
          <div className="flex gap-2">
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

        <Separator />
        <div className="p-4">
          <p className="mb-3 text-sm font-medium">تاریخچه</p>
          <ul className="space-y-0 overflow-hidden rounded-lg border">
            {HISTORY.map((item, i) => (
              <li key={item.id}>
                {i > 0 && <Separator />}
                <div className="flex items-center gap-3 px-3 py-2.5">
                  <Avatar className="size-9">
                    <AvatarImage src={item.src} alt={item.name} />
                    <AvatarFallback>م‌ر</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">
                      <bdi dir="ltr">{item.name}</bdi>
                    </p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem
                        onClick={() => {
                          setPreview(item.src)
                          setFileName(item.name)
                          setProgress(100)
                        }}
                      >
                        بازیابی
                      </DropdownMenuItem>
                      <DropdownMenuItem>دانلود</DropdownMenuItem>
                      <DropdownMenuItem>حذف</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
