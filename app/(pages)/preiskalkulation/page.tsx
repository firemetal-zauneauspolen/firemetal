import { PriceCalculator } from "@/components/islets/pages/price-calculator/price-calculator";
import { Metadata } from "next";
import { Balancer } from "react-wrap-balancer";

export const metadata: Metadata = {
  title: "Firemetal Zäune aus Polen Online Preiskalkulation",
  description:
    "Wir präsentieren Ihnen die Kontaktmöglichkeiten zu Firemetal. Wählen Sie eine bequeme Art und warten Sie nicht. Kontaktieren Sie uns jetzt gleich",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/preiskalkulation"),
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
    title: "Firemetal Zäune aus Polen Online Preiskalkulation",
    description:
      "Wir präsentieren Ihnen die Kontaktmöglichkeiten zu Firemetal. Wählen Sie eine bequeme Art und warten Sie nicht. Kontaktieren Sie uns jetzt gleich",
    locale: "de_DE",
    type: "website",
    url: "https://firemetal.eu/preiskalkulation",
    siteName: "Firemetal - Zäune aus Polen",
  },
};

export default function PreisKalkulkationPage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center">
      <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
        <Balancer>
          Füllen Sie <span className="text-ring">das Angebotsformular aus</span>
          . Anschließend werden wir mit Ihnen Kontakt aufnehmen und Ihnen alle
          Details mitteilen.
        </Balancer>
      </h1>
      <div className="mt-8">
        <PriceCalculator />
      </div>
    </section>
  );
}
