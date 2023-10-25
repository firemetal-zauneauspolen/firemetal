import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layouts/header/header";
import { Providers } from "./providers";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layouts/footer/footer";
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
      <body className={cn("antialiased", montserrat.className)}>
        <Providers
          themeProps={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
          }}
        >
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
