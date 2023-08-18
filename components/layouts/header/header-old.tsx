import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { HeaderIcons } from "./header-icons";

export function Heder() {
  return (
    <header className="w-full">
      <div className="container flex h-32 items-center">
        <div className="mr-4">
          <Link href={"/"} className="group mr-6 flex items-center">
            <Image
              src={"/img/logo/firemetal-logo.webp"}
              alt={"firemetal metalbau metalzaune zaune logo"}
              width={"50"}
              height={"50"}
              className="mr-3"
            />
            <span className="inline-block text-3xl font-bold transition-colors duration-500  group-hover:text-primary">
              FireMetal
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-base font-semibold lg:flex">
            <Link
              href={"/uber-uns"}
              className="transition-colors duration-500 hover:text-primary"
            >
              Über uns
            </Link>
            <Link
              href={"/angebot"}
              className="transition-colors duration-500 hover:text-primary"
            >
              Angebot
            </Link>
            <Link
              href={"/unsere-projekte"}
              className="transition-colors duration-500 hover:text-primary"
            >
              Unsere Projekte
            </Link>
            <Link
              href={"/galerie"}
              className="transition-colors duration-500 hover:text-primary"
            >
              Galerie
            </Link>
            <Link
              href={"/preiskalkulation"}
              className="transition-colors duration-500 hover:text-primary"
            >
              Preiskalkulation
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button className="hidden rounded-full font-semibold sm:flex">
            Kontakt
          </Button>
          <nav className="hidden space-x-2 2xl:flex">
            <HeaderIcons />
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
