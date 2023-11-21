import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetMuster } from "@/components/islets/pages/muster/get-muster";
import Balancer from "react-wrap-balancer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zäune aus Polen | Muster für Classic, Moderne und mehr.",
  description:
    "Wir stellen klassischen, moderne muster von Zäunen. Wir bieten Muster entsprechend den Bedürfnissen des Kunden anzupassen oder zu erstellen.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/muster"),
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
    title: "Zäune aus Polen | Muster für Classic, Moderne und mehr.",
    description:
      "Wir stellen klassischen, moderne muster von Zäune aus polen. Wir bieten Muster entsprechend den Bedürfnissen des Kunden anzupassen oder zu erstellen.",
    locale: "de_DE",
    type: "website",
    url: "https://firemetal.eu/muster",
    siteName: "Firemetal - Zäune aus Polen",
  },
};

export default function MusterPage() {
  const galerieFolder = "muster";

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
          <Balancer>
            Wir stellen unsere <span className="text-ring">Grundmuster</span>{" "}
            von Zäunen, Paneelen und Doppelstabmatten. Wir haben eine große
            Auswahl an <span className="text-ring">klassischen</span>,{" "}
            <span className="text-ring"> modernen</span>, und{" "}
            <span className="text-ring">hochwertigen Designs</span>. Wir bieten
            auch die Möglichkeit, ein Muster entsprechend den Bedürfnissen des
            Kunden anzupassen oder zu erstellen.{" "}
          </Balancer>
        </h1>
        <div className="flex justify-center px-4 py-8">
          <Suspense
            fallback={<Spinner label="Loading..." aria-label="Loding..." />}
          >
            <GetMuster galerieFolder={galerieFolder} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
