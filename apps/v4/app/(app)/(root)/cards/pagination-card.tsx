import { Card, CardContent } from "@/styles/base-rhea/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/styles/base-rhea/ui/pagination"

export function PaginationCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" text="قبلی" />
            </PaginationItem>
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
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" text="بعدی" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
