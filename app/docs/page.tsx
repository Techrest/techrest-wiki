import React from "react";
import Header from "../../components/header";
import Button from "@/components/techrest/button";

import { PencilSquareIcon } from "@heroicons/react/16/solid";

interface DocsProps {}

export default function Docs({}: DocsProps) {
  return (
    <>
      <Header />

      <Button
        variant="outline"
        text="Editar publicação"
        icon={true}
        iconSrc={
          <PencilSquareIcon className="w-5 h-5 fill-white group-hover:fill-black-50" />
        }
        iconPosition="left"
      />
    </>
  );
}
