import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";

import { MousePointerClickIcon } from "lucide-react";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
export default function DoppelstabmattenPage() {
  return (
    <>
      <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
        <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
          <Balancer>
            🔥 Willkommen bei Firemetal: Ihr Spezialist für Doppelstabmatten aus
            Polen! 🔥
          </Balancer>
        </h1>
        <p className="z-30 pl-2 pt-4 sm:pl-4">
          <Balancer>
            Sie sind auf der Suche nach einem hochwertigen Doppelstabmattenzaun,
            der nicht nur preisgünstig ist, sondern auch mit Montage geliefert
            werden kann? Dann sind Sie bei Firemetal genau richtig! Unser
            Sortiment bietet Ihnen eine breite Auswahl an
            Doppelstabmattenzäunen, die aus Polen stammen und höchsten
            Qualitätsstandards entsprechen.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Sparwdz naszą galerie:
          </h3>
          <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/doppelstabmatten"
                className="flex h-[350px] w-full"
              >
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="doppelstabmatten firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/doppelstabmatten/angebot-doppelstabmatten-1.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/doppelstabmatten"
                className="flex h-[350px] w-full"
              >
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="doppelstabmattenzaun aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/doppelstabmatten/angebot-doppelstabmatten-2.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/doppelstabmatten"
                className="flex h-[350px] w-full"
              >
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="doppelstabmattenzaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/doppelstabmatten/angebot-doppelstabmatten-3.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link
                href="/galerie/doppelstabmatten"
                className="flex h-[350px] w-full"
              >
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="doppelstabmattenzaun firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/doppelstabmatten/angebot-doppelstabmatten-4.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          </div>
          <Link href={"/galerie/doppelstabmatten"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Doppelstabmatten Galerie</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔥 Warum Doppelstabmatten von Firemetal wählen?
        </h2>
        <ul className="pl-2 pt-4 leading-8 sm:pl-4">
          <li>
            <Balancer>
              <strong>+ Hochwertige Doppelstabmattenzäune aus Polen:</strong>{" "}
              Unsere Zäune werden aus Polen importiert und zeichnen sich durch
              ihre erstklassige Qualität aus.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Komplette Sets inklusive Montage:</strong> Sie müssen
              sich keine Gedanken über die Installation machen. Firemetal
              liefert Ihnen alles, was Sie benötigen, und unser Expertenteam
              installiert den Zaun für Sie.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Vielfältige Konfigurationsmöglichkeiten:</strong> Mit
              unserem Konfigurator können Sie Ihren Doppelstabmattenzaun nach
              Ihren individuellen Anforderungen gestalten.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Attraktive Preise:</strong> Wir bieten wettbewerbsfähige
              Preise für unsere Doppelstabmattenzäune aus Polen.
            </Balancer>
          </li>
        </ul>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏗️ Unsere Produktpalette
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Egal, ob Sie einen Doppelstabmattenzaun in Anthrazit, einen 2 Meter
            hohen Zaun oder ein 50 Meter langes Komplettset suchen, Firemetal
            hat die passende Lösung für Sie.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🛠️ Online Preiskalkulation
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Nutzen Sie unseren Preiskalkulation, um Ihren perfekten
            Doppelstabmattenzaun zu erstellen und bestellen Sie bequem online.
            Wir liefern nicht nur die Zaunfelder, sondern auch das Zubehör, das
            Sie benötigen. Und das Beste daran: Die Montage ist im Preis
            inbegriffen!
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Skorzystaj z formularza wyceny:
          </h3>
          <Link href={"/preiskalkulation"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Preis Anfrage</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">📞 Kontakt</h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Warum also noch warten? Firemetal macht es einfach, einen
            hochwertigen Doppelstabmattenzaun aus Polen zu erwerben. Entdecken
            Sie unsere Angebote noch heute! Falls Sie weitere Informationen
            benötigen oder Fragen haben, zögern Sie nicht, uns zu kontaktieren.
            Unser Team steht Ihnen gerne zur Verfügung.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Skontaktuj sie:
          </h3>
          <div className="flex items-center gap-2">
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
        </div>
      </section>
    </>
  );
}
