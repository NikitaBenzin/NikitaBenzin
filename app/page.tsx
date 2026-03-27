import { BenzinCard } from "@/components/ui/benzinCard/BenzinCard"
import { benzinCards } from "@/constants/cards.constants"
import Image from "next/image"
import avatarImage from "../public/avatar.jpg"
import bgImage from "../public/bg.jpg"

export default async function Home() {
  return (
    <>
      <Image
        src={bgImage}
        alt="Night sky"
        className="benzin-bg-image"
        loading="eager"
        fetchPriority="high"
      />
      <main className="benzin-container">
        <Image
          src={avatarImage}
          alt="Nikitabenzin profile image"
          className="benzin-profile-image"
        />
        <h1>
          Wassup, I&apos;m{" "}
          <span className="benzin-glowing-text">NikitaBenzin</span>
        </h1>

        <section className="benzin-cards-section">
          {benzinCards.map(card => (
            <BenzinCard key={card.link} {...card} />
          ))}
        </section>
      </main>
    </>
  )
}
