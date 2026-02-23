import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, Sprout, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

import miningHero from "@assets/AdobeStock_239722577_1771796703476.jpeg";
import miningOps from "@assets/0001042682_resized_miningupdate41022-898x575_1771796703478.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* landing page hero scenic agricultural and mining landscape */}
        <div className="absolute inset-0 z-0">
          <img
            src={miningHero}
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-white text-sm font-medium tracking-wide uppercase">CAC & NEPC Licensed Exporter</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-[1.1]">
              Bridging Global <br />
              <span className="text-gradient">Commodities</span> With <br />
              Uncompromising Quality
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Premium production, exploration, and value-chain management for precious metals, minerals, and agro-allied commodities worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-xl h-14 px-8 text-base bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl h-14 px-8 text-base bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                <Link href="/contact">Request a Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase">Why Choose TCGL</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Excellence at Every Stage</h3>
            <p className="text-muted-foreground text-lg">We oversee the entire lifecycle from exploration to packaging, ensuring the highest standards of purity and sustainability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Licensed & Verified",
                desc: "Fully registered with the Corporate Affairs Commission (CAC) and National Export Promotion Council (NEPC)."
              },
              {
                icon: Globe,
                title: "Global Supply Chain",
                desc: "Seamlessly bridging local resources with international markets through robust logistics and distribution."
              },
              {
                icon: Sprout,
                title: "Sustainable Practices",
                desc: "Committed to eco-friendly exploration and ethical sourcing for both our minerals and agro-products."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm hover-elevate"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-serif mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Minerals Category */}
            <div className="relative group overflow-hidden rounded-3xl h-[500px]">
              {/* raw gold and minerals macro shot */}
              <img 
                src={miningOps} 
                alt="Minerals" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-secondary/90 backdrop-blur text-white flex items-center justify-center mb-4">
                  <Gem className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Precious Metals & Minerals</h3>
                <p className="text-white/80 mb-8 max-w-md">Tin, Gypsum, Lead, Gold (Au), and Lithium. Sourced with integrity, processed with precision.</p>
                <Button asChild variant="outline" className="w-fit rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-black">
                  <Link href="/products#minerals" className="flex items-center gap-2">
                    View Catalog <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Agro Category */}
            <div className="relative group overflow-hidden rounded-3xl h-[500px]">
              {/* lush green agricultural field crops */}
              <img 
                src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80" 
                alt="Agro-Allied" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-primary/90 backdrop-blur text-white flex items-center justify-center mb-4">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-3">Agro-Allied Commodities</h3>
                <p className="text-white/80 mb-8 max-w-md">Soybean, Cashew, Shea Butter, Spices, and Sustainable Fabrics. Nurtured by nature, refined by us.</p>
                <Button asChild variant="outline" className="w-fit rounded-full bg-white/10 border-white/30 text-white hover:bg-white hover:text-black">
                  <Link href="/products#agro" className="flex items-center gap-2">
                    View Catalog <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Ready to Partner With Us?</h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Whether you are looking for premium grade minerals or high-quality agricultural exports, Terrabridge is your trusted global partner.
          </p>
          <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl shadow-black/20 hover:scale-105 transition-all">
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
