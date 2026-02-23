import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location === "/";
  const showTransparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showTransparent
          ? "bg-transparent py-5"
          : "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif font-bold text-xl leading-none tracking-tight ${showTransparent ? "text-white" : "text-foreground"}`}
              >
                TCGL
              </span>
              <span
                className={`text-[0.65rem] font-semibold tracking-wider uppercase ${showTransparent ? "text-white/80" : "text-primary"}`}
              >
                Terrabridge
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.path
                    ? "text-primary font-semibold"
                    : showTransparent
                      ? "text-white/90"
                      : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              variant={showTransparent ? "secondary" : "default"}
              className="rounded-full px-6 shadow-lg transition-all"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 rounded-md ${showTransparent ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`p-3 rounded-lg text-sm font-medium ${
                location === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-muted"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-2 rounded-xl">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
