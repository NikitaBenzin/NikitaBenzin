import type { Metadata } from "next"
import { Roboto, ZCOOL_QingKe_HuangYou } from "next/font/google"
import "./globals.css"

const roboto = Roboto({
  variable: "--font-roboto",
})

const zcool = ZCOOL_QingKe_HuangYou({
  weight: "400",
  variable: "--font-zcool",
})

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Nikita Benzin Portfolio website.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${zcool.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
