import { Church, UtensilsCrossed, Camera, PartyPopper, Music } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const schedule = [
  { time: "10:00 AM", title: "Ceremony", icon: Church, desc: "Exchange of vows" },
  { time: "12:00 PM", title: "Lunch", icon: UtensilsCrossed, desc: "Traditional feast" },
  { time: "3:00 PM", title: "Photos", icon: Camera, desc: "Capture memories" },
  { time: "5:00 PM", title: "Reception", icon: PartyPopper, desc: "Cocktails & dinner" },
  { time: "8:00 PM", title: "Celebration", icon: Music, desc: "Dance the night away" },
];

const Schedule = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="schedule" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">The Big Day</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Wedding Schedule
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        <div className="space-y-0">
          {schedule.map((item, i) => {
            const { ref, isVisible } = useScrollAnimation(0.2);
            const Icon = item.icon;
            return (
              <div
                key={i}
                ref={ref}
                className={`flex items-start gap-6 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center bg-background">
                    <Icon size={18} className="text-secondary" />
                  </div>
                  {i < schedule.length - 1 && (
                    <div className="w-px h-16 bg-secondary/30" />
                  )}
                </div>

                <div className="pb-12">
                  <span className="text-secondary font-body text-xs tracking-[0.2em] uppercase">
                    {item.time}
                  </span>
                  <h3 className="font-heading text-xl text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
