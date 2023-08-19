import { ContactForm } from "@/components/islets/contact-form";

export default function KontaktPage() {
  return (
    <section className="flex flex-col items-center justify-center space-y-10 px-8">
      <h1 className="text-center text-xl font-extrabold sm:max-w-screen-md lg:text-4xl">
        Prosimy wybierz najwygodniejszą dla siebie forme kontaktu i poprostu
        skontaktuj się z nami. My zajmiemy się resztą 🤗.
      </h1>
      <div className="w-full max-w-lg">
        <ContactForm />
      </div>
    </section>
  );
}
