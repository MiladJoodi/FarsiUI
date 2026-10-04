import { ChevronDownIcon } from "@/registry/icons/__lucide__"
import { Button } from "@/registry/bases/base/ui/button"
import { Card, CardContent } from "@/registry/bases/base/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/base/ui/collapsible"

export default function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm" dir="rtl">
      <CardContent>
        <Collapsible className="rounded-md data-open:bg-muted">
          <CollapsibleTrigger
            render={<Button variant="ghost" className="w-full" />}
          >
            جزئیات محصول
            <ChevronDownIcon className="ms-auto group-data-panel-open/button:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              این پنل را می‌توان باز یا بسته کرد تا محتوای بیشتری دیده شود.
            </div>
            <Button size="xs">بیشتر بدانید</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}
