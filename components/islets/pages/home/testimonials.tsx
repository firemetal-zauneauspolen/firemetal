import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@nextui-org/react";
import { ChevronRightIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function Testimonials() {
  return (
    <>
      <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Rezensionen unserer Kunden.
      </h2>
      <p className="z-30 pb-8 pt-4 text-center text-base xl:text-xl">
        <Balancer>
          Ihre Rezensionen ist uns sehr wichtig. Dank Ihnen sind wir sicher,
          dass wir gute Arbeit für Sie geleistet haben. Auch Rezensionen helfen
          uns bei der Weiterentwicklung, daher ermutigen wir Sie, Ihre Rezension
          zu hinterlassen.
        </Balancer>
      </p>
      <section className="flex flex-col items-center justify-center gap-4 xl:flex-row">
        <Card className="max-w-[380px] border-[1px] border-default-200 shadow-xl">
          <CardHeader className="justify-between">
            <div className="flex items-center gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                color="success"
                name="U"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Udo Klembt
                </h4>
                <div className="flex items-center justify-center gap-px">
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                </div>
                <p className="text-xs text-default-500">
                  1 Rezension, vor 2 Monaten
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-600">
            <p>
              Sehr gute professionelle Beratung und Montage. Zusätzliche
              Arbeiten die sich erst mit der Montage ergaben wurden prompt
              erledigt. Preis-Leistungsverhältnis ist in Ordnung. Ich kann diese
              Firma nur jedem empfehlen.
            </p>
          </CardBody>
          <CardFooter className="gap-3">
            <div>
              <p className="text-xs text-default-500">
                <span className="font-bold">Dienste:</span> Individuelle
                Verarbeitung, Zaunbau nach Maß, Montage von Eisenzäunen
              </p>
            </div>
          </CardFooter>
        </Card>
        <Card className="max-w-[380px] border-[1px] border-default-200 shadow-xl">
          <CardHeader className="justify-between">
            <div className="flex items-center gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                color="warning"
                src="/img/avatars/avatar-1.png"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Michael Weidemann
                </h4>
                <div className="flex items-center justify-center gap-px">
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                </div>
                <p className="text-xs text-default-500">
                  15 Rezensionen 3 Fotos, vor 3 Monaten
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-600">
            <p>
              Bei mir wurde ein Zaun durch die Firma Fire Metal installiert, es
              wurde alles zu meiner besten Zufriedenheit ausgeführt. Preis
              Leistungsverhältnis ist hervorragend. Es mussten noch nacharbeiten
              ausgeführt werden, die sehr gut erledigt wurden. Ich kann die
              Firma wärmstens empfehlen. Antworten schnell auf Nachfrage.
            </p>
          </CardBody>
          <CardFooter className="gap-3">
            <div>
              <p className="text-xs text-default-500">
                <span className="font-bold">Positiv:</span>{" "}
                Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit,
                Qualität, Reaktionsschnelligkeit bei Anfragen
              </p>
            </div>
          </CardFooter>
        </Card>
        <Card className="max-w-[380px] border-[1px] border-default-200 shadow-xl">
          <CardHeader className="justify-between">
            <div className="flex items-center gap-5">
              <Avatar
                isBordered
                radius="full"
                size="md"
                color="danger"
                name="A"
              />
              <div className="flex flex-col items-start justify-center gap-1">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Anja
                </h4>
                <div className="flex items-center justify-center gap-px">
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                  <StarIcon className="h-5 w-5 fill-yellow-400 stroke-none" />
                </div>
                <p className="text-xs text-default-500">
                  2 Rezensionen 5 Fotos, vor 5 Monaten
                </p>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small text-default-600">
            <p>
              Sehr gute Arbeit und das Preis- Leistungsverhältnis ist
              herausragend. Muss man einfach weiterempfehlen. Alle Daumen hoch.
              31174 Schellerten/ Germany
            </p>
          </CardBody>
          <CardFooter className="gap-3">
            <div>
              <p className="text-xs text-default-500">
                <span className="font-bold">Positiv:</span>{" "}
                Preis-Leistungs-Verhältnis, Professionalität, Pünktlichkeit,
                Qualität, Reaktionsschnelligkeit bei Anfragen
              </p>
            </div>
          </CardFooter>
        </Card>
      </section>
      <Link
        target="_blank"
        href={
          "https://www.google.com/search?q=firemetal&sca_esv=586607062&hl=de&ei=Mp1oZYy8BaSB9u8PqPCleA&ved=0ahUKEwiMnfbE-OuCAxWkgP0HHSh4CQ8Q4dUDCGw&uact=5&oq=firemetal&gs_lp=Egxnd3Mtd2l6LXNlcnAiCWZpcmVtZXRhbDILEC4YgAQYxwEYrwEyBhAAGB4YCjIGEAAYHhgKMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUjkCFAAWK4HcAB4AZABAJgBqQGgAaoJqgEDMC45uAEDyAEA-AEBwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiABBjHARivARiOBcICCxAuGIMBGLEDGIAEwgIFEC4YgATCAgsQABiABBixAxiDAcICCxAuGIAEGMcBGNEDwgIFEAAYgATCAiAQLhiABBixAxiDARjHARjRAxiXBRjcBBjeBBjgBNgBAcICEBAAGIAEGIoFGLEDGIMBGEPCAgoQABiABBiKBRhDwgIOEC4YgAQYsQMYxwEY0QPCAgoQLhiABBiKBRhDwgIIEAAYgAQYsQPCAhAQLhiDARixAxiABBiKBRhDwgINEAAYgAQYigUYsQMYQ8ICBxAAGIAEGArCAgQQABgewgILEAAYBRgeGPEEGAriAwQYACBBiAYBugYGCAEQARgU&sclient=gws-wiz-serp#lrd=0x4707d3d2f15dddcd:0x73b56b7f2c7bac57,1,,,,"
        }
        className="pt-8"
      >
        <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
          Rezensionen Prüfen
          <ChevronRightIcon className="text-base sm:text-lg" />
        </Button>
      </Link>
    </>
  );
}
