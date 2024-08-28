import GitHubBtn from "@/components/GitHubBtn";
import React from "react";
import Header from "../../components/header";
import locker from "../../assets/icons/locker.svg";
import Image from "next/image";
import git from "../../assets/icons/github.svg";
import gift from "../../assets/icons/gift.svg";
import arrow from "../../assets/icons/arrow.svg";

interface CommunityProps {}

export default function Community({}: CommunityProps) {
  return (
    <React.Fragment>
      <Header />

      <main>
        <section className="mx-28 border-b border-black-300">
          <h1 className="text-[#f2f2f2] text-4xl font-bold mt-8">Comunidade</h1>

          <p className="text-[#ffffff80] text-lg font-normal mt-2">
            Seja bem-vindo(a) à aba de comunidade. Aqui você poderá realizar
            comentários sobre tópicos e temas específicos de dentro da empresa.
          </p>

          <div className="flex gap-2 mt-6">
            <Image src={locker} alt="Locker icon" className="w-6 h-6" />
            <p className="text-[#f2f2f2] text-lg font-normal mb-7">
              O acesso a comunidade é restrito somente aos participantes do
              projeto Techrest.
            </p>
          </div>
        </section>

        <section className="mx-28 mt-6">
          <h1 className="text-[#f2f2f2] text-4xl font-bold">
            Acessar comunidade
          </h1>
          <p className="text-[#ffffff80] text-lg font-normal mt-2">
            Se você já possui um convite de acesso, as portas da comunidade
            estão abertas para você!
          </p>

          <div className="border border-black-300 rounded-lg bg-[#141414] px-5 py-3 mt-2">
            <p className="text-[#f2f2f2] text-lg font-normal">
              Para acessar a comunidade você deverá se autenticar utilizando o
              GitHub.
            </p>
          </div>
        </section>

        <section className="flex gap-4 mx-28 mt-10 border-b border-black-300">
          <button className="flex gap-2 justify-center items-center bg-[#f2f2f2] px-4 py-3 w-80 h-11 rounded-lg">
            <Image src={git} alt="GitHub icon" className="w-6 h-6" />
            <p className="text-[#191919] text-base font-medium leading-none">
              Acessar utilizando GitHub
            </p>
          </button>

          <button className="flex justify-center items-center border border-black-300 rounded-lg px-4 py-3 w-80 h-11 mb-10">
            <p className="text-[#f2f2f2] text-base font-medium leading-none">
              Acessar utilizando credêncial
            </p>
          </button>
        </section>

        <section className="mx-28 mt-40">
          <h1 className="text-[#f2f2f2] text-4xl font-bold">Outros tópicos</h1>
          <div className="mt-4 flex justify-center items-center flex-row gap-4">
            <div className="border border-black-300 rounded-lg bg-black-50 flex flex-col items-start w-96 h-44">
              <h1 className="text-white text-2xl font-bold">
                Deseja acessar a comunidade?
              </h1>
              <p className="text-[#f2f2f299] text-base font-normal">
                Para receber um convite, você deverá clicar no botão abaixo e
                preencher o formulário de inscrição.
              </p>
              <button className="flex gap-2 justify-center items-center bg-[#f2f2f2] rounded-lg px-4 py-3 w-80 h-11 mt-6">
                <Image src={gift} alt="icone de presente" className="w-6 h-6" />
                <p className="text-[#191919] text-base font-medium">
                  Convite de acesso
                </p>
              </button>
            </div>

            <div className="border border-black-300 rounded-lg bg-black-50 flex flex-col items-start w-96 h-44">
              <h1 className="text-white text-2xl font-bold">
                Não conhece a comunidade?
              </h1>
              <p className="text-[#f2f2f299] text-base font-normal">
                Nós podemos te apresentar de forma rápida como a comunidade
                Techrest funciona.
              </p>
              <button className="flex gap-2 justify-center items-center bg-[#f2f2f2] rounded-lg px-4 py-3 w-80 h-11 mt-6">
                <p className="text-[#191919] text-base font-medium">
                  Conhecer a comunidade
                </p>
              </button>
            </div>

            <div className="border border-black-300 rounded-lg bg-black-50 flex flex-col items-start px-6 py-4 w-96 h-44">
              <h1 className="text-sunset-500 text-2xl font-bold">
                Quer se juntar a equipe?
              </h1>
              <p className="text-[#f2f2f299] text-base font-normal">
                Deseja contribuir com o projeto Techrest sendo um membro de
                nossa equipe?
              </p>
              <button className="flex gap-2 justify-center items-center bg-sunset-500 rounded-lg px-4 py-3 w-80 h-11 mt-6">
                <p className="text-[#f2f2f2] text-base font-medium">
                  Vagas disponíveis
                </p>
                <Image src={arrow} alt="Seta" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
