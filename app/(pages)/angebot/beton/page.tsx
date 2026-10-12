import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";
import { ChevronLeftIcon, MousePointerClickIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
import { Metadata } from "next";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

const betonImages = [
  {
    src: "/img/angebot/beton/angebot-beton-1.jpg",
    alt: "Betonzaun mit moderner Oberfläche",
  },
  {
    src: "/img/angebot/beton/angebot-beton-2.jpg",
    alt: "Betonzaun als langlebiger Sichtschutz",
  },
  {
    src: "/img/angebot/beton/angebot-beton-3.jpg",
    alt: "Betonzaun passend zum Grundstück",
  },
  {
    src: "/img/angebot/beton/angebot-beton-4.jpg",
    alt: "Robuste Betonzaunelemente von Firemetal",
  },
];

export const metadata: Metadata = {
  title: "Betonzäune aus Polen von Firemetal | Qualität und Beratung",
  description:
    "Entdecken Sie hochwertige Betonzäune aus Polen: langlebiger Sichtschutz, verschiedene Designs und individuelle Beratung von Firemetal.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/angebot/beton"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Betonzäune aus Polen von Firemetal",
    description:
      "Firemetal bietet robuste Betonzäune, die zuverlässigen Sichtschutz und zeitloses Design verbinden.",
    locale: "de_DE",
    type: "article",
    url: "https://firemetal.eu/angebot/beton",
    siteName: "Firemetal - Zäune aus Polen",
    images: betonImages.map((image) => ({ url: image.src, alt: image.alt })),
  },
};

export default function BetonPage() {
  return (
    <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
      <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
        <Balancer>
          Hochwertige Betonzäune aus Polen von Firemetal – langlebiger Schutz
          und individuelle Lösungen
        </Balancer>
      </h1>
      <p className="z-30 pl-2 pt-4 sm:pl-4">
        <Balancer>
          Sie suchen einen stabilen und langlebigen Zaun für Ihr Grundstück?
          Firemetal bietet Betonzäune, die zuverlässigen Sichtschutz mit einer
          klaren, zeitlosen Optik verbinden. Entdecken Sie verschiedene
          Gestaltungsmöglichkeiten und finden Sie eine Lösung, die zu Ihrem Haus
          und Ihren Anforderungen passt.
        </Balancer>
      </p>

      <div className="pl-2 pt-4 sm:pl-4">
        <h2 className="pb-4 text-xl font-bold text-primary">
          Schauen Sie sich unsere Galerie an
        </h2>
        <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
          {betonImages.map((image) => (
            <Card isPressable className="flex h-[350px] w-full" key={image.src}>
              <Link href="/galerie/beton" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt={image.alt}
                  className="z-0 h-full w-full object-cover"
                  src={image.src}
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          ))}
        </div>
        <Link href="/galerie/beton">
          <Button className="z-30 rounded-full font-semibold">
            <span className="pr-2">Beton Galerie</span>
            <MousePointerClickIcon />
          </Button>
        </Link>
      </div>

      <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
        🔥 Warum einen Betonzaun von Firemetal wählen?
      </h2>
      <ul className="pl-2 pt-4 leading-8 sm:pl-4">
        <li>
          <Balancer>
            <strong>+ Langlebiger Sichtschutz:</strong> Massive Betonelemente
            schaffen Privatsphäre und grenzen Ihr Grundstück zuverlässig ab.
          </Balancer>
        </li>
        <li>
          <Balancer>
            <strong>+ Robuste Bauweise:</strong> Ein Betonzaun ist eine solide
            Wahl für alle, die Wert auf Beständigkeit und Stabilität legen.
          </Balancer>
        </li>
        <li>
          <Balancer>
            <strong>+ Verschiedene Gestaltungsmöglichkeiten:</strong> Wählen Sie
            ein Erscheinungsbild, das zu Ihrem Haus, Garten und Grundstück passt.
          </Balancer>
        </li>
        <li>
          <Balancer>
            <strong>+ Individuelle Beratung:</strong> Wir unterstützen Sie dabei,
            eine passende Lösung für Ihr Vorhaben zu finden.
          </Balancer>
        </li>
      </ul>

      <h2 className="z-30 pt-6 text-3xl font-bold text-ring">
        🏗️ Betonzäune passend zu Ihrem Grundstück
      </h2>
      <p className="pl-2 pt-4 sm:pl-4">
        <Balancer>
          Ob als klare Grundstücksbegrenzung, als Schutz vor neugierigen Blicken
          oder als gestalterisches Element: Ein Betonzaun lässt sich vielseitig
          einsetzen. Gemeinsam betrachten wir Verlauf, Höhe und Design, damit
          sich die Zaunanlage harmonisch in die Umgebung einfügt.
        </Balancer>
      </p>

      <h2 className="z-30 pt-6 text-3xl font-bold text-ring">
        🛠️ Individuelle Planung und persönliche Beratung
      </h2>
      <p className="pl-2 pt-4 sm:pl-4">
        <Balancer>
          Jedes Grundstück ist anders. Deshalb stimmen wir die passende
          Betonzaun-Lösung auf Ihre Wünsche und die Gegebenheiten vor Ort ab.
          Sprechen Sie mit uns über Ihr Projekt – wir helfen Ihnen bei den
          nächsten Schritten.
        </Balancer>
      </p>

      <h2 className="z-30 pt-6 text-3xl font-bold text-ring">
        💲 Kosten und Anfrage
      </h2>
      <p className="pl-2 pt-4 sm:pl-4">
        <Balancer>
          Sie möchten wissen, welche Lösung zu Ihrem Grundstück und Ihrem Budget
          passt? Senden Sie uns Ihre Anfrage. Gemeinsam besprechen wir die
          Möglichkeiten und erstellen die Grundlage für ein passendes Angebot.
        </Balancer>
      </p>

      <h2 className="z-30 pt-6 text-3xl font-bold text-ring">📞 Kontakt</h2>
      <p className="pl-2 pt-4 sm:pl-4">
        <Balancer>
          Haben Sie Fragen zu unseren Betonzäunen oder möchten Sie Ihr Vorhaben
          besprechen? Kontaktieren Sie uns – unser Team hilft Ihnen gerne weiter.
        </Balancer>
      </p>
      <div className="pl-2 pt-4 sm:pl-4">
        <h3 className="pb-4 text-xl font-bold text-primary">
          Nehmen Sie Kontakt mit uns auf
        </h3>
        <div className="flex flex-wrap items-center gap-2 pb-8">
          <Button variant="icon" size="icon">
            <Link href="https://www.facebook.com/firemetaleu" target="_blank">
              <BiLogoFacebook className="h-[1.6rem] w-[1.6rem]" />
            </Link>
          </Button>
          <Button variant="icon" size="icon">
            <Link href="https://goo.gl/maps/BrZm7MDpNn8z7d5t9" target="_blank">
              <BiLogoGooglePlus className="h-[1.8rem] w-[1.8rem]" />
            </Link>
          </Button>
          <Link href="/preiskalkulation">
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Preis Anfrage</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
          <Link href="/kontakt">
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Kontakt</span>
              <MousePointerClickIcon />
            </Button>
          </Link>
        </div>
        <Link href="/angebot">
          <Button className="rounded-full border-2 border-white bg-neutral-950 pr-6 font-semibold">
            <ChevronLeftIcon />
            Zurück zum Angebot
          </Button>
        </Link>
      </div>
    </section>
  );
}