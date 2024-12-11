import advantagesImg from "@/assets/discount-club-image.svg"
import Image from "next/image"
import Link from "next/link"

export function AdvantagesSection() {
  return (
    <section className="bg-rhiza-green-500">
      <div className="flex md:flex md:flex-row flex-col lg:justify-between md:items-end gap-5 lg:m-auto px-4 xl:px-0 py-7 md:pt-14 md:pb-0 w-full lg:max-w-[1170px]">
        <div className="md:w-max lg:w-full">
          <Image src={advantagesImg} alt="Ilustração" width={387} />
        </div>

        <div className="infos_wrapper">
          <div>
            <h2 className="font-bold text-4xl text-white md:text-2xl lg:text-6xl">
              E tem muito mais benefícios pra quem é cliente Rhiza Bank
            </h2>
            <p className="mt-2 text-white md:text-sm lg:text-xl">
              Cliente Rhiza tem muitas vantagens! Conheça nosso clube de
              desconto e saiba como ter desconto na sua conta de energia.
            </p>
          </div>
          <div className="md:flex gap-7 boxes_wrapper">
            <div className="bg-rhiza-green-900 mt-5 px-8 py-7 rounded-tr-[60px] text-white">
              <h3 className="font-bold text-2xl md:text-xl lg:text-2xl">
                Quer pagar menos na conta de energia?
              </h3>
              <p className="mb-7 md:text-sm lg:text-base">
                Descubra essa parceria que só vai te trazer benefícios.
              </p>
              <Link href="https://bit.ly/rhizabank" target="_blank">
                <button className="lg:flex bg-transparent hover:bg-rhiza-green-500 px-8 py-3 border border-rhiza-green-300 rounded-lg font-bold text-rhiza-green-300 hover:text-rhiza-green-900 uppercase transition-colors">
                  Saiba mais
                </button>
              </Link>
            </div>

            <div className="bg-rhiza-green-900 mt-5 px-8 py-7 rounded-tr-[60px] text-white">
              <h3 className="font-bold text-2xl md:text-xl lg:text-2xl">
                Tem desconto pra todo mundo no nosso clube.
              </h3>
              <p className="mb-7 md:text-sm lg:text-base">
                Clique e conheça uma variedade de parceiros!
              </p>
              <Link
                href="https://clubecerto.com.br/hotsite/?utm_cc=acessodireto&ent=rhizaedutech"
                target="_blank"
              >
                <button className="lg:flex bg-transparent hover:bg-rhiza-green-500 px-8 py-3 border border-rhiza-green-300 rounded-lg font-bold text-rhiza-green-300 hover:text-rhiza-green-900 uppercase transition-colors">
                  Saiba mais
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
