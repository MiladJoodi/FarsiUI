"use client"

import { Button } from "@/registry/base-aether/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/base-aether/ui/tabs"

export default function HeaderTabs() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="border-b">
        <div className="mx-auto w-full max-w-5xl px-6 pt-8 md:px-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                تیم محصول
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                اعضا، نقش‌ها و دسترسی‌ها
              </p>
            </div>
            <Button size="sm" className="w-fit">
              دعوت عضو
            </Button>
          </div>

          <Tabs defaultValue="members" className="mt-6">
            <TabsList
              variant="line"
              className="w-full justify-start gap-4 rounded-none bg-transparent p-0"
            >
              <TabsTrigger value="members" className="rounded-none px-0 pb-3">
                اعضا
              </TabsTrigger>
              <TabsTrigger value="roles" className="rounded-none px-0 pb-3">
                نقش‌ها
              </TabsTrigger>
              <TabsTrigger value="billing" className="rounded-none px-0 pb-3">
                صورتحساب
              </TabsTrigger>
            </TabsList>
            <TabsContent value="members" className="mt-0" />
            <TabsContent value="roles" className="mt-0" />
            <TabsContent value="billing" className="mt-0" />
          </Tabs>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        سربرگ با تب‌های بخش
      </main>
    </div>
  )
}
