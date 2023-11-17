import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiLogoGooglePlus, BiLogoFacebook } from "react-icons/bi";
import { ThemeToggle } from "@/components/layouts/header/theme-toggle";

export function FooterIcons() {
  return (
    <>
      <Button variant={"icon"} size={"iconSM"}>
        <Link href={"https://www.facebook.com/firemetaleu"} target="_blank">
          <BiLogoFacebook className="h-[1.2rem] w-[1.2rem]" />
        </Link>
      </Button>
      <Button variant={"icon"} size={"iconSM"}>
        <Link href={"https://goo.gl/maps/BrZm7MDpNn8z7d5t9"} target="_blank">
          <BiLogoGooglePlus className="h-[1.4rem] w-[1.4rem]" />
        </Link>
      </Button>
      <Link href={"/kontakt"}>
        <Button className="z-30 rounded-full font-semibold">Kontakt</Button>
      </Link>
    </>
  );
}
