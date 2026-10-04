import { SearchIcon } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/bases/base/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group"
import { Kbd } from "@/registry/bases/base/ui/kbd"

export default function EmptyInputGroup() {
  return (
    <div dir="rtl">
      <Empty>
        <EmptyHeader>
          <EmptyTitle>۴۰۴ — پیدا نشد</EmptyTitle>
          <EmptyDescription>
            صفحه‌ای که دنبالش هستید وجود ندارد. پایین جستجو کنید.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <InputGroup className="sm:w-3/4">
            <InputGroupInput placeholder="جستجوی صفحات..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <Kbd>/</Kbd>
            </InputGroupAddon>
          </InputGroup>
          <EmptyDescription>
            کمک لازم دارید؟ <a href="#">تماس با پشتیبانی</a>
          </EmptyDescription>
        </EmptyContent>
      </Empty>
    </div>
  )
}
