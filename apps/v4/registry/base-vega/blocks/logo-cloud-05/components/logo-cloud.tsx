"use client"

import LogoImage, {
  LOGOS,
} from "@/registry/base-vega/blocks/logo-cloud-01/components/logos"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-vega/ui/avatar"
import { Badge } from "@/registry/base-vega/ui/badge"
import { Button } from "@/registry/base-vega/ui/button"

export default function LogoCloudShowcase() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-6xl flex-col justify-center gap-12 px-6 py-16 md:px-10"
    >
      <div className="mx-auto max-w-2xl text-center">
        <Badge className="mb-4">شبکهٔ اعتماد</Badge>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          برندهایی که روی FarsiUI حساب می‌کنند
        </h2>
        <p className="mt-3 text-muted-foreground md:text-lg">
          لوگوها را جایگزین کنید تا ویترین مشتریان‌تان این‌قدر تمیز بماند
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {LOGOS.map((logo, index) => (
            <div
              key={logo.src}
              className={`flex h-28 items-center justify-center px-6 sm:h-32 ${
                index % 2 === 0 ? "bg-background/40" : ""
              } ${index < 4 ? "border-b" : ""} ${
                index % 4 !== 3 ? "border-l" : ""
              }`}
            >
              <LogoImage
                {...logo}
                size="lg"
                className="transition duration-300 hover:scale-105"
                imgClassName="opacity-75"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 border-t bg-muted/30 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-start">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 space-x-reverse">
              {["01", "02", "03", "04"].map((id) => (
                <Avatar key={id} className="size-9 border-2 border-background">
                  <AvatarImage src={`/avatars/${id}.png`} alt="" />
                  <AvatarFallback>{id}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              به{" "}
              <span className="font-medium text-foreground">
                <bdi
                  dir="ltr"
                  className="inline-block tracking-normal [letter-spacing:0]"
                >
                  ۱٬۲۰۰+
                </bdi>{" "}
                تیم
              </span>{" "}
              بپیوندید
            </p>
          </div>
          <Button>شروع کنید</Button>
        </div>
      </div>
    </section>
  )
}
