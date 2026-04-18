import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" ref={ref} className="py-24 md:py-36 grain-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <p className="font-accent text-sm italic tracking-[0.2em] text-primary mb-6 uppercase">
              Our Philosophy
            </p>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight mb-8">
              The Japanese Art of{" "}
              <em className="italic font-medium">Ikigai</em>
            </h2>

            <div className="space-y-5 font-body text-muted-foreground text-base leading-relaxed">
              <p>
                In Japanese, <em className="font-accent italic text-foreground">ikigai</em> is the
                convergence of what you love, what you're good at, what the world needs, and what
                sustains you. It is your reason for being — your reason to rise each morning.
              </p>
              <p>
                We built this café as a physical expression of that idea. A place where the aroma
                of freshly ground beans meets unhurried mornings. Where conversations flow as
                naturally as light through the windows.
              </p>
              <p>
                Every cup is intentional. Every corner, considered. Come as you are — leave a
                little more yourself.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-border"
            >
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: "2024", label: "Est." },
                  { number: "18+", label: "Signature drinks" },
                  { number: "7am", label: "First cup" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl font-medium text-foreground">{stat.number}</p>
                    <p className="font-body text-xs text-muted-foreground tracking-wide mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <div ref={imgRef} className="relative overflow-hidden rounded-sm aspect-[4/5]">
              <motion.img
                style={{ y: imgY }}
                src="/images/front.jpg"
                alt="Café Ikigai interior"
                className="w-full h-[115%] object-cover -mt-[7.5%] will-change-transform"
              />
              {/* Warm tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#C4714F]/10 via-transparent to-transparent" />
            </div>

            {/* Floating label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-3 mt-4 px-1"
            >
              <div className="w-8 h-px bg-primary/50" />
              <p className="font-accent text-sm italic text-muted-foreground">
                Kondapur, Hyderabad
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
