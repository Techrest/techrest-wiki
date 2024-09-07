"use client";

import React, { useState } from "react";
import Header from "@/components/header";

import Faq from "@/components/help_center/faq";
import Intro from "@/components/intro";
import Feedback from "@/components/help_center/feedback/feedback";
import Contact from "@/components/help_center/contatc";

/**
 * Renders the help page.
 *
 * @returns The rendered Ajuda component.
 */
export default function Ajuda() {
  const helpDesc = `Se você tem uma pergunta, existe uma grande chance de ela estar respondida abaixo. 
  Dê uma olhada e se mesmo assim precisar de ajuda, entre em contato conosco no final da página.`;

  return (
    <React.Fragment>
      <Header />
      <div className="bg-white w-full h-96"></div>
      {/* Seção principal da página */}
      <main className="max-w-[1440px] mx-auto flex flex-col m-8 gap-10 px-4 justify-center items-center text-center">
        {/* Seção de introdução do tema abordado na página */}
        <Intro
          pageTitle="Perguntas Frequentes"
          descActivated={true}
          desc={helpDesc}
        />
        {/* Seção de dúvidas frequentes */}
        <Faq />
        <Faq />
        <Faq />
        {/* Seção de contato para duvidas para o email */}
        <Contact />
        {/*Seção de feedback e sujestão */}
        <Feedback />
      </main>
    </React.Fragment>
  );
}
