import { Navigation } from "lucide-react";

const locationButtons = [
  {
    label: "Groom's House",
    icon: "🏠",
    mapUrl:
      "https://www.google.com/maps/search/Groom's+House+Addis+Ababa+Ethiopia",
  },
  {
    label: "Bride's House",
    icon: "🏡",
    mapUrl:
      "https://www.google.com/maps/search/Bride's+House+Addis+Ababa+Ethiopia",
  },
  {
    label: "Church",
    icon: "⛪",
    mapUrl:
      "https://www.google.com/maps/search/Holy+Trinity+Cathedral+Addis+Ababa+Ethiopia",
  },
  {
    label: "Hotel",
    icon: "🏨",
    mapUrl:
      "https://www.google.com/maps/search/Capital+Hotel+Spa+Addis+Ababa+Ethiopia",
  },
];

const Events = () => {
  return (
    <section id="events" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">

        {/* Google Map */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-secondary/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7578!3d9.0192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1600000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Wedding Location"
          />
        </div>

        {/* Location Buttons */}
        <div className="mt-8 flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 overflow-x-auto">

          {locationButtons.map((loc) => (
            <a
              key={loc.label}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center
                whitespace-nowrap
                text-xs sm:text-sm
                px-3 py-1.5 sm:px-5 sm:py-2.5
                rounded-full
                border-2 border-foreground/80
                bg-background
                font-body
                text-foreground
                hover:border-secondary hover:text-secondary
                transition-all duration-300
              "
            >
              {/* Hide icons on mobile */}
              <span className="hidden sm:inline text-lg mr-2">
                {loc.icon}
              </span>

              {loc.label}
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Events;