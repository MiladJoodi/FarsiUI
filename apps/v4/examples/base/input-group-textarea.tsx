import {
  IconBrandJavascript,
  IconCopy,
  IconCornerDownLeft,
  IconRefresh,
} from "@tabler/icons-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/styles/base-nova/ui/input-group"

export default function InputGroupTextareaExample() {
  return (
    <div dir="rtl" className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('سلام دنیا!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>خط ۱، ستون ۱</InputGroupText>
          <InputGroupButton size="sm" className="ms-auto" variant="default">
            اجرا <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ms-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
