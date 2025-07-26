import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner";
import { GetGrotten } from '@/components/islets/pages/grotten-und-rosetten/get-grotten';
import Balancer from "react-wrap-balancer";

export default function GrottenPage() {
    const grottenFolder = "grotten-und-rosetten/grotten";

    return (
        <section>
            <div className="flex flex-col items-center justify-center">
                <h1 className="max-w-sm text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-3xl">
                    <Balancer>
                        Entdecken Sie unsere exklusive Welt der <span className="text-ring">Grotten und RosettenGrundmuster</span>{" "} und verleihen Sie Ihren Räumen und Gärten einen Hauch von zeitloser Eleganz. Wir bieten Ihnen eine breite Palette an Stuckelementen, die durch höchste Qualität und kunstvolles Design überzeugen. Lassen Sie sich von unserem Sortiment inspirieren und finden Sie die perfekte Dekoration, die Ihren persönlichen Stil unterstreicht.
                    </Balancer>
                </h1>
                <div className="flex justify-center px-4 py-8">
                    <Suspense
                        fallback={<Spinner label="Loading..." aria-label="Loding..." />}
                    >
                        <GetGrotten galerieFolder={grottenFolder} />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
