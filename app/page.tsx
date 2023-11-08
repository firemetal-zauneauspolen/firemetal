import { AngebotHome } from "@/components/islets/pages/home/angebot";
import { HeroHome } from "@/components/islets/pages/home/hero";
import { KontaktHome } from "@/components/islets/pages/home/kontakt";
import { MetamorphoseHome } from "@/components/islets/pages/home/metamorphose";
import { MusterHome } from "@/components/islets/pages/home/muster";
import { PreiskalkulationHome } from "@/components/islets/pages/home/preiskalkulation";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-2">
      <HeroHome />
      <MetamorphoseHome />
      <AngebotHome />
      <MusterHome />
      <PreiskalkulationHome />
      <KontaktHome />
    </main>
  );
}
