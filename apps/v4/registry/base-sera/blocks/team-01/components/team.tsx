const MEMBERS = [
  { name: "مریم رضایی", role: "مدیر محصول" },
  { name: "علی محمدی", role: "مهندس فرانت‌اند" },
  { name: "سارا کریمی", role: "طراح محصول" },
  { name: "نیما پورحسین", role: "مهندس بک‌اند" },
  { name: "هستی احمدی", role: "مدیر فنی" },
  { name: "رضا کاظمی", role: "رشد محصول" },
] as const

export function TeamSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight">تیم ما</h2>
          <p className="mt-2 text-muted-foreground">
            کسانی که FarsiUI را می‌سازند
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <div key={member.name} className="space-y-1">
              <p className="font-semibold tracking-tight">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
