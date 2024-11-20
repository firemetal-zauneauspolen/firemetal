"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { musterLinks } from "@/lib/consts";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function MusterMenu() {
  const currentPath = usePathname();
  return (
    <div className="mb-10 block px-4 text-center">
      {musterLinks.map((item, idx) => (
        <Link key={idx} href={item.path}>
          <Button
            variant={"transparent"}
            className={cn(
              "text-xl hover:bg-primary",
              currentPath === item.path ? "bg-ring" : "",
            )}
          >
            {item.label}
          </Button>
        </Link>
      ))}
    </div>
  );
}
