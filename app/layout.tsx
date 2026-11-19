import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oportunidades com IA · Ganhe treinando inteligência artificial",
  description:
    "Grave tarefas do dia a dia com o celular e receba de R$ 10 a R$ 67,50 por hora treinando IA e robótica na HUB.xyz. Calcule seus ganhos e entre na comunidade ParaIA.",
  keywords: [
    "Treinar IA",
    "Treinamento de IA",
    "HUB.xyz",
    "Renda extra IA",
    "Tarefas domésticas IA",
    "ParaIA",
    "Oportunidades com IA",
  ],
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title: "Ganhe dinheiro treinando IA",
    description:
      "De R$ 10 a R$ 67,50 por hora gravando tarefas do dia a dia. Calcule seus ganhos.",
    images: ["/hero-person.jpg"],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF8F3",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <GoogleAnalytics gaId="G-6NTBGFKVMG" />
        {children}
      </body>
    </html>
  );
}
