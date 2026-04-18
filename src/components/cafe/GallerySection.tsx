import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=75",
    alt: "Morning light through café windows",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=75",
    alt: "Artisan coffee preparation",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=75",
    alt: "Café seating area",
    size: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=700&q=75",
    alt: "Coffee and book",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?w=700&q=75",
    alt: "Latte art",
    size: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=700&q=75",
    alt: "Wooden table details",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1527156231393-7023794f363c?w=700&q=75",
    alt: "Cozy corner",
    size: "normal",
  },
  {
    src: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=700&q=75",
    alt: "Café interior",
    size: "wide",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="py-24 md:py-36 overflow-hidden grain-overlay">
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-accent text-sm italic tracking-[0.2em] text-primary uppercase mb-4">
            The Space
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
            Let the Light
            <br />
            <em className="italic font-medium">Speak</em>
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        ref={scrollRef}
        className="flex gap-4 px-6 md:px-16 overflow-x-auto gallery-scroll pb-4 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
        onMouseDown={(e) => {
          const el = scrollRef.current;
          if (!el) return;
          let startX = e.pageX - el.offsetLeft;
          let scrollLeft = el.scrollLeft;
          const onMove = (e: MouseEvent) => {
            const x = e.pageX - el.offsetLeft;
            el.scrollLeft = scrollLeft - (x - startX);
          };
          const onUp = () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
          };
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        }}
      >
        {galleryImages.map((img, i) => (
          <GalleryItem key={i} img={img} index={i} inView={inView} />
        ))}
      </motion.div>
    </section>
  );
}

function GalleryItem({
  img,
  index,
  inView,
}: {
  img: (typeof galleryImages)[0];
  index: number;
  inView: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const heightClass =
    img.size === "tall" ? "h-[420px]" : img.size === "wide" ? "h-[280px]" : "h-[340px]";
  const widthClass =
    img.size === "wide" ? "min-w-[480px] md:min-w-[560px]" : "min-w-[280px] md:min-w-[320px]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`relative overflow-hidden rounded-sm shrink-0 ${widthClass} ${heightClass}`}
      style={{ scrollSnapAlign: "start" }}
    >
      <img
        src={img.src}
        alt={img.alt}
        draggable={false}
        className="w-full h-[115%] object-cover -mt-[7.5%] select-none"
      />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
    </motion.div>
  );
}
