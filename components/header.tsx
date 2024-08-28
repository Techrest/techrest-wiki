"use client";

import Image from "next/image";
import React from "react";

import techrestLogo from "../assets/techrest-logo.svg";
import Link from "next/link";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <header className="bg-black-100 w-full min-h-14 h-auto py-2 px-9 flex justify-between items-center">
      <div className="flex justify-center items-center gap-9">
        <Image
          src={techrestLogo}
          alt="Techrest Logo"
          className="h-auto leading-none"
        />
        <nav className="hidden md:inline">
          <ul className="flex justify-center items-center gap-4 leading-none">
            <Link href="/docs">
              <li className="text-white/50 text-sm hover:text-white transition-all duration-200">
                Docs
              </li>
            </Link>
            <Link href="/comunidade">
              <li className="text-white/50 text-sm hover:text-white transition-all duration-200">
                Comunidade
              </li>
            </Link>
            <Link href="/tutoriais">
              <li className="text-white/50 text-sm hover:text-white transition-all duration-200">
                Tutoriais
              </li>
            </Link>
            <Link href="/ajuda">
              <li className="text-white/50 text-sm hover:text-white transition-all duration-200">
                Ajuda
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
