import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetCNCMuster } from "@/components/islets/pages/muster/get-cnc-muster";
import Balancer from "react-wrap-balancer";

export default function MusterCncPage() {
  const musterFolder = "muster/cnc";

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
           <Balancer> Wir sind ein polnischer Hersteller von <span className="text-ring">CNC-geschnittenen Zäunen</span> und <span className="text-ring">Paneelen</span>. Unsere Produkte verbinden <span className="text-ring">höchste Qualität</span> mit <span className="text-ring">individuellen Designs</span> – ideal für <span className="text-ring">moderne</span> und <span className="text-ring">klassische</span> Anwendungen. Dank präziser <span className="text-ring">Lasertechnik</span> lassen sich alle Elemente mühelos anpassen und montieren. Gestalten Sie mit uns <span className="text-ring">einzigartige Lösungen</span>. </Balancer>
        </h1>
        <div className="flex justify-center py-8">
          <Suspense
            fallback={<Spinner label="Loading..." aria-label="Loding..." />}
          >
            <GetCNCMuster galerieFolder={musterFolder} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
