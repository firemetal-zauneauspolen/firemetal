import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetRosetten } from '@/components/islets/pages/grotten-und-rosetten/get-rosetten';
import Balancer from "react-wrap-balancer";

export default function RosettenPage() {
    const rosettenFolder = "grotten-und-rosetten/rosetten";

    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
                    <Balancer>
                        Als polnischer Hersteller sind wir auf <span className="text-ring">Stuck-Rosetten</span> und <span className="text-ring">Zierelemente</span> spezialisiert. Unsere Produkte vereinen <span className="text-ring">meisterhafte Handwerkskunst</span> mit <span className="text-ring">eleganten Designs</span> – perfekt für <span className="text-ring">historische</span> wie auch <span className="text-ring">moderne</span> Innenräume. Dank präziser <span className="text-ring">Fertigung</span> und hochwertiger Materialien lassen sich alle Ornamente einfach montieren. Verleihen Sie Ihren Räumen mit uns <span className="text-ring">einen einzigartigen Charakter</span>.
                    </Balancer>
                </h1>
                <div className="flex justify-center py-8">
                    <Suspense
                        fallback={<Spinner label="Loading..." aria-label="Loding..." />}
                    >
                        <GetRosetten galerieFolder={rosettenFolder} />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
