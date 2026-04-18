import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";

const hours = [
  { day: "Monday – Friday", time: "7:00 am – 9:00 pm" },
  { day: "Saturday", time: "8:00 am – 10:00 pm" },
  { day: "Sunday", time: "9:00 am – 8:00 pm" },
];

export default function VisitSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText("Ground Floor of M.R, PRIME Building, Kondapur, Hyderabad, Telangana 500044");
  };

  return (
    <section id="visit" ref={ref} className="py-24 md:py-36 bg-muted/30 grain-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="font-accent text-sm italic tracking-[0.2em] text-primary uppercase mb-4">
              Come By
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-foreground leading-tight mb-10">
              Find Us in the
              <br />
              <em className="italic font-medium">Heart of the City</em>
            </h2>

            {/* Address */}
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <div className="mt-0.5 w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                  <MapPin size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-foreground mb-0.5">Address</p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Ground Floor of M.R, PRIME Building 
                    <br />
                    Kondapur, Hyderabad
                    <br />
                    Telangana 500084
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="mt-2 font-body text-xs text-primary/70 hover:text-primary underline underline-offset-2 transition-colors"
                  >
                    Copy address
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="mt-0.5 w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0">
                  <Clock size={14} className="text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm font-medium text-foreground mb-3">Opening Hours</p>
                  <div className="space-y-2">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-baseline gap-4">
                        <span className="font-body text-sm text-muted-foreground">{h.day}</span>
                        <span className="font-accent italic text-sm text-foreground/80 shrink-0">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-4">
                <div className="mt-0.5 w-8 h-8 rounded-full border border-border flex items-center justify-center shrink-0">
                  <Phone size={14} className="text-muted-foreground" />
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-foreground mb-1">Contact</p>
                  <a href="tel:+919849000120" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors block">
                    +91 9849000120
                  </a>
                  <a href="mailto:hello@cafeikigai.in" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 mt-1">
                    <Mail size={12} />
                    hello@cafeikigai.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative rounded-sm overflow-hidden border border-border/60 shadow-sm">
              {/* Map image placeholder */}
              <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=75"
                  alt="Location map"
                  className="w-full h-full object-cover opacity-80 dark:opacity-60"
                />
                {/* Map overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

                {/* Location pin */}
                <div className="absolute top-1/2 left-[72%] -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                      <MapPin size={18} className="text-white" fill="white" />
                    </div>
                    <div className="w-px h-4 bg-primary/70" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  </motion.div>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-sm border border-border/40">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-body text-xs font-medium text-foreground">Café Ikigai — Kondapur</span>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-card border-t border-border/40">
                <a
                  href="https://maps.app.goo.gl/HaSxidUeLaDBwN349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-primary hover:text-primary/80 transition-colors group"
                >
                  Open in Google Maps
                  <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Transport note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-accent italic text-sm text-muted-foreground mt-4 px-1"
            >
              5 minutes from Kondapur Check Post · Free parking available
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
