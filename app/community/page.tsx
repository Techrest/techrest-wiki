import GitHubBtn from "@/components/GitHubBtn";
import React from "react";
import Header from "../components/header";
import locker from "../../assets/icons/locker.svg";
import Image from "next/image";

interface CommunityProps {}

export default function Community({}: CommunityProps) {
  return (
    <React.Fragment>
      <Header />
      <Image src={locker} alt="Locker icon" className="w-56" />
    </React.Fragment>
  );
}
