import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { HistoryIcon, PencilRulerIcon, UserCheckIcon } from "lucide-react";

export function ExperienceUberUns() {
  return (
    <section className="z-30 mt-8 flex flex-col items-center justify-center">
      <h2 className="z-30 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
        Doświadczenie
      </h2>
      <p className="z-30 pt-4 text-center xl:px-96 xl:text-xl">
        Nasza firma sukcesywnie działa na rynku już od 5 lat. Przez ten czas
        zrealizowaliśmy dla Was ogromną ilość zamówień i zdobyliśmy niesamowite
        doświadczenie. Zawsze podchodzimy do każdego z Was indywidulanie.
        Staramy się, dobrze doradzić i przede wszystkim spełnić wszystkie wasze
        wymagania. Możemy pochwalić się szeroko rozbudowanym portfolio. Nasze
        realizacje możecie zobaczyć w zakładce glaria oraz metamorfozy. Kto wie
        może niedługo znajdzie się też tam Twój wymarzony projekt?
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
              Działamy już od 5 lat!
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
              Setki zrealizowanych projektów!
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
              Setki zadowlonych klientów!
            </h3>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
