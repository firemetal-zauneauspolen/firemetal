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
          Świadczymy dla Was najwyższej jakości usługi związane z produkcją oraz
          montażem ogrodzeń. Specjalizujemy się w: Płotach, Sztabmatach,
          Balustradach, Carpotach, Kratach okiennych oraz innych konstrukcjach z
          metalu. Zapewniamy pomiary, demontaż starych ogrodzeń, przygotowanie
          terenu, transport oraz montaż.
        </p>
      </div>
    </>
  );
}
