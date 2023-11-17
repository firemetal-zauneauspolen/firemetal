import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetMuster } from "@/components/islets/pages/muster/get-muster";
import Balancer from "react-wrap-balancer";

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
