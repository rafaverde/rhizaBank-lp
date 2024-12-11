"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import rhizaLogo from "@/assets/rhiza-bank-logo.svg";
import { Menu, X } from "lucide-react";

import { MenuItem } from "./menu-item";

export function Header() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function handleClickMenu() {
    setIsOpen((prevState) => !prevState);
  }

  const handleScroll = (anchorId: string) => {
    const anchorElement = document.getElementById(anchorId);

    if (anchorElement && anchorId !== "/") {
      window.scrollTo({
        top: anchorElement.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }

    if (anchorId === "/") {
      router.push("/");
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 flex h-20 w-full items-center bg-rhiza-green-100">
      <h1 id="top" className="sr-only">
        Rhiza Bank - Um banco que redefine a economia compartilhada.
      </h1>
      <div className="flex w-full max-w-[1170px] items-center justify-between px-4 lg:m-auto xl:p-0">
        <Image
          src={rhizaLogo}
          alt="Rhiza Bank Logo"
          width={130}
          onClick={() => handleScroll(isScrolled ? "top" : "/")}
          className="cursor-pointer"
        />

        <nav
          aria-label="Menu de Navegação"
          id="header_menu"
          className={`${isOpen ? "scale-x translate-x-0" : "translate-x-full scale-x-0"} absolute left-0 top-20 w-full flex-1 items-center transition-transform duration-700 ease-out lg:relative lg:top-0 lg:ml-20 lg:flex lg:translate-x-0`}
        >
          <ul className="z-0 flex flex-col items-center bg-rhiza-green-100 lg:flex-row lg:gap-7 lg:bg-transparent">
            <MenuItem
              label="Benefícios"
              onClick={() => handleScroll("beneficios")}
            ></MenuItem>
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
            <MenuItem
              label="Suporte"
              to="https://bit.ly/rhizabanksuporte"
              target="_blank"
            />
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="https://onelink.to/tj6ef8"
            target="_blank"
            className="lg:hidden"
          >
            <button className="rounded-lg bg-rhiza-green-500 px-3 py-3 text-xs font-bold uppercase text-rhiza-green-100 transition-colors hover:bg-rhiza-blue-500">
              Baixar App
            </button>
          </Link>

          <button
            onClick={handleClickMenu}
            className="text-slate-500 lg:hidden"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        <Link
          href="https://rhiza.acessocontadigital.com.br/login"
          target="_blank"
          className="hidden lg:block"
        >
          <button className="rounded-lg bg-rhiza-green-500 px-8 py-3 font-bold uppercase text-rhiza-green-100 transition-colors hover:bg-rhiza-blue-500 lg:flex">
            Acesse sua conta
          </button>
        </Link>
      </div>
    </header>
  );
}
