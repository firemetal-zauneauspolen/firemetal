import { ContactForm } from "@/components/islets/contact-form";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import { BiSolidPhone, BiLogoWhatsapp, BiEnvelope } from "react-icons/bi";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center px-8">
      <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
        <Balancer>
          Wybierz najwygodniejszą dla siebie forme kontaktu i skontaktuj się z
          nami. My zajmiemy się resztą 🤗.
        </Balancer>
      </h1>

      <p className="mt-8 text-center lg:text-xl">
        Kliknij w przycisk aby się z nami skontaktować
      </p>
      <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      <p className="mt-4 text-center lg:text-xl">
        Lub uzupełnij formularz kontaktowy
      </p>
      <div className="mt-4 w-full max-w-lg">
        <ContactForm />
      </div>
      <div className="mt-8 pb-8 text-center">
        <h2 className="mb-4 text-xl font-bold lg:text-3xl">
          Informacje Kontaktowe
        </h2>
        <h3 className="font-bold text-ring lg:text-xl">Telefon:</h3>
        <p className="lg:text-xl">
          +49 015237096939 <br className="flex sm:hidden" /> / +48 515466388
        </p>
        <h3 className="font-bold text-ring lg:text-xl">Email:</h3>
        <p className="lg:text-xl">info@firemetal.eu</p>
        <h3 className="font-bold text-ring lg:text-xl">Facebook:</h3>
        <p className="lg:text-xl">www.facebook.com/firemetaleu</p>
        <h3 className="font-bold text-ring lg:text-xl">Google Profile:</h3>
        <p className="lg:text-xl">goo.gl/maps/BrZm7MDpNn8z7d5t9</p>
        <h3 className="font-bold text-ring lg:text-xl">Adres frimy:</h3>
        <p className="lg:text-xl">Stargard Gubiński 37, 66-620 Gubin</p>
        <h3 className="font-bold text-ring lg:text-xl">
          Właściciel FireMetal:
        </h3>
        <p className="lg:text-xl">Przemysław Dereziński</p>
      </div>
    </section>
  );
}
