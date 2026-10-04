import { Button } from "@/registry/bases/base/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/bases/base/ui/sheet"

const SHEET_SIDES = [
  { side: "top" as const, label: "بالا" },
  { side: "right" as const, label: "راست" },
  { side: "bottom" as const, label: "پایین" },
  { side: "left" as const, label: "چپ" },
]

export default function SheetSide() {
  return (
    <div dir="rtl" className="flex flex-wrap gap-2">
      {SHEET_SIDES.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger render={<Button variant="outline" />}>
            {label}
          </SheetTrigger>
          <SheetContent
            side={side}
            className="data-[side=bottom]:max-h-[50vh] data-[side=top]:max-h-[50vh]"
          >
            <SheetHeader>
              <SheetTitle>ویرایش پروفایل</SheetTitle>
              <SheetDescription>
                تغییرات پروفایل را اینجا اعمال کنید. بعد از اتمام، ذخیره را
                بزنید.
              </SheetDescription>
            </SheetHeader>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <p key={index} className="mb-2 leading-relaxed">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
                  مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                  می‌باشد.
                </p>
              ))}
            </div>
            <SheetFooter>
              <Button type="submit">ذخیره تغییرات</Button>
              <SheetClose render={<Button variant="outline" />}>
                انصراف
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
