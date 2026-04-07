import { useState, useEffect } from "react";
import heroBg from "@/assets/hero-couple.jpg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const weddingDate = new Date("2026-09-15T10:00:00").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = weddingDate - now;
      if (diff <= 0) return;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Rediet and Partner"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/50 to-charcoal/70" />

      <div
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-secondary text-xs tracking-[0.4em] uppercase font-body mb-6">
          We're getting married
        </p>
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-background mb-4">
          Rediet & Partner
        </h1>
        <div className="w-24 h-px bg-secondary mx-auto my-6" />
        <p className="text-background/90 font-body text-sm tracking-[0.2em] uppercase mb-2">
          September 15, 2026
        </p>
        <p className="text-background/70 font-body text-sm tracking-[0.15em]">
          Addis Ababa, Ethiopia
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 sm:gap-8 mt-10">
          {[
            { val: timeLeft.days, label: "Days" },
            { val: timeLeft.hours, label: "Hours" },
            { val: timeLeft.minutes, label: "Minutes" },
            { val: timeLeft.seconds, label: "Seconds" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border border-secondary/40 flex items-center justify-center bg-charcoal/30 backdrop-blur-sm">
                <span className="font-heading text-2xl sm:text-3xl text-background">
                  {String(item.val).padStart(2, "0")}
                </span>
              </div>
              <span className="text-secondary/80 text-[10px] tracking-[0.2em] uppercase font-body mt-2 block">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a href="#rsvp" className="btn-gold-filled inline-block mt-12">
          View Invitation
        </a>
      </div>
    </section>
  );
};

export default Hero;
