import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
} from "@/registry/bases/base/ui/item"
import { Progress } from "@/registry/bases/base/ui/progress"

export function SavingsTargets() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>اهداف پس‌انداز</CardTitle>
        <CardDescription>
          هدف‌های مالی فعال شما در سال ۱۴۰۵. ببینید برای رسیدن به هر هدف چقدر
          فاصله دارید.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ItemGroup className="gap-3">
          <Item
            role="listitem"
            variant="muted"
            className="flex-col items-stretch"
          >
            <ItemContent className="gap-3">
              <ItemDescription className="cn-font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase">
                بازنشستگی
              </ItemDescription>
              <span className="text-3xl font-semibold tracking-normal whitespace-nowrap">
                ۴۲۰٬۰۰۰٬۰۰۰ تومان
              </span>
              <Progress value={65} aria-label="پیشرفت پس‌انداز بازنشستگی" />
            </ItemContent>
            <ItemFooter>
              <span className="text-sm text-muted-foreground">
                ۶۵٪ محقق شده
              </span>
              <span className="text-sm font-medium tracking-normal">
                ۲۷۳٬۰۰۰٬۰۰۰ تومان
              </span>
            </ItemFooter>
          </Item>
          <Item
            role="listitem"
            variant="muted"
            className="flex-col items-stretch"
          >
            <ItemContent className="gap-3">
              <ItemDescription className="cn-font-heading text-xs font-medium tracking-wider text-muted-foreground uppercase">
                املاک
              </ItemDescription>
              <span className="text-3xl font-semibold tracking-normal whitespace-nowrap">
                ۸۵٬۰۰۰٬۰۰۰ تومان
              </span>
              <Progress value={32} aria-label="پیشرفت پس‌انداز املاک" />
            </ItemContent>
            <ItemFooter>
              <span className="text-sm text-muted-foreground">
                ۳۲٪ محقق شده
              </span>
              <span className="text-sm font-medium tracking-normal">
                ۲۷٬۲۰۰٬۰۰۰ تومان
              </span>
            </ItemFooter>
          </Item>
        </ItemGroup>
      </CardContent>
      <CardFooter>
        <CardDescription className="text-center">
          هنوز به اهداف امسال نرسیده‌اید.
        </CardDescription>
      </CardFooter>
    </Card>
  )
}
