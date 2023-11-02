import { FireBlobGradient } from "@/components/islets/blobs/fire-blob-gradient";

export default function GitterPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-2">
        Gitter
      </section>

      <FireBlobGradient
        paddingTopSM="sm:-top-[180rem]"
        paddingTop="-top-[280rem]"
      />
    </>
  );
}
