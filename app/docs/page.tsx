import React from "react";
import Header from "../../components/header";
import Button from "@/components/techrest/button";

import giftIcon from "../../assets/icons/gift.svg";

interface DocsProps {}

export default function Docs({}: DocsProps) {
  return (
    <>
      <Header />

      <Button
        variant="primary"
        text="Editar publicação"
        icon={true}
        iconSrc={giftIcon}
        iconPosition="left"
      />
    </>
  );
}
