import React from "react";
import { useFeedBack } from "./hook/useFeedback";

export default function Feedback() {
  const { selectOpnion, selectedOpnion, selectSatisfy, selectSatisfyOption } =
    useFeedBack();
  return (
    <React.Fragment>
      <main className="felx flex-col items-center justify-center text-center text-white font-manrope">
        <section className="mb-28">
          <div>
            <h1 className="text-sunset-500 text-4xl font-bold mb-6">
              Sugestões e feedbacks
            </h1>
          </div>
          <div>
            <p className="text-white/50 text-xl font-medium">
              Sua opinião é essencial para nós! Deixe suas sugestões e feedbacks
              para que possamos melhorar continuamente e oferecer a melhor
              experiência possível para você.
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-9 mb-9">
          <form className="flex flex-col text-center items-center justify-center gap-4">
            <div className="flex flex-col gap-9">
              <h1 className="text-xl font-medium">
                O quão satisfeito você está com a interface da nossa plataforma?
              </h1>
              <ul className="flex text-center items-center justify-center gap-4">
                <li
                  onClick={() => selectOpnion(1)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectedOpnion === 1 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  1
                </li>
                <li
                  onClick={() => selectOpnion(2)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectedOpnion === 2 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  2
                </li>
                <li
                  onClick={() => selectOpnion(3)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectedOpnion === 3 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  3
                </li>
                <li
                  onClick={() => selectOpnion(4)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectedOpnion === 4 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  4
                </li>
                <li
                  onClick={() => selectOpnion(5)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectedOpnion === 5 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  5
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-9 mb-9">
              <h1 className="text-xl font-medium">
                O quão satisfeito você está com as funcionalidades da nossa
                plataforma?
              </h1>
              <ul className="flex text-center items-center justify-center gap-4">
                <li
                  onClick={() => selectSatisfyOption(1)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectSatisfy === 1 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  1
                </li>
                <li
                  onClick={() => selectSatisfyOption(2)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectSatisfy === 2 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  2
                </li>
                <li
                  onClick={() => selectSatisfyOption(3)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectSatisfy === 3 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  3
                </li>
                <li
                  onClick={() => selectSatisfyOption(4)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectSatisfy === 4 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  4
                </li>
                <li
                  onClick={() => selectSatisfyOption(5)}
                  className={`px-5 py-2 rounded-md border-2 border-black-300 font-bold text-lg
                    ${
                      selectSatisfy === 5 && "bg-sunset-500"
                    } hover:bg-sunset-500 duration-300 cursor-pointer `}
                >
                  5
                </li>
              </ul>
            </div>
            <h1 className="text-xl font-medium">
              Encontrou algum problema técnico ao usar nosso site ou há algo que
              você acha que poderíamos melhorar?
            </h1>
            <textarea
              className="bg-black-50 text-white/50 text-xl max-w-[1030px] w-full font-medium rounded-md border-2 border-black-300 p-7"
              placeholder="Digite sua mensagem aqui..."
              cols={100}
              rows={10}
            />
            <button
              className="bg-white text-black-200 font-medium text-base font-inter max-w-[1030px] w-full rounded-xl px-2 py-4"
              type="submit"
            >
              Realizar o envio da sua sugestão
            </button>
          </form>
        </section>
      </main>
    </React.Fragment>
  );
}
