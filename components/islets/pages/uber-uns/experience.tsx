import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { HistoryIcon, PencilRulerIcon, UserCheckIcon } from "lucide-react";

export function ExperienceUberUns() {
  return (
    <section className="z-30 mt-8 flex flex-col items-center justify-center">
      <h2 className="z-30 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Erfahrung
      </h2>
      <p className="z-30 pt-4 text-center md:px-12 xl:text-xl 2xl:px-52">
        Unsere Firma ist seit 4 Jahren erfolgreich auf dem Markt tätig. In
        dieser Zeit haben wir eine Vielzahl an Aufträgen für Sie abgewickelt und
        sehr viele Erfahrungen gesammelt. Wir gehen immer individuell auf jeden
        Kunden ein. Wir versuchen, Sie gut zu beraten und vor allem alle Ihre
        Wünsche zu erfüllen. Unser Portfolio ist sehr umfangreich. Unsere
        Projekte finden Sie unter Galerie und Metamorphosen. Wer weiß,
        vielleicht ist Ihr Traumprojekt bald auch dabei?
      </p>
      <div className="flex flex-col items-center gap-8 pt-8 2xl:flex-row">
        <Card
          isPressable
          className="flex w-full items-center justify-center bg-white/5 py-4 shadow-2xl sm:w-96"
        >
          <CardHeader className="flex-col items-center pb-0">
            <HistoryIcon className="h-24 w-24 stroke-ring" />
          </CardHeader>

          <CardBody className="flex items-center overflow-visible pt-4">
            <h3 className="text-center text-lg font-semibold md:text-xl">
              Wir sind seit 4 Jahren tätig!
            </h3>
          </CardBody>
        </Card>
        <Card
          isPressable
          className="flex w-full items-center justify-center bg-white/5 py-4 shadow-2xl sm:w-96"
          shadow="lg"
        >
          <CardHeader className="flex-col items-center pb-0">
            <PencilRulerIcon className="h-24 w-24 stroke-ring" />
          </CardHeader>

          <CardBody className="flex items-center overflow-visible pt-4">
            <h3 className="text-center text-lg font-semibold md:text-xl">
              Hunderte realisierte Projekte
            </h3>
          </CardBody>
        </Card>
        <Card
          isPressable
          className="flex w-full items-center justify-center bg-white/5 py-4 shadow-2xl sm:w-96"
          shadow="lg"
        >
          <CardHeader className="flex-col items-center pb-0">
            <UserCheckIcon className="h-24 w-24 stroke-ring" />
          </CardHeader>

          <CardBody className="flex items-center overflow-visible pt-4">
            <h3 className="text-center text-lg font-semibold md:text-xl">
              Hunderte zufriedene Kunden
            </h3>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
