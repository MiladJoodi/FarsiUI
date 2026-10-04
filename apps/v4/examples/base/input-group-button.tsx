"use client"
import { Check, Copy, Info, Star } from "lucide-react"

import * as React from "react"

import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/styles/base-nova/ui/input-group"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"

export default function InputGroupButtonExample() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const [isFavorite, setIsFavorite] = React.useState(false)

  return (
    <div className="grid w-full max-w-sm gap-6" dir="rtl" lang="fa">
      <InputGroup>
        <InputGroupInput
          placeholder="https://x.com/shadcn"
          readOnly
          dir="ltr"
          className="text-start"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            aria-label="کپی"
            title="کپی"
            size="icon-xs"
            onClick={() => {
              copyToClipboard("https://x.com/shadcn")
            }}
          >
            {isCopied ? <Check /> : <Copy />}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="[--radius:9999px]">
        <InputGroupAddon align="inline-start" className="ps-1.5 text-muted-foreground">
          https://
        </InputGroupAddon>
        <InputGroupInput id="input-secure-19" dir="ltr" className="text-start" />
        <InputGroupAddon align="inline-end">
          <Popover>
            <PopoverTrigger
              render={
                <InputGroupButton variant="secondary" size="icon-xs" />
              }
            >
              <Info />
            </PopoverTrigger>
            <PopoverContent
              dir="rtl"
              lang="fa"
              align="end"
              className="flex flex-col gap-1 rounded-xl text-sm"
            >
              <p className="font-medium">اتصال شما امن نیست.</p>
              <p>اطلاعات حساس را در این سایت وارد نکنید.</p>
            </PopoverContent>
          </Popover>
          <InputGroupButton
            onClick={() => setIsFavorite(!isFavorite)}
            size="icon-xs"
            aria-label="علاقه‌مندی"
          >
            <Star
              data-favorite={isFavorite}
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
            />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="برای جستجو تایپ کنید..." />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="secondary">جستجو</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
