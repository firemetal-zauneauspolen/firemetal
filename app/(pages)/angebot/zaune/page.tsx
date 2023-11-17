import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";

import { ChevronLeftIcon, MousePointerClickIcon } from "lucide-react";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function ZaunePage() {
  return (
    <>
      <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
        <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
          <Balancer>
            🔥 Hochwertige Zäune aus Polen von Firemetal - Preise, Montage und
            mehr, inklusive Kunststoffpaneele und WPC. 🔥
          </Balancer>
        </h1>
        <p className="z-30 pl-2 pt-4 sm:pl-4">
          <Balancer>
            Sie suchen nach hochwertigen Zäunen aus Polen? Firemetal bietet eine
            beeindruckende Auswahl an Zäunen und Toren, die Ihren Bedürfnissen
            gerecht werden. Entdecken Sie Zäune aus Polen, die nicht nur
            preiswert, sondern auch von hervorragender Qualität sind. Zusätzlich
            bieten wir auch moderne Zaunlösungen mit Kunststoffpaneelen und WPC.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie sich unsere Galerie
          </h3>
          <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/zaune/moderne"
                className="flex h-[350px] w-full"
              >
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    Moderne
                  </h3>
                </CardHeader>
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="moderne zaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/zaune/zaune-moderne.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/zaune/classic"
                className="flex h-[350px] w-full"
              >
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    Classic
                  </h3>
                </CardHeader>
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="classic zaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/zaune/zaune-classic.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/zaune/kunststoffpaneele"
                className="flex h-[350px] w-full"
              >
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    Kunststoffpaneelen
                  </h3>
                </CardHeader>
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="kunststoffpaneelen aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/zaune/zaune-kunststoffpaneelen.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/zaune/wpc" className="flex h-[350px] w-full">
                <CardHeader className="absolute top-1 z-10 flex-col !items-start">
                  <h3 className="rounded-full bg-neutral-950/60 p-2 px-4 text-center text-lg font-semibold text-white backdrop-blur-sm md:text-xl">
                    WPC
                  </h3>
                </CardHeader>
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="wpc aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/zaune/zaune-wpc.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          </div>
          <Link href={"/galerie/zaune"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Zäune Galerie</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔥 Unsere Zäune aus Polen:
        </h2>
        <ul className="pl-2 pt-4 leading-8 sm:pl-4">
          <li>
            <Balancer>
              <strong>+ Metallzäune und Tore:</strong> Unsere Metallzäune und
              Tore aus Polen sind robust und stilvoll.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Gartenzäune aus Polen:</strong> chaffen Sie sich einen
              schönen Gartenzaun aus Polen, der Ihre grüne Oase umgibt.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Kunststoffpaneele und WPC:</strong> Entdecken Sie auch
              unsere Zäune mit Kunststoffpaneelen und WPC, die langlebig und
              pflegeleicht sind.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Preiswerte Optionen:</strong> Wir bieten günstige Zäune
              aus Polen, die Ihren Geldbeutel schonen.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Erfahrung und Qualität:</strong> Unsere Erfahrung und
              die Qualität unserer Zäunen aus Polen sprechen für sich.
            </Balancer>
          </li>
        </ul>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔨 Zäune aus Polen mit Montage
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Bei Firemetal bieten wir nicht nur Zäune aus Polen an, sondern auch
            eine Möglichkeit der Montage. Entdecken Sie unsere konkurrenzfähigen
            Preise.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🚪 Gartentore und Tore aus Polen
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Neben Zäunen bieten wir auch eine Auswahl an Gartentoren und Toren
            aus Polen. Unsere Toren sind die perfekte Ergänzung zu Ihren Zäunen.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie sich unsere Designs an
          </h3>
          <Link href={"/muster"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Muster</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          👫 Zufriedene Kunden
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Unsere Kunden sind die beste Referenz. Erfahren Sie mehr über unsere
            Zäune aus Polen durch die Erfahrungen unserer zufriedenen Kunden.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏆 Moderne Lösungen
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Entdecken Sie moderne Zaunlösungen aus Polen, die Funktionalität und
            Design vereinen.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          💲 Kosten und Bestellung
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Erfahren Sie alles über die Kosten unserer Zäune aus Polen und wie
            Sie sie bequem bestellen können.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie unsere Online Preiskalkulation
          </h3>
          <Link href={"/preiskalkulation"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Preisanfrage</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔥 Firemetal - Ihr Partner für Zäune aus Polen! 🔥
        </h2>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Nehmen Sie Kontakt mit uns auf:
          </h3>
          <div className="flex items-center gap-2 pb-8">
            <Button variant={"icon"} size={"icon"}>
              <Link
                href={"https://www.facebook.com/firemetaleu"}
                target="_blank"
              >
                <BiLogoFacebook className="h-[1.6rem] w-[1.6rem]" />
              </Link>
            </Button>
            <Button variant={"icon"} size={"icon"}>
              <Link
                href={"https://goo.gl/maps/BrZm7MDpNn8z7d5t9"}
                target="_blank"
              >
                <BiLogoGooglePlus className="h-[1.8rem] w-[1.8rem]" />
              </Link>
            </Button>
            <Link href={"/kontakt"}>
              <Button className="z-30 rounded-full font-semibold">
                <span className="pr-2">Kontakt</span>
                <MousePointerClickIcon />
              </Button>
            </Link>
          </div>
          <Link href={"/angebot"}>
            <Button className="rounded-full border-2 border-white bg-neutral-950 pr-6 font-semibold">
              <ChevronLeftIcon />
              Zurück zum Angebot
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
