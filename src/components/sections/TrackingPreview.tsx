import { CheckCircle2, Clock, Circle } from "lucide-react";

export function TrackingPreview() {
  const statuses = [
    { name: "Cotización enviada", state: "completed" },
    { name: "Pago recibido", state: "completed" },
    { name: "Producto comprado", state: "completed" },
    { name: "Foto/comprobante enviado", state: "completed" },
    { name: "Preparación para envío", state: "in-progress" },
    { name: "En tránsito a Venezuela", state: "pending" },
    { name: "Entregado", state: "pending" },
  ];

  return (
    <section className="py-12 md:py-20 bg-white border-y border-[#182D18]/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[28px] leading-tight md:text-4xl font-bold text-[#182D18] mb-6 text-balance">
              Seguimiento claro en cada etapa
            </h2>
            <p className="text-lg text-[#546E52] mb-8">
              Cada pedido puede organizarse con un estado visual para que sepas qué fase está completada y cuál es el siguiente paso.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#182D18] bg-[#E2EADF] px-4 py-2 rounded-full">
              <CheckCircle2 size={18} className="text-[#546E52]" />
              Transparencia total en WhatsApp
            </div>
          </div>

          {/* Tracking Card */}
          <div className="w-full md:w-1/2">
            <div className="bg-[#FAF9F4] rounded-[24px] p-5 md:p-8 shadow-sm border border-[#182D18]/10 max-w-md mx-auto">
              <div className="font-bold text-[#182D18] mb-6 border-b border-[#182D18]/10 pb-4 flex justify-between items-center">
                <span>Pedido #00452</span>
                <span className="text-sm font-medium bg-[#E2EADF] text-[#182D18] px-2 py-1 rounded">Activo</span>
              </div>
              
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#182D18] before:via-[#182D18] before:to-gray-200">
                {statuses.map((status, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center w-full">
                      <div className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center z-10 bg-[#FAF9F4]">
                        {status.state === "completed" && <CheckCircle2 className="w-6 h-6 text-[#182D18] fill-[#182D18] text-white" />}
                        {status.state === "in-progress" && <Clock className="w-6 h-6 text-[#546E52]" fill="#E2EADF" />}
                        {status.state === "pending" && <Circle className="w-6 h-6 text-gray-300" />}
                      </div>
                      <div className="ml-4">
                        <span className={`text-sm font-medium ${
                          status.state === "completed" ? "text-[#182D18]" : 
                          status.state === "in-progress" ? "text-[#546E52]" : "text-gray-400"
                        }`}>
                          {status.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
