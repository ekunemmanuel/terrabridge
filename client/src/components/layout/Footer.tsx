import { Link } from "wouter";
import { Leaf, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none tracking-tight text-white">TCGL</span>
                <span className="text-[0.65rem] font-semibold tracking-wider uppercase text-primary">Terrabridge</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Licensed by Corporate Affairs Commission and National Export Promotion Council. Bridging global commodities with uncompromising quality and sustainable practices.
            </p>
            <div className="flex items-center gap-3 text-secondary text-sm font-medium">
              <ShieldCheck className="w-5 h-5" />
              <span>CAC & NEPC Registered</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Commodities */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Our Commodities</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/products#minerals" className="hover:text-primary transition-colors">Precious Metals</Link></li>
              <li><Link href="/products#minerals" className="hover:text-primary transition-colors">Industrial Minerals</Link></li>
              <li><Link href="/products#agro" className="hover:text-primary transition-colors">Agro-Allied Products</Link></li>
              <li><Link href="/products#agro" className="hover:text-primary transition-colors">Sustainable Materials</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Terrabridge Commodities Global Limited HQ, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+234 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@terrabridgelimited.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Terrabridge Commodities Global Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
