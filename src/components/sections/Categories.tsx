import { Shirt, Sparkles, Watch, Gift, Stethoscope, Star } from "lucide-react";

export function Categories() {
  const categories = [
    {
      icon: Shirt,
      title: "Moda",
      description: "Zara, Mango, Bershka, Pull&Bear, Stradivarius, Massimo Dutti."
    },
    {
      icon: Sparkles,
      title: "Belleza",
      description: "Maquillaje, skincare, perfumes y cosmética."
    },
    {
      icon: Watch,
      title: "Accesorios",
      description: "Bolsos, gafas, bisutería, pequeños complementos."
    },
    {
      icon: Gift,
      title: "Regalos",
      description: "Detalles personalizados, cumpleaños y ocasiones especiales."
    },
    {
      icon: Stethoscope,
      title: "Parafarmacia",
      description: "Productos de cuidado personal y bienestar permitidos."
    },
    {
      icon: Star,
      title: "Encargos especiales",
      description: "Productos concretos bajo disponibilidad."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#182D18] mb-4">
            ¿Qué puedes pedir?
          </h2>
          <p className="text-lg text-[#546E52] max-w-2xl mx-auto">
            Puedes solicitar productos concretos o dejarte asesorar con recomendaciones según tu presupuesto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div key={i} className="group bg-[#F4F2E8] rounded-[20px] p-8 border border-[#182D18]/5 transition-all hover:-translate-y-2 hover:shadow-lg hover:bg-[#E2EADF]/30">
                <div className="w-14 h-14 rounded-full bg-white text-[#182D18] flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#282824] mb-3">{cat.title}</h3>
                <p className="text-[#546E52] leading-relaxed">{cat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
