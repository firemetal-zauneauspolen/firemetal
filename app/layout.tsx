import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layouts/header/header";
import { Providers } from "./providers";
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FireMetal",
  description: "Metallbau aus polen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={montserrat.className}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "system" }}>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
