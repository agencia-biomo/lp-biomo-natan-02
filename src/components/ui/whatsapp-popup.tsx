"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

interface WhatsAppPopupProps {
  phoneNumber?: string;
  delay?: number;
}

export function WhatsAppPopup({
  phoneNumber = "5500000000000",
  delay = 3000,
}: WhatsAppPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const wasClosed = sessionStorage.getItem("biomo_whatsapp_popup_closed");
    if (wasClosed) {
      setIsDismissed(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
    setIsDismissed(true);
    sessionStorage.setItem("biomo_whatsapp_popup_closed", "true");
  };

  const handleWhatsAppClick = () => {
    sessionStorage.setItem("biomo_whatsapp_popup_closed", "true");
  };

  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  if (!mounted) return null;

  return (
    <>
      {/* Balão de Fala Fluido */}
      <div
        className={`fixed bottom-[95px] right-6 max-w-[220px] bg-white rounded-[20px_20px_20px_6px] py-4 px-[18px] shadow-[0_4px_24px_rgba(0,0,0,0.12)] z-[99] transition-all duration-300 ease-out
          ${isOpen && !isDismissed
            ? "opacity-100 visible translate-y-0 scale-100"
            : "opacity-0 invisible translate-y-2.5 scale-95"
          }`}
      >
        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 w-[22px] h-[22px] bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 hover:scale-110 transition-all text-sm leading-none"
          aria-label="Fechar"
        >
          ×
        </button>

        {/* Mensagem */}
        <p className="text-gray-800 text-[0.9rem] leading-relaxed m-0">
          Olá! Bem-vindo à Biomo<span className="text-[#a800d2] ml-0.5">❤</span>
          <br />
          Como podemos ajudar?
        </p>

      </div>

      {/* Botão Flutuante - Somente ícone (estilo diferente da LP-01) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => !isDismissed && setIsOpen(true)}
        className="fixed bottom-6 right-6 w-[60px] h-[60px] rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all shadow-lg shadow-green-600/30 z-[100]"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </>
  );
}
