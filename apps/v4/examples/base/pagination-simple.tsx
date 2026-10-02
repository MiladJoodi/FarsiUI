import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/styles/base-nova/ui/pagination"

export function PaginationSimple() {
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
