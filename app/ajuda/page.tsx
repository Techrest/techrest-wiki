import React from "react";
import Header from "../components/header";
import arrow_close from "../assets/arrow-close.svg";
import arrow_open from "../assets/arrow-open.svg";
import Image from "next/image";

interface AjudaProps {}

export default function Ajuda({}: AjudaProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col m-16 text-white gap-10">
        <section className="flex flex-col gap-5">
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
              <Image src={arrow_open} alt="Flecha para abrir os detalhes" />
            </div>
            <div>
              <p className="text-white/50 text-start text-sm w-3/4 max-w-4xl min-w-80 pt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <hr className="bg-white/50 w- h-[0.1rem] mt-5" />
            </div>
          </section>
          <section className="max-w-5xl">
            <div className="flex justify-between ">
              <h2 className="text-xl">
                Esqueci minha senha, como faço para acessar minha conta?
              </h2>
              <Image src={arrow_open} alt="Flecha para abrir os detalhes" />
            </div>
            <div>
              <p className="text-white/50 text-start text-sm w-3/4 max-w-4xl min-w-80 pt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <hr className="bg-white/50 w-auto h-[0.1rem] mt-5" />
            </div>
          </section>
          <section className="max-w-5xl">
            <div className="flex justify-between">
              <h2 className="text-xl">
                Como posso alterar o email da minha conta?
              </h2>
              <Image src={arrow_open} alt="Flecha para abrir os detalhes" />
            </div>
            <div>
              <p className="text-white/50 text-start text-sm w-3/4 max-w-4xl min-w-80 pt-6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <hr className="bg-white/50 w-auto h-[0.1rem] mt-5" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
