import { SectionAbout } from "@/components/SectionAbout"
import { SectionContact } from "@/components/SectionContact"
import { SectionHero } from "@/components/SectionHero"
import { Footer } from "@/components/ui/Footer"
import { Header } from "@/components/ui/Header"

export default function Home() {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto my-0 min-h-screen flex flex-col items-center p-4">
      <Header />

      <main className="grow flex flex-col gap-16 md:gap-32 pt-10 md:pt-20 pb-16 md:pb-32 p-4">
        <SectionHero />
        <SectionAbout />
        <SectionContact />
      </main>

      <Footer />
    </div>
  )
}
