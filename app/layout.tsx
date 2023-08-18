import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "@/components/layouts/header/header";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang="de">
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
