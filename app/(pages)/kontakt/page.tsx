import { ContactForm } from "@/components/islets/pages/kontakt/contact-form";
import { Button } from "@/components/ui/button";
import Balancer from "react-wrap-balancer";
import { BiSolidPhone, BiLogoWhatsapp, BiEnvelope } from "react-icons/bi";
import Link from "next/link";

export default function KontaktPage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center px-8">
      <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
        <Balancer>
          Wählen Sie die bequemste{" "}
          <span className="text-ring">Kontaktform</span> und kontaktieren Sie
          uns. Wir kümmern uns um den Rest 🤗.
        </Balancer>
      </h1>
      <p className="mt-8 text-center lg:text-xl">
        Drücken Sie den Knopf um mit uns Kontakt aufzunehmen
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      <p className="mt-8 text-center lg:text-xl">
        Oder füllen Sie das Kontaktformular aus
      </p>
      <div className="mt-8 w-full max-w-lg">
        <ContactForm />
      </div>
      <div className="mt-8 pb-8 text-center">
        <h2 className="mb-8 text-xl lg:text-xl">Kontaktinformationen</h2>
        <h3 className="text-ring lg:text-xl">Telefon:</h3>
        <p className="lg:text-xl">
          +49 015237096939 <br className="flex sm:hidden" /> / +48 515466388
        </p>
        <h3 className="text-ring lg:text-xl">Email:</h3>
        <p className="lg:text-xl">info@firemetal.eu</p>
        <h3 className="text-ring lg:text-xl">Facebook:</h3>
        <p className="lg:text-xl">www.facebook.com/firemetaleu</p>
        <h3 className="text-ring lg:text-xl">Google Profile:</h3>
        <p className="lg:text-xl">goo.gl/maps/BrZm7MDpNn8z7d5t9</p>
        <h3 className="text-ring lg:text-xl">Firmenanschrift:</h3>
        <p className="lg:text-xl">Stargard Gubiński 37, 66-620 Gubin</p>
        <h3 className="text-ring lg:text-xl">FireMetal-Besitzer:</h3>
        <p className="lg:text-xl">Przemysław Dereziński</p>
      </div>
    </section>
  );
}
