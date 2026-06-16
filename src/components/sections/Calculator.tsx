"use client";

import { useState } from "react";
import { getCalculatorWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator as CalculatorIcon } from "lucide-react";

export function Calculator() {
  const [productPrice, setProductPrice] = useState<string>("100");
  const [feePercentage, setFeePercentage] = useState<string>("15");
  const [additionalCost, setAdditionalCost] = useState<string>("20");

  const pPrice = parseFloat(productPrice) || 0;
  const fPercent = parseFloat(feePercentage) || 0;
  const aCost = parseFloat(additionalCost) || 0;

  const estimatedFee = (pPrice * fPercent) / 100;
  // Ensure minimum fee of 10 if necessary, but according to rules it's "desde 10€" so we can just show the calculation.
  // To make it simple, we just use the percentage.
  
  const total = pPrice + estimatedFee + aCost;

  const handleWhatsApp = () => {
    const url = getCalculatorWhatsAppUrl({
      productPrice: pPrice,
      estimatedFee: Number(estimatedFee.toFixed(2)),
      additionalCost: aCost,
      total: Number(total.toFixed(2))
    });
    window.open(url, "_blank");
  };

  return (
    <section className="py-20 bg-[#E2EADF]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-xl border border-[#182D18]/5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Form */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#182D18] text-white flex items-center justify-center">
                  <CalculatorIcon size={20} />
                </div>
                <h2 className="text-3xl font-bold text-[#182D18]">
                  Calcula una estimación rápida
                </h2>
              </div>
              <p className="text-[#546E52] mb-8">
                Obtén una referencia inicial antes de solicitar tu cotización personalizada.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#282824] mb-2">
                    Precio del producto en €
                  </label>
                  <Input 
                    type="number" 
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    min="0"
                    placeholder="Ej. 100"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#282824] mb-2">
                      Comisión %
                    </label>
                    <Input 
                      type="number" 
                      value={feePercentage}
                      onChange={(e) => setFeePercentage(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#282824] mb-2">
                      Coste gestión/envío en €
                    </label>
                    <Input 
                      type="number" 
                      value={additionalCost}
                      onChange={(e) => setAdditionalCost(e.target.value)}
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="bg-[#FAF9F4] rounded-[24px] p-8 border border-[#182D18]/10">
              <h3 className="text-xl font-bold text-[#182D18] mb-6 border-b border-[#182D18]/10 pb-4">
                Resumen estimado
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-[#282824]">
                  <span>Producto</span>
                  <span className="font-medium">{pPrice.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center text-[#282824]">
                  <span>Comisión estimada</span>
                  <span className="font-medium">{estimatedFee.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between items-center text-[#282824]">
                  <span>Coste adicional estimado</span>
                  <span className="font-medium">{aCost.toFixed(2)} €</span>
                </div>
                <div className="pt-4 border-t border-[#182D18]/10 flex justify-between items-center text-[#182D18] text-xl font-bold">
                  <span>Total aproximado</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 text-xs p-3 rounded-lg mb-6">
                El cálculo es orientativo. El presupuesto final se confirma por WhatsApp según disponibilidad, volumen, urgencia y método de envío.
              </div>

              <Button className="w-full" onClick={handleWhatsApp}>
                Enviar esta estimación por WhatsApp
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
