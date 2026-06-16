import { getCatalogWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function CuratedCatalog() {
  const catalogItems = [
    { title: "Top Zara y Mango de la semana" },
    { title: "Skincare europeo recomendado" },
    { title: "Perfumes y cosmética" },
    { title: "Ideas de regalo desde España" },
    { title: "Rebajas y oportunidades" }
  ];

  return (
    <section id="catalogo" className="py-20 bg-white border-y border-[#182D18]/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#182D18] mb-4">
              Selecciones pensadas para ti
            </h2>
            <p className="text-lg text-[#546E52]">
              No tienes que saber exactamente qué comprar. También puedes inspirarte con selecciones de productos, ofertas y recomendaciones desde España.
            </p>
          </div>
          <Button variant="outline" className="shrink-0" asChild>
            <a href={getCatalogWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Pedir catálogo por WhatsApp
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {catalogItems.map((item, i) => (
            <div 
              key={i} 
              className="group cursor-pointer relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#FAF9F4] border border-[#182D18]/5 flex flex-col justify-end p-4 transition-all hover:shadow-lg"
            >
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-[#E2EADF]/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full border-2 border-[#182D18]/20 flex items-center justify-center bg-white/50 backdrop-blur-sm text-[#182D18]/40">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#182D18]/80 via-[#182D18]/20 to-transparent opacity-80" />
              
              <h3 className="relative z-10 text-white font-semibold text-lg leading-tight">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
