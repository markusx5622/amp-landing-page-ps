import { Search, Camera, Truck, MessageCircle } from "lucide-react";

export function TrustBar() {
  const indicators = [
    {
      icon: Search,
      title: "Compra personalizada",
      description: "Asesoría y revisión de disponibilidad"
    },
    {
      icon: Camera,
      title: "Fotos y comprobantes",
      description: "Evidencia visual de tu compra"
    },
    {
      icon: Truck,
      title: "Seguimiento del pedido",
      description: "Control en cada etapa"
    },
    {
      icon: MessageCircle,
      title: "Atención directa",
      description: "Comunicación fluida por WhatsApp"
    }
  ];

  return (
    <section className="bg-[#E2EADF] py-8 md:py-10 border-y border-[#546E52]/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-[#182D18] text-[#F4F2E8] flex items-center justify-center mb-1">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-[#182D18]">{indicator.title}</h3>
                <p className="text-sm text-[#546E52] leading-tight">{indicator.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
