import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import { ChevronRightIcon } from "lucide-react";
import { PriceCalculator } from "../price-calculator/price-calculator";

export function PreiskalkulationHome() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Holen Sie sich ein erstes Angebot ein
        </h2>
        <p className="z-30 pb-8 pt-4 text-center text-base xl:px-96 xl:text-xl">
          <Balancer>
            Möchten Sie den Preis für Ihr Projekt erfahren? Füllen Sie das
            Preisanfrage-Formular aus, und wir erstellen für Sie eine Vorläufige
            Kostenschätzung, die auf Ihre Bedürfnisse zugeschnitten ist. So
            erfahren Sie schnell und bequem, wie viel Ihr Metallprojekt kosten
            wird.
          </Balancer>
        </p>
        <PriceCalculator />

        <Button className="z-50 mt-8 rounded-full pl-6 font-semibold sm:text-lg">
          Prüfen Sie Preiskalkulation
          <ChevronRightIcon className="text-base sm:text-lg" />
        </Button>
      </section>
    </>
  );
}
