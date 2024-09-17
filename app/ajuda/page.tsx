"use client";

import React from "react";
import Image from "next/image";

import Header from "@/components/header";
import HelpLogo from "@/assets/help-logo.svg";
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
      <figure className="bg-white w-full max-h-96">
        <Image src={HelpLogo} alt="Logo da página de ajuda" />
      </figure>
      {/* Seção principal da página */}
      <main className="max-w-[1440px] mx-auto flex flex-col m-8 gap-10 px-4 justify-center items-center text-center">
        {/* Seção de introdução do tema abordado na página */}
        <Intro
          pageTitle="Perguntas Frequentes"
          descActivated={true}
          desc={helpDesc}
          titleStyle="text-sunset-500 text-center"
          descStyle="text-lg text-center"
        />
        {/* Seção de dúvidas frequentes */}
        <Faq titleContent="Duvidas frquentes" descExist={false} />
        <Faq titleContent="Perguntas sobre a comunidade" />
        <Faq titleContent="Perguntas sobre colaboração" />
        {/* Seção de contato para duvidas para o email */}
        <Contact />
        {/*Seção de feedback e sujestão */}
        <Feedback />
      </main>
    </React.Fragment>
  );
}
