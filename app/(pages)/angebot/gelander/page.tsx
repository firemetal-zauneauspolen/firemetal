import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";

import { MousePointerClickIcon } from "lucide-react";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
export default function GelanderPage() {
  return (
    <>
      <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
        <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
          <Balancer>
            🔥 Geländer Angebot von Firemetal: Ihre Quelle für hochwertige
            Geländer und Treppengeländer. 🔥
          </Balancer>
        </h1>
        <p className="z-30 pl-2 pt-4 sm:pl-4">
          <Balancer>
            Sie sind auf der Suche nach hochwertigen Balkongeländern und
            Edelstahl-Geländern, die nicht nur preisgünstig sind, sondern auch
            mit Montage geliefert werden können? Dann sind Sie bei Firemetal
            genau richtig! Unser Sortiment bietet Ihnen eine breite Auswahl an
            Balkongeländern und Edelstahl-Geländern, die höchsten
            Qualitätsstandards entsprechen.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Sparwdz naszą galerie:
          </h3>
          <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gelander" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gelander firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gelander/angebot-gelander-1.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gelander" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gelanderzaun aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gelander/angebot-gelander-2.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gelander" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gelanderzaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gelander/angebot-gelander-3.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gelander" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gelanderzaun firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gelander/angebot-gelander-4.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          </div>
          <Link href={"/galerie/gelander"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Geländer Galerie</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔥 Bei Firemetal bieten wir eine beeindruckende Auswahl an Produkten
          für Ihre Bedürfnisse. Unsere Produktpalette umfasst:
        </h2>
        <ul className="pl-2 pt-4 leading-8 sm:pl-4">
          <li>
            <Balancer>
              <strong>+ Balkongeländer aus Edelstahl:</strong> Stilvolle und
              langlebige Geländer für Ihre Balkone.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Metallgeländer für Balkon:</strong> Schaffen Sie einen
              modernen Look mit unseren Metallgeländern für Balkone, hergestellt
              aus verschiedenen Materialien wie Stahl oder Aluminium.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Treppengeländer:</strong> Sichere Treppengeländer sind
              unerlässlich, und wir bieten eine Vielzahl von Optionen.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Geländer aus Polen:</strong> Hochwertige Geländer
              Produkte zu wettbewerbsfähigen Preisen mit frei montage, direkt
              aus Polen.
            </Balancer>
          </li>
        </ul>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏗️ Qualität und Vielfalt in jedem Geländer
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Unsere Geländer und Balkongeländer sind nicht nur ästhetisch
            ansprechend, sondern auch äußerst langlebig. Firemetal setzt auf
            hochwertige Materialien und modernes Design, um Ihren Anforderungen
            gerecht zu werden.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🛠️ Maßgeschneiderte nach Ihren Präferenzen
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Wir verstehen, dass individuelle Präferenzen wichtig sind. Firemetal
            arbeitet eng mit Ihnen zusammen, um Produkte nach Ihren Wünschen
            herzustellen. Ob Farbwahl, Form oder Design – wir passen uns Ihren
            Anforderungen an.
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
            Wenn Sie Fragen haben oder weitere Informationen benötigen, zögern
            Sie nicht, uns zu kontaktieren. Unser kompetentes Team steht Ihnen
            gerne zur Verfügung.
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
