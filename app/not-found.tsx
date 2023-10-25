"use client";

import { Spinner } from "@nextui-org/spinner";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useCountDown from "@/hooks/useCountDown";

export default function NotFoundPage() {
  const INITIAL_TIME = 5000;
  const INTERVAL = 1000;

  const time = useCountDown(INITIAL_TIME, INTERVAL);

  return (
    <main className="-mt-36 flex min-h-screen items-center justify-center px-2">
      <div className="flex flex-col items-center text-center">
        <Spinner size="lg" className="pb-4" aria-label="Loding..." />
        <p>Strona o podanym adresie nie istnieje. </p>
        <p>Za {time} sekund nastąpi automatyczne przekierowanie...</p>
      </div>
    </main>
  );
}
