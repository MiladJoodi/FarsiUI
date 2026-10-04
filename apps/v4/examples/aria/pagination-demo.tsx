import { formatNumber } from "@/lib/digits"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/registry/bases/aria/ui/pagination"

export default function PaginationDemo() {
  return (
    <div dir="rtl" lang="fa">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{formatNumber(1, "fa")}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              {formatNumber(2, "fa")}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">{formatNumber(3, "fa")}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
