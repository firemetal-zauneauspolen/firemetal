import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function MetamorphoseHome() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Wir verändern Ihre Umgebung zum Besseren
        </h2>

        <p className="z-30 pb-8 pt-4 text-center text-base xl:px-96 xl:text-xl">
          <Balancer>
            In Metamorphosen zeigen wir Veränderungen vor und nach unseren
            Leistungen. Dieser faszinierende Transformationsprozess verwandelt
            vernachlässigte Zäune in wunderschöne und moderne Bauwerke. Sehen
            Sie, wie wir als Firemetal Räume verändern.
          </Balancer>
        </p>
        <Link href="/metamorphose">
          <div className="flex flex-col items-center">
            <div className="gap-4 space-y-4 lg:flex lg:space-y-0">
              <div className="relative">
                <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-start lg:p-2 lg:text-2xl">
                  <span className="text-ring">#</span>Vor
                </p>
                <div className="relative">
                  <Image
                    src={"/img/metamorphose/home-vor-metamorphose.webp"}
                    quality={25}
                    width={500}
                    height={100}
                    alt="metamorphose vor zaune aus polen"
                    className="rounded-xl transition-all duration-500 hover:rounded-none"
                  />
                </div>
              </div>
              <div className="relative">
                <p className="flex justify-center text-lg font-bold sm:text-xl lg:justify-end lg:p-2 lg:text-2xl">
                  <span className="text-ring">#</span>Nach
                </p>
                <div className="relative">
                  <Image
                    src={"/img/metamorphose/home-nach-metamorphose.webp"}
                    quality={25}
                    width={500}
                    height={100}
                    alt="metamorphose nach gartenzaune aus polen"
                    className="rounded-xl pb-8 transition-all duration-500 hover:rounded-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/metamorphose"}>
          <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
            Prüfen Sie Metamorphosen
            <ChevronRightIcon className="text-base sm:text-lg" />
          </Button>
        </Link>
      </section>
    </>
  );
}
