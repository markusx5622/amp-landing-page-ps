"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Cómo funciona", href: "#como-funciona" },
  { name: "Servicios", href: "#servicios" },
  { name: "Catálogo", href: "#catalogo" },
  { name: "Confianza", href: "#confianza" },
  { name: "FAQ", href: "#faq" },
  { name: "Cotizar", href: "#cotizar" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#182D18]/10 bg-[#FAF9F4]/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border border-[#182D18]/20 bg-[#182D18]">
            {/* If the image fails to load, the background color and text act as a fallback */}
            <Image
              src="/logo-ari-personal-shopper.JPG"
              alt="Logo Arianna Malandrino"
              fill
              className="object-cover"
            />
          </div>
          <span className="font-bold text-[#182D18] hidden sm:block text-lg leading-tight">
            Arianna<br />Malandrino
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#282824] hover:text-[#546E52] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button asChild>
            <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Pedir por WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#182D18]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-[#FAF9F4] shadow-xl overflow-y-auto z-40 py-6 px-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-[#282824] hover:text-[#546E52] p-3 rounded-lg hover:bg-[#182D18]/5 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Button asChild className="w-full mt-auto mb-8 h-14 text-base">
            <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Pedir por WhatsApp
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
