import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/islets/pages/kontakt/contact-form";
import Link from "next/link";
import { BiEnvelope, BiLogoWhatsapp, BiSolidPhone } from "react-icons/bi";

export function KontaktUberUns() {
  return (
    <section className="z-30 mt-8 flex w-full flex-col items-center justify-center">
      <h2 className="z-30 pt-2 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Skontaktuj się z nami:
      </h2>
      <p className="mt-8 text-center lg:text-xl">
        Kliknij w przycisk aby się z nami skontaktować
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link href={"tel: +49015237096939"}>
          <Button className="rounded-full">
            <BiSolidPhone className={"h-6 w-6"} />
            Zadzwoń
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
      <p className="mt-8 text-center lg:text-xl">
        Lub uzupełnij formularz kontaktowy
      </p>
      <div className="mt-8 w-full max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
