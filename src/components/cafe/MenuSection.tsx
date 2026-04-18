import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const menuItems = [
  {
    category: "Coffee",
    name: "Morning Mist Latte",
    description: "Single-origin pour-over espresso, oat milk foam, hint of cardamom",
    price: "₹280",
    tag: "Signature",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=75",
  },
  {
    category: "Coffee",
    name: "Golden Hour Cold Brew",
    description: "18-hour cold brew, coconut cream, amber honey drizzle",
    price: "₹320",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=75",
  },
  {
    category: "Tea",
    name: "Kyoto Matcha",
    description: "Ceremonial-grade matcha, steamed oat milk, light sweetness",
    price: "₹260",
    tag: "New",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?w=600&q=75",
  },
  {
    category: "Bites",
    name: "Walnut Banana Loaf",
    description: "House-baked, cold butter, sea salt flakes",
    price: "₹180",
    tag: "House-baked",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=75",
  },
  {
    category: "Coffee",
    name: "Spiced Pour-Over",
    description: "Light-roast Ethiopian beans, star anise, warm spice blend",
    price: "₹300",
    tag: "Seasonal",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=75",
  },
  {
    category: "Bites",
    name: "Ricotta Toast",
    description: "Sourdough, whipped ricotta, fig preserve, toasted sesame",
    price: "₹220",
    tag: "Chef's Pick",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=600&q=75",
  },
];

const tagColors: Record<string, string> = {
  Signature: "bg-primary/10 text-primary",
  Bestseller: "bg-[#8A9E85]/15 text-[#5a7555] dark:text-[#8A9E85]",
  New: "bg-[#D4A853]/15 text-[#a87e2d] dark:text-[#D4A853]",
  "House-baked": "bg-muted text-muted-foreground",
  Seasonal: "bg-primary/10 text-primary",
  "Chef's Pick": "bg-[#8A9E85]/15 text-[#5a7555] dark:text-[#8A9E85]",
};

export default function MenuSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" ref={ref} className="py-24 md:py-36 bg-muted/30 grain-overlay">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <p className="font-accent text-sm italic tracking-[0.2em] text-primary uppercase mb-4">
            Curated Selections
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground leading-tight">
            What We're
            <br />
            <em className="italic font-medium">Pouring</em>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, i) => (
            <MenuCard key={item.name} item={item} index={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-accent italic text-center text-muted-foreground mt-14 text-sm tracking-wide"
        >
          Full menu available in-store — seasonal specials change weekly.
        </motion.p>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  index,
  inView,
}: {
  item: (typeof menuItems)[0];
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.1, ease: "easeOut" }}
      className="group bg-card border border-border/60 rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-1.5 transition-all duration-500 ease-out"
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span
            className={`text-[10px] font-body font-medium tracking-widest uppercase px-2 py-0.5 rounded-sm ${
              tagColors[item.tag] || "bg-muted text-muted-foreground"
            }`}
          >
            {item.tag}
          </span>
          <span className="font-display text-base font-medium text-foreground shrink-0">
            {item.price}
          </span>
        </div>

        <h3 className="font-display text-lg font-medium text-foreground mt-3 mb-1.5">
          {item.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        <div className="mt-4 pt-4 border-t border-border/40">
          <span className="font-accent text-xs italic text-muted-foreground/60 tracking-wide">
            {item.category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
