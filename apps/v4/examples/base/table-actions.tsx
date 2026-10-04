"use client"

import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

export default function TableActions() {
  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead>محصول</TableHead>
          <TableHead>قیمت</TableHead>
          <TableHead>عملیات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">ماوس بی‌سیم</TableCell>
          <TableCell>۲۹۹٬۰۰۰ تومان</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8" />
                }
              >
                <MoreHorizontalIcon />
                <span className="sr-only">باز کردن منو</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" dir="rtl">
                <DropdownMenuItem>ویرایش</DropdownMenuItem>
                <DropdownMenuItem>تکثیر</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">حذف</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">کیبورد مکانیکی</TableCell>
          <TableCell>۱٬۲۹۹٬۰۰۰ تومان</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8" />
                }
              >
                <MoreHorizontalIcon />
                <span className="sr-only">باز کردن منو</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" dir="rtl">
                <DropdownMenuItem>ویرایش</DropdownMenuItem>
                <DropdownMenuItem>تکثیر</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">حذف</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">هاب USB-C</TableCell>
          <TableCell>۴۹۹٬۰۰۰ تومان</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button variant="ghost" size="icon" className="size-8" />
                }
              >
                <MoreHorizontalIcon />
                <span className="sr-only">باز کردن منو</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" dir="rtl">
                <DropdownMenuItem>ویرایش</DropdownMenuItem>
                <DropdownMenuItem>تکثیر</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">حذف</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
