"use client";

import React, { useState } from "react";
import Header from "../components/header";
import arrow_close from "../assets/arrow-close.svg";
import arrow_open from "../assets/arrow-open.svg";
import buttonExclamation from "../assets/buttonExclamation.svg";
import buttonNote from "../assets/buttonNote.svg";
import Image from "next/image";

interface AjudaProps {}

export default function Ajuda({}: AjudaProps) {
  const [openSocialHelp, setOpenSocialHelp] = useState(true);
  const [openPasswordlHelp, setOpenPasswordlHelp] = useState(true);
  const [openEmailHelp, setOpenEmailHelp] = useState(true);

  return (
    <>
      <Header />
      <main className="flex flex-col m-16 text-white gap-10 ">
        <section className="flex flex-col gap-5 sm:m-1">
          <h1 className=" text-4xl">Ajuda</h1>
          <p className="text-white/50 text-start text-lg">
            Aqui você encontrará respostas rápidas e soluções eficazes para as
            suas dúvidas e problemas.
            <br /> Nós oferecemos a assistência necessária para garantir que
            você tenha a melhor experiência possível com a nossa plataforma
          </p>
        </section>
        <section className="flex flex-col gap-10">
          <h1 className="text-xl">Dúvidas frequentes</h1>
          <section className="max-w-5xl">
            <div className="flex justify-between">
              <h2 className="text-xl">
                Como posso conectar minha conta Techrest com outras redes
                sociais?
              </h2>
              <Image
                src={openSocialHelp == true ? arrow_open : arrow_close}
                alt="Flecha para abrir os detalhes"
                onClick={() => setOpenSocialHelp(!openSocialHelp)}
              />
            </div>
            <div>
              {openSocialHelp == false && (
                <p className="text-white/50 text-start text-sm w-3/4 max-w-4xl min-w-80 pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              )}
              <hr className="bg-white/50 w- h-[0.1rem] mt-5" />
            </div>
          </section>
          <section className="max-w-5xl">
            <div className="flex justify-between ">
              <h2 className="text-xl">
                Esqueci minha senha, como faço para acessar minha conta?
              </h2>
              <Image
                src={openPasswordlHelp == true ? arrow_open : arrow_close}
                alt="Flecha para abrir os detalhes"
                onClick={() => setOpenPasswordlHelp(!openPasswordlHelp)}
              />
            </div>
            <div>
              {openPasswordlHelp == false && (
                <p className="text-white/50 text-start text-sm w-3/4 max-w-4xl min-w-80 pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              )}
              <hr className="bg-white/50 w- h-[0.1rem] mt-5" />
            </div>
          </section>
          <section className="max-w-5xl">
            <div className="flex justify-between">
              <h2 className="text-xl">
                Como posso alterar o email da minha conta?
              </h2>
              <Image
                src={openEmailHelp == true ? arrow_open : arrow_close}
                alt="Flecha para abrir os detalhes"
                onClick={() => setOpenEmailHelp(!openEmailHelp)}
              />
            </div>
            <div>
              {openEmailHelp == false && (
                <p className="text-white/50 text-start text-sm w-3/4 max-w-4xl min-w-80 pt-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              )}
              <hr className="bg-white/50 w- h-[0.1rem] mt-5" />
            </div>
          </section>
        </section>
        <section className="flex flex-col text-white m-e gap-5 md:flex-row md:gap-10 md:m-6 ">
          <section className="flex flex-col justify-between gap-5 max-w-80 p-6 border-2 border-black-300 rounded-md bg-black">
            <h1 className="text-xl">Abertura de solicitação</h1>
            <p className="text-white/50">
              Abra uma solicitação e conte conosco para resolver qualquer
              necessidade ou dúvida. Estamos aqui para ajudar e garantir que
              você tenha a melhor experiência possível.
            </p>
            <button className="flex justify-center p-3 bg-white text-black-100 rounded-md">
              <Image
                src={buttonNote}
                alt="Enviar solicitação para resolução de problemas"
              />{" "}
              Abrir solicitação
            </button>
          </section>
          <section className="flex flex-col justify-between gap-5 max-w-80 p-6 border-2 border-black-300 rounded-md bg-black">
            <h1 className="text-xl">Sugestões e feedbacks</h1>
            <p className="text-white/50">
              Sua opinião é essencial para nós! Deixe suas sugestões e feedbacks
              para que possamos melhorar continuamente e oferecer a melhor
              experiência possível.
            </p>
            <button className="flex justify-center p-3 bg-white text-black-100 rounded-md">
              <Image src={buttonExclamation} alt="Enviar o feedback" /> Enviar
              feedback
            </button>
          </section>
        </section>
      </main>
    </>
  );
}
