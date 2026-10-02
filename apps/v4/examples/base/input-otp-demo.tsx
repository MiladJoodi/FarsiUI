import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/styles/base-nova/ui/input-otp"

export default function InputOTPDemo() {
  return (
    <div dir="rtl" lang="fa">
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}
