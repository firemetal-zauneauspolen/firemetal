"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { galerieLinksData } from "@/lib/const-data/galerie/galerie-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import cloudinary from "cloudinary";

export type Folder = { name: string; path: string };

export function GalerieMenu() {
  /*
    const { folders } = (await cloudinary.v2.api.root_folders()) as {
    folders: Folder[];
  };
  */

  const currentPath = usePathname();
  return (
    <div className="mb-10 block px-4 text-center">
      {galerieLinksData.map((item) => (
        <Link key={item.label} href={item.path}>
          <Button
            variant={"transparent"}
            className={cn(
              "text-xl hover:bg-primary",
              currentPath === item.path ? "bg-ring" : ""
            )}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
