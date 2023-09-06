import { GalerieMenu2 } from "@/components/islets/pages/galerie2/galerie-menu2";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      <GalerieMenu2 />
      {children}
    </section>
  );
}
