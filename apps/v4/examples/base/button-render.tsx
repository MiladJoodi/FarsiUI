import { buttonVariants } from "@/registry/bases/base/ui/button"

export default function ButtonRender() {
  return (
    <a
      href="#"
      className={buttonVariants({ variant: "secondary", size: "sm" })}
    >
      ورود
    </a>
  )
}
