import { Copy, CornerDownLeft, RefreshCw } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/base/ui/input-group"

export default function InputGroupTextareaExample() {
  return (
    <div className="w-full max-w-md" dir="rtl" lang="fa">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-feedback"
          placeholder="نظر خود را بنویسید..."
          className="min-h-[180px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>۰ / ۲۸۰ کاراکتر</InputGroupText>
          <InputGroupButton size="sm" className="ms-auto" variant="default">
            ارسال
            <CornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-medium">بازخورد محصول</InputGroupText>
          <InputGroupButton className="ms-auto" size="icon-xs" aria-label="بازنشانی">
            <RefreshCw />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs" aria-label="کپی">
            <Copy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
