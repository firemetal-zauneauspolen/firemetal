import { GrottenMenu } from '@/components/islets/pages/grotten-und-rosetten/grotten-menu';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Grotten und Rosetten aus Stuck | Hochwertige Deko für Wand & Decke",
    description:
        "Entdecken Sie unsere exklusive Welt der Grotten und Rosetten. Wir bieten eine breite Palette an hochwertigen Stuckelementen sowie Sonderanfertigungen nach Kundenwunsch.",
    applicationName: "Firemetal - Dekorative Elemente",
    metadataBase: new URL("https://firemetal.eu/grotten-und-rosetten"),
    alternates: {
        canonical: "/grotten-und-rosetten",
    },
    generator: "FireMetal - Stuckelemente und Metallkonstruktionen",
    keywords: [
        "Grotten",
        "Rosetten",
        "Stuckelemente",
        "Deckenrosetten",
        "Wanddekoration",
        "Stuck",
        "Sonderanfertigung Stuck",
        "Architektur-Elemente",
        "Gartendekoration",
        "Fassadenschmuck",
        "Gipsstuck",
        "Ornamente",
        "Zierelemente",
        "Innendekoration",
        "Firemetal",
    ],
    openGraph: {
        title: "Grotten und Rosetten | Einzigartige Stuckelemente von Firemetal",
        description:
            "Entdecken Sie unsere exklusive Welt der Grotten und Rosetten. Wir bieten eine breite Palette an hochwertigen Stuckelementen sowie Sonderanfertigungen nach Kundenwunsch.",
        locale: "de_DE",
        type: "website",
        url: "https://firemetal.eu/grotten-und-rosetten",
        siteName: "Firemetal - Dekorative Elemente",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col items-center justify-center">
            <GrottenMenu />
            {children}
        </section>
    );
}