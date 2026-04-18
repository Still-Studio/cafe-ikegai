import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function WhisperStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 md:py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-center"
      >
        <p className="font-accent italic text-xl md:text-2xl lg:text-3xl text-muted-foreground tracking-[0.12em]">
          Calm.&nbsp;&nbsp;Conversational.&nbsp;&nbsp;Creative.
        </p>
      </motion.div>
    </section>
  );
}
