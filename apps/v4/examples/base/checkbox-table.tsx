"use client"

import * as React from "react"

import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"

const tableData = [
  {
    id: "1",
    name: "سارا چن",
    email: "sarah.chen@example.com",
    role: "مدیر",
  },
  {
    id: "2",
    name: "مارکوس رودریگز",
    email: "marcus.rodriguez@example.com",
    role: "کاربر",
  },
  {
    id: "3",
    name: "پریا پاتل",
    email: "priya.patel@example.com",
    role: "کاربر",
  },
  {
    id: "4",
    name: "دیوید کیم",
    email: "david.kim@example.com",
    role: "ویرایشگر",
  },
]

export default function CheckboxInTable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(["1"])
  )

  const selectAll = selectedRows.size === tableData.length

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(tableData.map((row) => row.id)))
    } else {
      setSelectedRows(new Set())
    }
  }

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows)
    if (checked) {
      newSelected.add(id)
    } else {
      newSelected.delete(id)
    }
    setSelectedRows(newSelected)
  }

  return (
    <Table dir="rtl">
      <TableHeader>
        <TableRow>
          <TableHead className="w-8">
            <Checkbox
              id="select-all-checkbox"
              name="select-all-checkbox"
              checked={selectAll}
              onCheckedChange={handleSelectAll}
              aria-label="انتخاب همه"
            />
          </TableHead>
          <TableHead>نام</TableHead>
          <TableHead>ایمیل</TableHead>
          <TableHead>نقش</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((row) => (
          <TableRow
            key={row.id}
            data-state={selectedRows.has(row.id) ? "selected" : undefined}
          >
            <TableCell>
              <Checkbox
                id={`row-${row.id}-checkbox`}
                name={`row-${row.id}-checkbox`}
                checked={selectedRows.has(row.id)}
                onCheckedChange={(checked) =>
                  handleSelectRow(row.id, checked === true)
                }
                aria-label={`انتخاب ${row.name}`}
              />
            </TableCell>
            <TableCell className="font-medium">{row.name}</TableCell>
            <TableCell dir="ltr" className="text-start">
              {row.email}
            </TableCell>
            <TableCell>{row.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
