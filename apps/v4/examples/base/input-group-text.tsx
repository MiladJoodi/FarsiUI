import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/bases/base/ui/input-group"

export default function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6" dir="rtl" lang="fa">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>تومان</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="۰" dir="ltr" className="text-start" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>IRT</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput
          placeholder="example.com"
          dir="ltr"
          className="ps-0.5! text-start"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="نام کاربری را وارد کنید" />
        <InputGroupAddon align="inline-end">
          <InputGroupText dir="ltr">@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="پیام خود را وارد کنید" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs text-muted-foreground">
            ۱۲۰ کاراکتر باقی مانده
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
