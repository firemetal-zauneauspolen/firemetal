import { PriceCalculator } from "@/components/islets/pages/price-calculator/price-calculator";
import { Balancer } from "react-wrap-balancer";

export default function PreisKalkulkationPage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center">
      <h1 className="max-w-sm px-8 text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
        <Balancer>
          Uzupełnij <span className="text-ring">formularz wyceny</span>.
          Następnie my się z Tobą skanktujemy i przedstawimy Ci wszystkie
          szczegóły.
        </Balancer>
      </h1>
      <div className="mt-8 w-11/12">
        <PriceCalculator />
      </div>
    </section>
  );
}
