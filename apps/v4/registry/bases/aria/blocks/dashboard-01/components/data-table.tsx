"use client"

import * as React from "react"
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type SortingState,
} from "@tanstack/react-table"
import {
  DropIndicator,
  useDragAndDrop,
  useListData,
} from "react-aria-components"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { toast } from "sonner"
import { z } from "zod"

import { useIsMobile } from "@/registry/bases/aria/hooks/use-mobile"
import { Badge } from "@/registry/bases/aria/ui/badge"
import { Button } from "@/registry/bases/aria/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/bases/aria/ui/chart"
import { Checkbox } from "@/registry/bases/aria/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/aria/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/aria/ui/dropdown-menu"
import { Input } from "@/registry/bases/aria/ui/input"
import { Label } from "@/registry/bases/aria/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/aria/ui/select"
import { Separator } from "@/registry/bases/aria/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/aria/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/aria/ui/tabs"
import { IconPlaceholder } from "@/components/icon-placeholder"

// New in v9: declare the features this table uses — anything you don't
// register is tree-shaken out of the bundle.
const features = tableFeatures({
  columnFilteringFeature,
  columnVisibilityFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  filteredRowModel: createFilteredRowModel(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
})

const columnHelper = createColumnHelper<
  typeof features,
  z.infer<typeof schema>
>()

export const schema = z.object({
  id: z.number(),
  header: z.string(),
  type: z.string(),
  status: z.string(),
  target: z.string(),
  limit: z.string(),
  reviewer: z.string(),
})

// Create a separate component for the drag handle
function DragHandle() {
  return (
    <Button
      slot="drag"
      variant="ghost"
      size="icon"
      className="size-7 text-muted-foreground hover:bg-transparent"
    >
      <IconPlaceholder
        lucide="GripVerticalIcon"
        tabler="IconGripVertical"
        hugeicons="DragDropVerticalIcon"
        phosphor="DotsSixVerticalIcon"
        remixicon="RiDraggable"
        className="size-3 text-muted-foreground"
      />
    </Button>
  )
}
const columns = columnHelper.columns([
  columnHelper.display({
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle />,
  }),
  columnHelper.display({
    id: "select",
    header: () => (
      <div className="flex items-center justify-center">
        <Checkbox slot="selection" aria-label="انتخاب همه" />
      </div>
    ),
    cell: () => (
      <div className="flex items-center justify-center">
        <Checkbox slot="selection" aria-label="انتخاب ردیف" />
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("header", {
    header: "عنوان",
    cell: ({ row }) => {
      return <TableCellViewer item={row.original} />
    },
    enableHiding: false,
  }),
  columnHelper.accessor("type", {
    header: "نوع بخش",
    cell: ({ row }) => (
      <div className="w-32">
        <Badge variant="outline" className="px-1.5 text-muted-foreground">
          {row.original.type}
        </Badge>
      </div>
    ),
  }),
  columnHelper.accessor("status", {
    header: "وضعیت",
    cell: ({ row }) => (
      <Badge variant="outline" className="px-1.5 text-muted-foreground">
        {row.original.status === "انجام‌شده" ? (
          <IconPlaceholder
            lucide="CircleCheckIcon"
            tabler="IconCircleCheckFilled"
            hugeicons="CheckmarkCircle01Icon"
            phosphor="CheckCircleIcon"
            remixicon="RiCheckboxCircleFill"
            className="fill-green-500 dark:fill-green-400"
          />
        ) : (
          <IconPlaceholder
            lucide="LoaderIcon"
            tabler="IconLoader"
            hugeicons="Loading03Icon"
            phosphor="SpinnerIcon"
            remixicon="RiLoader4Line"
          />
        )}
        {row.original.status}
      </Badge>
    ),
  }),
  columnHelper.accessor("target", {
    header: () => <div className="w-full text-end">هدف</div>,
    cell: ({ row }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: `در حال ذخیرهٔ ${row.original.header}`,
            success: "انجام شد",
            error: "خطا",
          })
        }}
      >
        <Label htmlFor={`${row.original.id}-target`} className="sr-only">
          Target
        </Label>
        <Input
          className="h-8 w-16 border-transparent bg-transparent text-end shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30"
          defaultValue={row.original.target}
          id={`${row.original.id}-target`}
        />
      </form>
    ),
  }),
  columnHelper.accessor("limit", {
    header: () => <div className="w-full text-end">سقف</div>,
    cell: ({ row }) => (
      <form
        onSubmit={(e) => {
          e.preventDefault()
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1000)), {
            loading: `در حال ذخیرهٔ ${row.original.header}`,
            success: "انجام شد",
            error: "خطا",
          })
        }}
      >
        <Label htmlFor={`${row.original.id}-limit`} className="sr-only">
          Limit
        </Label>
        <Input
          className="h-8 w-16 border-transparent bg-transparent text-end shadow-none hover:bg-input/30 focus-visible:border focus-visible:bg-background dark:bg-transparent dark:hover:bg-input/30 dark:focus-visible:bg-input/30"
          defaultValue={row.original.limit}
          id={`${row.original.id}-limit`}
        />
      </form>
    ),
  }),
  columnHelper.accessor("reviewer", {
    header: "بازبین",
    cell: ({ row }) => {
      const isAssigned = row.original.reviewer !== "انتخاب بازبین"
      if (isAssigned) {
        return row.original.reviewer
      }
      return (
        <>
          <Label htmlFor={`${row.original.id}-reviewer`} className="sr-only">
            Reviewer
          </Label>
          <Select placeholder="انتخاب بازبین">
            <SelectTrigger
              className="w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
              size="sm"
              id={`${row.original.id}-reviewer`}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent placement="bottom end" dir="rtl" lang="fa">
              <SelectGroup>
                <SelectItem id="علی محمدی">علی محمدی</SelectItem>
                <SelectItem id="سارا کریمی">سارا کریمی</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      )
    },
  }),
  columnHelper.display({
    id: "actions",
    cell: () => (
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          className="flex size-8 text-muted-foreground aria-expanded:bg-muted"
          size="icon"
        >
          <IconPlaceholder
            lucide="EllipsisVerticalIcon"
            tabler="IconDotsVertical"
            hugeicons="MoreVerticalCircle01Icon"
            phosphor="DotsThreeVerticalIcon"
            remixicon="RiMore2Line"
          />
          <span className="sr-only">باز کردن منو</span>
        </Button>
        <DropdownMenu
          placement="bottom end"
          className="w-32"
          dir="rtl"
          lang="fa"
        >
          <DropdownMenuItem>ویرایش</DropdownMenuItem>
          <DropdownMenuItem>کپی</DropdownMenuItem>
          <DropdownMenuItem>علاقه‌مندی</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">حذف</DropdownMenuItem>
        </DropdownMenu>
      </DropdownMenuTrigger>
    ),
  }),
])

export default function DataTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[]
}) {
  const list = useListData({
    initialItems: initialData,
    getKey: (item) => String(item.id),
  })
  const data = list.items
  const [rowSelection, setRowSelection] = React.useState({})
  const [columnVisibility, setColumnVisibility] =
    React.useState<ColumnVisibilityState>({})
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [pagination, setPagination] = React.useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const table = useTable({
    features,
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
      pagination,
    },
    getRowId: (row) => row.id.toString(),
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onPaginationChange: setPagination,
  })
  const { dragAndDropHooks } = useDragAndDrop({
    getItems: (keys, items: z.infer<typeof schema>[]) =>
      items.map((item) => ({
        "text/plain": item.header,
      })),
    onReorder(e) {
      if (e.target.dropPosition === "before") {
        list.moveBefore(e.target.key, e.keys)
      } else if (e.target.dropPosition === "after") {
        list.moveAfter(e.target.key, e.keys)
      }
    },
    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className="outline-blue-400 data-drop-target:outline-1"
        />
      )
    },
  })

  return (
    <Tabs
      defaultSelectedKey="outline"
      className="w-full flex-col justify-start gap-6"
      dir="rtl"
      lang="fa"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          نما
        </Label>
        {/* <Select placeholder="انتخاب نما" defaultValue="outline">
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectGroup>
              <SelectItem id="outline">طرح کلی</SelectItem>
              <SelectItem id="past-performance">عملکرد گذشته</SelectItem>
              <SelectItem id="key-personnel">افراد کلیدی</SelectItem>
              <SelectItem id="focus-documents">اسناد مهم</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
        <TabsList className="hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger id="outline">طرح کلی</TabsTrigger>
          <TabsTrigger id="past-performance">
            عملکرد گذشته <Badge variant="secondary">3</Badge>
          </TabsTrigger>
          <TabsTrigger id="key-personnel">
            افراد کلیدی <Badge variant="secondary">2</Badge>
          </TabsTrigger>
          <TabsTrigger id="focus-documents">اسناد مهم</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          {/* <DropdownMenuTrigger>
            <Button variant="outline" size="sm">
              <IconPlaceholder
                lucide="Columns3Icon"
                tabler="IconLayoutColumns"
                hugeicons="LeftToRightListBulletIcon"
                phosphor="ColumnsIcon"
                remixicon="RiLayoutColumnLine"
                data-icon="inline-start"
              />
              ستون‌ها
              <IconPlaceholder
                lucide="ChevronDownIcon"
                tabler="IconChevronDown"
                hugeicons="ArrowDown01Icon"
                phosphor="CaretDownIcon"
                remixicon="RiArrowDownSLine"
                data-icon="inline-end"
              />
            </Button>
            <DropdownMenu
              align="end"
              className="w-32"
              dir="rtl"
              lang="fa"
              selectionMode="multiple"
              selectedKeys={
                table
                  .getVisibleFlatColumns()
                  .filter((column) => column.getCanHide())
                  .map(column => column.id)
              }
              onSelectionChange={(keys) => {
                table.setColumnVisibility(
                  Object.fromEntries(
                    table
                      .getAllFlatColumns()
                      .map((c) => [
                        c.id,
                        !c.getCanHide() || keys === "all" || keys.has(c.id),
                      ])
                  )
                )
              }}
            >
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuItem
                      key={column.id}
                      id={column.id}
                      className="capitalize"
                    >
                      {column.id}
                    </DropdownMenuItem>
                  )
                })}
            </DropdownMenu>
          </DropdownMenuTrigger> */}

          <Button variant="outline" size="sm">
            <IconPlaceholder
              lucide="PlusIcon"
              tabler="IconPlus"
              hugeicons="Add01Icon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
            />
            <span className="hidden lg:inline">افزودن بخش</span>
          </Button>
        </div>
      </div>
      <TabsContent
        id="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <Table
            aria-label="وظایف"
            dragAndDropHooks={dragAndDropHooks}
            selectionMode="multiple"
            onSelectionChange={(selection) => {
              if (selection === "all") {
                table.toggleAllRowsSelected()
              } else {
                table.setRowSelection(
                  Object.fromEntries([...selection].map((key) => [key, true]))
                )
              }
            }}
            sortDescriptor={
              sorting.length
                ? {
                    column: sorting[0].id,
                    direction: sorting[0].desc ? "descending" : "ascending",
                  }
                : undefined
            }
            onSortChange={(sortDescriptor) => {
              table.setSorting([
                {
                  id: "" + sortDescriptor.column,
                  desc: sortDescriptor.direction === "descending",
                },
              ])
            }}
          >
            <TableHeader className="sticky top-0 z-10 bg-muted">
              {table.getFlatHeaders().map((header) => (
                <TableHead
                  key={header.id}
                  id={header.id}
                  isRowHeader={header.index === 1}
                  allowsSorting={header.column.getCanSort()}
                >
                  {header.isPlaceholder ? null : (
                    <table.FlexRender header={header} />
                  )}
                </TableHead>
              ))}
            </TableHeader>
            <TableBody
              className="data-empty:h-24 data-empty:text-center **:data-[slot=table-cell]:first:w-8"
              renderEmptyState={() => "نتیجه‌ای نیست."}
            >
              {table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  id={row.id}
                  value={row.original}
                  className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <table.FlexRender cell={cell} />
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="hidden flex-1 text-sm text-muted-foreground lg:flex">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} ردیف انتخاب شده.
          </div>
          <div className="flex w-full items-center gap-8 lg:w-fit">
            <div className="hidden items-center gap-2 lg:flex">
              <Label htmlFor="rows-per-page" className="text-sm font-medium">
                ردیف در صفحه
              </Label>
              <Select
                aria-label="ردیف در صفحه"
                placeholder={`${table.state.pagination.pageSize}`}
                value={`${table.state.pagination.pageSize}`}
                onChange={(value) => {
                  table.setPageSize(Number(value))
                }}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent placement="top" dir="rtl" lang="fa">
                  <SelectGroup>
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <SelectItem key={pageSize} id={`${pageSize}`}>
                        {pageSize}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex w-fit items-center justify-center text-sm font-medium">
              صفحه {table.state.pagination.pageIndex + 1} از{" "}
              {table.getPageCount()}
            </div>
            <div className="ms-auto flex items-center gap-2 lg:ms-0">
              <Button
                variant="outline"
                className="hidden h-8 w-8 p-0 lg:flex"
                onPress={() => table.setPageIndex(0)}
                isDisabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">صفحهٔ اول</span>
                <IconPlaceholder
                  lucide="ChevronsLeftIcon"
                  tabler="IconChevronsLeft"
                  hugeicons="ArrowLeftDoubleIcon"
                  phosphor="CaretDoubleLeftIcon"
                  remixicon="RiSkipLeftLine"
                  className="rtl:rotate-180"
                />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onPress={() => table.previousPage()}
                isDisabled={!table.getCanPreviousPage()}
              >
                <span className="sr-only">صفحهٔ قبل</span>
                <IconPlaceholder
                  lucide="ChevronLeftIcon"
                  tabler="IconChevronLeft"
                  hugeicons="ArrowLeft01Icon"
                  phosphor="CaretLeftIcon"
                  remixicon="RiArrowLeftSLine"
                  className="rtl:rotate-180"
                />
              </Button>
              <Button
                variant="outline"
                className="size-8"
                size="icon"
                onPress={() => table.nextPage()}
                isDisabled={!table.getCanNextPage()}
              >
                <span className="sr-only">صفحهٔ بعد</span>
                <IconPlaceholder
                  lucide="ChevronRightIcon"
                  tabler="IconChevronRight"
                  hugeicons="ArrowRight01Icon"
                  phosphor="CaretRightIcon"
                  remixicon="RiArrowRightSLine"
                  className="rtl:rotate-180"
                />
              </Button>
              <Button
                variant="outline"
                className="hidden size-8 lg:flex"
                size="icon"
                onPress={() => table.setPageIndex(table.getPageCount() - 1)}
                isDisabled={!table.getCanNextPage()}
              >
                <span className="sr-only">صفحهٔ آخر</span>
                <IconPlaceholder
                  lucide="ChevronsRightIcon"
                  tabler="IconChevronsRight"
                  hugeicons="ArrowRightDoubleIcon"
                  phosphor="CaretDoubleRightIcon"
                  remixicon="RiSkipRightLine"
                  className="rtl:rotate-180"
                />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent id="past-performance" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent id="key-personnel" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent id="focus-documents" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
    </Tabs>
  )
}
const chartData = [
  {
    month: "January",
    desktop: 186,
    mobile: 80,
  },
  {
    month: "February",
    desktop: 305,
    mobile: 200,
  },
  {
    month: "March",
    desktop: 237,
    mobile: 120,
  },
  {
    month: "April",
    desktop: 73,
    mobile: 190,
  },
  {
    month: "May",
    desktop: 209,
    mobile: 130,
  },
  {
    month: "June",
    desktop: 214,
    mobile: 140,
  },
]
const chartConfig = {
  desktop: {
    label: "دسکتاپ",
    color: "var(--primary)",
  },
  mobile: {
    label: "موبایل",
    color: "var(--primary)",
  },
} satisfies ChartConfig
function TableCellViewer({ item }: { item: z.infer<typeof schema> }) {
  const isMobile = useIsMobile()
  return (
    <Drawer swipeDirection={isMobile ? "down" : "left"}>
      <DrawerTrigger
        render={
          <Button
            variant="link"
            className="w-fit px-0 text-start text-foreground"
          />
        }
      >
        {item.header}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="gap-1 text-start">
          <DrawerTitle>{item.header}</DrawerTitle>
          <DrawerDescription>مجموع بازدید شش ماه اخیر</DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col gap-4 overflow-y-auto px-4 text-sm">
          {!isMobile && (
            <>
              <ChartContainer config={chartConfig}>
                <AreaChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 0,
                    right: 10,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                    hide
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Area
                    dataKey="mobile"
                    type="natural"
                    fill="var(--color-mobile)"
                    fillOpacity={0.6}
                    stroke="var(--color-mobile)"
                    stackId="a"
                  />
                  <Area
                    dataKey="desktop"
                    type="natural"
                    fill="var(--color-desktop)"
                    fillOpacity={0.4}
                    stroke="var(--color-desktop)"
                    stackId="a"
                  />
                </AreaChart>
              </ChartContainer>
              <Separator />
              <div className="grid gap-2">
                <div className="flex gap-2 leading-none font-medium">
                  رشد ۵٫۲٪ در این ماه{" "}
                  <IconPlaceholder
                    lucide="TrendingUpIcon"
                    tabler="IconTrendingUp"
                    hugeicons="ChartUpIcon"
                    phosphor="TrendUpIcon"
                    remixicon="RiArrowUpLine"
                    className="size-4"
                  />
                </div>
                <div className="text-muted-foreground">
                  مجموع بازدید شش ماه اخیر. این متن نمونه برای بررسی چیدمان
                  راست‌چین است.
                </div>
              </div>
              <Separator />
            </>
          )}
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Label htmlFor="header">عنوان</Label>
              <Input id="header" defaultValue={item.header} dir="rtl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="type">نوع</Label>
                <Select
                  placeholder="انتخاب نوع"
                  aria-label="نوع"
                  defaultValue={item.type}
                >
                  <SelectTrigger id="type" className="w-full" dir="rtl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectGroup>
                      <SelectItem id="فهرست">فهرست</SelectItem>
                      <SelectItem id="خلاصهٔ اجرایی">خلاصهٔ اجرایی</SelectItem>
                      <SelectItem id="رویکرد فنی">رویکرد فنی</SelectItem>
                      <SelectItem id="طراحی">طراحی</SelectItem>
                      <SelectItem id="قابلیت‌ها">قابلیت‌ها</SelectItem>
                      <SelectItem id="اسناد مهم">اسناد مهم</SelectItem>
                      <SelectItem id="روایی">روایی</SelectItem>
                      <SelectItem id="صفحهٔ جلد">صفحهٔ جلد</SelectItem>
                      <SelectItem id="فنی">فنی</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="status">وضعیت</Label>
                <Select
                  aria-label="وضعیت"
                  placeholder="انتخاب وضعیت"
                  defaultValue={item.status}
                >
                  <SelectTrigger id="status" className="w-full" dir="rtl">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectGroup>
                      <SelectItem id="انجام‌شده">انجام‌شده</SelectItem>
                      <SelectItem id="در حال انجام">در حال انجام</SelectItem>
                      <SelectItem id="شروع‌نشده">شروع‌نشده</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3">
                <Label htmlFor="target">هدف</Label>
                <Input
                  id="target"
                  defaultValue={item.target}
                  dir="ltr"
                  className="text-start"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="limit">سقف</Label>
                <Input
                  id="limit"
                  defaultValue={item.limit}
                  dir="ltr"
                  className="text-start"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor="reviewer">بازبین</Label>
              <Select
                aria-label="بازبین"
                placeholder="انتخاب بازبین"
                defaultValue={item.reviewer}
              >
                <SelectTrigger id="reviewer" className="w-full" dir="rtl">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectGroup>
                    <SelectItem id="علی محمدی">علی محمدی</SelectItem>
                    <SelectItem id="سارا کریمی">سارا کریمی</SelectItem>
                    <SelectItem id="هستی احمدی">هستی احمدی</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </form>
        </div>
        <DrawerFooter>
          <Button>ثبت</Button>
          <DrawerClose render={<Button variant="outline" />}>بستن</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
