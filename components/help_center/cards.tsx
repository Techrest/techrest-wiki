import React from "react";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/16/solid";
import Button from "../techrest/button";

export default function Cards() {
  const data = [
    {
      id: 1,
      title: "Sugestões e feedbacks",
      desc: "Sua opinião é essencial para nós! Deixe suas sugestões e feedbacks para que possamos melhorar continuamente e oferecer a melhor experiência possível.",
      icon: (
        <ChatBubbleBottomCenterTextIcon className="w-5 h-5 fill-black-50" />
      ),
      button: {
        variant: "primary",
        text: "Enviar feedback",
        className:
          "bg-sunset-500 hover:bg-sunset-300 transition-all duration-200",
      },
    },
  ];
  return (
    <section className="flex flex-col gap-4 md:flex-row md:gap-4 text-white w-full md:mt-16 mt-8">
      {data.map((card) => (
        <React.Fragment key={card.id}>
          {/* Cartão */}
          <div className="flex flex-col justify-center items-start gap-4 max-w-[456px] w-full h-full p-6 border border-black-300 rounded-lg bg-black-50">
            {/* Titulo do cartão */}
            <div className="flex flex-col justify-center items-start gap-2 w-full">
              <h1 className="font-manrope font-bold text-xl text-white leading-none">
                {card.title}
              </h1>
              <p className="font-inter font-normal text-base text-white/60 tracking-[-0.04rem] max-w-[19.625rem] w-full leading-normal">
                {card.desc}
              </p>
            </div>
            {/* Botão de ação do cartão */}
            <Button
              variant={card.button.variant}
              text={card.button.text}
              iconPosition="left"
              icon={true}
              iconSrc={card.icon}
              hasText={false}
            />
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}
