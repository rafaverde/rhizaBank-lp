import Image from "next/image";

import { ContentBoxIcon } from "../content-box-icon";

import barberShopImg from "@/assets/barber-shop.jpg";
import iconOpenAccount from "@/assets/icon-abertura-contas.svg";
import iconPhoneRecharge from "@/assets/icon-recarga-celular.svg";
import iconInvoiceSubmit from "@/assets/icon-emissao-boleto.svg";
import iconPayBills from "@/assets/icon-pagamento-contas.svg";
import iconAtm from "@/assets/icon-saque-24-horas.svg";
import iconPix from "@/assets/icon-pix.svg";
import iconConsortium from "@/assets/icon-consorcios.svg";

export function BenefitsSection() {
  return (
    <section id="beneficios" className="scroll-mt-22">
      <div className="flex w-full flex-col items-center gap-5 px-4 py-7 md:flex md:flex-row md:items-start md:py-14 lg:m-auto lg:max-w-[1170px] lg:items-center lg:justify-between xl:px-0">
        <div className="md:w-full lg:w-[40%]">
          <Image
            src={barberShopImg}
            alt="Barbeiro homem latino em frente a uma barbearia enconstado na porta com uma tesoura na mão e sorrindo"
            width={440}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-[60%]">
          <h2 className="text-4xl font-bold text-rhiza-green-900 lg:text-6xl">
            Seja Rhiza Bank
          </h2>
          <p className="text-slate-500 md:text-sm lg:text-lg">
            Uma nova experiência financeira mais moderna e segura.{" "}
            <strong>
              O primeiro banco digital com economia compartilhada para todos.
            </strong>
          </p>
          <div className="row-auto mt-5 grid grid-cols-3 gap-10 md:grid-cols-4">
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
            <span className="flex items-center justify-center text-center text-sm md:text-xs lg:text-lg">
              E muito <br />
              mais...
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
