import React from "react";
import Header from "../../../components/header";

import Sidebar from "@/components/techrest/sidebar/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import Button from "@/components/techrest/button";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { useButtons } from "@/hooks/useButtons";

interface DocsProps {}

export default function Docs({}: DocsProps) {
  const { messages } = useButtons();
  return (
    <>
      <Header />

      <Sidebar topic="sobre-nos" />

      {/* Conteúdo principal que será renderizado */}
      <main className="pl-60 w-full">
        <div className="text-white fill-white p-8 max-w-[1440px]">
          <Breadcrumb className="text-white fill-white">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/docs"
                  className="text-white/50 hover:text-white/80"
                >
                  Documentação
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-white/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">
                  Sobre nós
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex flex-col justify-center items-start gap-2 w-full">
            <h1 className="text-manrope text-4xl font-bold text-white mt-5">
              Sobre nós
            </h1>
            <div className="flex flex-col justify-center items-start gap-4 mt-2">
              <p className="text-white/50 text-base font-inter font-normal w-full">
                Desejamos as boas-vindas à página de documentação geral da
                Techrest. Aqui você encontrará tudo que um profissional precisa
                para atuar no processo de desenvolvimento de software e também
                para boas relações internas com a equipe.
              </p>
              <p className="text-white/70 text-base font-inter font-medium w-full">
                Lembre-se que consultar a documentação da Techrest será algo
                essencial para manter as práticas da empresa em sua função na
                equipe.
              </p>
              <p className="text-white/50 text-base font-inter font-medium w-full">
                Em todas as páginas da nossa wiki você encontrará botões que
                facilitarão a sua navegação pelo site, fique atento com isso.
              </p>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 mt-14">
            <Link href={`/docs`}>
              <Button
                variant="outline"
                hasText={false}
                width="[23rem]"
                icon={true}
                iconPosition="left"
                iconSrc={
                  <ChevronLeftIcon className="w-6 h-6 fill-white hover:fill-black-50" />
                }
              />
            </Link>
            <Link href={`/docs/equipes`}>
              <Button
                variant="primary"
                hasText={true}
                text={messages.button.nextTitle}
                width="[23rem]"
                icon={true}
                iconPosition="right"
                iconSrc={<ChevronRightIcon className="w-6 h-6 fill-black-50" />}
              />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
