export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto">
      <p className="text-center text-xs md:text-sm opacity-50">
        © {currentYear} Nikita Benzin. All rights reserved.
      </p>
    </footer>
  )
}
