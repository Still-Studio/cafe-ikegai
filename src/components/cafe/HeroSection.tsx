import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[600px] overflow-hidden flex items-center justify-center grain-overlay"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 scale-110 will-change-transform"
      >
        <img
          src="/public/images/Back.jpg"
          alt="Café Ikigai ambience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 dark:from-black/50 dark:via-black/35 dark:to-black/65" />
      </motion.div>

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C4714F]/10 via-transparent to-[#8A9E85]/5 dark:from-[#1C1917]/30 dark:to-transparent" />

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center will-change-transform"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-accent text-base italic tracking-[0.2em] text-white/70 mb-6"
        >
          est. 2024 · Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl italic text-white leading-[1.05] mb-8"
        >
          Find Your Reason
          <br />
          <span className="not-italic font-medium">to Pause.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-sm md:text-base text-white/65 tracking-wide max-w-sm mx-auto mb-12 leading-relaxed"
        >
          A corner of quiet in the city — where coffee meets intention.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => {
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 px-8 py-3.5 border border-white/40 text-white/90 text-sm font-body tracking-widest uppercase hover:bg-white/10 hover:border-white/70 hover:scale-105 transition-all duration-500 ease-out backdrop-blur-sm"
          >
            Explore the Menu
            <span className="w-4 h-px bg-white/60 group-hover:w-6 transition-all duration-300" />
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-accent text-xs italic tracking-widest text-white/40">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
