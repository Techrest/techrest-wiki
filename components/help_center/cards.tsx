import Image from "next/image";

import penIcon from "../../assets/icons/pen.svg";
import userHeart from "../../assets/icons/userHeart.svg";

import React from "react";

export default function Cards() {
  const data = [
    {
      id: 1,
      title: "Abertura de solicitação",
      desc: "Abra uma solicitação e conte conosco para resolver qualquer necessidade ou dúvida. Estamos aqui para ajudar e garantir que você tenha a melhor experiência possível.",
      icon: {
        name: penIcon,
        alt: "Pen Icon",
      },
      button: {
        text: "Abrir solicitação",
        className: "",
      },
    },
    {
      id: 2,
      title: "Sugestões e feedbacks",
      desc: "Sua opinião é essencial para nós! Deixe suas sugestões e feedbacks para que possamos melhorar continuamente e oferecer a melhor experiência possível.",
      icon: {
        name: userHeart,
        alt: "User Heart Icon",
      },
      button: {
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
            <button
              className={`flex justify-center items-center gap-2 w-full px-4 py-3 bg-white text-black-100 rounded-lg hover:bg-white/80 transition-all duration-200 ${card.button.className}`}
            >
              <Image
                src={card.icon.name}
                alt={card.icon.alt}
                className="w-5 h-5"
              />
              <span className="font-inter font-semibold text-base text-black-100">
                {card.button.text}
              </span>
            </button>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
}
