import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Camera } from "lucide-react";


interface Photo {
  image_url: string;
  sender: string;
  timestamp: string;
}

const API_URL = "https://api.paulandhella.com/api/wedding-photos";

const GuestPhotos = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  // Fetch only when button clicked
  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);

      if (!res.ok) throw new Error("Failed to fetch photos");

      const data: Photo[] = await res.json();
      setPhotos(data);
      setShowPhotos(true);
    } catch (err) {
      console.error("Photo fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">
            Shared Memories
          </span>

          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            Guest Photos
          </h2>

          <p className="font-body text-sm text-muted-foreground mt-3">
            Photos shared by our guests via Telegram
          </p>

          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        {/* View Button */}
        {!showPhotos && (
          <div className="text-center">
            <button
              onClick={fetchPhotos}
              className="btn-gold inline-flex items-center gap-2"
            >
              <Camera size={16} />
              View Guest Photos
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <p className="text-center text-muted-foreground mt-6">
            Loading photos...
          </p>
        )}

        {/* Gallery */}
        {showPhotos && !loading && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {photos.map((photo, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden shadow-lg border border-secondary/20"
              >
                <img
                  src={photo.image_url}
                  alt={`Photo by ${photo.sender}`}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 to-transparent p-3">
                  <div className="flex items-center gap-2">
                    <Camera size={14} className="text-secondary" />
                    <span className="font-body text-xs text-background">
                      {photo.sender || "Guest"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Share Button (always visible) */}
        <div className="text-center mt-8">
          <a
            href="https://t.me/PaulandHela_bot"
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