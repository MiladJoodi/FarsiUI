"use client"

import * as React from "react"
import { PencilIcon } from "lucide-react"

import { NationalIdInput } from "@/registry/base-vega/blocks/identity-verification-05/components/national-id-input"
import { Button } from "@/registry/base-vega/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-vega/ui/card"
import { Field, FieldGroup, FieldLabel } from "@/registry/base-vega/ui/field"
import { Input } from "@/registry/base-vega/ui/input"
import { Separator } from "@/registry/base-vega/ui/separator"

type Section = "personal" | "contact" | "document" | null

const initial = {
  firstName: "رضا",
  lastName: "کریمی",
  nationalId: "۰۰۸۴۵۷۱۲۳۶",
  birthdate: "۱۳۶۸/۰۲/۲۰",
  mobile: "۰۹۱۰۵۵۵۱۲۱۲",
  email: "reza.karimi@example.com",
  document: "کارت ملی — روی کارت",
}

export function IdentityReview() {
  const [data, setData] = React.useState(initial)
  const [editing, setEditing] = React.useState<Section>(null)
  const [submitted, setSubmitted] = React.useState(false)

  if (submitted) {
    return (
      <Card dir="rtl" lang="fa">
        <CardHeader className="text-center">
          <CardTitle>درخواست ثبت شد</CardTitle>
          <CardDescription>
            اطلاعات شما برای بررسی ارسال شد. نتیجه از طریق پیامک اعلام می‌شود.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            className="w-full"
            variant="outline"
            onClick={() => setSubmitted(false)}
          >
            بازگشت به بررسی
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card dir="rtl" lang="fa">
      <CardHeader>
        <CardTitle>بررسی اطلاعات</CardTitle>
        <CardDescription>
          قبل از تأیید نهایی، هر بخش را بازبینی یا ویرایش کنید
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-0">
        <SectionBlock
          title="اطلاعات شخصی"
          editing={editing === "personal"}
          onEdit={() => setEditing("personal")}
          onCancel={() => setEditing(null)}
          onSave={() => setEditing(null)}
          summary={
            <>
              <SummaryRow
                label="نام و نام خانوادگی"
                value={`${data.firstName} ${data.lastName}`}
              />
              <SummaryRow label="کد ملی" value={data.nationalId} ltr />
              <SummaryRow label="تاریخ تولد" value={data.birthdate} ltr />
            </>
          }
          form={
            <FieldGroup>
              <Field className="grid gap-3 sm:grid-cols-2">
                <Field>
                  <FieldLabel>نام</FieldLabel>
                  <Input
                    value={data.firstName}
                    onChange={(e) =>
                      setData((d) => ({ ...d, firstName: e.target.value }))
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel>نام خانوادگی</FieldLabel>
                  <Input
                    value={data.lastName}
                    onChange={(e) =>
                      setData((d) => ({ ...d, lastName: e.target.value }))
                    }
                  />
                </Field>
              </Field>
              <Field>
                <FieldLabel>کد ملی</FieldLabel>
                <NationalIdInput name="nationalId" />
              </Field>
              <Field>
                <FieldLabel>تاریخ تولد</FieldLabel>
                <Input
                  value={data.birthdate}
                  onChange={(e) =>
                    setData((d) => ({ ...d, birthdate: e.target.value }))
                  }
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </FieldGroup>
          }
        />
        <Separator />
        <SectionBlock
          title="اطلاعات تماس"
          editing={editing === "contact"}
          onEdit={() => setEditing("contact")}
          onCancel={() => setEditing(null)}
          onSave={() => setEditing(null)}
          summary={
            <>
              <SummaryRow label="موبایل" value={data.mobile} ltr />
              <SummaryRow label="ایمیل" value={data.email} ltr />
            </>
          }
          form={
            <FieldGroup>
              <Field>
                <FieldLabel>موبایل</FieldLabel>
                <Input
                  value={data.mobile}
                  onChange={(e) =>
                    setData((d) => ({ ...d, mobile: e.target.value }))
                  }
                  dir="ltr"
                  className="text-start"
                />
              </Field>
              <Field>
                <FieldLabel>ایمیل</FieldLabel>
                <Input
                  type="email"
                  value={data.email}
                  onChange={(e) =>
                    setData((d) => ({ ...d, email: e.target.value }))
                  }
                  dir="ltr"
                  className="text-start"
                />
              </Field>
            </FieldGroup>
          }
        />
        <Separator />
        <SectionBlock
          title="مدرک هویتی"
          editing={editing === "document"}
          onEdit={() => setEditing("document")}
          onCancel={() => setEditing(null)}
          onSave={() => setEditing(null)}
          summary={<SummaryRow label="فایل" value={data.document} />}
          form={
            <Field>
              <FieldLabel>عنوان مدرک</FieldLabel>
              <Input
                value={data.document}
                onChange={(e) =>
                  setData((d) => ({ ...d, document: e.target.value }))
                }
              />
            </Field>
          }
        />
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          disabled={editing !== null}
          onClick={() => setSubmitted(true)}
        >
          تأیید و ارسال نهایی
        </Button>
      </CardFooter>
    </Card>
  )
}

function SectionBlock({
  title,
  editing,
  onEdit,
  onCancel,
  onSave,
  summary,
  form,
}: {
  title: string
  editing: boolean
  onEdit: () => void
  onCancel: () => void
  onSave: () => void
  summary: React.ReactNode
  form: React.ReactNode
}) {
  return (
    <div className="py-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-sm font-medium">{title}</h3>
        {!editing ? (
          <Button type="button" variant="ghost" size="sm" onClick={onEdit}>
            <PencilIcon />
            ویرایش
          </Button>
        ) : null}
      </div>
      {editing ? (
        <div className="space-y-4">
          {form}
          <div className="flex gap-2">
            <Button type="button" size="sm" onClick={onSave}>
              ذخیره
            </Button>
            <Button
              type="button"
              size="sm"
              variant="outline"
              onClick={onCancel}
            >
              انصراف
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-2">{summary}</div>
      )}
    </div>
  )
}

function SummaryRow({
  label,
  value,
  ltr,
}: {
  label: string
  value: string
  ltr?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium" dir={ltr ? "ltr" : undefined}>
        {value}
      </span>
    </div>
  )
}
