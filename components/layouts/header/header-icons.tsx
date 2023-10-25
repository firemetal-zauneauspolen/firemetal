import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/layouts/header/theme-toggle";
import { BiLogoGooglePlus, BiLogoFacebook } from "react-icons/bi";

export function HeaderIcons() {
  return (
    <>
      <ThemeToggle />
      <Button variant={"icon"} size={"icon"}>
        <Link href={"https://www.facebook.com/firemetaleu"} target="_blank">
          <BiLogoFacebook className="h-[1.6rem] w-[1.6rem]" />
        </Link>
      </Button>
      <Button variant={"icon"} size={"icon"}>
        <Link href={"https://goo.gl/maps/BrZm7MDpNn8z7d5t9"} target="_blank">
          <BiLogoGooglePlus className="h-[1.8rem] w-[1.8rem]" />
        </Link>
      </Button>
    </>
  );
}
