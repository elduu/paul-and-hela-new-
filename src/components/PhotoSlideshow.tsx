import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import g7 from "@/assets/gallery-7.jpg";
import g8 from "@/assets/gallery-8.jpg";

const images = [g1, g2, g3, g4, g5, g6, g7, g8];
// Duplicate for seamless loop
const allImages = [...images, ...images];

const PhotoSlideshow = () => {
  return (
    <section className="py-12 bg-muted/30 overflow-hidden">
      <div className="mb-8 text-center">
        <span className="font-script text-3xl text-secondary">Moments</span>
      </div>

      {/* Scrolling row */}
      <div className="relative">
        <div className="flex gap-4 animate-slide-loop">
          {allImages.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-40 h-28 md:w-56 md:h-36 rounded-lg overflow-hidden shadow-md border border-secondary/20"
            >
              <img
                src={src}
                alt={`Slide ${(i % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;
