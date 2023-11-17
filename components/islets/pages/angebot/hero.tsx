import Image from "next/image";
import Balancer from "react-wrap-balancer";

export function HeroAngebot() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Angebot
        </h1>

        <p className="z-30 pt-4 text-center text-base xl:text-xl ">
          <Balancer>
            Unser Angebot besteht aus einer großen Anzahl vorgefertigter
            Designs, wie z. B. klassisch, modern, Paneel und WPC. Wir können
            jedes Muster an Ihre Bedürfnisse anpassen. Bei uns entscheiden Sie,
            welches Muster Sie wünschen und aus welchem Material es bestehen
            soll. Wir stellen Ihnen die am häufigsten gewählten Kategorien vor.
          </Balancer>
        </p>
      </div>
    </>
  );
}
