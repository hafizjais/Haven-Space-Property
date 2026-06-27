import React from 'react';
import { MessageCircle } from 'lucide-react';

const BUSINESS_NUMBER = "60138968430";

/**
 * Helper to build the customized WhatsApp API URL.
 */
export function getWhatsAppUrl({ roomType, houseCode, houseName, price }) {
  if (!roomType) {
    // Default fallback general inquiry message
    const defaultMsg = "Hi, I would like to inquire about properties available at Haven Space Property.";
    return `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(defaultMsg)}`;
  }
  
  const template = `Hi, I'm interested in ${roomType} at ${houseCode} - ${houseName}, priced at RM${price}/month. Is it still available?`;
  return `https://wa.me/${BUSINESS_NUMBER}?text=${encodeURIComponent(template)}`;
}

/**
 * WhatsAppButton Component
 * Supports:
 * - Floating: boolean (fixed button in corner)
 * - Room context (roomType, houseCode, houseName, price) for prefilled inquiries
 */
export default function WhatsAppButton({ 
  floating = false, 
  roomType = '', 
  houseCode = '', 
  houseName = '', 
  price = 0,
  label = 'Inquire via WhatsApp',
  className = ''
}) {
  const url = getWhatsAppUrl({ roomType, houseCode, houseName, price });

  if (floating) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-4 rounded-full shadow-2xl transition-all duration-300 group hover:pr-6"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap font-medium text-sm transition-all duration-300 group-hover:max-w-xs group-hover:ml-2">
          Chat with Us
        </span>
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg active:scale-98 transition-all duration-200 ${className}`}
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span>{label}</span>
    </a>
  );
}
