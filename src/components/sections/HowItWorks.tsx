import { Link2, FileText, CreditCard, ShoppingBag, Camera, Package, MapPin } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Envíame el producto",
      description: "Comparte el link, foto, talla, color, cantidad y ciudad de entrega.",
      icon: Link2
    },
    {
      title: "Recibe tu cotización",
      description: "Confirmo disponibilidad, precio aproximado, comisión y condiciones.",
      icon: FileText
    },
    {
      title: "Realiza el pago",
      description: "Una vez aprobado el presupuesto, se procede con la compra.",
      icon: CreditCard
    },
    {
      title: "Compro en España",
      description: "Gestiono la compra en tienda física u online según el caso.",
      icon: ShoppingBag
    },
    {
      title: "Te envío comprobantes",
      description: "Recibes fotos, ticket o evidencia visual cuando aplique.",
      icon: Camera
    },
    {
      title: "Coordinamos el envío",
      description: "Se prepara el pedido y se coordina la ruta hacia Venezuela.",
      icon: Package
    },
    {
      title: "Seguimiento hasta entrega",
      description: "Recibes actualizaciones del estado de tu pedido.",
      icon: MapPin
    }
  ];

  return (
    <section id="como-funciona" className="py-20 bg-[#FAF9F4]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#182D18] mb-4">
            Cómo funciona el servicio
          </h2>
          <p className="text-lg text-[#546E52] max-w-2xl mx-auto">
            Un proceso claro, simple y pensado para que sepas en todo momento qué está pasando con tu pedido.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#182D18]/10 -translate-x-1/2"></div>
          
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              
              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-center md:justify-between group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 top-6 md:top-1/2 w-8 h-8 rounded-full bg-[#182D18] text-white flex items-center justify-center font-bold text-sm z-10 md:-translate-x-1/2 md:-translate-y-1/2 border-4 border-[#FAF9F4] transition-transform group-hover:scale-110">
                    {index + 1}
                  </div>
                  
                  {/* Mobile connecting line */}
                  {index !== steps.length - 1 && (
                    <div className="md:hidden absolute left-8 top-14 bottom-[-2rem] w-px bg-[#182D18]/10"></div>
                  )}

                  {/* Content Card */}
                  <div className={`w-full pl-16 pr-4 md:w-5/12 md:px-0 py-4 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                    <div className={`bg-white p-6 rounded-[20px] shadow-sm border border-[#182D18]/5 transition-all hover:shadow-md ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                        <div className="w-10 h-10 rounded-full bg-[#E2EADF] text-[#182D18] flex items-center justify-center shrink-0">
                          <Icon size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-[#182D18]">{step.title}</h3>
                      </div>
                      <p className="text-[#546E52]">{step.description}</p>
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
