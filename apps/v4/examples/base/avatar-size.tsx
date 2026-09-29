import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-nova/ui/avatar"

export default function AvatarSizeExample() {
  return (
    <div
      dir="rtl"
      className="flex flex-wrap items-center justify-center gap-2 grayscale"
    >
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>ش‌ک</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>ش‌ک</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>ش‌ک</AvatarFallback>
      </Avatar>
    </div>
  )
}
