import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function useCountDown(initialTime: number, interval: number) {
  const [time, setTime] = useState(initialTime);
  const router = useRouter();

  useEffect(() => {
    const customInterval = setInterval(() => {
      if (time > 0) setTime((prev) => prev - interval);
    }, interval);

    if (time === 0) router.push("/");

    return () => clearInterval(customInterval);
  }, [interval, time, router]);

  return time / 1000;
}
