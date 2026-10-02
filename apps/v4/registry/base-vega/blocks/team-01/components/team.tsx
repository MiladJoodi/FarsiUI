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
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
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
  )
}
