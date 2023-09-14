import { Suspense } from "react";
import { Balancer } from "react-wrap-balancer";
import { Spinner } from "@nextui-org/spinner";
import { GetMetamorphose } from "@/components/islets/pages/metamorphose/get-metamorphose";

export default function MetamorphosePage() {
  return (
    <section className="mt-8 flex flex-col items-center justify-center pb-96">
      <h1 className="max-w-sm px-8 text-center text-xl font-extrabold sm:max-w-xl sm:text-2xl lg:max-w-4xl lg:text-4xl">
        <Balancer>
          Wszystkie prezentowane tutaj{" "}
          <span className="text-ring">metamrofozy</span> to zlecenia od naszych
          zadowolonych klientów. Mamy nadzieję, że wkrótce znajdzie się też
          tutaj <span className="text-ring">Twój wymarzony projekt.</span>
        </Balancer>
      </h1>

      <Suspense
        fallback={
          <Spinner label="Loading..." aria-label="Loding..." className="py-8" />
        }
      >
        <GetMetamorphose />
      </Suspense>
    </section>
  );
}
