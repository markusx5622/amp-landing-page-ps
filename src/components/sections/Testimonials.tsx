export function Testimonials() {
  const testimonials = [
    {
      text: "Me ayudó a conseguir justo lo que quería de Zara España y siempre me mantuvo informada.",
      initial: "A",
      name: "Cliente Verificada"
    },
    {
      text: "El proceso fue claro desde el principio. Me envió fotos, precio y seguimiento.",
      initial: "M",
      name: "Cliente Verificada"
    },
    {
      text: "Muy confiable y organizada. Ideal para comprar desde Venezuela sin complicaciones.",
      initial: "C",
      name: "Cliente Verificada"
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F4]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#182D18] mb-4">
            Lo que dicen quienes ya compraron
          </h2>
          <p className="text-sm text-[#546E52] max-w-md mx-auto italic">
            Testimonios reales próximamente. Esta sección está preparada para incorporar opiniones verificadas de clientas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, i) => (
            <div key={i} className="bg-white rounded-[24px] p-8 shadow-sm border border-[#182D18]/5 flex flex-col relative">
              <div className="text-4xl text-[#E2EADF] font-serif absolute top-4 left-6">"</div>
              <p className="text-[#282824] leading-relaxed mb-8 mt-4 relative z-10 italic">
                {test.text}
              </p>
              <div className="mt-auto flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#182D18] text-[#F4F2E8] flex items-center justify-center font-bold text-sm">
                  {test.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#182D18]">{test.name}</div>
                  <div className="text-xs text-[#546E52]">Venezuela</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
