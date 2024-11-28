import type { Metadata } from "next"
import "./globals.css"

import { Nunito_Sans } from "next/font/google"

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
    <html lang="pt-br">
      <body className={`${nunitoSans.className} antialiased`}>{children}</body>
    </html>
  )
}
