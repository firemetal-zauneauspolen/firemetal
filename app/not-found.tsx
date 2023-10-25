import { Spinner } from "@nextui-org/spinner";

export default function NotFoundPage() {
  return (
    <main className="-mt-36 flex min-h-screen items-center justify-center px-2">
      <div className="flex flex-col items-center text-center">
        <Spinner size="lg" className="pb-4" aria-label="Loding..." />
        <p>Strona o podanym adresie nie istnieje. </p>
        <p>Zostaniesz automatycznie przekierowany za kilka sekund...</p>
        <meta
          http-equiv="refresh"
          content={`3;url=https://${process.env.DOMAIN_ADDRESS}`}
        />
      </div>
    </main>
  );
}
