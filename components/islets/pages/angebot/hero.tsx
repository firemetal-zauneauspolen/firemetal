import Image from "next/image";
import Balancer from "react-wrap-balancer";

export function HeroAngebot() {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Angebot
        </h1>

        <p className="z-30 pt-4 text-center text-base xl:px-96 xl:text-xl">
          <Balancer>
            Jesteśmy w stanie zaoferować naprawdę sporo. Nasza oferta składa się
            z dużej ilości gotowych wzorów takch jak: klasyczne, nowoczesne czy
            panelowe i wpc. Każdy wzór możemy dostosowac do Waszych potrzeb. W
            naszej firme to Wy decydujecie jaki chcecie mieć wzór i z jakiego
            materiału powinien być on wykonany. Przedstawaimy Wam najczęściej
            wybierane kategorie.
          </Balancer>
        </p>
      </div>
    </>
  );
}
