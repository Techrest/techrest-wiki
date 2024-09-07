import React from "react";

export default function Contact() {
  return (
    <React.Fragment>
      <main className="flex flex-col justify-center items-center bg-sunset-500 py-16 px-14 font-manrope font-bold text-xl tracking-normal text-center mt-32 mb-32">
        <section>
          <h1 className="text-4xl text-white">
            Não encontrou a sua dúvida aqui?
          </h1>
        </section>
        <section className="text-xl text-white/80">
          Contate-nos via e-mail em contato@techrest.com.br e nós iremos te
          responder o quanto antes. Em dias mais movimentados, podemos acabar
          demorando mais que o normal para responder.
        </section>
      </main>
    </React.Fragment>
  );
}
