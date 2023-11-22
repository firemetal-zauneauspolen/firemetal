import { Spinner } from "@nextui-org/spinner";

export default function NotFoundPage() {
  return (
    <main className="-mt-36 flex min-h-screen items-center justify-center px-2">
      <div className="flex flex-col items-center text-center">
        <Spinner size="lg" className="pb-4" aria-label="Loding..." />
        <p>Die Webseite unter der angegebenen Adresse existiert nicht. </p>
        <p>Du wirst in wenigen Sekunden automatisch weitergeleitet...</p>
        <meta http-equiv="refresh" content={`3;url=${process.env.SITE_URL}`} />
      </div>
    </main>
  );
}
