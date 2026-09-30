import { Button } from "@/styles/base-nova/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-nova/ui/dialog"

const sampleText =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."

export function DialogStickyFooter() {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          فوتر ثابت
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>فوتر ثابت</DialogTitle>
            <DialogDescription>
              این دیالوگ فوتر ثابتی دارد که هنگام اسکرول محتوا دیده می‌ماند.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                {sampleText}
              </p>
            ))}
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline" />}>
              بستن
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
