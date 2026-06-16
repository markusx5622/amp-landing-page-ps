"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "¿Desde dónde compras?",
    a: "Principalmente desde Valencia, España, y también mediante tiendas online españolas cuando el producto está disponible."
  },
  {
    q: "¿A qué país gestionas pedidos?",
    a: "El destino principal es Venezuela. La coordinación exacta se confirma por WhatsApp según ciudad, producto y método de envío."
  },
  {
    q: "¿Cuánto cobras por el servicio?",
    a: "La comisión puede variar según producto, volumen, urgencia y tipo de gestión. Como referencia, puede haber una comisión mínima o un porcentaje sobre el valor del producto. El presupuesto final se confirma antes de comprar."
  },
  {
    q: "¿Tengo que pagar antes?",
    a: "Sí. Para poder comprar el producto, normalmente se trabaja con pago previo total o una señal según el caso. Las condiciones se confirman antes de iniciar la compra."
  },
  {
    q: "¿Qué pasa si el producto se agota?",
    a: "Si el producto se agota antes de comprarlo, se informa a la clienta y se pueden buscar alternativas similares o reajustar el pedido."
  },
  {
    q: "¿Puedes ayudarme a elegir talla o modelo?",
    a: "Sí. El servicio puede incluir orientación sobre talla, color, modelo o alternativas, especialmente en moda y accesorios."
  },
  {
    q: "¿Envían comprobantes?",
    a: "Cuando sea posible, se envían fotos del producto, ticket o evidencia visual de la compra."
  },
  {
    q: "¿Cuánto tarda el envío?",
    a: "Depende del producto, preparación del pedido, volumen y método logístico. Siempre se comunica un tiempo estimado, evitando prometer fechas exactas cuando dependan de terceros."
  },
  {
    q: "¿Puedo pedir productos de varias tiendas?",
    a: "Sí. Se pueden agrupar pedidos de varias tiendas, aunque esto puede afectar la comisión, tiempos y organización del envío."
  },
  {
    q: "¿Cómo inicio un pedido?",
    a: "Pulsa el botón de WhatsApp, envía el producto o link, talla/color, cantidad, ciudad de entrega y fecha deseada."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-[28px] leading-tight md:text-4xl font-bold text-[#182D18] mb-4 text-balance">
            Preguntas frecuentes
          </h2>
          <p className="text-[#546E52]">
            Resuelve tus dudas sobre el servicio de personal shopper.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-[#182D18]/10 rounded-2xl overflow-hidden bg-[#FAF9F4] transition-colors">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(i)}
              >
                <span className="font-semibold text-[#182D18] pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#546E52] transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-[#282824]/80 leading-relaxed pt-2 border-t border-[#182D18]/5">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-[#546E52] mb-4">¿Tienes alguna otra duda?</p>
          <Button variant="outline" asChild>
            <a href={getDefaultWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Pregúntame por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
