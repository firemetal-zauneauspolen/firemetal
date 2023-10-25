import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeout(delay: number) {
  console.log(delay);
  return new Promise((res) => setTimeout(res, delay));
}
