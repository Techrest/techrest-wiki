import { BtnLang, Messages } from "@/messages/buttons";

import buttons from "../messages/data/buttons.json";

const messages: Record<BtnLang, Messages> = {
  buttons: buttons,
};

export const useButtons = () => {
  return {
    messages: messages["buttons"],
  };
};
