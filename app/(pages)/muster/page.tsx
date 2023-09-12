import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetMuster } from "@/components/islets/pages/muster/get-muster";
import Balancer from "react-wrap-balancer";

export default function MusterPage() {
  const galerieFolder = "muster";

  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <h1 className="max-w-sm px-8 text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
          <Balancer>
            Prezentujemy Państwu nasze podstawowe{" "}
            <span className="text-ring">wzory</span> płotów, paneli oraz
            sztabmat. Dysponujemy szeroką gamą wzorów{" "}
            <span className="text-ring">klasycznych</span>,{" "}
            <span className="text-ring">nowoczesnych</span>, oraz{" "}
            <span className="text-ring">premium</span>. Oferujemy również
            możliwość dostosowania lub stworzenia wzoru na potrzeby klienta.{" "}
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
