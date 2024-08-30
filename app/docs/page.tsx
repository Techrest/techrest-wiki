import React from "react";
import Header from "../../components/header";
import Button from "@/components/techrest/button";

import { PencilSquareIcon } from "@heroicons/react/16/solid";
import Sidebar from "@/components/techrest/sidebar/sidebar";

interface DocsProps {}

export default function Docs({}: DocsProps) {
  return (
    <>
      <Header />

      {/* <Button
        variant="primary"
        text="Editar publicação"
        icon={true}
        iconSrc={
          <PencilSquareIcon className="w-5 h-5 fill-current group-hover:fill-black-50" />
        }
        iconPosition="left"
      /> */}

      <Sidebar />
    </>
  );
}
