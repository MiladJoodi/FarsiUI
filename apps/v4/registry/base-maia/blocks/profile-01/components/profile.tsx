import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-maia/ui/avatar"

export function ProfileSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col items-center justify-center px-6 py-16 text-center md:px-10"
    >
      <Avatar className="size-24">
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
          alt="سارا محمدی"
        />
        <AvatarFallback>سم</AvatarFallback>
      </Avatar>
      <h1 className="mt-6 text-2xl font-bold tracking-tight">سارا محمدی</h1>
      <p className="mt-1 text-muted-foreground">طراح محصول · تهران</p>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
        علاقه‌مند به رابط‌های فارسی، تایپوگرافی و تجربهٔ کاربری راست‌چین.
      </p>
    </section>
  )
}
