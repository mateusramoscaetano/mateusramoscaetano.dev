import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "../lib/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Mateus Ramos Caetano - Desenvolvedor Full-stack",
  description:
    "Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.",
  keywords: [
    "desenvolvedor",
    "full-stack",
    "react",
    "next.js",
    "typescript",
    "node.js",
  ],
  authors: [{ name: "Mateus Ramos Caetano" }],
  creator: "Mateus Ramos Caetano",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mateus Ramos Caetano - Desenvolvedor Full-stack",
    description:
      "Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.",
    type: "website",
    locale: "pt_BR",
    url: "https://mateusramoscaetano.dev",
    siteName: "Mateus Ramos Caetano Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Ramos Caetano - Desenvolvedor Full-stack",
    description:
      "Portfolio profissional de Mateus Ramos Caetano, desenvolvedor full-stack especializado em React, Next.js, Node.js e tecnologias modernas.",
    creator: "@mateusramoscaetano",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
      </head>
      <body className="bg-gray-950 text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
