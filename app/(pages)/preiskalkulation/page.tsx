import { PriceCalculator } from "@/components/islets/pages/price-calculator/price-calculator";
import { Balancer } from "react-wrap-balancer";

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
