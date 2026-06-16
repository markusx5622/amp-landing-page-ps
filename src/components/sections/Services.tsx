import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

export function Services() {
  const services = [
    {
      title: "Servicio Básico",
      target: "Pedidos simples y rápidos.",
      features: [
        "Cotización",
        "Compra del producto",
        "Foto o comprobante",
        "Coordinación del envío"
      ],
      highlight: false
    },
    {
      title: "Servicio Premium",
      target: "Clientas que quieren acompañamiento completo.",
      features: [
        "Búsqueda de alternativas",
        "Asesoría de talla, color o modelo",
        "Compra en varias tiendas",
        "Seguimiento prioritario"
      ],
      highlight: true
    },
    {
      title: "Servicio Regalo",
      target: "Cumpleaños, detalles y ocasiones especiales.",
      features: [
        "Selección del producto",
        "Empaque especial si aplica",
        "Mensaje personalizado",
        "Coordinación de entrega"
      ],
      highlight: false
    },
    {
      title: "Wishlist España",
      target: "Compradoras recurrentes.",
      features: [
        "Lista de deseos priorizada",
        "Cotización por fases",
        "Compras agrupadas"
      ],
      highlight: false
    },
    {
      title: "Lista VIP de Ofertas",
      target: "Clientas que quieren enterarse primero.",
      features: [
        "Acceso a novedades",
        "Rebajas seleccionadas",
        "Oportunidades por temporada"
      ],
      highlight: false
    }
  ];

  return (
    <section id="servicios" className="py-12 md:py-20 bg-[#FAF9F4]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-[28px] leading-tight md:text-4xl font-bold text-[#182D18] mb-4 text-balance">
            Servicios diseñados según el tipo de pedido
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`rounded-[24px] p-6 md:p-8 border ${
                service.highlight 
                  ? "bg-[#182D18] text-white border-[#182D18] shadow-xl lg:-translate-y-4" 
                  : "bg-white text-[#282824] border-[#182D18]/10 shadow-sm hover:shadow-md"
              } transition-all relative flex flex-col h-full`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#E2EADF] text-[#182D18] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recomendado
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${service.highlight ? "text-[#F4F2E8]" : "text-[#182D18]"}`}>
                {service.title}
              </h3>
              <p className={`text-sm italic mb-6 ${service.highlight ? "text-[#E2EADF]/80" : "text-[#546E52]"}`}>
                Ideal para: {service.target}
              </p>
              
              <div className="mb-4 font-semibold text-sm uppercase tracking-wider">
                Incluye:
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className={`w-5 h-5 shrink-0 ${service.highlight ? "text-[#E2EADF]" : "text-[#546E52]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="w-full sm:w-auto" asChild>
            <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Quiero saber qué servicio me conviene
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
