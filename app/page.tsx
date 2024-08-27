import React from "react";
import Header from "./components/header";

export default function Home() {
  return (
    <React.Fragment>
      <Header />

      <main>
        <section>
          <h1>Introdução</h1>
          <p>
            Seja bem-vindo à página Wiki da Techrest. Aqui você encontrará todas
            as informações relacionadas ao nosso projeto.
          </p>
        </section>
      </main>
    </React.Fragment>
  );
}
