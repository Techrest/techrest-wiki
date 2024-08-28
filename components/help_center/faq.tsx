import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function Faq() {
  return (
    <section className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
      <div>
        <h1 className="font-manrope text-2xl leading-normal text-white font-bold text-left">
          Dúvidas Frequentes
        </h1>
        <p className="font-inter font-normal tracking-[-0.0225rem] leading-normal text-white/50 text-base text-left">
          Antes de realizar uma abertura de chamado no suporte, verifique se a
          sua dúvida está nesta seção.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-b border-black-300">
            <AccordionTrigger className="text-lg hover:no-underline">
              Como posso conectar a minha conta Techrest em outras redes
              sociais?
            </AccordionTrigger>
            <AccordionContent className="text-white/50 font-inter font-normal text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-b border-black-300">
            <AccordionTrigger className="text-lg hover:no-underline">
              Esqueci a minha senha, como faço para acessar a minha conta?
            </AccordionTrigger>
            <AccordionContent className="text-white/50 font-inter font-normal text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-b border-black-300">
            <AccordionTrigger className="text-lg hover:no-underline">
              Como posso alterar o e-mail da minha conta?
            </AccordionTrigger>
            <AccordionContent className="text-white/50 font-inter font-normal text-base">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
