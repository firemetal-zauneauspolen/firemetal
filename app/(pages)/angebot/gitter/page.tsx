import Link from "next/link";
import NextImage from "next/image";
import Balancer from "react-wrap-balancer";

import { ChevronLeftIcon, MousePointerClickIcon } from "lucide-react";
import { BiLogoFacebook, BiLogoGooglePlus } from "react-icons/bi";

import { Button } from "@/components/ui/button";
import { Card, Image } from "@nextui-org/react";
export default function GitterPage() {
  return (
    <>
      <section className="flex flex-col items-start justify-start px-2 pl-2 sm:pl-12 lg:pl-24 xl:pl-48">
        <h1 className="z-30 pt-8 text-3xl font-bold text-primary sm:text-4xl">
          <Balancer>
            🔥 Fenstergitter aus Polen für erhöhte Sicherheit im Haus -
            Firemetal: Ihre Lösung. 🔥
          </Balancer>
        </h1>
        <p className="z-30 pl-2 pt-4 sm:pl-4">
          <Balancer>
            Suchen Sie nach der perfekten Lösung für die Erhöhung der Sicherheit
            Ihres Hauses und den Schutz Ihrer Lieben zu schützen? Dann sind Sie
            bei Firemetal genau richtig, Ihrem vertrauenswürdigen Partner für
            die Sicherung Ihres Zuhauses mit hochwertigen Sicherheitslösungen.
            Unser breites Angebot an einbruchsicheren Fenstergittern aus
            Edelstahl wurde entwickelt, um Ihre Sicherheitsbedürfnisse zu
            erfüllen und die Sicherheit Ihres Hauses zu steigern.
          </Balancer>
        </p>
        <div className="pl-2 pt-4 sm:pl-4">
          <h3 className="pb-4 text-xl font-bold text-primary">
            Schauen Sie sich unsere Galerie
          </h3>
          <div className="grid max-w-[1100px] grid-cols-1 place-items-center gap-4 px-2 pb-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gitter" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gitter firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gitter/angebot-gitter-1.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gitter" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gitterzaun aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gitter/angebot-gitter-2.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gitter" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gitterzaune aus polen"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gitter/angebot-gitter-3.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
            <Card isPressable className="flex h-[350px] w-full">
              <Link href="/galerie/gitter" className="flex h-[350px] w-full">
                <Image
                  as={NextImage}
                  removeWrapper
                  isZoomed
                  alt="gitterzaun firemetal"
                  className="z-0 h-full w-full object-cover"
                  src="/img/angebot/gitter/angebot-gitter-4.jpg"
                  width={650}
                  height={650}
                />
              </Link>
            </Card>
          </div>
          <Link href={"/galerie/gitter"}>
            <Button className="z-30 rounded-full font-semibold">
              <span className="pr-2">Gitter Galerie</span>
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
              <strong>+ Fenstergitter für Einbruchschutz:</strong> Wir bieten
              robuste Sicherheitsgitter für Fenster, um Ihr Zuhause vor
              Einbrüchen zu schützen.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Maßanfertigung:</strong> Unsere Lösungen sind
              maßgeschneidert, um perfekt zu Ihren Fenstern zu passen, egal ob
              es sich um Kellerfenster oder normale Fenster handelt.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Professionelle Montage:</strong> Wir bieten eine
              professionelle Montage von Fenstergitter , um die Sicherheit Ihres
              Zuhauses zu gewährleisten.
            </Balancer>
          </li>
          <li>
            <Balancer>
              <strong>+ Umfassende Sicherheitslösungen:</strong> Von
              Fenstergittern bis hin zu Sicherheitsgittern für Kellerfenster
              bieten wir vielseitige Sicherheitslösungen für Ihr Zuhause.
            </Balancer>
          </li>
        </ul>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🔒 Verbessern Sie Ihre Haussicherheit mit Fachwissen
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Wenn es um Einbruchschutz für Fenster geht, können Sie sich auf das
            Know-how von Firemetal verlassen. Wir bieten maßgefertigte
            Fenstergitter aus Polen für zusätzliche Sicherheit. Unser Team sorgt
            dafür, dass Ihre Fenstergitter nicht nur von höchster Qualität sind,
            sondern auch präzise eingebaut werden, um einen effektiven
            Einbruchschutz zu gewährleisten.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🏘️ Maßgeschneiderte Sicherheitsgitter für jedes Fenster
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Unabhängig von der Art des Fenstergitters bietet Firemetal eine
            breite Palette von Einbruchschutzgittern für Fenster und Türen, um
            eine umfassende Sicherheit für Ihr Zuhause zu gewährleisten. Wir
            bieten Gitter vor dem Fenster und Gitter für Kellerfenster an
            Außenseite , um alle Ihre Sicherheitsbedürfnisse zu erfüllen.
          </Balancer>
        </p>
        <h2 className="z-30 pt-4 text-3xl font-bold text-ring">
          🛠️ Polnische Fenstergitter mit professioneller Montage
        </h2>
        <p className="pl-2 pt-4 sm:pl-4">
          <Balancer>
            Suchen Sie nach FensterGitter aus Polen mit Einbau? Firemetal hat
            Sie abgedeckt. Wir bieten FensterGitter attraktive Preise kaufen in
            Polen mit Einbau an, um den Prozess nahtlos zu gestalten. Ruhen Sie
            sich in dem Wissen aus, dass Ihr Zuhause mit unseren
            Einbruchschutzgittern für Kellerfenster sicher ist.
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
            Fenstergitter und Gitter aus Polen zu erwerben. Unsere
            Sicherheitslösungen bieten robusten Schutz für Ihr Zuhause.
            Entdecken Sie unsere Angebote noch heute! Falls Sie weitere
            Informationen benötigen oder Fragen haben, zögern Sie nicht, uns zu
            kontaktieren. Unser Team hilft Ihnen gerne weiter
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
