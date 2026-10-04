export default function TypographyRtl() {
  return (
    <div dir="rtl">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
        مالیات بر خنده: سرگذشت مالیات جوک
      </h1>
      <p className="text-xl leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
        روزگاری در سرزمینی دور، پادشاهی بسیار تنبل بود که تمام روز را روی تختش
        لم می‌داد. یک روز مشاورانش با مشکلی پیش او آمدند: خزانهٔ پادشاهی خالی
        می‌شد.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        نقشهٔ پادشاه
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        پادشاه سخت فکر کرد و سرانجام به{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          نقشه‌ای درخشان
        </a>{" "}
        رسید: می‌خواست روی جوک‌های پادشاهی مالیات ببندد.
      </p>
      <blockquote className="mt-6 border-s-2 ps-6 italic">
        «بالاخره،» گفت، «همه از یک جوک خوب لذت می‌برند؛ پس عادلانه است که برای
        این امتیاز پول بدهند.»
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        مالیات جوک
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        رعایا خوشحال نبودند. غر زدند و اعتراض کردند، اما پادشاه مصمم بود:
      </p>
      <ul className="my-6 ms-6 list-disc [&>li]:mt-2">
        <li>سطح اول بازی با کلمات: ۵ سکه طلا</li>
        <li>سطح دوم جوک‌ها: ۱۰ سکه طلا</li>
        <li>سطح سوم تک‌خطی‌ها: ۲۰ سکه طلا</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        در نتیجه مردم دیگر جوک تعریف نکردند و پادشاهی در غم فرو رفت. اما یک نفر
        حاضر نشد حماقت پادشاه او را ناامید کند: دلقک دربار به نام جوکر.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        شورش جوکر
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        جوکر نیمه‌شب‌ها پنهانی وارد قلعه می‌شد و همه جا جوک می‌گذاشت: زیر بالش
        پادشاه، داخل سوپش، حتی در مستراح سلطنتی. پادشاه خشمگین بود، اما نمی‌توانست
        جلوی جوکر را بگیرد.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        تا اینکه یک روز مردم فهمیدند جوک‌های جوکر آن‌قدر خنده‌دار است که نمی‌توانند
        جلوی خنده‌شان را بگیرند. و وقتی شروع به خندیدن کردند، دیگر ایستادنی نبود.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        قیام مردم
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        مردم با انرژی خنده دوباره جوک و بازی با کلمات گفتند و به‌زودی کل پادشاهی
        در جوک شریک شد.
      </p>
      <div className="my-6 w-full overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <th className="border px-4 py-2 text-start font-bold">
                خزانهٔ پادشاه
              </th>
              <th className="border px-4 py-2 text-start font-bold">
                شادی مردم
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-start">خالی</td>
              <td className="border px-4 py-2 text-start">سرشار</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-start">متوسط</td>
              <td className="border px-4 py-2 text-start">راضی</td>
            </tr>
            <tr className="m-0 border-t p-0 even:bg-muted">
              <td className="border px-4 py-2 text-start">پر</td>
              <td className="border px-4 py-2 text-start">سرخوش</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        پادشاه که دید رعایایش چقدر شادتر شده‌اند، به اشتباه خود پی برد و مالیات
        جوک را لغو کرد. جوکر قهرمان اعلام شد و پادشاهی تا ابد خوشبخت ماند.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        درس داستان: هرگز قدرت یک خندهٔ خوب را دست‌کم نگیرید و همیشه مراقب
        ایده‌های بد باشید.
      </p>
    </div>
  )
}
