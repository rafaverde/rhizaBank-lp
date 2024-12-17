"use client";

import Image from "next/image";
import rhizaIcon from "@/assets/rhiza-bank-icon-green.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoogleTagManager } from "@next/third-parties/google";

export function ConsentBanner() {
  const [isConsent, setIsConsent] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("@rhizabank:cookies-consent");

    if (consent) {
      setIsConsent(true);
      return;
    }

    setIsVisible(true);
  }, []);

  function handleCookiesConsent() {
    localStorage.setItem("@rhizabank:cookies-consent", "true");

    setIsConsent(true);
    setIsVisible(false);
  }
  return (
    <>
      {isConsent && <GoogleTagManager gtmId="GTM-KWXC54QN" />}

      <aside
        className={`fixed bottom-0 w-full ${isVisible ? "translate-y-0" : "translate-y-[100%]"} transition-all duration-500 ease-in-out`}
      >
        <div className="m-6 flex flex-col justify-start gap-6 rounded-lg bg-rhiza-green-100 p-6 lg:mx-auto lg:max-w-[1170px] lg:flex-row lg:items-center lg:justify-between">
          <Image src={rhizaIcon} alt="" width={80} />

          <p>
            Ao navegar em nosso site, você está concordando com nossa política
            de{" "}
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
              Privacidade.
            </Link>
          </p>
          <button
            className="mt-2 inline cursor-pointer rounded-full bg-rhiza-green-900 px-12 py-3 text-lg text-rhiza-green-100 hover:bg-rhiza-green-500 hover:text-rhiza-green-900 lg:w-max"
            onClick={handleCookiesConsent}
          >
            Aceitar
          </button>
        </div>
      </aside>
    </>
  );
}
