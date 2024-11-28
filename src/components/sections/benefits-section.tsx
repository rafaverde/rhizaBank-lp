import Image from "next/image"

import { ContentBoxIcon } from "../content-box-icon"

import barberShopImg from "@/assets/barber-shop.jpg"
import iconOpenAccount from "@/assets/icon-abertura-contas.svg"
import iconPhoneRecharge from "@/assets/icon-recarga-celular.svg"
import iconInvoiceSubmit from "@/assets/icon-emissao-boleto.svg"
import iconPayBills from "@/assets/icon-pagamento-contas.svg"
import iconAtm from "@/assets/icon-saque-24-horas.svg"
import iconPix from "@/assets/icon-pix.svg"
import iconConsortium from "@/assets/icon-consorcios.svg"

export function BenefitsSection() {
  return (
    <section id="beneficios">
      <div className="flex md:flex md:flex-row flex-col lg:justify-between items-center md:items-start lg:items-center gap-5 lg:m-auto px-4 xl:px-0 py-7 md:py-14 w-full lg:max-w-[1170px]">
        <div className="md:w-full lg:w-[40%]">
          <Image
            src={barberShopImg}
            alt="Barbeiro homem latino em frente a uma barbearia enconstado na porta com uma tesoura na mão e sorrindo"
            width={440}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-[60%]">
          <h2 className="font-bold text-4xl text-rhiza-green-900 lg:text-6xl">
            Seja Rhiza Bank
          </h2>
          <p className="text-slate-500 md:text-sm lg:text-lg">
            Uma nova experiência financeira mais moderna e segura.{" "}
            <strong>
              O primeiro banco digital com economia compartilhada para todos.
            </strong>
          </p>
          <div className="gap-10 grid grid-cols-3 md:grid-cols-4 mt-5 row-auto">
            <ContentBoxIcon
              src={iconOpenAccount}
              alt="Ícone representando abertura de uma conta"
              title="Abertura de contas"
            />
            <ContentBoxIcon
              src={iconPhoneRecharge}
              alt="Ícone representando recarga de celular"
              title="Recarga de Celular"
            />
            <ContentBoxIcon
              src={iconInvoiceSubmit}
              alt="Ícone representando emissão de boletos"
              title="Emissão de boletos"
            />
            <ContentBoxIcon
              src={iconPayBills}
              alt="Ícone representando pagamento de contas"
              title="Pagamento de contas"
            />
            <ContentBoxIcon
              src={iconAtm}
              alt="Ícone representando saque 24h"
              title="Saque 24h"
            />
            <ContentBoxIcon
              src={iconPix}
              alt="Ícone representando Pix"
              title="Pix"
            />
            <ContentBoxIcon
              src={iconConsortium}
              alt="Ícone representando Consórcios"
              title="Consórcios"
            />
            <span className="flex justify-center items-center text-center text-sm md:text-xs lg:text-lg">
              E muito <br />
              mais...
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
