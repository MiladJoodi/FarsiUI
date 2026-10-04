import { Button } from "@/registry/bases/aria/ui/button"
import { Textarea } from "@/registry/bases/aria/ui/textarea"

export default function TextareaButton() {
  return (
    <div className="grid w-full gap-2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </div>
  )
}
