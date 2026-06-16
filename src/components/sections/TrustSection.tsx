import { CheckCircle } from "lucide-react";

export function TrustSection() {
  const points = [
    "Cotización antes del pago.",
    "Confirmación de disponibilidad.",
    "Fotos del producto cuando aplique.",
    "Ticket o comprobante cuando sea posible.",
    "Seguimiento por WhatsApp.",
    "Políticas claras de compra, cambios y disponibilidad."
  ];

  return (
    <section id="confianza" className="py-12 md:py-20 bg-[#182D18] text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[28px] leading-tight md:text-4xl font-bold mb-6 text-[#F4F2E8] text-balance">
              Compra con claridad, no a ciegas
            </h2>
            <p className="text-lg text-[#E2EADF]/90 mb-8 leading-relaxed">
              Un servicio entre países necesita confianza. Por eso, la experiencia está pensada para que tengas información clara antes, durante y después de la compra.
            </p>
            
            <div className="bg-[#546E52]/40 border border-[#546E52] rounded-2xl p-6 text-center md:text-left">
              <span className="text-[#E2EADF] font-semibold text-lg italic">
                "Transparencia, comunicación y acompañamiento: esa es la diferencia."
              </span>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-[24px] p-6 md:p-8 border border-white/10">
            <ul className="space-y-5">
              {points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E2EADF] shrink-0" />
                  <span className="text-[#F4F2E8]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
