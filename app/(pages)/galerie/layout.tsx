import { GalerieMenu } from "@/components/islets/pages/galerie/galerie-menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <GalerieMenu />
      {children}
    </section>
  );
}
