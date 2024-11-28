import Image from "next/image"

import heroImage from "@/assets/hero-girl.png"
import btnAppleStore from "@/assets/btn-apple-store.svg"
import btnGooglePlay from "@/assets/btn-google-play.svg"
import Link from "next/link"

export function Hero() {
  return (
    <section className="bg-hero-image bg-cover bg-no-repeat bg-center w-full lg:h-[600]">
      <div className="flex md:flex md:flex-row flex-col-reverse lg:justify-between items-center md:items-center lg:m-auto px-4 xl:px-0 py-7 md:py-14 w-full lg:max-w-[1170px]">
        <div
          id="hero-infos"
          className="flex flex-col gap-7 mb-4 md:w-[50%] text-white"
        >
          <div className="flex flex-col">
            <h2 className="mb-3 font-black text-4xl lg:text-5xl">
              Chegou uma nova forma de transformar a sua economia.
            </h2>
            <p className="lg:text-lg">
              Baixe agora o app e abra a sua conta no banco que está mudando a
              forma de como economizar.
            </p>
          </div>
          <div className="flex gap-5">
            <Link href="https://onelink.to/tj6ef8" target="_blank">
              <Image
                src={btnAppleStore}
                alt="Botão para clicar e baixar o app Rhiza Bank na Apple Store"
              />
            </Link>
            <Link href="https://onelink.to/tj6ef8" target="_blank">
              <Image
                src={btnGooglePlay}
                alt="Botão para clicar e baixar o app Rhiza Bank na Google Play Store"
              />
            </Link>
          </div>
        </div>
        <div id="hero-image">
          <Image
            src={heroImage}
            alt="Mulher sentada com celular na mão olhando para cima visualizando seu futuro como cliente do novo Rhiza Bank."
            width={530}
          />
        </div>
      </div>
    </section>
  )
}
