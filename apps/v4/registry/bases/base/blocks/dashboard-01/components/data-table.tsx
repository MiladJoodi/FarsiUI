"use client"

import * as React from "react"
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import {
  columnFilteringFeature,
  columnVisibilityFeature,
  createColumnHelper,
  createFilteredRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  FlexRender,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
  useTable,
  type ColumnFiltersState,
  type ColumnVisibilityState,
  type Row,
  type SortingState,
} from "@tanstack/react-table"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { toast } from "sonner"
import { z } from "zod"

import { useIsMobile } from "@/registry/bases/base/hooks/use-mobile"
import { Badge } from "@/registry/bases/base/ui/badge"
import { Button } from "@/registry/bases/base/ui/button"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/registry/bases/base/ui/chart"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import { Input } from "@/registry/bases/base/ui/input"
import { Label } from "@/registry/bases/base/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/bases/base/ui/select"
import { Separator } from "@/registry/bases/base/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/bases/base/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/bases/base/ui/tabs"
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
function DragHandle({ id }: { id: number }) {
  const { attributes, listeners } = useSortable({
    id,
  })
  return (
    <Button
      {...attributes}
      {...listeners}
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
      <span className="sr-only">Drag to reorder</span>
    </Button>
  )
}
const columns = columnHelper.columns([
  columnHelper.display({
    id: "drag",
    header: () => null,
    cell: ({ row }) => <DragHandle id={row.original.id} />,
  }),
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={
            table.getIsSomePageRowsSelected() &&
            !table.getIsAllPageRowsSelected()
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="انتخاب همه"
        />
      </div>
    ),
    cell: ({ row }) => (
      <div className="flex items-center justify-center">
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="انتخاب ردیف"
        />
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
          <Select
            items={[
              { label: "علی محمدی", value: "علی محمدی" },
              { label: "سارا کریمی", value: "سارا کریمی" },
            ]}
          >
            <SelectTrigger
              className="w-38 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate"
              size="sm"
              id={`${row.original.id}-reviewer`}
            >
              <SelectValue placeholder="انتخاب بازبین" />
            </SelectTrigger>
            <SelectContent align="end" dir="rtl" lang="fa">
              <SelectGroup>
                <SelectItem value="علی محمدی">علی محمدی</SelectItem>
                <SelectItem value="سارا کریمی">سارا کریمی</SelectItem>
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
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              variant="ghost"
              className="flex size-8 text-muted-foreground data-open:bg-muted"
              size="icon"
            />
          }
        >
          <IconPlaceholder
            lucide="EllipsisVerticalIcon"
            tabler="IconDotsVertical"
            hugeicons="MoreVerticalCircle01Icon"
            phosphor="DotsThreeVerticalIcon"
            remixicon="RiMore2Line"
          />
          <span className="sr-only">باز کردن منو</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-32" dir="rtl" lang="fa">
          <DropdownMenuItem>ویرایش</DropdownMenuItem>
          <DropdownMenuItem>کپی</DropdownMenuItem>
          <DropdownMenuItem>علاقه‌مندی</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">حذف</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  }),
])
function DraggableRow({
  row,
}: {
  row: Row<typeof features, z.infer<typeof schema>>
}) {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  })
  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      className="relative z-0 data-[dragging=true]:z-10 data-[dragging=true]:opacity-80"
      style={{
        transform: CSS.Transform.toString(transform),
        transition: transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          <FlexRender cell={cell} />
        </TableCell>
      ))}
    </TableRow>
  )
}
export function DataTable({
  data: initialData,
}: {
  data: z.infer<typeof schema>[]
}) {
  const [data, setData] = React.useState(() => initialData)
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
  const sortableId = React.useId()
  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )
  const dataIds = React.useMemo<UniqueIdentifier[]>(
    () => data?.map(({ id }) => id) || [],
    [data]
  )
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
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setData((data) => {
        const oldIndex = dataIds.indexOf(active.id)
        const newIndex = dataIds.indexOf(over.id)
        return arrayMove(data, oldIndex, newIndex)
      })
    }
  }
  return (
    <Tabs
      defaultValue="outline"
      className="w-full flex-col justify-start gap-6"
      dir="rtl"
      lang="fa"
    >
      <div className="flex items-center justify-between px-4 lg:px-6">
        <Label htmlFor="view-selector" className="sr-only">
          نما
        </Label>
        <Select
          defaultValue="outline"
          items={[
            { label: "طرح کلی", value: "outline" },
            { label: "عملکرد گذشته", value: "past-performance" },
            { label: "افراد کلیدی", value: "key-personnel" },
            { label: "اسناد مهم", value: "focus-documents" },
          ]}
        >
          <SelectTrigger
            className="flex w-fit @4xl/main:hidden"
            size="sm"
            id="view-selector"
          >
            <SelectValue placeholder="انتخاب نما" />
          </SelectTrigger>
          <SelectContent dir="rtl" lang="fa">
            <SelectGroup>
              <SelectItem value="outline">طرح کلی</SelectItem>
              <SelectItem value="past-performance">عملکرد گذشته</SelectItem>
              <SelectItem value="key-personnel">افراد کلیدی</SelectItem>
              <SelectItem value="focus-documents">اسناد مهم</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <TabsList className="hidden **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:px-1 @4xl/main:flex">
          <TabsTrigger value="outline">طرح کلی</TabsTrigger>
          <TabsTrigger value="past-performance">
            عملکرد گذشته <Badge variant="secondary">3</Badge>
          </TabsTrigger>
          <TabsTrigger value="key-personnel">
            افراد کلیدی <Badge variant="secondary">2</Badge>
          </TabsTrigger>
          <TabsTrigger value="focus-documents">اسناد مهم</TabsTrigger>
        </TabsList>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={<Button variant="outline" size="sm" />}
            >
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
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32" dir="rtl" lang="fa">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== "undefined" &&
                    column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
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
        value="outline"
        className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
      >
        <div className="overflow-hidden rounded-lg border">
          <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
            id={sortableId}
          >
            <Table>
              <TableHeader className="sticky top-0 z-10 bg-muted">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : (
                            <FlexRender header={header} />
                          )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody className="**:data-[slot=table-cell]:first:w-8">
                {table.getRowModel().rows?.length ? (
                  <SortableContext
                    items={dataIds}
                    strategy={verticalListSortingStrategy}
                  >
                    {table.getRowModel().rows.map((row) => (
                      <DraggableRow key={row.id} row={row} />
                    ))}
                  </SortableContext>
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      نتیجه‌ای نیست.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
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
                value={`${table.state.pagination.pageSize}`}
                onValueChange={(value) => {
                  table.setPageSize(Number(value))
                }}
                items={[10, 20, 30, 40, 50].map((pageSize) => ({
                  label: `${pageSize}`,
                  value: `${pageSize}`,
                }))}
              >
                <SelectTrigger size="sm" className="w-20" id="rows-per-page">
                  <SelectValue placeholder={table.state.pagination.pageSize} />
                </SelectTrigger>
                <SelectContent side="top" dir="rtl" lang="fa">
                  <SelectGroup>
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <SelectItem key={pageSize} value={`${pageSize}`}>
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
                onClick={() => table.setPageIndex(0)}
                disabled={!table.getCanPreviousPage()}
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
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
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
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
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
                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                disabled={!table.getCanNextPage()}
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
      <TabsContent
        value="past-performance"
        className="flex flex-col px-4 lg:px-6"
      >
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent value="key-personnel" className="flex flex-col px-4 lg:px-6">
        <div className="aspect-video w-full flex-1 rounded-lg border border-dashed"></div>
      </TabsContent>
      <TabsContent
        value="focus-documents"
        className="flex flex-col px-4 lg:px-6"
      >
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
    <Drawer swipeDirection={isMobile ? "down" : "left"} dir="rtl">
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
                  margin={{ left: 0, right: 10 }}
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
                  defaultValue={item.type}
                  items={[
                    { label: "فهرست", value: "فهرست" },
                    { label: "خلاصهٔ اجرایی", value: "خلاصهٔ اجرایی" },
                    { label: "رویکرد فنی", value: "رویکرد فنی" },
                    { label: "طراحی", value: "طراحی" },
                    { label: "قابلیت‌ها", value: "قابلیت‌ها" },
                    { label: "اسناد مهم", value: "اسناد مهم" },
                    { label: "روایی", value: "روایی" },
                    { label: "صفحهٔ جلد", value: "صفحهٔ جلد" },
                    { label: "فنی", value: "فنی" },
                  ]}
                >
                  <SelectTrigger id="type" className="w-full" dir="rtl">
                    <SelectValue placeholder="انتخاب نوع" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectGroup>
                      <SelectItem value="فهرست">فهرست</SelectItem>
                      <SelectItem value="خلاصهٔ اجرایی">خلاصهٔ اجرایی</SelectItem>
                      <SelectItem value="رویکرد فنی">رویکرد فنی</SelectItem>
                      <SelectItem value="طراحی">طراحی</SelectItem>
                      <SelectItem value="قابلیت‌ها">قابلیت‌ها</SelectItem>
                      <SelectItem value="اسناد مهم">اسناد مهم</SelectItem>
                      <SelectItem value="روایی">روایی</SelectItem>
                      <SelectItem value="صفحهٔ جلد">صفحهٔ جلد</SelectItem>
                      <SelectItem value="فنی">فنی</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-3">
                <Label htmlFor="status">وضعیت</Label>
                <Select
                  defaultValue={item.status}
                  items={[
                    { label: "انجام‌شده", value: "انجام‌شده" },
                    { label: "در حال انجام", value: "در حال انجام" },
                    { label: "شروع‌نشده", value: "شروع‌نشده" },
                  ]}
                >
                  <SelectTrigger id="status" className="w-full" dir="rtl">
                    <SelectValue placeholder="انتخاب وضعیت" />
                  </SelectTrigger>
                  <SelectContent dir="rtl" lang="fa">
                    <SelectGroup>
                      <SelectItem value="انجام‌شده">انجام‌شده</SelectItem>
                      <SelectItem value="در حال انجام">در حال انجام</SelectItem>
                      <SelectItem value="شروع‌نشده">شروع‌نشده</SelectItem>
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
                defaultValue={item.reviewer}
                items={[
                  { label: "علی محمدی", value: "علی محمدی" },
                  { label: "سارا کریمی", value: "سارا کریمی" },
                  { label: "هستی احمدی", value: "هستی احمدی" },
                ]}
              >
                <SelectTrigger id="reviewer" className="w-full" dir="rtl">
                  <SelectValue placeholder="انتخاب بازبین" />
                </SelectTrigger>
                <SelectContent dir="rtl" lang="fa">
                  <SelectGroup>
                    <SelectItem value="علی محمدی">علی محمدی</SelectItem>
                    <SelectItem value="سارا کریمی">سارا کریمی</SelectItem>
                    <SelectItem value="هستی احمدی">هستی احمدی</SelectItem>
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
