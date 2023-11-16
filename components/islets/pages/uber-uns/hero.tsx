import Image from "next/image";

export function HeroUberUns() {
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
        <h1 className="flex flex-col">
          <span className="z-30 text-center text-6xl font-bold transition-colors duration-500  group-hover:text-primary">
            FireMetal
          </span>
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Über uns
        </h2>
        <p className="z-30 pt-4 text-center text-base xl:px-96 xl:text-xl">
          Wir bieten Ihnen Dienstleistungen von höchster Qualität im Bereich der
          Herstellung und Montage von Zäunen. Wir spezialisieren uns auf :
          Zäune,,Doppelstabmatten, Geländer , Carports , Fenstergitter und
          andere Metallkonstruktionen. Wir bieten Aufmaß , Demontage alter
          Zäune,Vorbereitung des Geländes, Transport und Montage an.
        </p>
      </div>
    </>
  );
}
