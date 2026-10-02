import { Field, FieldLabel } from "@/styles/base-nova/ui/field"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/styles/base-nova/ui/pagination"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

const rowsPerPage = [
  { value: "10", label: "۱۰" },
  { value: "25", label: "۲۵" },
  { value: "50", label: "۵۰" },
  { value: "100", label: "۱۰۰" },
]

export function PaginationIconsOnly() {
  return (
    <div dir="rtl" className="flex items-center justify-between gap-4">
      <Field orientation="horizontal" className="w-fit">
        <FieldLabel htmlFor="select-rows-per-page">ردیف در صفحه</FieldLabel>
        <Select items={rowsPerPage} defaultValue="25">
          <SelectTrigger className="w-20" id="select-rows-per-page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent dir="rtl" align="start" className="min-w-20 text-start">
            <SelectGroup>
              {rowsPerPage.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </Field>
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
