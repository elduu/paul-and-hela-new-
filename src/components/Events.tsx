import { MapPin, Clock, Navigation } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const events = [
  {
    title: "Wedding Ceremony",
    icon: "⛪",
    location: "Holy Trinity Cathedral",
    time: "10:00 AM",
    description: "Join us as we exchange our vows and begin our journey together in a sacred ceremony filled with love and tradition.",
  },
  {
    title: "Reception",
    icon: "🥂",
    location: "Capital Hotel & Spa",
    time: "5:00 PM",
    description: "Celebrate with us over dinner, music, and dancing at an elegant evening reception.",
  },
];

const locationButtons = [
  {
    label: "Groom's House",
    icon: "🏠",
    mapUrl: "https://www.google.com/maps/search/Groom's+House+Addis+Ababa+Ethiopia",
  },
  {
    label: "Bride's House",
    icon: "🏡",
    mapUrl: "https://www.google.com/maps/search/Bride's+House+Addis+Ababa+Ethiopia",
  },
  {
    label: "Church",
    icon: "⛪",
    mapUrl: "https://www.google.com/maps/search/Holy+Trinity+Cathedral+Addis+Ababa+Ethiopia",
  },
  {
    label: "Hotel",
    icon: "🏨",
    mapUrl: "https://www.google.com/maps/search/Capital+Hotel+Spa+Addis+Ababa+Ethiopia",
  },
];

const Events = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: buttonsRef, isVisible: buttonsVisible } = useScrollAnimation(0.2);

  return (
    <section id="events" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">Celebrate With Us</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Event Details
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => {
            const { ref, isVisible } = useScrollAnimation(0.2);
            return (
              <div
                key={event.title}
                ref={ref}
                className={`card-wedding p-8 text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <span className="text-4xl mb-4 block">{event.icon}</span>
                <h3 className="font-heading text-2xl text-foreground mb-4">
                  {event.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm text-foreground">
                    <MapPin size={16} className="text-secondary" />
                    <span className="font-body">{event.location}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-foreground">
                    <Clock size={16} className="text-secondary" />
                    <span className="font-body">{event.time}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Location Buttons - Pill Style */}
        <div
          ref={buttonsRef}
          className={`mt-10 transition-all duration-700 ${
            buttonsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {locationButtons.map((loc) => (
              <a
                key={loc.label}
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground/80 bg-background font-body text-sm text-foreground hover:border-secondary hover:text-secondary transition-all duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-foreground/70" />
                {loc.label}
              </a>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 rounded-xl overflow-hidden shadow-lg border border-secondary/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7578!3d9.0192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1600000000000"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
