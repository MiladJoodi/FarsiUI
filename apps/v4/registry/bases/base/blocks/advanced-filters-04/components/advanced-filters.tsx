"use client"

import * as React from "react"
import { FilterIcon, MoreHorizontalIcon, XIcon } from "lucide-react"

import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
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
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"
import { Switch } from "@/registry/bases/base/ui/switch"

type Chip = { id: string; label: string }

const PRODUCTS = [
  { name: "هدفون بی‌سیم آرام", meta: "صوتی · موجود" },
  { name: "ساعت هوشمند نور", meta: "پوشیدنی · تخفیف" },
  { name: "لامپ رومیزی مینیمال", meta: "خانه · موجود" },
] as const

export function AdvancedFiltersChips() {
  const [chips, setChips] = React.useState<Chip[]>([
    { id: "stock", label: "موجود" },
    { id: "city", label: "تهران" },
    { id: "brand", label: "آرام" },
  ])
  const [sort, setSort] = React.useState("newest")
  const [open, setOpen] = React.useState(false)

  function removeChip(id: string) {
    setChips((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b p-4">
          <div>
            <h2 className="text-lg font-semibold">فیلترهای پیشرفته</h2>
            <p className="text-sm text-muted-foreground">
              چیپ فعال و پنل Sheet
            </p>
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant="outline" size="sm" />}
              >
                مرتب‌سازی
              </DropdownMenuTrigger>
              <DropdownMenuContent dir="rtl" lang="fa" align="start" className="w-44">
                <DropdownMenuLabel>مرتب‌سازی</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={sort}
                  onValueChange={(v) => setSort(v ?? "newest")}
                >
                  <DropdownMenuRadioItem value="newest">
                    جدیدترین
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-asc">
                    ارزان‌ترین
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="price-desc">
                    گران‌ترین
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                render={<Button variant="outline" size="sm" className="gap-2" />}
              >
                <FilterIcon className="size-4" />
                فیلتر
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex w-[min(100%,22rem)] flex-col"
                dir="rtl"
                lang="fa"
              >
                <SheetHeader className="text-start">
                  <SheetTitle>فیلترهای پیشرفته</SheetTitle>
                  <SheetDescription>شرایط دقیق‌تر</SheetDescription>
                </SheetHeader>

                <div className="mt-4 flex-1 space-y-4 overflow-y-auto">
                  <Field>
                    <FieldLabel>شهر</FieldLabel>
                    <Select defaultValue="teh">
                      <SelectTrigger className="w-full" dir="rtl">
                        <SelectValue placeholder="شهر" />
                      </SelectTrigger>
                      <SelectContent dir="rtl" lang="fa">
                        <SelectItem value="teh">تهران</SelectItem>
                        <SelectItem value="isf">اصفهان</SelectItem>
                        <SelectItem value="shr">شیراز</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>

                  <div className="grid grid-cols-2 gap-3">
                    <Field>
                      <FieldLabel htmlFor="af4-min">حداقل</FieldLabel>
                      <Input
                        id="af4-min"
                        inputMode="numeric"
                        placeholder="۱٬۰۰۰٬۰۰۰"
                        dir="ltr"
                        className="text-start"
                      />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="af4-max">حداکثر</FieldLabel>
                      <Input
                        id="af4-max"
                        inputMode="numeric"
                        placeholder="۱۰٬۰۰۰٬۰۰۰"
                        dir="ltr"
                        className="text-start"
                      />
                    </Field>
                  </div>

                  <div className="space-y-2">
                    {["ارسال رایگان", "ضمانت اصالت", "فروشندهٔ برتر"].map(
                      (label, i) => (
                        <div key={label} className="flex items-center gap-2">
                          <Checkbox
                            id={`af4-extra-${i}`}
                            defaultChecked={i === 0}
                          />
                          <Label htmlFor={`af4-extra-${i}`}>{label}</Label>
                        </div>
                      )
                    )}
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <Label htmlFor="af4-stock">فقط موجود</Label>
                    <Switch id="af4-stock" defaultChecked />
                  </div>
                </div>

                <SheetFooter className="mt-4 gap-2 sm:flex-col">
                  <Button
                    className="w-full"
                    onClick={() => {
                      setChips([
                        { id: "stock", label: "موجود" },
                        { id: "city", label: "تهران" },
                        { id: "ship", label: "ارسال رایگان" },
                      ])
                      setOpen(false)
                    }}
                  >
                    اعمال
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      setChips([])
                      setOpen(false)
                    }}
                  >
                    پاک کردن
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="space-y-3 p-4">
          {chips.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <Badge key={chip.id} variant="secondary" className="gap-1 pe-1">
                  {chip.label}
                  <button
                    type="button"
                    className="rounded-sm p-0.5 hover:bg-muted"
                    onClick={() => removeChip(chip.id)}
                    aria-label={`حذف ${chip.label}`}
                  >
                    <XIcon className="size-3" />
                  </button>
                </Badge>
              ))}
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setChips([])}
              >
                پاک کردن
              </Button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">فیلتر فعالی نیست</p>
          )}

          <Separator />

          <ul className="space-y-0 rounded-lg border">
            {PRODUCTS.map((p, i) => (
              <li key={p.name}>
                {i > 0 && <Separator />}
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{p.meta}</p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={<Button variant="ghost" size="icon-sm" />}
                    >
                      <MoreHorizontalIcon className="size-4" />
                      <span className="sr-only">عملیات</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent dir="rtl" lang="fa" align="start">
                      <DropdownMenuItem>مشاهده</DropdownMenuItem>
                      <DropdownMenuItem>مقایسه</DropdownMenuItem>
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
