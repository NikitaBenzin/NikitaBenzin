import Link from "next/link"
import { AnchorHTMLAttributes } from "react"

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  title: string
}

export function BenzinLink({ href, title, ...props }: Props) {
  return (
    <Link
      className="active:text-accent hover:underline hover:text-accent duration-300"
      href={href}
      {...props}
    >
      {title}
    </Link>
  )
}
