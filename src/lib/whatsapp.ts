import { siteConfig } from "./config";

export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

export function getDefaultWhatsAppUrl(): string {
  return getWhatsAppUrl(siteConfig.defaultWhatsAppMessage);
}

export function getCatalogWhatsAppUrl(): string {
  return getWhatsAppUrl("Hola Arianna, quiero recibir el catálogo de productos recomendados desde España.");
}

export interface QuoteFormData {
  name: string;
  city: string;
  product: string;
  details: string;
  quantity: string;
  date: string;
  comments: string;
}

export function getQuoteWhatsAppUrl(data: QuoteFormData): string {
  const message = `Hola Arianna, quiero cotizar un pedido desde España a Venezuela.

Nombre: ${data.name}
Ciudad de entrega: ${data.city}
Producto/link: ${data.product}
Talla/color/modelo: ${data.details}
Cantidad: ${data.quantity}
Fecha deseada: ${data.date}
Comentarios: ${data.comments || "Ninguno"}

Gracias.`;
  return getWhatsAppUrl(message);
}

export interface CalculatorData {
  productPrice: number;
  estimatedFee: number;
  additionalCost: number;
  total: number;
}

export function getCalculatorWhatsAppUrl(data: CalculatorData): string {
  const message = `Hola Arianna, hice una estimación inicial para un pedido desde España a Venezuela.

Precio producto: ${data.productPrice} €
Comisión estimada: ${data.estimatedFee} €
Coste adicional estimado: ${data.additionalCost} €
Total aproximado: ${data.total} €

Quiero confirmar disponibilidad y presupuesto final.`;
  return getWhatsAppUrl(message);
}
