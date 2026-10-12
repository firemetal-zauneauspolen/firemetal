import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";
import { MousePointerClickIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
import { Metadata } from "next";

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
  title: "Betonzaun nach Maß | Firemetal",
  description:
    "Entdecken Sie langlebige Betonzäune als stabilen Sichtschutz. Firemetal berät Sie zu passenden Lösungen für Ihr Grundstück.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/angebot/beton"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Betonzaun nach Maß | Firemetal",
    description:
      "Robuste Betonzäune verbinden zuverlässigen Sichtschutz mit zeitlosem Design. Finden Sie die passende Lösung für Ihr Grundstück.",
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
        <Balancer>Betonzäune von Firemetal: stabiler Schutz mit Charakter</Balancer>
      </h1>
      <p className="z-30 pl-2 pt-4 sm:pl-4">
        <Balancer>
          Ein Betonzaun schafft Privatsphäre und setzt zugleich einen klaren,
          dauerhaften Rahmen für Ihr Grundstück. Wir helfen Ihnen dabei, eine
          passende Lösung zu finden, die sich harmonisch in die Umgebung
          einfügt und Ihren Anforderungen an Höhe, Gestaltung und Funktion
          entspricht.
        </Balancer>
      </p>

      <div className="pl-2 pt-4 sm:pl-4">
        <h2 className="pb-4 text-xl font-bold text-primary">
          Entdecken Sie unsere Betonzaun-Projekte
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
            <span className="pr-2">Betonzaun-Galerie</span>
            <MousePointerClickIcon />
          </Button>
        </Link>
      </div>

      <h2 className="z-30 pt-6 text-3xl font-bold text-ring">
        Ein zuverlässiger Sichtschutz für viele Jahre
      </h2>
      <p className="pl-2 pt-4 sm:pl-4">
        <Balancer>
          Betonelemente sind besonders robust und bieten einen wirksamen Schutz
          vor Blicken und Wind. Dank ihrer soliden Bauweise eignen sie sich für
          Grundstücke, bei denen Beständigkeit und ein klar abgegrenzter
          Außenbereich wichtig sind. Unterschiedliche Oberflächen und
          Gestaltungsmöglichkeiten helfen dabei, den Zaun an Haus und Garten
          anzupassen.
        </Balancer>
      </p>

      <h2 className="z-30 pt-6 text-3xl font-bold text-ring">
        Individuell geplant und passend umgesetzt
      </h2>
      <p className="pl-2 pt-4 sm:pl-4">
        <Balancer>
          Jedes Grundstück stellt andere Anforderungen. Gemeinsam besprechen
          wir den gewünschten Verlauf, die passende Höhe und das Erscheinungsbild
          Ihres Betonzauns. So entsteht eine Lösung, die Funktionalität und
          Gestaltung verbindet und langfristig zu Ihrem Zuhause passt.
        </Balancer>
      </p>

      <div className="pl-2 pt-6 sm:pl-4">
        <h2 className="pb-4 text-xl font-bold text-primary">
          Sie planen einen Betonzaun?
        </h2>
        <Link href="/kontakt">
          <Button className="z-30 rounded-full font-semibold">
            <span className="pr-2">Beratung anfragen</span>
            <MousePointerClickIcon />
          </Button>
        </Link>
      </div>
    </section>
  );
}