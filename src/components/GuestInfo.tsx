import { Shirt, Car, ParkingMeter, Hotel } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const info = [
  {
    icon: Shirt,
    title: "Dress Code",
    text: "Formal / Black Tie Optional. Ladies in elegant gowns, gentlemen in suits or tuxedos.",
  },
  {
    icon: Car,
    title: "Transportation",
    text: "Shuttle service available from major hotels to the ceremony and reception venues.",
  },
  {
    icon: ParkingMeter,
    title: "Parking",
    text: "Complimentary valet parking available at both the ceremony and reception venues.",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    text: "Special rates at Capital Hotel & Spa. Please mention our wedding when booking.",
  },
];

const GuestInfo = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">Good to Know</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Guest Information
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, i) => {
            const { ref, isVisible } = useScrollAnimation(0.2);
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={ref}
                className={`card-wedding p-6 text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-full border border-secondary/40 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-secondary" />
                </div>
                <h3 className="font-heading text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body text-xs leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GuestInfo;
