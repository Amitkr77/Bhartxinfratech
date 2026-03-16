import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

type Page =
  | "home"
  | "about"
  | "services"
  | "projects"
  | "registrations"
  | "tech"
  | "careers"
/*  | "vendor" */
  | "investors"
  | "contact";

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  /* Detect scroll */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const navItems: { id: Page; label: string; path: string }[] = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "registrations", label: "Expertise", path: "/registrations" },
    { id: "tech", label: "Innovation", path: "/tech" },
    { id: "careers", label: "Careers", path: "/careers" },
   /* { id: "vendor", label: "Vendor Portal", path: "/vendor-portal" },*/
    { id: "investors", label: "Investors", path: "/investors" },
    { id: "contact", label: "Contact", path: "/contact" }
  ];

  /* Detect active page from URL */
  const activePage =
    navItems.find((item) => item.path === location.pathname)?.id || null;

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav
  className={`fixed left-1/2 -translate-x-1/2 w-full z-50 py-2 transition-all duration-300
  ${
    isScrolled
      ? "bg-black/80 shadow-xl backdrop-blur-md"
      : "bg-transparent border-transparent"
  }`}
>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleNavigation("/")}
        >
          <div className="w-18 h-18 white-gradient rounded-sm flex items-center justify-center mr-3">
            <img
              src="/logo.webp"
              alt="Bharatx Logo"
              className="w-18 h-18 rounded-sm object-contain"
            />
          </div>

          {/* <div>
            <h1 className="text-white font-display font-bold text-lg leading-none tracking-wider">
              BHARATX
            </h1>

            <p className="text-gold text-[10px] font-semibold tracking-[0.2em] mt-1">
              INFRATECH PVT LTD
            </p>
          </div>*/}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">

          {navItems.map((item) => (

            <button
              key={item.id}
              onClick={() => handleNavigation(item.path)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${
                activePage === item.id? "text-gold" : isScrolled ? "text-white": "text-blue text-bold"
              }`}
            >
              {item.label}
            </button>

          ))}

          <button
            onClick={() => handleNavigation("/enquiry")}
            className={`px-6 py-2 border text-sm font-semibold transition-all duration-300
            ${
              location.pathname === "/enquiry"
                ? "bg-gold text-blue text-bold border-gold"
                : isScrolled
                ? "border-white text-white hover:bg-gold hover:text-navy"
                : "border-navy text-navy hover:bg-gold hover:text-navy"
            }`}
          >
            ENQUIRE
          </button>

        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${isScrolled ? "text-white" : "text-navy"}`}
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
                    handleNavigation(item.path);
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