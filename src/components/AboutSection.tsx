import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        <div
          ref={ref}
          className={`text-center space-y-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Dear Family And Friends
          </h2>

          <p className="font-body text-muted-foreground text-sm md:text-base italic leading-relaxed">
            "the Lord alone guided him, no foreign god was with him."
          </p>

          <p className="font-heading text-base font-semibold text-foreground">
          Deuternomy 32:12
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
            Together with our families, we joyfully invite you to celebrate our marriage on
            <strong className="text-foreground"> 2 May 2026.</strong> The ceremony will be
            held at the <strong className="text-foreground">BETHEL FULL GOSPEL CHURCH,</strong>
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base">
            from <strong className="text-foreground">8:00 to 12:00 LT.</strong>
          </p>

          <p className="font-body text-muted-foreground text-sm md:text-base">
            We would be honored to have you share this special day with us.
          </p>

          <div className="pt-4">
            <span className="text-5xl">💍</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
