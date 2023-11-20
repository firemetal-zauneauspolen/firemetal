import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GetImages } from "@/components/islets/pages/galerie/get-images";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
            <GetImages />
          </Suspense>
        </div>
        <div className="flex flex-col items-center px-2">
          <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
            🥳 Herzlichen Glückwunsch, Sie haben das Ende unserer Galerie
            erreicht 🥳
          </h2>
          <p className="z-30 py-4 text-center text-base md:px-12 xl:text-xl 2xl:px-52">
            Wir schätzen Kunden wie Sie sehr, deshalb haben wir speziell für Sie
            einen 5% Rabatt auf die gesamte Bestellung vorbereitet. Klicken Sie
            auf die Schaltfläche, um Ihren Rabattcode zu erhalten.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full">Den Rabattcode erhalten</Button>
            </DialogTrigger>
            <DialogContent className="flex w-11/12 max-w-sm flex-col items-center justify-center p-12 text-center">
              <DialogTitle className="flex flex-col">
                Dein Rabattcode lautet:
                <div className="pt-4 text-2xl">5UBERRASCHUNGS%</div>
              </DialogTitle>
              <DialogDescription>
                Um den Rabattcode zu nutzen, verwenden Sie bitte unser
                Kontaktformular oder unser Preiskalkulation-Formular. Kopiere
                den erhaltenen Code und sende ihn uns in deiner Nachricht.
              </DialogDescription>
              <Link href={"/kontakt"} className="w-full">
                <Button className="w-full rounded-full">Kontakt</Button>
              </Link>
              <Link href={"/preiskalkulation"} className="w-full">
                <Button className="w-full rounded-full">
                  Preiskalkulation
                </Button>
              </Link>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
