import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";

import { ChevronLeftIcon, MousePointerClickIcon } from "lucide-react";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gartenzäune aus Polen. Beste Preise und Qualität.",
  description:
    "Wir bieten hohe Qualität und die besten Preise an Gartenzäune aus Polen. Wir bieten: ✅Kostenlos Aufmaß , ✅Online Preiskalkulation ✅ und Hochwertige.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/angebot/andere"),
  alternates: {
    canonical: "/",
  },
  generator: "FireMetal - Metallzäune",
  keywords: [
    "Zäune aus Polen",
    "Metallzäune",
    "Gartenzäune",
    "Zäune",
    "Gartenzäunen",
    "Doppelstabmatten",
    "Geländer",
    "Carports",
    "Gitter",
    "Fenstergitte",
    "Metallkonstruktionen",
    "Moderne zäune",
    "Attraktiven Preisen",
    "Günstige Preisen",
  ],
  openGraph: {
    title: "Gartenzäune aus Polen. Beste Preise und Qualität.",
    description:
      "Wir bieten hohe Qualität und die besten Preise an Gartenzäune aus Polen. Wir bieten: ✅Kostenlos Aufmaß , ✅Online Preiskalkulation ✅ und Hochwertige.",
    locale: "de_DE",
    type: "article",
    url: "https://firemetal.eu/angebot/andere",
    siteName: "Firemetal - Zäune aus Polen",
    images: [
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fandere%2Fangebot-andere-1.jpg&w=750&q=75",
        alt: "Gartenzäune Zäune aus Polen - Fahrrad",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fandere%2Fangebot-andere-2.jpg&w=750&q=75",
        alt: "Metallische Dekorationen - Tisch",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fandere%2Fangebot-andere-3.jpg&w=750&q=75",
        alt: "Dekorationen aus metall - Stühle",
      },
      {
        url: "https://firemetal.eu/_next/image?url=%2Fimg%2Fangebot%2Fandere%2Fangebot-andere-4.jpg&w=750&q=75",
        alt: "Gartenzäune Dekorationen - Schaukel mit Tisch",
      },
    ],
  },
};

export default function AnderePage() {
  return (
    <>
      <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
        <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
          <Balancer>
            🔥 Willkommen bei FireMetal - Ihre Quelle für Metallkunst im
            Garten.🔥
          </Balancer>
        </h1>
        <p className="z-30 pl-2 pt-4 sm:pl-4">
          <Balancer>
            Willkommen bei FireMetal! Entdecken Sie unsere exquisiten
            Metalldekorationen für Ihren Garten und weitere hochwertige
            Konstruktionen aus Metall, die Ihren Garten in ein Paradies
            verwandeln werden.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie sich unsere Galerie
          </h3>
          <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/andere" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="andere firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/andere/angebot-andere-1.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/andere" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="anderezaun aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/andere/angebot-andere-2.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/andere" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="anderezaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/andere/angebot-andere-3.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/andere" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="anderezaun firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/andere/angebot-andere-4.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          </div>
          <Link href={"/galerie/andere"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Galerie</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔥 Unsere Schlüsselelemente und Dienstleistungen:
        </h2>
        <ul className="pl-2 pt-4 leading-8 sm:pl-4">
          <li>
            <Balancer>
              <strong>+ Metallische Gartenbänke und Dekorationen:</strong> Wir
              bieten hochwertige Metallkonstruktionen für Ihren Garten,
              einschließlich Gartenbänke und dekorative Elemente, die Ihren
              Außenbereich verschönern.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Maßanfertigung:</strong> Unsere Lösungen werden
              individuell gestaltet, um perfekt zu Ihrem Garten zu passen, und
              umfassen verschiedene Metallkonstruktionen für den Außenbereich.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Professionelle Montage:</strong> Wir garantieren eine
              professionelle Montage Ihrer Metallkonstruktionen im Garten, um
              deren Haltbarkeit und Schönheit zu sichern.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Umfassende Gartenlösungen:</strong> Von Metallbänken bis
              hin zu dekorativen Metallstrukturen. Wir bieten vielseitige
              Metallkonstruktionen für die Verschönerung Ihres Gartens.
            </Balancer>
          </li>
        </ul>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏡 Dekorationen aus Metall für den Garten
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Unsere Dekorationen aus Metall sind handgefertigte Meisterwerke, die
            Ihrem Garten einen Hauch von Eleganz und Originalität verleihen. Von
            filigranen Skulpturen bis hin zu robusten Metallstrukturen – wir
            haben alles, was Sie brauchen, um Ihren Garten zu verschönern.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏘️ Metallische Gartenbänke - Stilvolle Sitzgelegenheiten im Freien
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Spüren Sie Entspannung und Komfort im Freien mit unseren
            Metallbänken für den Garten. Unser Sortiment an Metallbänken bietet
            stilvolle Sitzgelegenheiten für Ihren Garten, während unsere
            Gartenschaukel aus Metall für sanfte Bewegung und Spaß im Freien
            sorgen.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🛠️ Gartenschaukeln aus Metal
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Metallische Gartenschaukeln sind eine perfekte Ergänzung für Ihren
            Außenbereich. Unsere Schaukeln zeichnen sich durch Stabilität und
            Sicherheit aus und sind perfekt für entspannende Momente im Freien.
            Hochwertiges Metall gewährleistet eine lange Lebensdauer, auch bei
            verschiedenen Wetterbedingungen. Die Schaukeln sind in verschiedenen
            Größen und Stilen erhältlich, um Ihren individuellen Anforderungen
            gerecht zu werden.
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
            Warum also noch zögern? Firemetal macht es einfach, hochwertige
            andere Metallkonstruktionen aus Polen zu erwerben. Unsere
            maßgeschneiderten Lösungen bieten robuste und vielseitige Optionen
            für Ihre Bedürfnisse. Entdecken Sie unsere Angebote noch heute!
            Falls Sie weitere Informationen benötigen oder Fragen haben, zögern
            Sie nicht, uns zu kontaktieren. Unser Team steht Ihnen gerne zur
            Verfügung.
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
