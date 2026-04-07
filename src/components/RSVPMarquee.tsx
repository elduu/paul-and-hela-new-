import { useState } from "react";
import { X, MessageSquare } from "lucide-react";

const sampleMessages = [
  { name: "Abebe Kebede", message: "So happy for you both! Can't wait to celebrate! 🎉" },
  { name: "Sara Tekle", message: "Wishing you a lifetime of love and happiness! ❤️" },
  { name: "Daniel Hailu", message: "Congratulations! This will be the most beautiful day!" },
  { name: "Meron Assefa", message: "So blessed to witness your union. Love you both!" },
  { name: "Yonas Berhane", message: "May God bless your marriage forever! 🙏" },
  { name: "Helen Tadesse", message: "Counting down the days! So excited for you two!" },
];

const duplicated = [...sampleMessages, ...sampleMessages];

const RSVPMarquee = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="text-center mb-8">
        <span className="font-script text-3xl text-secondary">Wishes</span>
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mt-2">
          Messages from Guests
        </h2>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {duplicated.map((item, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-64 bg-muted/50 border border-secondary/20 rounded-xl p-5 shadow-sm"
            >
              <p className="font-heading text-sm text-foreground mb-2">{item.name}</p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed italic">
                "{item.message}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(true)}
          className="btn-gold inline-flex items-center gap-2"
        >
          <MessageSquare size={16} />
          View All Messages
        </button>
      </div>

      {/* Modal */}
      {showAll && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowAll(false)}
        >
          <div
            className="bg-background rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto p-8 border border-secondary/30 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-xl text-foreground">All Guest Messages</h3>
              <button
                onClick={() => setShowAll(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              {sampleMessages.map((item, i) => (
                <div key={i} className="border-b border-muted pb-4 last:border-0">
                  <p className="font-heading text-base text-foreground">{item.name}</p>
                  <p className="font-body text-sm text-muted-foreground mt-1 italic">
                    "{item.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RSVPMarquee;
