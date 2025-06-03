import React, { useState, useEffect } from 'react';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-white"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.712-1.001z" />
  </svg>
);

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "22996119221";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Make button visible after a short delay for a smoother entrance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-500 ease-out transform flex items-center justify-center z-50
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90'}`}
    >
      <WhatsAppIcon />
    </a>
  );
};

export default WhatsAppButton;
