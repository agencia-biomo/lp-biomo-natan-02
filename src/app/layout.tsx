import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Criação de Sites de Alta Conversão | Biomo Agência de Sites",
  description: "Criação de sites profissionais que vendem. Sites institucionais, landing pages e lojas virtuais otimizados para Google. Entrega em 7 dias. A partir de R$997.",
  keywords: "criação de sites, criar site profissional, site institucional, landing page, loja virtual, agência de sites, fazer site, site para empresa, site de alta conversão",
  authors: [{ name: "Biomo Agência de Sites" }],
  openGraph: {
    title: "Criação de Sites de Alta Conversão | Biomo",
    description: "Sites profissionais que vendem. Entrega em 7 dias com garantia de resultado.",
    type: "website",
    url: "https://biomo.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Criação de Sites Profissionais | Biomo",
    description: "Sites institucionais, landing pages e lojas virtuais. A partir de R$997.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
