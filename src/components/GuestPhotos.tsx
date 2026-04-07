import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Camera } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const guestPhotos = [
  { src: g1, sender: "Abebe K." },
  { src: g2, sender: "Sara T." },
  { src: g3, sender: "Daniel H." },
  { src: g4, sender: "Meron A." },
  { src: g5, sender: "Yonas B." },
  { src: g6, sender: "Helen T." },
];

const GuestPhotos = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">Shared Memories</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Guest Photos
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-3">
            Photos shared by our guests via Telegram
          </p>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {guestPhotos.map((photo, i) => (
            <div
              key={i}
              className="group relative rounded-xl overflow-hidden shadow-lg border border-secondary/20"
            >
              <img
                src={photo.src}
                alt={`Photo by ${photo.sender}`}
                className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-3">
                <div className="flex items-center gap-2">
                  <Camera size={14} className="text-secondary" />
                  <span className="font-body text-xs text-background">{photo.sender}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://t.me/YourBotName"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            <Camera size={16} />
            Share Your Photos
          </a>
        </div>
      </div>
    </section>
  );
};

export default GuestPhotos;
