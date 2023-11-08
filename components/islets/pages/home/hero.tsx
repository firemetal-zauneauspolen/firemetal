import Image from "next/image";
import Balancer from "react-wrap-balancer";

export function HeroHome() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={"/img/logo/firemetal-logo.webp"}
          alt={"firemetal metalbau metalzaune zaune logo"}
          width={100}
          height={100}
          className="z-30"
        />
        <div className="flex flex-col">
          <span className="z-30 text-center text-6xl font-bold transition-colors duration-500  group-hover:text-primary">
            FireMetal
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Professionelle Zäune aus Polen
        </h1>

        <p className="z-30 pt-4 text-center text-base xl:px-96 xl:text-xl">
          <Balancer>
            <strong>Wir sind Firemetal</strong> - Ihre vertrauenswürdige Quelle
            für hochwertige <strong>Metallzäune</strong>. Unsere Leidenschaft
            für das Design von Zäunen geht Hand in Hand mit{" "}
            <strong>attraktiven Preisen</strong>, die wir aufgrund unserer
            Herkunft aus Polen bieten. Entdecken Sie unser Angebot an{" "}
            <strong>
              Gartenzaun Metall, Metallzäune, Zäune, Doppelstabmatten, Geländer,
              Carports, Gitter, Fenstergitter und viele andere
              Metallkonstruktionen.
            </strong>
          </Balancer>
        </p>
      </div>
    </>
  );
}
