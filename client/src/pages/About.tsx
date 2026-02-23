import { motion } from "framer-motion";
import { CheckCircle2, Award, Target, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24 bg-background">
      {/* Header */}
      <div className="bg-muted py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6"
          >
            About Terrabridge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            A premier production, exploration, and value-chain management
            company dedicated to excellence in commodities.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Terrabridge Commodities Global Limited (TCGL) is a licensed and
              duly registered company focused on the global trade of precious
              metals, industrial minerals, and agro-allied commodities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Authorized by the Corporate Affairs Commission (CAC) and the
              National Export Promotion Council (NEPC), we pride ourselves on
              strict adherence to international trade laws, ethical sourcing,
              and environmental sustainability.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-semibold">CAC Registered</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-semibold">NEPC Licensed</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-semibold">Ethical Sourcing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary w-6 h-6" />
                <span className="font-semibold">Global Export</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* corporate business meeting handshake abstract */}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://pixabay.com/get/g7cf96bee7d8a674656c40b53f64ae42ef98e5ba11bd1cb74ac00c7bf0972aeeef6863d7f1f47ac3df8116a02f0bf5ee654b19e2bd7d9ac6d3666878530e50664_1280.jpg"
                alt="Corporate Meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-card p-6 rounded-2xl shadow-xl border border-border max-w-[200px] hover-elevate">
              <Award className="w-10 h-10 text-secondary mb-3" />
              <p className="font-bold text-foreground">Commitment to Quality</p>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Target className="w-32 h-32" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">
              Our Mission
            </h3>
            <p className="text-lg text-primary-foreground/90 leading-relaxed relative z-10">
              To seamlessly bridge the gap between rich natural resources and
              global market demands through innovative production, rigorous
              quality control, and sustainable value-chain management.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-secondary text-secondary-foreground p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Globe className="w-32 h-32" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">
              Our Vision
            </h3>
            <p className="text-lg text-secondary-foreground/90 leading-relaxed relative z-10">
              To be the world's most trusted partner in commodity exploration
              and export, recognized for uncompromising integrity, environmental
              stewardship, and continuous innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
