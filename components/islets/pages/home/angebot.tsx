import { Button } from "@/components/ui/button";
import NextImage from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Card, Image } from "@nextui-org/react";
import { ChevronRightIcon } from "lucide-react";

export function AngebotHome() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Unser Angebot
        </h2>

        <p className="z-30 pb-8 pt-4 text-center text-base xl:text-xl">
          <Balancer>
            Firemetal bietet sehr viele Metallkonstruktionen, die auf Ihre
            Bedürfnisse zugeschnitten sind. Unser Angebot umfasst
            Metallgartenzäune, Metallzäune, Doppelstabmatten , Metallzäune,
            Zäune, Doppelstabmatten, Geländer, Carports, Gitter, FensterGitter
            und viele andere Metallkonstruktionen und vieles mehr. Mit uns
            können Sie den perfekten Zaun entwerfen, der zu Ihrem Stil passt.
          </Balancer>
        </p>
        <div className="z-30 pb-8">
          <Link href="/angebot">
            <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 sm:grid-cols-2 md:grid-cols-3">
              <div className="group relative">
                <Card isPressable className="flex h-[350px] w-full">
                  <Image
                    as={NextImage}
                    removeWrapper
                    isZoomed
                    quality={25}
                    alt="Card background"
                    className="z-0 h-full w-full object-cover"
                    src="/img/angebot/angebot-zaune.jpg"
                    width={650}
                    height={650}
                  />
                </Card>
                <div className="absolute left-3 top-5 z-50 flex-col !items-start group-hover:cursor-pointer">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    Zäune
                  </h3>
                </div>
              </div>
              <div className="group relative w-full">
                <Card isPressable className="flex h-[350px] w-full">
                  <Image
                    as={NextImage}
                    removeWrapper
                    isZoomed
                    quality={25}
                    alt="Card background"
                    className="z-0 h-full w-full object-cover"
                    src="/img/angebot/angebot-doppelstabmatten.jpg"
                    width={650}
                    height={650}
                  />
                </Card>
                <div className="absolute left-3 top-5 z-50 flex-col !items-start group-hover:cursor-pointer">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    Doppelstabmatten
                  </h3>
                </div>
              </div>
              <div className="group relative w-full">
                <Card isPressable className="flex h-[350px] w-full">
                  <Image
                    as={NextImage}
                    removeWrapper
                    isZoomed
                    quality={25}
                    alt="Card background"
                    className="z-0 h-full w-full object-cover"
                    src="/img/angebot/angebot-gelander.jpg"
                    width={650}
                    height={650}
                  />
                </Card>
                <div className="absolute left-3 top-5 z-50 flex-col !items-start group-hover:cursor-pointer">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    Geländer
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <h3 className="z-30 pb-8 text-center text-2xl font-bold text-primary">
          Oder vielleicht Carports, Fenstergitter beziehungsweise eine andere
          Metallkonstruktion?
        </h3>
        <Link href="/metamorphose">
          <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
            Angebot Prüfen
            <ChevronRightIcon className="text-base sm:text-lg" />
          </Button>
        </Link>
      </section>
    </>
  );
}
