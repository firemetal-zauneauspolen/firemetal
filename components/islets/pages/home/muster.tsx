import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetMuster } from "@/components/islets/pages/muster/get-muster";

const musterSections = [
  {
    title: "Muster Premium",
    folder: "muster/premium",
    href: "/muster/premium",
    description:
      "Entdecken Sie ausgewählte Premium-Muster mit hochwertigen Oberflächen und individuellen Designs für Ihren Außenbereich.",
    buttonLabel: "Muster Premium Prüfen",
    columns: "single" as const,
  },
  {
    title: "Muster Classic",
    folder: "muster",
    href: "/muster",
    description:
      "Unsere klassischen Muster verbinden zeitlose Formen mit vielseitigen Möglichkeiten für Zäune, Paneele und Doppelstabmatten.",
    buttonLabel: "Muster Classic Prüfen",
    columns: "single" as const,
  },
  {
    title: "Muster Beton",
    folder: "muster/beton",
    href: "/muster/beton",
    description:
      "Robuste Betonmuster bieten eine markante Optik und langlebigen Sichtschutz, passend zu Ihrem Grundstück.",
    buttonLabel: "Muster Beton Prüfen",
    columns: "double" as const,
  },
  {
    title: "Muster CNC",
    folder: "muster/cnc",
    href: "/muster/cnc",
    description:
      "Entdecken Sie präzise gefertigte CNC-Muster mit individuellen Motiven für moderne und klassische Zaunlösungen.",
    buttonLabel: "Muster CNC Prüfen",
    columns: "single" as const,
  },
];

export function MusterHome() {
  return (
    <section className="flex w-full flex-col items-center">
      <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Unsere Muster
      </h2>

      <p className="z-30 pb-8 pt-4 text-center text-base xl:text-xl">
        <Balancer>
          Im Musterbereich präsentieren wir Ihnen unsere fertigen Muster und
          Projekte, die Sie inspirieren können. Wählen Sie aus einer Vielzahl
          von Mustern, die Ihnen helfen, einen Zaun oder eine andere
          Konstruktion zu entwerfen , die perfekt zu Ihrem Stil passt.
        </Balancer>
      </p>
      {musterSections.map((muster) => (
        <section
          className="flex w-full flex-col items-center pb-8"
          key={muster.href}
        >
          <h3 className="z-30 pt-4 text-center text-3xl font-bold text-primary">
            {muster.title}
          </h3>
          <p className="z-30 px-2 pt-4 text-center text-base xl:text-xl">
            <Balancer>{muster.description}</Balancer>
          </p>
          <div className="flex justify-center py-6">
            <Suspense
              fallback={<Spinner label="Loading..." aria-label="Loding..." />}
            >
              <GetMuster
                galerieFolder={muster.folder}
                maxResults={3}
                columns={muster.columns}
              />
            </Suspense>
          </div>
          <Link href={muster.href}>
            <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
              {muster.buttonLabel}
              <ChevronRightIcon className="text-base sm:text-lg" />
            </Button>
          </Link>
        </section>
      ))}
    </section>
  );
