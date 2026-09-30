"use client"

import * as React from "react"
import { Building2Icon, CreditCardIcon, WalletIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export function DropdownMenuRadioIcons() {
  const [paymentMethod, setPaymentMethod] = React.useState("card")

  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          روش پرداخت
        </DropdownMenuTrigger>
        <DropdownMenuContent className="min-w-56">
          <DropdownMenuGroup>
            <DropdownMenuLabel>انتخاب روش پرداخت</DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
            >
              <DropdownMenuRadioItem value="card">
                <CreditCardIcon />
                کارت بانکی
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="paypal">
                <WalletIcon />
                کیف پول
              </DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="bank">
                <Building2Icon />
                انتقال بانکی
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
