import { XCircle, CheckCircle2 } from "lucide-react";

export function ProblemSolution() {
  const problems = [
    "No sabes si el producto está disponible.",
    "Dudas con talla, color o modelo.",
    "No tienes a alguien de confianza en España.",
    "No quieres hacer compras a ciegas.",
    "Necesitas claridad antes de pagar."
  ];

  const solutions = [
    "Cotización previa.",
    "Revisión de disponibilidad.",
    "Asesoría personalizada.",
    "Fotos y comprobantes.",
    "Seguimiento paso a paso."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#182D18] mb-4">
            Comprar en España desde Venezuela no debería ser complicado
          </h2>
          <p className="text-lg text-[#546E52] max-w-3xl mx-auto">
            Muchas personas quieren acceder a productos de marcas españolas o europeas, pero se encuentran con precios elevados, poca disponibilidad, dudas de talla, falta de confianza o dificultad para coordinar compras y envíos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Lo que suele pasar */}
          <div className="bg-[#FAF9F4] rounded-[24px] p-8 border border-[#182D18]/5">
            <h3 className="text-xl font-bold text-[#282824] mb-6 flex items-center gap-2">
              <span className="text-red-500/80">Lo que suele pasar</span>
            </h3>
            <ul className="space-y-4">
              {problems.map((prob, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span className="text-[#282824]/80">{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Cómo lo resolvemos */}
          <div className="bg-[#182D18] rounded-[24px] p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#546E52] rounded-full opacity-20 blur-3xl"></div>
            <h3 className="text-xl font-bold text-[#F4F2E8] mb-6 flex items-center gap-2 relative z-10">
              <span className="text-[#E2EADF]">Cómo lo resolvemos</span>
            </h3>
            <p className="text-[#E2EADF]/90 mb-6 font-medium relative z-10">
              Con Arianna, tienes una persona real en España que te acompaña en el proceso: cotiza, compra, verifica, fotografía y coordina el envío de tu pedido.
            </p>
            <ul className="space-y-4 relative z-10">
              {solutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E2EADF] shrink-0 mt-0.5" />
                  <span className="text-white font-medium">{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
