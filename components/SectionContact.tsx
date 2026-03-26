import { BenzinLink } from "./ui/BenzinLink"

export function SectionContact() {
  return (
    <section id="contact" className="flex flex-col gap-4 md:gap-6 scroll-mt-24">
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
  )
}
