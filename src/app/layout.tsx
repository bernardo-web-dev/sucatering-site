import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SuCatering | Buffet Premium em Recife - Eventos Sociais e Corporativos",
  description:
    "Buffet completo em Recife desde 2019. Casamentos, formaturas, eventos corporativos e festas sociais com gastronomia de alto nível. Solicite seu orçamento grátis pelo WhatsApp.",
  keywords: [
    "buffet recife",
    "buffet para eventos",
    "catering recife",
    "buffet casamento recife",
    "buffet corporativo recife",
    "sucatering",
  ],
  openGraph: {
    title: "SuCatering | Buffet Premium em Recife",
    description:
      "Transformando momentos especiais em experiências inesquecíveis. Buffet completo para eventos sociais e corporativos em Recife.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${playfair.variable}`}>
      <body className="bg-[#FAFAF8] text-[#1C1C1A] antialiased">{children}</body>
    </html>
  );
}
