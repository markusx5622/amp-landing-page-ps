import { MessageCircle } from "lucide-react";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={getDefaultWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
