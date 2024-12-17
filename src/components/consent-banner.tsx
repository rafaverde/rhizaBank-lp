import Image from "next/image";
import rhizaIcon from "@/assets/rhiza-bank-icon-green.svg";
import Link from "next/link";

interface ConsentBannerProps {
  gtmId: string;
  facebookPixel: string;
}

export function ConsentBanner() {
  return (
    <aside className="fixed bottom-0 w-full">
      <div className="m-6 flex flex-col justify-start gap-6 rounded-lg bg-rhiza-green-100 p-6 lg:mx-auto lg:max-w-[1170px] lg:flex-row lg:items-center lg:gap-12">
        <Image src={rhizaIcon} alt="" width={80} />

        <p>
          Ao navegar em nosso site, você está concordando com nossa política de{" "}
          <Link
            href="/cookies-policies"
            className="cursor-pointer text-rhiza-green-500 underline hover:text-rhiza-green-900"
          >
            Cookies
          </Link>{" "}
          e{" "}
          <Link
            href="/privacy-policies"
            className="cursor-pointer text-rhiza-green-500 underline hover:text-rhiza-green-900"
          >
            Privacidade
          </Link>
          . Clique em Aceitar para continuar.
        </p>
        <button className="mt-2 inline cursor-pointer rounded-full bg-rhiza-green-900 px-12 py-3 text-lg text-rhiza-green-100 hover:bg-rhiza-green-500 hover:text-rhiza-green-900 lg:w-max">
          Aceitar
        </button>
      </div>
    </aside>
  );
}
