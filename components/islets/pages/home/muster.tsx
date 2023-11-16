import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function MusterHome() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Unsere Muster
        </h2>

        <p className="z-30 pb-8 pt-4 text-center text-base xl:px-96 xl:text-xl">
          <Balancer>
            Im Musterbereich präsentieren wir Ihnen unsere fertigen Muster und
            Projekte, die Sie inspirieren können. Wählen Sie aus einer Vielzahl
            von Mustern, die Ihnen helfen, einen Zaun oder eine andere
            Konstruktion zu entwerfen , die perfekt zu Ihrem Stil passt.
          </Balancer>
        </p>
        <Link href="/muster">
          <div className="flex flex-col items-center pb-8">
            <div className="columns-1 space-y-4">
              <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster/home-muster-1.webp"}
                  quality={1}
                  width={800}
                  height={300}
                  alt="muster metallbau firemetal"
                />
              </div>
              <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster/home-muster-2.webp"}
                  quality={1}
                  width={800}
                  height={300}
                  alt="muster metallbau firemetal"
                />
              </div>
              <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                <Image
                  src={"/img/muster/home-muster-3.webp"}
                  quality={1}
                  width={800}
                  height={300}
                  alt="muster metallbau firemetal"
                />
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/muster"}>
          <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
            Muster Prüfen
            <ChevronRightIcon className="text-base sm:text-lg" />
          </Button>
        </Link>
      </section>
    </>
  );
}
