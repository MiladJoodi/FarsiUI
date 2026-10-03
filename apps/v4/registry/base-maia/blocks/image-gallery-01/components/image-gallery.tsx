"use client"

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    alt: "هدفون",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    alt: "ساعت",
  },
  {
    src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
    alt: "کیف",
  },
  {
    src: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    alt: "لامپ",
  },
  {
    src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=80",
    alt: "عینک",
  },
  {
    src: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800&auto=format&fit=crop&q=80",
    alt: "کفش",
  },
] as const

export function ImageGallerySimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">گالری تصاویر</h2>
        <p className="mt-2 text-muted-foreground">شبکهٔ سادهٔ شش‌تایی</p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {IMAGES.map((img) => (
          <div
            key={img.src}
            className="aspect-square overflow-hidden rounded-xl border bg-muted"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
