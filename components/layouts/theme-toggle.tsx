"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

export function ThemeToggle() {
  const { setTheme, theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  currentTheme ? setTheme(currentTheme) : "";

  return (
    <Button
      variant="icon"
      size="icon"
      onClick={() => {
        currentTheme === "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      <BiSolidSun className="h-[1.2rem] w-[1.2rem] scale-100 dark:scale-0" />
      <BiSolidMoon className="absolute h-[1.2rem] w-[1.2rem] scale-0 dark:scale-100" />
    </Button>
  );
}
