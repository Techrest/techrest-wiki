"use client";

import React, { useState } from "react";
import Header from "../components/header";

import Faq from "@/components/help_center/faq";
import Cards from "@/components/help_center/cards";
import Intro from "@/components/help_center/intro";

/**
 * Renders the help page.
 *
 * @returns The rendered Ajuda component.
 */
export default function Ajuda() {
  return (
    <React.Fragment>
      <Header />

      {/* Seção principal da página */}
      <main className="max-w-[1440px] mx-auto flex flex-col m-8 text-white gap-10 px-4">
        {/* Seção de introdução do tema abordado na página */}
        <Intro pageTitle="Central de Ajuda" />

        {/* Seção de dúvidas frequentes */}
        <Faq />

        {/* Seção de cards interativos */}
        <Cards />
      </main>
    </React.Fragment>
  );
}
