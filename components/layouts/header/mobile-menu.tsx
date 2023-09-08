"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../../ui/button";
import Link from "next/link";
import { HeaderIcons } from "./header-icons";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import { menuLinks } from "@/lib/consts";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1024px)");
  const isAboveLargeScreen = useMediaQuery("(min-width: 1280px)");

  useEffect(() => {
    if (isAboveMediumScreen || isAboveLargeScreen) {
      setIsOpen(false);
    }
  }, [isAboveMediumScreen, isAboveLargeScreen, setIsOpen]);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant={"icon"} size={"icon"} className="flex xl:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side={"top"} className="h-screen">
        <div className="flex flex-col items-center justify-center pt-8">
          <nav className="flex w-64 flex-col divide-y pt-8 text-center text-base font-semibold">
            {menuLinks.map((menuLink, idx) => (
              <Link
                key={idx}
                href={menuLink.path}
                onClick={() => setIsOpen(false)}
                className="py-3 transition-colors duration-500 hover:text-primary"
              >
                {menuLink.label}
              </Link>
            ))}
            <Link
              href={"/kontakt"}
              onClick={() => setIsOpen(false)}
              className="py-5 transition-colors duration-500 hover:text-primary"
            >
              <Button className="rounded-full font-semibold">Kontakt</Button>
            </Link>
          </nav>

          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <HeaderIcons />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
