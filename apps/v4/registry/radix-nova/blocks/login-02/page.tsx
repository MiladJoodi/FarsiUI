"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { LoginForm } from "@/registry/radix-nova/blocks/login-02/components/login-form"

export default function LoginPage() {
  return (
    <div className="grid min-h-svh md:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <IconPlaceholder
                lucide="GalleryVerticalEndIcon"
                tabler="IconLayoutRows"
                hugeicons="LayoutBottomIcon"
                phosphor="RowsIcon"
                remixicon="RiGalleryLine"
                className="size-4"
              />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted md:block">
        <img
          src="/farsiui/parsian.jpg"
          alt="Parsian"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
