"use client";

import { useState } from "react";
import { getQuoteWhatsAppUrl, QuoteFormData } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function WhatsAppOrderForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    city: "",
    product: "",
    details: "",
    quantity: "1",
    date: "",
    comments: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getQuoteWhatsAppUrl(formData);
    window.open(url, "_blank");
  };

  return (
    <section id="cotizar" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-[28px] leading-tight md:text-4xl font-bold text-[#182D18] mb-4 text-balance">
            Pide tu cotización de forma ordenada
          </h2>
          <p className="text-lg text-[#546E52] max-w-2xl mx-auto">
            Para darte una respuesta rápida, solo necesito que me envíes la información clave de tu pedido.
          </p>
        </div>

        <div className="bg-[#FAF9F4] rounded-[32px] p-5 sm:p-8 md:p-12 shadow-sm border border-[#182D18]/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#282824] mb-2">Nombre</label>
                <Input required name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#282824] mb-2">Ciudad de entrega (Venezuela)</label>
                <Input required name="city" value={formData.city} onChange={handleChange} placeholder="Ej. Caracas, Valencia..." />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#282824] mb-2">Producto o Link</label>
              <Input required name="product" value={formData.product} onChange={handleChange} placeholder="Pega el link aquí o describe el producto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#282824] mb-2">Talla, color o modelo</label>
                <Input required name="details" value={formData.details} onChange={handleChange} placeholder="Ej. Talla M, Color Negro" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#282824] mb-2">Cantidad</label>
                  <Input required type="number" min="1" name="quantity" value={formData.quantity} onChange={handleChange} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#282824] mb-2">Fecha deseada</label>
                  <Input type="text" name="date" value={formData.date} onChange={handleChange} placeholder="Opcional" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#282824] mb-2">Observaciones / Comentarios</label>
              <Textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="¿Algún detalle extra que deba saber?" />
            </div>

            <div className="pt-4 text-center">
              <Button type="submit" size="lg" className="w-full sm:w-auto md:px-12 text-lg h-14">
                Enviar solicitud por WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
