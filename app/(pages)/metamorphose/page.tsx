import { Suspense } from "react";
import { Balancer } from "react-wrap-balancer";
import { Spinner } from "@nextui-org/spinner";
import { GetMetamorphose } from "@/components/islets/pages/metamorphose/get-metamorphose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Firemetal metamorphosen |  Zäune aus Polen",
  description:
    "Wir präsentieren Metamorphosen von 🔥 FireMetal unserer zufriedenen Kunden.  🔥 Überprüfen unsere Hausmetamorphosen. Online Preiskalkulation ✅ Hochwertige.",
  applicationName: "Firemetal - Zäune aus Polen",
  metadataBase: new URL("https://firemetal.eu/angebot/metamorphose"),
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
    title: "Firemetal metamorphosen |  Zäune aus Polen",
    description:
      "Wir präsentieren Metamorphosen von 🔥 FireMetal unserer zufriedenen Kunden.  🔥 Überprüfen unsere Hausmetamorphosen. Online Preiskalkulation ✅ Hochwertige.",
    locale: "de_DE",
    type: "website",
    url: "https://firemetal.eu/angebot/metamorphose",
    siteName: "Firemetal - Zäune aus Polen",
  },
};

export default function MetamorphosePage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center">
      <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
        <Balancer>
          Alle hier vorgestellten{" "}
          <span className="text-ring">Metamorphosen</span> sind Aufträge unserer
          zufriedenen Kunden. Wir hoffen, dass Ihr{" "}
          <span className="text-ring"> Traumprojekt bald da ist.</span>
        </Balancer>
      </h1>

      <Suspense
        fallback={
          <Spinner label="Loading..." aria-label="Loding..." className="py-8" />
        }
      >
        <GetMetamorphose />
      </Suspense>
    </section>
  );
}
