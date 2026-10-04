export default function TypographyTable() {
  return (
    <div dir="rtl" className="my-6 w-full overflow-y-auto">
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-start font-bold [&[align=center]]:text-center [&[align=end]]:text-end">
              خزانهٔ پادشاه
            </th>
            <th className="border px-4 py-2 text-start font-bold [&[align=center]]:text-center [&[align=end]]:text-end">
              شادی مردم
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-start [&[align=center]]:text-center [&[align=end]]:text-end">
              خالی
            </td>
            <td className="border px-4 py-2 text-start [&[align=center]]:text-center [&[align=end]]:text-end">
              سرشار
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-start [&[align=center]]:text-center [&[align=end]]:text-end">
              متوسط
            </td>
            <td className="border px-4 py-2 text-start [&[align=center]]:text-center [&[align=end]]:text-end">
              راضی
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-start [&[align=center]]:text-center [&[align=end]]:text-end">
              پر
            </td>
            <td className="border px-4 py-2 text-start [&[align=center]]:text-center [&[align=end]]:text-end">
              سرخوش
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
