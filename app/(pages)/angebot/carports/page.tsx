import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";

import { ChevronLeftIcon, MousePointerClickIcon } from "lucide-react";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
export default function CarportsPage() {
  return (
    <>
      <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
        <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
          <Balancer>
            🔥 Willkommen bei Firemetal: Ihr Experte für Carports aus Polen in
            Deutschland. 🔥
          </Balancer>
        </h1>
        <p className="z-30 pl-2 pt-4 sm:pl-4">
          <Balancer>
            Herzlich willkommen bei Firemetal, Ihrem zuverlässigen Partner für
            hochwertige Zäune und Carports. Wir bieten eine große Palette von
            Produkten und Lösungen für Ihre Wünsche und Anforderungen.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie sich unsere Galerie
          </h3>
          <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/carports" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="carports firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/carports/angebot-carports-1.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/carports" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="carportszaun aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/carports/angebot-carports-2.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/carports" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="carportszaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/carports/angebot-carports-3.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/carports" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="carportszaun firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/carports/angebot-carports-4.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          </div>
          <Link href={"/galerie/carports"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Carports Galerie</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔥 Unsere Produktpalette umfasst:
        </h2>
        <ul className="pl-2 pt-4 leading-8 sm:pl-4">
          <li>
            <Balancer>
              <strong>+ Carport Metall:</strong> Unsere Metall-Carports sind
              robust und bieten langanhaltenden Schutz für Ihr Fahrzeug.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Carport mit Schuppen:</strong> Unsere Carports mit
              Schuppen bieten zusätzlichen Stauraum und schützen Ihr Auto.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Carport aus Polen:</strong> Durch unseren Standort in
              Polen können wir Ihnen preiswerte Carports anbieten, die dennoch
              höchsten Qualitätsstandards entsprechen.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Aluminium Carport aus Polen:</strong> Wenn Sie einen
              modernen und pflegeleichten Carport suchen, ist unser Aluminium
              Carport aus Polen die richtige Wahl.
            </Balancer>
          </li>
        </ul>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          💰 Ein günstiger Carport aus Polen lohnt sich
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Bei Firemetal finden Sie erschwingliche Carport-Lösungen, die Ihren
            Bedürfnissen und Ihrem Budget entsprechen. Wir bieten eine
            kostenlose Montage.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏗️ Ihr individuelles Carport oder Zaunprojekt
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Wir bieten nicht nur vorgefertigte Produkte an, sondern können auch
            individuelle Lösungen entwickeln, die genau Ihren Anforderungen
            entsprechen.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🛠️ Hervorragende Qualität und große Auswahl an Carports
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Unsere Carports zeichnen sich durch erstklassige Qualität und
            Vielfalt. Wir legen großen Wert auf Material und Verarbeitung, um
            sicherzustellen, dass Ihr Carport langlebig und funktional ist.
            Egal, ob Sie nach einen Aluminiumcarport oder einem Metallcarport
            suchen, wir haben die perfekte Lösung für Sie.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie unsere Online Preiskalkulation
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
            Wenn Sie auf der Suche nach hochwertigen Zäunen oder Carports sind,
            die Ihren Anforderungen entsprechen, sind Sie bei Firemetal genau
            richtig. Kontaktieren Sie uns noch heute, um mehr über unsere
            Produkte und Dienstleistungen zu erfahren. Wir stehen zur Ihrer
            Verfügung, um Ihr Projekt in die Realität umzusetzen.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Nehmen Sie Kontakt mit uns auf
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
