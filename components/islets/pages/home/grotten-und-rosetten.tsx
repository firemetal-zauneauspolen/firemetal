import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export function GrottenUndRosettenHome() {
    return (
        <>
            <section className="flex flex-col items-center">
                <h2 className="z-30 pt-8 text-center text-4xl font-bold text-primary transition-colors duration-500 group-hover:text-primary">
                    Unsere Grotten und Rosetten
                </h2>

                <p className="z-30 pb-8 pt-4 text-center text-base xl:text-xl">
                    <Balancer>
                        Entdecken Sie unsere exklusive Welt der Grotten und Rosetten und verleihen Sie Ihren Räumen und Gärten einen Hauch von zeitloser Eleganz. Wir bieten Ihnen eine breite Palette an Stuckelementen, die durch höchste Qualität und kunstvolles Design überzeugen. Lassen Sie sich von unserem Sortiment inspirieren und finden Sie die perfekte Dekoration, die Ihren persönlichen Stil unterstreicht.
                    </Balancer>
                </p>
                <Link href="/grotten-und-rosetten">
                    <div className="flex flex-col items-center pb-8">
                        <div className="columns-1 space-y-4">
                            <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                                <Image
                                    src={"/img/grotten-und-rosetten/grotten-1.webp"}
                                    quality={69}
                                    width={800}
                                    height={300}
                                    alt="grotten metallbau firemetal"
                                />
                            </div>
                            <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                                <Image
                                    src={"/img/grotten-und-rosetten/grotten-2.webp"}
                                    quality={69}
                                    width={800}
                                    height={300}
                                    alt="grotten metallbau firemetal"
                                />
                            </div>
                            <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                                <Image
                                    src={"/img/grotten-und-rosetten/rosetten-1.webp"}
                                    quality={69}
                                    width={800}
                                    height={300}
                                    alt="rosetten metallbau firemetal"
                                />
                            </div>
                            <div className="relative rounded-xl bg-white px-4 py-6 transition-all duration-500 hover:rounded-none sm:px-6">
                                <Image
                                    src={"/img/grotten-und-rosetten/rosetten-2.webp"}
                                    quality={69}
                                    width={800}
                                    height={300}
                                    alt="rosetten metallbau firemetal"
                                />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/grotten-und-rosetten"}>
                    <Button className="z-50 rounded-full pl-6 font-semibold sm:text-lg">
                        Grotten und rosetten Prüfen
                        <ChevronRightIcon className="text-base sm:text-lg" />
                    </Button>
                </Link>
            </section>
        </>
    );
}
