import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[#182D18] text-[#F4F2E8] py-10 md:py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-xl font-bold mb-4">{siteConfig.name}</h2>
          <p className="text-[#E2EADF] max-w-sm">
            Personal shopper en {siteConfig.baseCity} para compras desde España hacia {siteConfig.targetCountry}.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#FAF9F4]">Enlaces</h3>
          <ul className="space-y-2">
            <li><Link href="#como-funciona" className="inline-block py-2 text-[#E2EADF] hover:text-white transition-colors">Cómo funciona</Link></li>
            <li><Link href="#servicios" className="inline-block py-2 text-[#E2EADF] hover:text-white transition-colors">Servicios</Link></li>
            <li><Link href="#faq" className="inline-block py-2 text-[#E2EADF] hover:text-white transition-colors">FAQ</Link></li>
            <li>
              <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#E2EADF] hover:text-white transition-colors">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`https://instagram.com/${siteConfig.instagramHandle.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-[#E2EADF] hover:text-white transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#FAF9F4]">Contacto</h3>
          <ul className="space-y-2 text-[#E2EADF]">
            <li>WhatsApp: {siteConfig.whatsappNumber}</li>
            <li>Instagram: {siteConfig.instagramHandle}</li>
            <li>Email: {siteConfig.email}</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-[#546E52]/40 text-sm text-[#E2EADF]/80 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
        </p>
        <p className="max-w-xl text-center md:text-right text-xs">
          Servicio de intermediación y asesoría de compra. La disponibilidad, precios, tiempos y condiciones pueden variar según tienda, producto y método de envío.
        </p>
      </div>
    </footer>
  );
}
