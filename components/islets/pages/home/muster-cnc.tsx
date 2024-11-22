import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function MusterHomeCNC() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Muster CNC
        </h2>

        <p className="z-30 pt-4 text-center text-base xl:text-xl">
          <Balancer>
            Entdecken Sie unsere präzise gefertigten CNC Muster und lassen Sie sich von innovativen Ideen für Ihre Zäune und Konstruktionen inspirieren. In unserem CNC-Musterbereich finden Sie eine große Auswahl an Designs, die perfekt auf Ihre Wünsche und Ihren Stil zugeschnitten sind. Ob Sie CNC Zäune oder dekorative Elemente planen – unsere Muster bieten Ihnen die ideale Grundlage für einzigartige Projekte. Finden Sie das passende CNC-Design und realisieren Sie Ihre Vision!
          </Balancer>
        </p>
        <Link href="/muster/cnc">
        <div className="flex flex-col items-center pb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative rounded-xl bg-white px-4 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster-cnc/cnc-muster-1.jpg"}
                  quality={69}
                  width={350}
                  height={236}
                  alt="muster cnc metallbau firemetal"
                />
              </div>
              <div className="relative rounded-xl bg-white px-4 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster-cnc/cnc-muster-2.jpg"}
                  quality={69}
                  width={350}
                  height={236}
                  alt="cnc muster zaune firemetal"
                />
              </div>
              <div className="relative rounded-xl bg-white px-4 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster-cnc/cnc-muster-3.jpg"}
                  quality={69}
                  width={350}
                  height={236}
                  alt="cnc zaune muster firemetal"
                />
              </div>
              <div className="relative rounded-xl bg-white px-4 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster-cnc/cnc-muster-4.jpg"}
                  quality={69}
                  width={350}
                  height={236}
                  alt="cnc muster firemetal"
                />
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/muster/cnc"}>
          <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
            Muster CNC Prüfen
            <ChevronRightIcon className="text-base sm:text-lg" />
          </Button>
        </Link>
      </section>
    </>
  );
}
