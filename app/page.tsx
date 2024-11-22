import { AngebotHome } from "@/components/islets/pages/home/angebot";
import { HeroHome } from "@/components/islets/pages/home/hero";
import { KontaktHome } from "@/components/islets/pages/home/kontakt";
import { MetamorphoseHome } from "@/components/islets/pages/home/metamorphose";
import { MusterHome } from "@/components/islets/pages/home/muster";
import { MusterHomeCNC } from '@/components/islets/pages/home/muster-cnc';
import { PreiskalkulationHome } from "@/components/islets/pages/home/preiskalkulation";
import { Testimonials } from "@/components/islets/pages/home/testimonials";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center px-2">
      <HeroHome />
      <MetamorphoseHome />
      <AngebotHome />
      <MusterHome />
      <MusterHomeCNC />
      <Testimonials />
      <PreiskalkulationHome />
      <KontaktHome />
    </main>
  );
}
