import { Button } from "@/registry/base-lyra/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-lyra/ui/card"
import { SidebarInput } from "@/registry/base-lyra/ui/sidebar"

export function SidebarOptInForm() {
  return (
    <Card dir="rtl" lang="fa" className="gap-2 py-4 shadow-none">
      <CardHeader className="px-4">
        <CardTitle className="text-sm">عضویت در خبرنامه</CardTitle>
        <CardDescription>
          برای دریافت به‌روزرسانی‌ها و اخبار عضو شوید.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4">
        <form>
          <div className="grid gap-2.5">
            <SidebarInput
              type="email"
              placeholder="name@example.com"
              dir="ltr"
              className="text-start"
            />
            <Button className="w-full bg-sidebar-primary text-sidebar-primary-foreground shadow-none">
              عضویت
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
