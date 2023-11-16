import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { BiEnvelope, BiLogoWhatsapp, BiSolidPhone } from "react-icons/bi";
import { ContactForm } from "../kontakt/contact-form";

export function KontaktHome() {
  return (
    <>
      <section className="flex flex-col items-center">
        <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
          Kontaktieren Sie uns
        </h2>
        <p className="z-30 pb-8 pt-4 text-center text-base xl:px-96 xl:text-xl">
          <Balancer>
            Wir sind hier, um Ihnen zu helfen. Kontaktieren Sie uns per Telefon,
            E-Mail oder füllen Sie das Kontaktformular aus. Ihr Komfort und Ihre
            Zufriedenheit stehen für uns an erster Stelle. Wir sind bereit, Ihre
            Fragen zu beantworten und Ihre Erwartungen zu erfüllen.
          </Balancer>
        </p>
        <p className="pb-8 text-center lg:text-xl">
          Drücken Sie den Knopf, um uns zu kontaktieren
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={"tel: +49015237096939"}>
            <Button className="rounded-full">
              <BiSolidPhone className={"h-6 w-6"} />
              Anrufen
            </Button>
          </Link>
          <Link href={"mailto:firemetal.eu"}>
            <Button className="rounded-full">
              <BiEnvelope className={"h-6 w-6"} />
              Email
            </Button>
          </Link>
          <Link href={"https://api.whatsapp.com/send/?phone=+49015237096939"}>
            <Button className="rounded-full">
              <BiLogoWhatsapp className={"h-7 w-7"} />
              WhatsApp
            </Button>
          </Link>
        </div>
        <div className="mt-8 w-full max-w-lg">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
