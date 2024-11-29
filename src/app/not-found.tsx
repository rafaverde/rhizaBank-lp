import Image from "next/image"

import lookingForImg from "@/assets/looking-for-flying-sorcers.svg"
import Link from "next/link"

export default function NotFound() {
  return (
    <section className="bg-rhiza-green-500 min-h-screen-content">
      <div className="flex md:flex md:flex-row flex-col lg:justify-between items-center md:items-center lg:m-auto px-4 xl:px-0 py-7 md:py-14 w-full lg:max-w-[1170px]">
        <div className="flex justify-center items-center mb-7 lg:mb-0 w-full lg:w-[50%]">
          <Image
            src={lookingForImg}
            alt="Ilustração de um homem buscando algo com uma luneta apoiando seu pé em barras de um gráfico"
            className="w-[70%]"
          />
        </div>
        <div className="lg:w-[50%]">
          <h2 className="font-bold text-4xl text-white md:text-2xl lg:text-6xl">
            Ops...! Parece que não encontramos o que você está buscando.
          </h2>
          <p className="mt-2 text-white md:text-sm lg:text-xl">
            Algo de errado aconteceu ao navegar e a página que está tentando
            acessar não foi encontrada. Por favor, navegue para a página inicial
            através do link ou entre em contato com{" "}
            <span className="font-bold text-rhiza-blue-900">
              <a href="mailto:adm.rhiza@gmail.com" target="_blank">
                nosso suporte.
              </a>
            </span>
          </p>
          <Link href="/">
            <button className="lg:flex bg-rhiza-blue-900 hover:bg-rhiza-blue-500 mt-8 px-8 py-3 rounded-lg font-bold text-white uppercase transition-colors">
              Voltar ao início
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
