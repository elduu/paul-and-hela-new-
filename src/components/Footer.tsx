import { Instagram, MessageCircle, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-background py-16 px-4">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="font-script text-4xl text-secondary mb-2">
        Rediet & Partner
      </h2>
      <p className="font-body text-xs tracking-[0.2em] uppercase text-background/60 mb-1">
        September 15, 2026
      </p>
      <p className="font-body text-xs tracking-[0.15em] text-background/50 mb-8">
        Addis Ababa, Ethiopia
      </p>

      <div className="flex justify-center gap-6 mb-8">
        {[
          { icon: Instagram, label: "Instagram" },
          { icon: MessageCircle, label: "Telegram" },
          { icon: Phone, label: "WhatsApp" },
        ].map(({ icon: Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="w-10 h-10 rounded-full border border-secondary/40 flex items-center justify-center text-secondary/70 hover:bg-secondary hover:text-charcoal transition-all duration-300"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>

      <div className="w-16 h-px bg-secondary/30 mx-auto mb-6" />
      <p className="font-body text-xs text-background/40">
        Made with ❤️ for our special day
      </p>
    </div>
  </footer>
);

export default Footer;
