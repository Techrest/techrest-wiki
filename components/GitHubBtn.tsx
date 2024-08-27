import Image from "next/image";
import React from "react";

import github from "../assets/icons/github.svg";

interface GitHubBtnProps {
  title?: string;
  texto?: string;
  className?: string;
}

export default function GitHubBtn({ title, texto, className }: GitHubBtnProps) {
  return (
    <button
      title={title}
      type="button"
      className={`flex justify-center items-center gap-1 bg-white px-8 py-2 rounded-lg ${className}`}
    >
      <Image src={github} alt="GitHub Icon" />
      <span className="font-semibold text-base leading-none">{texto}</span>
    </button>
  );
}
