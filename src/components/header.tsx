import rhizaLogo from "@/assets/rhiza-bank-logo.svg"
import Image from "next/image"
import { MenuItem } from "./menu-item"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center bg-rhiza-green-100 w-full h-20">
      <div className="flex justify-between lg:m-auto px-4 xl:p-0 w-full max-w-[1170px]">
        <Link href="/">
          <Image src={rhizaLogo} alt="Rhiza Bank Logo" width={130} />
        </Link>

        <nav className="lg:flex flex-1 items-center hidden ml-20">
          <ul className="flex items-center gap-7">
            <MenuItem label="Benefícios" to="#beneficios" />
            <MenuItem
              label="Clube de Descontos"
              to="https://clubecerto.com.br/hotsite/?utm_cc=acessodireto&ent=rhizaedutech"
              target="_blank"
            />
            <MenuItem
              label="Reduza sua conta de energia"
              to="https://bit.ly/rhizabank"
              target="_blank"
            />
          </ul>
        </nav>

        <Link
          href="https://onelink.to/tj6ef8"
          target="_blank"
          className="lg:hidden"
        >
          <button className="bg-rhiza-green-500 hover:bg-rhiza-blue-500 px-8 py-3 rounded-lg font-bold text-rhiza-green-100 uppercase transition-colors">
            Baixar App
          </button>
        </Link>

        <Link
          href="https://rhiza.acessocontadigital.com.br/login"
          target="_blank"
          className="lg:block hidden"
        >
          <button className="lg:flex bg-rhiza-green-500 hover:bg-rhiza-blue-500 px-8 py-3 rounded-lg font-bold text-rhiza-green-100 uppercase transition-colors">
            Fazer login
          </button>
        </Link>
      </div>
    </header>
  )
}
