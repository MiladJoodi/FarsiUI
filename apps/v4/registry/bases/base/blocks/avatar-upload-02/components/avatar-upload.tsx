"use client"

import * as React from "react"
import { CameraIcon, Trash2Icon } from "lucide-react"

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
import { Progress } from "@/registry/bases/base/ui/progress"

export function AvatarUploadProgress() {
  const [preview, setPreview] = React.useState<string | null>(
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80"
  )
  const [fileName, setFileName] = React.useState<string | null>("avatar.jpg")
  const [progress, setProgress] = React.useState(0)
  const inputRef = React.useRef<HTMLInputElement>(null)

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    setFileName(file.name)
    setProgress(0)
    const url = URL.createObjectURL(file)
    setPreview((prev) => {
      if (prev?.startsWith("blob:")) URL.revokeObjectURL(prev)
      return url
    })
  }

  function clear() {
    if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview)
    setPreview(null)
    setFileName(null)
    setProgress(0)
    if (inputRef.current) inputRef.current.value = ""
  }

  function upload() {
    if (!preview) return
    let value = 0
    setProgress(0)
    const id = window.setInterval(() => {
      value += 20
      setProgress(value)
      if (value >= 100) window.clearInterval(id)
    }, 140)
  }

  React.useEffect(() => {
    return () => {
      if (preview?.startsWith("blob:")) URL.revokeObjectURL(preview)
    }
  }, [preview])

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="text-center">
          <CardTitle>بارگذاری تصویر پروفایل</CardTitle>
          <CardDescription>پیش‌نمایش و پیشرفت بارگذاری</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="relative">
            <Avatar className="size-28">
              {preview ? <AvatarImage src={preview} alt="پروفایل" /> : null}
              <AvatarFallback className="text-2xl">مر</AvatarFallback>
            </Avatar>
            <Button
              type="button"
              size="icon-sm"
              variant="secondary"
              className="absolute end-0 bottom-0 rounded-full"
              onClick={() => inputRef.current?.click()}
              aria-label="تغییر تصویر"
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
            <div className="w-full space-y-2">
              <p className="truncate text-center text-sm text-muted-foreground">
                <bdi dir="ltr">{fileName}</bdi>
              </p>
              <Progress value={progress} />
              <p className="text-center text-xs text-muted-foreground">
                <bdi dir="ltr">{progress}%</bdi>
              </p>
            </div>
          ) : null}
        </CardContent>
        <CardFooter className="gap-2">
          <Button className="flex-1" onClick={upload} disabled={!preview}>
            ذخیره
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={clear}
            aria-label="حذف تصویر"
          >
            <Trash2Icon className="size-4" />
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
