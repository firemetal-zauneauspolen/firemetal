import { FireBlobGradient } from "@/components/islets/blobs/fire-blob-gradient";

export default function OtherPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-2">
        Other
      </section>

      <FireBlobGradient
        paddingTopSM="sm:-top-[180rem]"
        paddingTop="-top-[280rem]"
      />
    </>
  );
}
