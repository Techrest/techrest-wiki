interface IntroProps {
  pageTitle?: string;
  descActivated?: boolean;
  desc?: string;
  titleStyle?: string;
  descStyle?: string;
}

export default function Intro({
  pageTitle = "Título da página",
  descActivated = false,
  desc,
  titleStyle,
  descStyle,
}: IntroProps) {
  return (
    <section>
      <div>
        <h1
          className={`font-manrope font-bold text-4xl leading-normal ${titleStyle}`}
        >
          {pageTitle}
        </h1>
        {descActivated === true ? (
          <p
            className={`font-inter text-base leading-normal font-normal text-white/50 ${descStyle}`}
          >
            {desc}
          </p>
        ) : null}
      </div>
    </section>
  );
}
