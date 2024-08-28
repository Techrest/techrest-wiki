interface IntroProps {
  pageTitle?: string;
  descExists?: boolean;
  desc?: string;
}

export default function Intro({
  pageTitle = "Título da página",
  descExists = false,
  desc,
}: IntroProps) {
  return (
    <section>
      <div>
        <h1 className="font-manrope font-bold text-4xl leading-normal">
          {pageTitle}
        </h1>
        {descExists === true ? <p className="">{desc}</p> : null}
      </div>
    </section>
  );
}
