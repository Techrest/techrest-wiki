import GitHubBtn from "@/components/GitHubBtn";
import React from "react";
import Header from "../components/header";

interface CommunityProps {}

export default function Community({}: CommunityProps) {
  return (
    <React.Fragment>
      <Header />

      <GitHubBtn
        texto="Acessar com GitHub"
        title="Clique para acessar a comunidade utilizando o GitHub"
        className="hover:bg-white/80 transition-all duration-200"
      />
    </React.Fragment>
  );
}
