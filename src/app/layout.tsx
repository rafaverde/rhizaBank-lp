import type { Metadata } from "next"

import { Nunito_Sans } from "next/font/google"

import { Header } from "@/components/header"
import "./globals.css"
import { Footer } from "@/components/footer"

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Rhiza Bank - Uma nova experiência financeira.",
  description:
    "Uma nova experiência financeira moderna e segura, um banco digital com economia compartilhada para todos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={`${nunitoSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
