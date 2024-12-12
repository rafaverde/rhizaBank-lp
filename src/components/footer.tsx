"use client";

import Image from "next/image";

import rhizaLogo from "@/assets/rhiza-bank-logo.svg";
import macondoLogo from "@/assets/macondo-ass-sites-branca.svg";
import Link from "next/link";
import {
  Envelope,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer>
      <div>
        <div className="m-auto grid gap-8 px-4 py-16 sm:grid-rows-3 md:flex-row lg:max-w-[1170px] lg:grid-cols-3 lg:grid-rows-none lg:justify-between">
          <div>
            <Image src={rhizaLogo} width={260} alt="" />
            <p className="mt-8 text-slate-500">
              CNPJ 55.899.477/0001-42 Rua Cosme Ferreira Marques, 169 - 1º andar
              59200-000 - Centro - Santa Cruz/RN
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-rhiza-blue-900">
              Siga a Rhiza
            </h3>
            <div className="mt-5 flex gap-6">
              <Link
                className="text-rhiza-green-500 hover:text-rhiza-blue-500"
                href="https://www.instagram.com/rhizabankbr"
                target="_blank"
              >
                <InstagramLogo size={34} />
              </Link>

              <Link
                className="text-rhiza-green-500 hover:text-rhiza-blue-500"
                href="https://www.facebook.com/rhizabankbr"
                target="_blank"
              >
                <FacebookLogo size={34} />
              </Link>

              <Link
                className="text-rhiza-green-500 hover:text-rhiza-blue-500"
                href="http://www.linkedin.com/company/rhizabankbr"
                target="_blank"
              >
                <LinkedinLogo size={34} />
              </Link>

              <Link
                className="text-rhiza-green-500 hover:text-rhiza-blue-500"
                href="https://youtube.com/@rhizabankbr"
                target="_blank"
              >
                <YoutubeLogo size={34} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-rhiza-blue-900">
              Entre em contato
            </h3>

            <Link
              href="mailto:atendimento@rhizabank.com.br"
              target="_blank"
              className="mt-5 flex items-center gap-2 hover:text-rhiza-green-500"
            >
              <Envelope size={24} className="text-rhiza-green-500" />
              atendimento@rhizabank.com.br
            </Link>

            <Link
              href="https://bit.ly/rhizabanksuporte"
              target="_blank"
              className="mt-5 flex items-center gap-2 hover:text-rhiza-green-500"
            >
              <WhatsappLogo size={24} className="text-rhiza-green-500" />
              Suporte WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-rhiza-blue-900">
        <div className="m-auto flex h-20 w-full flex-col items-center justify-center gap-1 px-4 md:flex-row lg:max-w-[1170px] lg:justify-between lg:px-0">
          <span className="text-xs text-rhiza-green-100">
            Rhiza Bank • Todos os direitos reservados © 2024
          </span>
          <Link href="https://www.macondopropaganda.com" target="_blank">
            <Image src={macondoLogo} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
