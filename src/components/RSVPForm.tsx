import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart } from "lucide-react";

const API_URL =
  "https://api.paulandhella.com/api/rsvp";

const RSVPForm = () => {
  const { ref, isVisible } = useScrollAnimation();

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    wish: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name,
          attending: form.attending,
          wish: form.wish,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit RSVP");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300";

  return (
    <section id="rsvp" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-xl">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">
            Be Our Guest
          </span>

          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">
            RSVP
          </h2>

          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        {submitted ? (
          <div className="text-center animate-fade-up card-wedding p-12">
            <Heart
              className="mx-auto text-secondary mb-4"
              size={48}
            />

            <h3 className="font-heading text-2xl text-foreground mb-2">
              Thank You!
            </h3>

            <p className="text-muted-foreground font-body text-sm">
              Your response has been received.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card-wedding p-8 space-y-5"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className={inputClass}
            />

            {/* Attending */}
            <select
              value={form.attending}
              onChange={(e) =>
                setForm({
                  ...form,
                  attending: e.target.value,
                })
              }
              className={inputClass}
            >
              <option value="yes">
                Joyfully Accept
              </option>

              <option value="no">
                Regretfully Decline
              </option>
            </select>

            {/* Wish */}
            <textarea
              placeholder="Leave your wishes for the couple..."
              rows={4}
              required
              value={form.wish}
              onChange={(e) =>
                setForm({
                  ...form,
                  wish: e.target.value,
                })
              }
              className={
                inputClass + " resize-none"
              }
            />

            {/* Error */}
            {error && (
              <p className="text-red-500 text-sm">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-gold-filled w-full"
            >
              {loading
                ? "Submitting..."
                : "Confirm Attendance"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;