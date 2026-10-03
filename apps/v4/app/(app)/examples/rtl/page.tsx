import { type Metadata } from "next"

import { RtlComponents } from "./components"

export const metadata: Metadata = {
  title: "نمونهٔ راست‌چین (RTL)",
  description: "نمونهٔ صفحه با پشتیبانی کامل راست‌چین برای رابط کاربری فارسی.",
}

export function RtlPage() {
  return <RtlComponents />
}

export default RtlPage
