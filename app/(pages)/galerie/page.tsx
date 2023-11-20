import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetFirstImages } from "@/components/islets/pages/galerie/get-first-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function GaleriePage() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center px-4">
          <Suspense
            fallback={
              <Spinner
                label="Loading..."
                aria-label="Loding..."
                className="pt-8"
              />
            }
          >
            <GetFirstImages />
          </Suspense>
        </div>
        <div className="flex flex-col items-center px-2">
          <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
            🤗 Das ist nicht alles..., Wir haben mehr Fotos 🤗
          </h2>
          <p className="z-30 py-4 text-center text-base md:px-12 xl:text-xl 2xl:px-52">
            Wir zeigen nur die letzten 50 Bilder unserer Arbeiten, um Ihre
            Datenübertragung und die Ladegeschwindigkeit der Seite zu
            optimieren. Wenn Sie mehr Bilder sehen möchten, klicken Sie bitte
            auf die Schaltfläche unten. Bitte beachten Sie, dass in unserer
            Galerie über 500 Bilder verfügbar sind. Wir empfehlen, mehr Bilder
            bei einer stabilen web zu laden. Am Ende unserer Galerie erwartet
            dich eine kleine Überraschung.
          </p>
          <Link href={"/galerie/alles"}>
            <Button className="rounded-full">Zeigen Sie mehr Fotos</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
