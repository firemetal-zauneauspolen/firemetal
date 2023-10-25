import Image from "next/image";
import { FooterIcons } from "@/components/layouts/footer/footer-icons";
import Link from "next/link";
import { menuLinks } from "@/lib/consts";
import { angebotLinks } from "@/lib/consts";

export function Footer() {
  return (
    <footer className="relative mx-auto flex max-w-screen-xl items-start justify-between px-4 py-24">
      <div className="flex flex-col items-center">
        <Image
          src={"/img/logo/firemetal-logo.webp"}
          alt={"firemetal metalbau metalzaune zaune logo"}
          width={"50"}
          height={"50"}
          className="z-30 mr-3"
        />
        <span className="z-30 mr-3 text-2xl font-bold transition-colors duration-500 group-hover:text-primary  sm:text-3xl">
          FireMetal
        </span>
      </div>
      <nav className="items-left flex flex-col font-semibold leading-8">
        <p>Informacje kontaktowe</p>
        <span className="font-normal text-muted-foreground">
          <p>Firemetal – Przemysław Dereziński</p>
          <p>Mail: info@firemetal.eu</p>
          <p>Tel: +49 015237096939, +48 515466388</p>
        </span>
      </nav>
      <nav className="items-left flex flex-col font-semibold leading-8">
        <p>Strony</p>
        <span className="flex flex-col font-normal text-muted-foreground">
          <Link
            href={"/"}
            className="z-30 transition-colors duration-500 hover:text-primary"
          >
            Homepage
          </Link>
          {menuLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.path}
              className="z-30 transition-all duration-1000 hover:text-primary hover:transition-all hover:duration-1000"
            >
              {link.label}
            </Link>
          ))}
        </span>
      </nav>
      <nav className="items-left flex flex-col font-semibold leading-8">
        <p>Angebot</p>
        <span className="flex flex-col font-normal text-muted-foreground">
          {angebotLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.path}
              className="z-30 transition-all duration-1000 hover:text-primary hover:transition-all hover:duration-1000"
            >
              {item.label}
            </Link>
          ))}
        </span>
      </nav>
      <div className="absolute bottom-24">
        <nav className="flex items-center gap-2">
          <FooterIcons />
        </nav>
        <p className="pt-2 text-muted-foreground">© 2023 Firemetal</p>
      </div>
    </footer>
  );
}