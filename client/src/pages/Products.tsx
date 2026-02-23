import { motion } from "framer-motion";
import { Gem, Sprout, ChevronRight } from "lucide-react";
import { Link } from "wouter";

import miningHero from "@assets/AdobeStock_239722577_1771796703476.jpeg";

const minerals = [
  { name: "Tin", desc: "High-grade tin ores suitable for varied industrial applications.", img: "https://images.unsplash.com/photo-1614315584878-c0b8f047df12?w=500&q=80" },
  { name: "Gypsum", desc: "Premium gypsum for construction and agricultural use.", img: "https://images.unsplash.com/photo-1635334796347-06a1bdcfa374?w=500&q=80" },
  { name: "Lead", desc: "Reliably sourced lead for manufacturing and batteries.", img: "https://images.unsplash.com/photo-1587304671408-0118eb38ab44?w=500&q=80" },
  { name: "Gold (Au)", desc: "Exquisite raw gold, verified for purity and weight.", img: "https://images.unsplash.com/photo-1610375461246-83ff852e5313?w=500&q=80" },
  { name: "Lithium", desc: "Essential lithium for modern energy and tech solutions.", img: "https://images.unsplash.com/photo-1668603348612-4091a1a9e875?w=500&q=80" },
];

const agro = [
  { name: "Soybean", desc: "Nutrient-rich soybeans for consumption and processing." },
  { name: "Cashew", desc: "Premium raw cashew nuts globally recognized for quality." },
  { name: "Coconut", desc: "Fresh coconuts and high-grade derivative products." },
  { name: "Plantain & Banana", desc: "Available raw or as finished products (flour, chips, puree, smoothie mix)." },
  { name: "Shea Butter", desc: "High-quality, refined shea butter (note: raw nut export is banned)." },
  { name: "Spices", desc: "Aromatic Ginger, Garlic, Turmeric, & Cloves." },
  { name: "Coconut Briquettes", desc: "Sustainable, clean-burning eco-friendly fuel." },
  { name: "Sustainable Fabric/Leather", desc: "Ethically produced textiles and leather goods." },
  { name: "CNSL", desc: "Cashew Nut Shell Liquid for industrial applications." },
];

export default function Products() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <div className="bg-primary py-20 border-b border-primary-border relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={miningHero}
            alt="Products Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Our Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 max-w-3xl mx-auto"
          >
            Explore our diverse portfolio of meticulously sourced minerals and agricultural commodities.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        
        {/* Minerals Section */}
        <section id="minerals" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12 border-b border-border pb-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-foreground">
              <Gem className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">Precious Metals & Minerals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minerals.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover-elevate group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-foreground">{item.name}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Agro Section */}
        <section id="agro" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12 border-b border-border pb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Sprout className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-foreground">Agro-Allied Commodities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agro.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm hover-elevate group flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold font-serif mb-2 text-foreground flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-primary opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-muted p-12 rounded-3xl text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Need a Custom Order?</h3>
          <p className="text-muted-foreground mb-8">We provide customized packaging, by-product management, and specialized logistics for bulk orders.</p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
            Request a Custom Quote
          </Link>
        </div>

      </div>
    </div>
  );
}
