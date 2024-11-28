import rhizaLogo from "@/assets/rhiza-bank-logo.svg"
import Image from "next/image"
import { MenuItem } from "./menu-item"
import Link from "next/link"

export function Header() {
  return (
    <header className="flex items-center bg-rhiza-green-100 w-full h-20">
      <div className="flex lg:m-auto px-4 xl:p-0 w-full max-w-[360] lg:max-w-[1170]">
        <Image src={rhizaLogo} alt="Rhiza Bank Logo" width={130} />
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
          href="https://rhiza.acessocontadigital.com.br/login"
          target="_blank"
        >
          <button className="lg:flex hidden bg-rhiza-green-500 hover:bg-rhiza-blue-500 px-8 py-3 rounded-lg font-bold text-rhiza-green-100 uppercase transition-colors">
            Fazer login
          </button>
        </Link>
      </div>
    </header>
  )
}
