import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oportunidades com IA",
  description:
    "Fazer tarefas domésticas não será mais problema: agora você é remunerado para treinar modelos de IA e robótica com vídeos curtos do dia a dia.",
  keywords: [
    "Treinar IA",
    "Tarefas domésticas IA",
    "Oportunidades com IA",
    "Renda extra IA",
    "Claru ai",
    "Crowtado",
    "Robótica doméstica",
  ],
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var savedTheme = localStorage.getItem('theme');
                if (savedTheme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-cyber-950 text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-amberNeon selection:text-cyber-950 min-h-screen relative overflow-x-hidden transition-colors">
        {/* Luz fluorescente interativa que acompanha o mouse */}
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}
