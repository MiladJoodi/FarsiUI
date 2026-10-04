import { Button } from "@/styles/base-nova/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/styles/base-nova/ui/dialog"

const sampleText =
  "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد."

export default function DialogScrollableContent() {
  return (
    <div dir="rtl">
      <Dialog>
        <DialogTrigger render={<Button variant="outline" />}>
          محتوای اسکرول‌شونده
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>محتوای اسکرول‌شونده</DialogTitle>
            <DialogDescription>
              دیالوگی با محتوای طولانی که قابل اسکرول است.
            </DialogDescription>
          </DialogHeader>
          <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <p key={index} className="mb-4 leading-normal">
                {sampleText}
              </p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
