export function SectionAbout() {
  return (
    <section id="about" className="flex flex-col gap-4 md:gap-6 scroll-mt-24">
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
  )
}
