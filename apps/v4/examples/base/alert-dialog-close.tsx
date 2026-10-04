import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/bases/base/ui/alert-dialog"
import { Button } from "@/registry/bases/base/ui/button"

export default function AlertDialogCloseExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        نمایش دیالوگ
      </AlertDialogTrigger>
      <AlertDialogContent dir="rtl" showCloseButton>
        <AlertDialogHeader>
          <AlertDialogTitle>تغییرات ذخیره نشده</AlertDialogTitle>
          <AlertDialogDescription>
            قبل از بستن صفحه، تغییرات را ذخیره کنید یا با ضربدر خارج شوید.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>انصراف</AlertDialogCancel>
          <AlertDialogAction>ذخیره</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
