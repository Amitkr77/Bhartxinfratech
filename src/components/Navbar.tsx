import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Page =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "registrations"
  | "tech"
  | "careers"
  | "investors"
  | "contact";

type NavbarProps = {
  activePage: Page;
  setActivePage: (page: Page) => void;
};

const Navbar = ({ activePage, setActivePage }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: Page; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "registrations", label: "Expertise" },
    { id: "tech", label: "Innovation" },
    { id: "careers", label: "Careers" },
    { id: "investors", label: "Investors" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black py-6 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setActivePage("home")}
        >
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center mr-3">
            <span className="text-navy font-bold text-xl">B</span>
          </div>

          <div>
            <h1 className="text-white font-display font-bold text-lg leading-none tracking-wider">
              BHARATX
            </h1>

            <p className="text-gold text-[10px] font-semibold tracking-[0.2em] mt-1">
              INFRATECH PVT LTD
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                activePage === item.id ? "text-gold" : "text-white/80"
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => setActivePage("contact")}
            className="px-6 py-2 border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
          >
            ENQUIRE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          aria-label="Toggle mobile menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 lg:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left text-lg font-medium ${
                    activePage === item.id ? "text-gold" : "text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;