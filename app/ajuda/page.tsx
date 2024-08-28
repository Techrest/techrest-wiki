"use client";

import React, { useState } from "react";
import Header from "../components/header";

import Image from "next/image";
import Faq from "@/components/help_center/faq";
import Cards from "@/components/help_center/cards";

/**
 * Renders the help page.
 *
 * @returns The rendered Ajuda component.
 */
export default function Ajuda() {
  const [openSocialHelp, setOpenSocialHelp] = useState(true);
  const [openPasswordlHelp, setOpenPasswordlHelp] = useState(true);
  const [openEmailHelp, setOpenEmailHelp] = useState(true);

  return (
    <React.Fragment>
      <Header />

      {/* Seção principal da página */}
      <main className="max-w-[1440px] mx-auto flex flex-col m-16 text-white gap-10 ">
        {/* Seção de introdução do tema abordado na página */}
        <section>
          <div>
            <h1 className="font-manrope font-bold text-4xl leading-normal">
              Central de Ajuda
            </h1>
          </div>
        </section>

        {/* Seção de dúvidas frequentes */}
        <Faq />

        <Cards />
      </main>
    </React.Fragment>
  );
}
