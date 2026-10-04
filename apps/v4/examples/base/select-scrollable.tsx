import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/styles/base-nova/ui/select"

const northAmerica = [
  { label: "زمان استاندارد شرقی", value: "est" },
  { label: "زمان استاندارد مرکزی", value: "cst" },
  { label: "زمان استاندارد کوهستانی", value: "mst" },
  { label: "زمان استاندارد اقیانوس آرام", value: "pst" },
  { label: "زمان استاندارد آلاسکا", value: "akst" },
  { label: "زمان استاندارد هاوایی", value: "hst" },
]

const europeAfrica = [
  { label: "زمان میانگین گرینویچ", value: "gmt" },
  { label: "زمان مرکزی اروپا", value: "cet" },
  { label: "زمان شرقی اروپا", value: "eet" },
  { label: "زمان تابستانی غرب اروپا", value: "west" },
  { label: "زمان مرکزی آفریقا", value: "cat" },
  { label: "زمان شرق آفریقا", value: "eat" },
]

const asia = [
  { label: "زمان مسکو", value: "msk" },
  { label: "زمان استاندارد هند", value: "ist" },
  { label: "زمان استاندارد چین", value: "cst_china" },
  { label: "زمان استاندارد ژاپن", value: "jst" },
  { label: "زمان استاندارد کره", value: "kst" },
  { label: "زمان استاندارد مرکزی اندونزی", value: "ist_indonesia" },
]

const australiaPacific = [
  { label: "زمان استاندارد غربی استرالیا", value: "awst" },
  { label: "زمان استاندارد مرکزی استرالیا", value: "acst" },
  { label: "زمان استاندارد شرقی استرالیا", value: "aest" },
  { label: "زمان استاندارد نیوزیلند", value: "nzst" },
  { label: "زمان فیجی", value: "fjt" },
]

const southAmerica = [
  { label: "زمان آرژانتین", value: "art" },
  { label: "زمان بولیوی", value: "bot" },
  { label: "زمان برازیلیا", value: "brt" },
  { label: "زمان استاندارد شیلی", value: "clt" },
]

const items = [
  { label: "انتخاب منطقهٔ زمانی", value: null },
  ...northAmerica,
  ...europeAfrica,
  ...asia,
  ...australiaPacific,
  ...southAmerica,
]

export default function SelectScrollable() {
  return (
    <div dir="rtl">
      <Select items={items}>
        <SelectTrigger className="w-full max-w-sm">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>آمریکای شمالی</SelectLabel>
            {northAmerica.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>اروپا و آفریقا</SelectLabel>
            {europeAfrica.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>آسیا</SelectLabel>
            {asia.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>استرالیا و اقیانوس آرام</SelectLabel>
            {australiaPacific.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>آمریکای جنوبی</SelectLabel>
            {southAmerica.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
