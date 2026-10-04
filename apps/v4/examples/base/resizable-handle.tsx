import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/styles/base-nova/ui/resizable"

export default function ResizableHandleDemo() {
  return (
    <div dir="rtl">
      <ResizablePanelGroup
        orientation="horizontal"
        className="min-h-[200px] max-w-2xl rounded-lg border"
      >
        <ResizablePanel defaultSize="25%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">نوار کناری</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize="75%">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">محتوا</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
