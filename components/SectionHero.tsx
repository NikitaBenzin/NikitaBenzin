export function SectionHero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-4 min-h-[60vh] text-center md:text-left">
      <div className="order-2 md:order-1">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
          Wassup <br className="hidden md:block" />
          {/* it&apos;s Nikita */}
        </h1>
        <span className="text-base md:text-xl opacity-80">
          Lorem ipsum dolor sit amet
        </span>
      </div>

      <div className="order-1 md:order-2 flex items-center justify-center">
        <div className="w-2/3 md:w-full max-w-sm">
          {/* <Image
            src={sfEyes}
            alt="SF Eyes"
            priority
            className="w-full h-auto"
          /> */}
        </div>
      </div>
    </section>
  )
}
