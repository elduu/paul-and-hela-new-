import { useEffect, useState } from "react";
import { Camera } from "lucide-react";

interface Photo {
  image_url: string;
  sender: string;
  timestamp: string;
}

const API_URL = "https://api.paulandhella.com/api/wedding-photos";

const GuestPhotosPage = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="min-h-screen bg-muted/30 p-6">
      
      {/* Header */}
      <div className="text-center mb-10">
        <span className="font-script text-3xl text-secondary">
          Shared Memories
        </span>

        <h1 className="text-3xl md:text-4xl font-bold mt-2">
          Guest Photos
        </h1>

        <p className="text-muted-foreground mt-2">
          All photos shared by wedding guests
        </p>
      </div>

      {/* Loading */}
      {loading ? (
        <p className="text-center">Loading photos...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-md border"
            >
              <img
                src={photo.image_url}
                className="w-full h-52 object-cover"
              />

              <div className="p-2 flex items-center gap-2">
                <Camera size={14} />
                <span className="text-xs">
                  {photo.sender || "Guest"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GuestPhotosPage;