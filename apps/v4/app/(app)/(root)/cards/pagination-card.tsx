import type { MouseEvent } from "react"

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

function preventHash(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export function PaginationCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" text="قبلی" onClick={preventHash} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" onClick={preventHash}>
                ۱
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive onClick={preventHash}>
                ۲
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" onClick={preventHash}>
                ۳
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" text="بعدی" onClick={preventHash} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  )
}
