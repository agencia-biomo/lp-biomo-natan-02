import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biomo - Agência de Marketing Digital | Sites, SEO & Tráfego Pago",
  description: "Biomo - Agência de Marketing Digital Full Service. Criação de Sites Profissionais, SEO e Tráfego Pago com Garantia Total.",
  keywords: "agência digital, marketing digital, criação de sites, SEO, tráfego pago, Google Ads, Meta Ads",
  authors: [{ name: "Biomo Agência" }],
  openGraph: {
    title: "Biomo - Agência de Marketing Digital",
    description: "Transformamos sua presença digital em resultados reais. Sites profissionais, SEO e Tráfego Pago.",
    type: "website",
    url: "https://biomo.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biomo - Agência de Marketing Digital",
    description: "Transformamos sua presença digital em resultados reais.",
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
