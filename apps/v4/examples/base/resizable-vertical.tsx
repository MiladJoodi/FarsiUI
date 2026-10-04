import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/styles/base-nova/ui/resizable"

export default function ResizableVertical() {
  return (
    <div dir="rtl">
      <ResizablePanelGroup
        orientation="vertical"
        className="min-h-[200px] max-w-lg rounded-lg border"
      >
        <ResizablePanel defaultSize="25%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">سربرگ</span>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize="75%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">محتوا</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
