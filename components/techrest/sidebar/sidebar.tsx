"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface SidebarProps {
  topic?: string;
}

export default function Sidebar({ topic = "introducao" }: SidebarProps) {
  return (
    <aside className="fixed top-14 min-w-60 max-w-60 w-full h-screen bg-black-100 border-r border-[#27272A] p-6">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-white font-inter text-base font-medium border-b border-black-300 w-full pb-2">
          Primeiros passos
        </h1>
        <ul className="flex flex-col justify-center items-start gap-3 pl-2">
          <Link href={`/docs`}>
            <li
              className={`hover:text-white/80 text-sm font-inter font-normal cursor-pointer ${
                topic === "introducao" ? "text-sunset-500" : "text-white/50"
              } transition-all duration-200`}
            >
              Introdução
            </li>
          </Link>
          <Link href={`/docs/sobre-nos`}>
            <li
              className={`hover:text-white/80 text-sm font-inter font-normal cursor-pointer ${
                topic === "sobre-nos" ? "text-sunset-500" : "text-white/50"
              } transition-all duration-200`}
            >
              Sobre nós
            </li>
          </Link>
          <Link href={`/docs/equipes`}>
            <li
              className={`hover:text-white/80 text-sm font-inter font-normal cursor-pointer ${
                topic === "equipes" ? "text-sunset-500" : "text-white/50"
              } transition-all duration-200`}
            >
              Equipes
            </li>
          </Link>
          <Link href={`/docs/projetos`}>
            <li
              className={`hover:text-white/80 text-sm font-inter font-normal cursor-pointer ${
                topic === "projetos" ? "text-sunset-500" : "text-white/50"
              } transition-all duration-200`}
            >
              Projetos
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
}
