import { cn } from "cn"

export function FarsiUILogo({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-5", className)}
      {...props}
    >
      <rect x="15" y="130" width="135" height="25" rx="5" />
      <rect x="45" y="85" width="105" height="25" rx="5" />
      <rect x="85" y="48" width="65" height="22" rx="5" />
      <rect x="160" y="20" width="18" height="145" rx="2" />
    </svg>
  )
}
