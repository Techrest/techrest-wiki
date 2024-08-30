"use client";

import React, { useEffect, useState } from "react";

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const [topic, setTopic] = useState<string>("");

  const returnToDefaultTopic = () => {
    setTopic("introducao");
  };

  useEffect(() => {
    if (topic === "") {
      returnToDefaultTopic();
    }
  }, [topic]);

  return (
    <aside className="fixed top-14 min-w-60 max-w-60 w-full h-screen bg-black-100 border-r border-[#27272A] p-6">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-white font-inter text-base font-medium">
          Primeiros passos
        </h1>
        <ul className="flex flex-col justify-center items-start gap-3 pl-2">
          <li
            className={`hover:text-white/80 text-sm font-inter font-normal ${
              topic === "introducao" ? "text-sunset-500" : "text-white/50"
            } transition-all duration-200`}
            onClick={() => {
              setTopic("introducao");
            }}
          >
            Introdução
          </li>
          <li
            className={`hover:text-white/80 text-sm font-inter font-normal ${
              topic === "sobre-nos" ? "text-sunset-500" : "text-white/50"
            } transition-all duration-200`}
            onClick={() => {
              setTopic("sobre-nos");
            }}
          >
            Sobre nós
          </li>
          <li
            className={`hover:text-white/80 text-sm font-inter font-normal ${
              topic === "praticas" ? "text-sunset-500" : "text-white/50"
            } transition-all duration-200`}
            onClick={() => {
              setTopic("praticas");
            }}
          >
            Práticas
          </li>
          <li
            className={`hover:text-white/80 text-sm font-inter font-normal ${
              topic === "equipes" ? "text-sunset-500" : "text-white/50"
            } transition-all duration-200`}
            onClick={() => {
              setTopic("equipes");
            }}
          >
            Equipes
          </li>
          <li
            className={`hover:text-white/80 text-sm font-inter font-normal ${
              topic === "projetos" ? "text-sunset-500" : "text-white/50"
            } transition-all duration-200`}
            onClick={() => {
              setTopic("projetos");
            }}
          >
            Projetos
          </li>
        </ul>
      </div>
    </aside>
  );
}
