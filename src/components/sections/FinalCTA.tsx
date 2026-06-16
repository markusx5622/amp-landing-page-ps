import { getDefaultWhatsAppUrl, getCatalogWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#182D18] text-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-[#546E52] rounded-full opacity-20 blur-[100px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[100%] bg-[#E2EADF] rounded-full opacity-10 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="w-16 h-16 rounded-full bg-[#FAF9F4] flex items-center justify-center p-1">
             <img src="/logo-ari-personal-shopper.JPG" alt="Logo" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
        <h2 className="text-[32px] leading-tight md:text-5xl font-bold text-[#F4F2E8] mb-4 md:mb-6 tracking-tight text-balance">
          ¿Lista para cotizar tu pedido desde España?
        </h2>
        <p className="text-lg md:text-xl text-[#E2EADF]/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
          Envíame lo que quieres comprar y te ayudo a revisar disponibilidad, precio y opciones de envío.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto bg-[#F4F2E8] text-[#182D18] hover:bg-[#E2EADF] hover:text-[#182D18]" asChild>
            <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Cotizar por WhatsApp
            </a>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#E2EADF] text-[#E2EADF] hover:bg-[#E2EADF] hover:text-[#182D18]" asChild>
            <a href={getCatalogWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Pedir catálogo
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
