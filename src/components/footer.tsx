import Image from "next/image"

import macondoLogo from "@/assets/macondo-ass-sites-branca.svg"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-rhiza-blue-900">
      <div className="flex md:flex-row flex-col justify-center lg:justify-between items-center gap-1 m-auto px-4 lg:px-0 w-full lg:max-w-[1170px] h-20">
        <span className="text-rhiza-green-100 text-xs">
          Rhiza Bank • Todos os direitos reservados © 2024
        </span>
        <Link href="https://www.macondopropaganda.com" target="_blank">
          <Image src={macondoLogo} alt="" />
        </Link>
      </div>
    </footer>
  )
}
