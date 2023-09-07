import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { HeaderIcons } from "./header-icons";
import { FavoritesHeart } from "./favorites-heart";

export function Header() {
  return (
    <header className="mx-auto mb-8 flex max-w-screen-xl items-center justify-between px-4 pt-8">
      <div className="flex">
        <Link href={"/"} className="group flex items-center">
          <Image
            src={"/img/logo/firemetal-logo.webp"}
            alt={"firemetal metalbau metalzaune zaune logo"}
            width={"50"}
            height={"50"}
            className="mr-3"
          />
          <span className="mr-3 text-3xl font-bold transition-colors duration-500  group-hover:text-primary">
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
            href={"/galerie"}
            className="transition-colors duration-500 hover:text-primary"
          >
            Galerie
          </Link>
          <Link
            href={"/metamorphose"}
            className="transition-colors duration-500 hover:text-primary"
          >
            Metamorphose
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
        <Link href={"/kontakt"}>
          <Button className="hidden rounded-full font-semibold sm:flex">
            Kontakt
          </Button>
        </Link>
        <FavoritesHeart />
        <nav className="hidden space-x-2 xl:flex">
          <HeaderIcons />
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
