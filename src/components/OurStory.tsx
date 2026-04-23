import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import story4 from "@/assets/story-4.jpg";

const milestones = [
 {
  year: "Hamle 24, 2016 E.C.",
  title: "How We Met",
  text: "Our story began at a Christian fellowship program at the university. We first met when Paul was invited to preach the Word of God, while I was serving as a leader in the fellowship. From that moment, something about that day stayed in our hearts, and as time passed, our connection grew into something truly special.",
  image: story1,
},
{
  year: "Meskerem 21, 2017 E.C.",
  title: "She Said Yes",
  text: "With courage and hope, we decided to take the first step and start dating. As we spent more time getting to know each other and growing closer, we said yes to beginning our journey together — a moment that filled our hearts with joy.",
  image: story2,
},
{
  year: "Meskerem 21, 2018 E.C.",
  title: "Our Engagement",
  text: "Exactly one year later, we took the next step and got engaged. It was a beautiful milestone that strengthened our commitment and deepened our love for one another.",
  image: story3,
},
{
  year: "Tikimt 2 → Miyazya 24, 2018 E.C.",
  title: "Shemglena & Wedding",
  text: "On Tikimt 2, the Shemglena request was formally sent, honoring our family traditions and bringing both families together in preparation for the future. Now, with grateful hearts and deep love, we joyfully look forward to our wedding on Miyazya 24, 2018 E.C., the beginning of our lifelong journey together.",
  image: story4,
},
];

const TimelineItem = ({
  item,
  index,
}: {
  item: (typeof milestones)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative flex md:items-center mb-16 last:mb-0">
      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] gap-8 w-full items-center">
        <div className={`${isLeft ? "text-right" : "order-3 text-left"}`}>
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : isLeft
                ? "opacity-0 -translate-x-10"
                : "opacity-0 translate-x-10"
            }`}
          >
            <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase">
              {item.year}
            </span>
            <h3 className="font-heading text-2xl text-foreground mt-1 mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-sm inline-block">
              {item.text}
            </p>
          </div>
        </div>

        {/* Center line + circle */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary shadow-lg">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
          </div>
        </div>

        <div className={`${isLeft ? "order-3" : ""}`} />
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-secondary shadow-md flex-shrink-0">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" width={512} height={512} />
          </div>
          {index < milestones.length - 1 && (
            <div className="w-px h-full bg-secondary/30 mt-2" />
          )}
        </div>
        <div
          className={`transition-all duration-700 pb-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-secondary font-body text-xs tracking-[0.3em] uppercase">
            {item.year}
          </span>
          <h3 className="font-heading text-xl text-foreground mt-1 mb-2">
            {item.title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    </div>
  );
};

const OurStory = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="story" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">Our Love Story</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            How It All Began
          </h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        {/* Center vertical line (desktop only) */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-secondary/20" />
          {milestones.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
