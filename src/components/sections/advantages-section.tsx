import advantagesImg from "@/assets/discount-club-image.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";

export function AdvantagesSection() {
  return (
    <section className="bg-rhiza-green-500">
      <div className="flex w-full flex-col gap-5 px-4 py-7 md:flex md:flex-row md:items-end md:pb-0 md:pt-14 lg:m-auto lg:max-w-[1170px] lg:justify-between xl:px-0">
        <div className="md:w-max lg:w-full">
          <Image src={advantagesImg} alt="Ilustração" width={387} />
        </div>

        <div className="infos_wrapper">
          <div>
            <h2 className="text-4xl font-bold text-white md:text-2xl lg:text-6xl">
              E tem muito mais benefícios pra quem é cliente Rhiza Bank
            </h2>
            <p className="mt-2 text-white md:text-sm lg:text-xl">
              Cliente Rhiza tem muitas vantagens! Conheça nosso clube de
              desconto e saiba como ter desconto na sua conta de energia.
            </p>
          </div>
          <div className="boxes_wrapper gap-7 md:flex">
            <div className="mt-5 rounded-tr-[60px] bg-rhiza-green-900 px-8 py-7 text-white">
              <h3 className="text-2xl font-bold md:text-xl lg:text-2xl">
                Quer pagar menos na conta de energia?
              </h3>
              <p className="mb-7 md:text-sm lg:text-base">
                Descubra essa parceria que só vai te trazer benefícios.
              </p>
              <Link href="https://bit.ly/energiarhizabank" target="_blank">
                <Button
                  gtmEvent="cta_click"
                  gtmLabel="cta_reduzir_conta_energia"
                  className="rounded-lg border border-rhiza-green-300 bg-transparent px-8 py-3 font-bold uppercase text-rhiza-green-300 transition-colors hover:bg-rhiza-green-500 hover:text-rhiza-green-900 lg:flex"
                >
                  Reduzir Conta
                </Button>
              </Link>
            </div>

            <div className="mt-5 rounded-tr-[60px] bg-rhiza-green-900 px-8 py-7 text-white">
              <h3 className="text-2xl font-bold md:text-xl lg:text-2xl">
                Tem desconto pra todo mundo no nosso clube.
              </h3>
              <p className="mb-7 md:text-sm lg:text-base">
                Clique e conheça uma variedade de parceiros!
              </p>
              <Link
                href="https://clubecerto.com.br/hotsite/?utm_cc=acessodireto&ent=rhizaedutech"
                target="_blank"
              >
                <Button
                  gtmEvent="cta_click"
                  gtmLabel="cta_clube_descontos"
                  className="rounded-lg border border-rhiza-green-300 bg-transparent px-8 py-3 font-bold uppercase text-rhiza-green-300 transition-colors hover:bg-rhiza-green-500 hover:text-rhiza-green-900 lg:flex"
                >
                  Ganhar descontos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
