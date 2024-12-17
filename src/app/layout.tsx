import type { Metadata } from "next";

// import { GoogleTagManager } from "@next/third-parties/google";
import { Nunito_Sans } from "next/font/google";

import { Header } from "@/components/header";
import "./globals.css";
import { Footer } from "@/components/footer";
import { ConsentBanner } from "@/components/consent-banner";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Rhiza Bank - Uma nova experiência financeira.",
    default: "Rhiza Bank - Uma nova experiência financeira.",
  },
  description:
    "Uma nova experiência financeira moderna e segura, um banco digital com economia compartilhada para todos.",
  keywords: [
    "Banco digital",
    "Economia Compartilhada",
    "Economia",
    "Desconto em Conta de Energia",
    "Clube de Descontos",
  ],
  authors: [
    { name: "Macondo Propaganda", url: "https://www.macondopropaganda.com" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      {/* <GoogleTagManager gtmId="GTM-KWXC54QN" /> */}

      <body className={`${nunitoSans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <ConsentBanner />
      </body>
    </html>
  );
}
