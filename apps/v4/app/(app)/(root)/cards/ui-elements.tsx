"use client"

import {
  ArrowRight02Icon,
  ArrowUp01Icon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/styles/base-rhea/ui/alert-dialog"
import { Badge } from "@/styles/base-rhea/ui/badge"
import { Button } from "@/styles/base-rhea/ui/button"
import { ButtonGroup } from "@/styles/base-rhea/ui/button-group"
import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import { Checkbox } from "@/styles/base-rhea/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-rhea/ui/dropdown-menu"
import { Field, FieldGroup } from "@/styles/base-rhea/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/styles/base-rhea/ui/input-group"
import { RadioGroup, RadioGroupItem } from "@/styles/base-rhea/ui/radio-group"
import { Switch } from "@/styles/base-rhea/ui/switch"
import { Textarea } from "@/styles/base-rhea/ui/textarea"

export function UIElements() {
  return (
    <Card className="w-full">
      <CardContent className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Button>
            دکمه{" "}
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              strokeWidth={2}
              data-icon="inline-end"
              className="rtl:rotate-180"
            />
          </Button>
          <Button variant="secondary">ثانویه</Button>
          <Button variant="outline">حاشیه‌دار</Button>
        </div>
        <FieldGroup>
          <Field>
            <InputGroup>
              <InputGroupInput placeholder="نام" />
              <InputGroupAddon align="inline-end">
                <InputGroupText>
                  <HugeiconsIcon icon={Search01Icon} strokeWidth={2} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Field>
          <Field className="flex-1">
            <Textarea placeholder="پیام" className="resize-none" />
          </Field>
        </FieldGroup>
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <Badge>نشان</Badge>
            <Badge variant="secondary">ثانویه</Badge>
            <Badge variant="outline" className="hidden 4xl:flex">
              حاشیه‌دار
            </Badge>
          </div>
          <RadioGroup
            defaultValue="apple"
            className="ms-auto flex w-fit gap-3"
            aria-label="ترجیح میوه"
          >
            <RadioGroupItem value="apple" aria-label="سیب" />
            <RadioGroupItem value="banana" aria-label="موز" />
          </RadioGroup>
          <div className="flex gap-3">
            <Checkbox defaultChecked aria-label="فعال‌سازی هشدار ایمیل" />
            <Checkbox
              className="hidden 4xl:flex"
              aria-label="فعال‌سازی هشدار پوش"
            />
          </div>
          <Switch
            defaultChecked
            className="flex 4xl:hidden"
            aria-label="فعال‌سازی اعلان فشرده"
          />
        </div>
        <div className="flex items-center gap-4">
          <AlertDialog>
            <AlertDialogTrigger render={<Button variant="outline" />}>
              <span className="hidden md:flex style-sera:md:hidden">
                دیالوگ هشدار
              </span>
              <span className="flex md:hidden style-sera:md:flex">دیالوگ</span>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm" className="theme-neutral" dir="rtl">
              <AlertDialogHeader className="text-right sm:text-right">
                <AlertDialogTitle>
                  اجازهٔ اتصال لوازم جانبی داده شود؟
                </AlertDialogTitle>
                <AlertDialogDescription>
                  می‌خواهید لوازم جانبی USB به این دستگاه و داده‌هایتان متصل
                  شود؟
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="sm:flex-row-reverse">
                <AlertDialogCancel>اجازه نده</AlertDialogCancel>
                <AlertDialogAction>اجازه بده</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <ButtonGroup className="ms-auto">
            <Button variant="outline">
              <span className="style-sera:hidden">گروه دکمه</span>
              <span className="hidden style-sera:block">گروه</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="باز کردن اقدامات سریع"
                  />
                }
              >
                <HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={2} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                side="top"
                className="min-w-52"
                dir="rtl"
              >
                <DropdownMenuGroup>
                  <DropdownMenuLabel>اقدامات سریع</DropdownMenuLabel>
                  <DropdownMenuItem>بی‌صدا کردن گفتگو</DropdownMenuItem>
                  <DropdownMenuItem>علامت به‌عنوان خوانده‌شده</DropdownMenuItem>
                  <DropdownMenuItem>مسدود کردن کاربر</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem variant="destructive">
                    حذف گفتگو
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
          <Switch
            defaultChecked
            className="hidden 4xl:flex"
            aria-label="فعال‌سازی تنظیم پیشرفته"
          />
        </div>
      </CardContent>
    </Card>
  )
}
