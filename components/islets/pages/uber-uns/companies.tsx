import NextImage from "next/image";
import Link from "next/link";
import { Image } from "@nextui-org/react";

export function CompaniesUberUns() {
  return (
    <>
      <section className="z-30 mt-8 flex flex-col items-center justify-center">
        <h2 className="z-30 text-center text-3xl font-bold text-primary transition-colors duration-500 group-hover:text-primary sm:text-4xl">
          Współpracujemy z:
        </h2>
        <p className="z-30 pt-4 text-center xl:px-96 xl:text-xl">
          Cenimy sobie współpracę z najlepszymi markami dostępnymi na rynku.
          Wykorzystujemy tylko sprawdzone i wysokiej jakości produkty. W naszych
          płotach i montażach korzystamy z produktów takich firm jak:
        </p>
        <div className="flex flex-col items-center gap-12 pt-4 sm:flex-row">
          <Link href="https://www.sommer.eu/de-at">
            <Image
              as={NextImage}
              src="/img/logo/sommer-logo.png"
              alt="firemetal sommer logo"
              width="150"
              height="150"
              isZoomed
            />
          </Link>
          <Link href="https://www.hoermann.de/">
            <Image
              src="/img/logo/hormann-logo.png"
              alt="firemetal hormann logo"
              width="200"
              height="200"
              isZoomed
            />
          </Link>
          <Link href="https://www.zinq.com/feuerverzinken-pulverbeschichten/">
            <Image
              as={NextImage}
              src="/img/logo/zinq-logo.png"
              alt="firemetal zinq logo"
              width="150"
              height="150"
              isZoomed
            />
          </Link>
        </div>
      </section>
    </>
  );
}