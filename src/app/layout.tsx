import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsAppButton } from "@/components/FloatingWhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  title: "Personal Shopper en España para Venezuela | Arianna Malandrino",
  description: "Compra productos en España desde Venezuela con Arianna Malandrino. Personal shopper en Valencia con cotización clara, asesoría personalizada y seguimiento por WhatsApp.",
  keywords: "personal shopper España Venezuela, comprar en España desde Venezuela, encargos España Venezuela, personal shopper Valencia, compras Zara España Venezuela, Arianna Malandrino",
  openGraph: {
    title: "Personal Shopper en España para Venezuela | Arianna Malandrino",
    description: "Compra productos en España desde Venezuela con Arianna Malandrino. Personal shopper en Valencia con cotización clara, asesoría personalizada y seguimiento por WhatsApp.",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Personal Shopper Arianna Malandrino",
      },
    ],
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/icon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden text-[#282824]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
