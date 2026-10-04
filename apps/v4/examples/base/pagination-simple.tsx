import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/registry/bases/base/ui/pagination"

export default function PaginationSimple() {
  return (
    <div dir="rtl">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="#">۱</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              ۲
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">۳</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">۴</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">۵</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
