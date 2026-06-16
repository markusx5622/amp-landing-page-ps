import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF9F4] py-10 md:py-20 lg:py-24">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
        <div className="flex flex-col items-start gap-6 max-w-2xl">
          <div className="inline-flex items-center rounded-full bg-[#E2EADF] px-3 py-1 text-sm font-medium text-[#182D18]">
            Base en Valencia • Pedidos a Venezuela
          </div>
          <h1 className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#182D18] text-balance">
            Compra en España desde Venezuela con una personal shopper de confianza
          </h1>
          <p className="text-lg text-[#282824]/80 leading-relaxed">
            Desde Valencia, Arianna te ayuda a conseguir productos originales de tiendas españolas con asesoría personalizada, cotización clara y seguimiento por WhatsApp.
          </p>
          <div className="text-xl font-medium text-[#546E52] italic mb-2">
            "Tu puente confiable entre tiendas de España y Venezuela."
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" asChild>
              <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Cotizar mi pedido
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#como-funciona">
                Ver cómo funciona
              </a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="inline-flex items-center rounded-md bg-white border border-[#182D18]/10 px-2 py-1 text-xs font-medium text-[#546E52]">
              Seguimiento personalizado
            </span>
            <span className="inline-flex items-center rounded-md bg-white border border-[#182D18]/10 px-2 py-1 text-xs font-medium text-[#546E52]">
              Cotización clara
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md aspect-[4/5] rounded-[32px] overflow-hidden shadow-2xl bg-[#182D18]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#182D18] to-[#546E52] opacity-80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center gap-6">
            <div className="w-24 h-24 rounded-full bg-[#FAF9F4] border-4 border-[#E2EADF] shadow-lg flex items-center justify-center overflow-hidden">
               <img src="/logo-ari-personal-shopper.JPG" alt="Logo" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg text-left max-w-xs w-full">
              <div className="flex items-center gap-3 mb-2 border-b border-gray-100 pb-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xs">
                  WA
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Arianna</div>
                  <div className="text-xs text-gray-500">en línea</div>
                </div>
              </div>
              <p className="text-sm text-gray-700 bg-[#E2EADF]/50 rounded-lg p-2 rounded-tl-none">
                ¡Hola! Ya tengo tu pedido de Zara en la tienda de Valencia. Te paso fotos 📸
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
