import { ANCHOR_PAGES, PUBLIC_PAGES } from "@/config/routes"
import Image from "next/image"
import Link from "next/link"

import { BenzinLink } from "@/components/ui/BenzinLink"
import sfEyes from "../public/sf-eyes-white.png"

export default function Home() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="relative z-10 w-full max-w-495 mx-auto my-0 min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm p-4 flex items-center justify-between font-zcool">
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

      <main className="grow flex flex-col gap-16 md:gap-32 pt-10 md:pt-20 pb-16 md:pb-32 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-4 min-h-[60vh] text-center md:text-left">
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Wassup ma boyz, <br className="hidden md:block" /> it&apos;s
              Nikita
            </h1>
            <span className="text-base md:text-xl opacity-80">
              Day walker, night bug-stalker.
            </span>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center">
            <div className="w-2/3 md:w-full max-w-sm">
              <Image
                src={sfEyes}
                alt="SF Eyes"
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section
          id="about"
          className="flex flex-col gap-4 md:gap-6 scroll-mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-zcool border-b border-gray-800 pb-2">
            About Me
          </h2>
          <div className="text-base md:text-lg opacity-80 leading-relaxed space-y-4">
            <p>
              Here you can talk about your technology stack (React, Next.js,
              Tailwind), your work experience, and what you enjoy doing.
            </p>
            <p>
              For example: &quot;I turn coffee into code and bugs into
              features.&quot;
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-4 md:gap-6 scroll-mt-24"
        >
          <h2 className="text-2xl md:text-3xl font-zcool border-b border-gray-800 pb-2">
            Contact
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-base md:text-lg opacity-80">
              Ready to discuss a project or just chat? Message me:
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 text-sm md:text-base">
              <BenzinLink
                href="mailto:mykyta.bzn@gmail.com"
                title="Email"
                target="_blank"
                rel="noreferrer"
              />
              <BenzinLink
                href="https://t.me/@nikitabenzin"
                title="Telegram"
                target="_blank"
                rel="noreferrer"
              />
              <BenzinLink
                href="https://github.com/NikitaBenzin"
                title="GitHub"
                target="_blank"
                rel="noreferrer"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto">
        <p className="py-4 md:py-6 text-center text-xs md:text-sm opacity-50">
          © {currentYear} Nikita Benzin. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
