import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Heart } from "lucide-react";

const RSVPForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    attending: "yes",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all duration-300";

  return (
    <section id="rsvp" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-xl">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="font-script text-3xl text-secondary">Be Our Guest</span>
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mt-2">RSVP</h2>
          <div className="w-16 h-px bg-secondary mx-auto mt-4" />
        </div>

        {submitted ? (
          <div className="text-center animate-fade-up card-wedding p-12">
            <Heart className="mx-auto text-secondary mb-4" size={48} />
            <h3 className="font-heading text-2xl text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground font-body text-sm">
              We can't wait to celebrate with you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="card-wedding p-8 space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
            <div className="grid grid-cols-2 gap-4">
              <select
                value={form.attending}
                onChange={(e) => setForm({ ...form, attending: e.target.value })}
                className={inputClass}
              >
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className={inputClass}
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n} Guest{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Leave a message for the couple..."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={inputClass + " resize-none"}
            />
            <button type="submit" className="btn-gold-filled w-full">
              Confirm Attendance
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default RSVPForm;
