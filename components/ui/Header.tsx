import { ANCHOR_PAGES, PUBLIC_PAGES } from "@/config/routes"
import Link from "next/link"
import { BenzinLink } from "./BenzinLink"

export function Header() {
  return (
    <header className="sticky z-50 bg-background/80 backdrop-blur-xs px-4 md:px-6 py-3 md:py-4 flex items-center justify-between font-zcool w-full max-w-4xl rounded-full top-1">
      <Link href={PUBLIC_PAGES.HOME}>
        <span className="text-xl md:text-2xl hover:opacity-80 transition-opacity">
          NiktaBenzin
        </span>
      </Link>

      <nav className="space-x-3 md:space-x-6 text-sm md:text-base">
        <BenzinLink href={ANCHOR_PAGES.ABOUT_ME} title="About me" />
        <BenzinLink href={ANCHOR_PAGES.CONTACT} title="Contact" />
        {/* <BenzinLink href={ANCHOR_PAGES.BENZ_SQUAD} title='BenzSquad'/> */}
      </nav>
    </header>
  )
}
