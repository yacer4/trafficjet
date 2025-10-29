import whatsappLogo from "@/assets/whatsapp-logo.jpg";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/971502349724"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:hidden z-40 w-15 h-15 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-16 h-16 rounded-full object-cover"
      />
    </a>
  );
};

export default WhatsAppButton;
