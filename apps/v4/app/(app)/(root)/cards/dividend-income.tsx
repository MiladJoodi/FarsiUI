import { Cancel01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"

import { Button } from "@/styles/base-rhea/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/styles/base-rhea/ui/card"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/styles/base-rhea/ui/item"

const HOLDINGS = [
  {
    name: "ونگارد",
    shares: "۴۵۰ سهم",
    amount: "۱٬۸۴۲٬۱۰۰ تومان",
    data: [
      { q: "Q1", value: 380 },
      { q: "Q2", value: 420 },
      { q: "Q3", value: 390 },
      { q: "Q4", value: 652 },
    ],
  },
  {
    name: "S&P 500 VOO",
    shares: "۱۱۲ سهم",
    amount: "۹۲۸٬۴۰۰ تومان",
    data: [
      { q: "Q1", value: 180 },
      { q: "Q2", value: 210 },
      { q: "Q3", value: 320 },
      { q: "Q4", value: 218 },
    ],
  },
  {
    name: "اپل AAPL",
    shares: "۸۵ سهم",
    amount: "۳۴۰٬۰۰۰ تومان",
    data: [
      { q: "Q1", value: 60 },
      { q: "Q2", value: 70 },
      { q: "Q3", value: 120 },
      { q: "Q4", value: 90 },
    ],
  },
  {
    name: "ریالتی اینکام",
    shares: "۳۲۰ سهم",
    amount: "۱٬۱۳۹٬۵۰۰ تومان",
    data: [
      { q: "Q1", value: 240 },
      { q: "Q2", value: 260 },
      { q: "Q3", value: 280 },
      { q: "Q4", value: 360 },
    ],
  },
]

export function DividendIncome() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>سود سهام فصل دوم</CardTitle>
        <CardDescription>
          پرداخت‌های فصلی سود سهام در دارایی‌های پرتفوی شما.
        </CardDescription>
        <CardAction>
          <Button
            variant="ghost"
            size="icon-sm"
            className="bg-muted"
            aria-label="بستن سود سهام"
          >
            <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ItemGroup>
          {HOLDINGS.map((holding) => (
            <Item key={holding.name} role="listitem" variant="muted">
              <ItemContent>
                <ItemTitle>{holding.name}</ItemTitle>
                <ItemDescription>{holding.shares}</ItemDescription>
              </ItemContent>
              <div
                className="hidden h-8 w-24 items-end gap-1 md:flex"
                role="img"
                aria-label={`سود فصلی ${holding.name}`}
              >
                {holding.data.map((item) => (
                  <div
                    key={item.q}
                    className="min-h-1 flex-1 rounded-t-sm bg-chart-2"
                    style={{
                      height: `${(item.value / Math.max(...holding.data.map((point) => point.value))) * 100}%`,
                    }}
                  />
                ))}
              </div>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  )
}
