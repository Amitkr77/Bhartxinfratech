import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Phone, Mail, MapPin, 
  Shield, Award, HardHat, TrendingUp, Globe, 
  Cpu, Users, FileText, Leaf, BarChart3, 
  ArrowRight, CheckCircle2, Building2, Construction,
  Route, Landmark, Briefcase
} from 'lucide-react';
import SitemapPage from './pages/sitemap';

// --- Types ---
type Page = 'home' | 'about' | 'services' | 'projects' | 'registrations' | 'tech' | 'careers' | 'investors' | 'contact';

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Page, label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'registrations', label: 'Expertise' },
    { id: 'tech', label: 'Innovation' },
    { id: 'careers', label: 'Careers' },
    { id: 'investors', label: 'Investors' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black py-6 shadow-xl">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
          <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center mr-3">
            <span className="text-navy font-bold text-xl">B</span>
          </div>
          <div>
            <h1 className="text-white font-display font-bold text-lg leading-none tracking-wider">BHARATX</h1>
            <p className="text-gold text-[10px] font-semibold tracking-[0.2em] mt-1">INFRATECH PVT LTD</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold ${activePage === item.id ? 'text-gold' : 'text-white/80'}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('contact')}
            className="px-6 py-2 border border-gold text-gold text-sm font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
          >
            ENQUIRE
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" aria-label="Toggle mobile menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
                  className={`text-left text-lg font-medium ${activePage === item.id ? 'text-gold' : 'text-white'}`}
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

const Footer = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 gold-gradient rounded-sm flex items-center justify-center mr-3">
              <span className="text-navy font-bold text-lg">B</span>
            </div>
            <h2 className="font-display font-bold text-xl tracking-wider">BHARATX</h2>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            A Tier-1 infrastructure development and civil engineering company delivering excellence in roads, bridges, and public infrastructure across India.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors cursor-pointer">
              <Globe size={18} />
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-colors cursor-pointer">
              <Users size={18} />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gold font-semibold mb-6 tracking-wider text-sm uppercase">Quick Links</h3>
          <ul className="space-y-4 text-sm text-white/60">
            {['About', 'Services', 'Projects', 'Innovation', 'Careers', 'Investors'].map((item) => (
              <li key={item}>
                <button 
                  onClick={() => setActivePage(item.toLowerCase() as Page)}
                  className="hover:text-gold transition-colors"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-gold font-semibold mb-6 tracking-wider text-sm uppercase">Our Expertise</h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li>Road Construction & Highways</li>
            <li>Bridge & Flyover Engineering</li>
            <li>Government Civil Works</li>
            <li>Infrastructure Maintenance</li>
            <li>Smart City Projects</li>
          </ul>
        </div>

        <div>
          <h3 className="text-gold font-semibold mb-6 tracking-wider text-sm uppercase">Headquarters</h3>
          <div className="space-y-4 text-sm text-white/60">
            <div className="flex items-start">
              <MapPin className="mr-3 text-gold shrink-0" size={18} />
              <p>H. No. 136 Beladih, Cherki Bazar<br />Gaya, Bihar – 824237, India</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-3 text-gold shrink-0" size={18} />
              <p>+91 (631) 222-XXXX</p>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 text-gold shrink-0" size={18} />
              <p>contact@bharatxinfratech.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 tracking-widest uppercase font-semibold">
        <p>© 2026 BHARATX INFRATECH PRIVATE LIMITED. ALL RIGHTS RESERVED.</p>
        <p className="mt-4 md:mt-0">CIN: U41001BR2026PTC082273 | PAN: AAOCB4119N</p>
      </div>
    </footer>
  );
};

// --- Page Components ---

const HomePage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/highway/1920/1080" 
            alt="Infrastructure" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-6">
              <div className="h-[1px] w-12 bg-gold mr-4" />
              <span className="text-gold font-semibold tracking-[0.3em] text-xs uppercase">Elite Infrastructure Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl text-white font-display font-bold leading-tight mb-8">
              Building Reliable <span className="text-gold">Infrastructure</span> for a Growing India
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 leading-relaxed font-light">
              Delivering engineering excellence in roads, bridges, and civil infrastructure projects with a commitment to quality and national progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActivePage('projects')}
                className="px-8 py-4 gold-gradient text-navy font-bold tracking-wider hover:scale-105 transition-transform flex items-center justify-center"
              >
                EXPLORE OUR PROJECTS <ChevronRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => setActivePage('contact')}
                className="px-8 py-4 border border-white/30 text-white font-bold tracking-wider hover:bg-white/10 transition-all flex items-center justify-center"
              >
                GET IN TOUCH
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Stats Overlay */}
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <div className="glass-card p-10 flex space-x-12">
            <div>
              <p className="text-gold font-bold text-3xl mb-1">₹500Cr+</p>
              <p className="text-white/60 text-[10px] tracking-widest uppercase font-semibold">Ongoing Projects</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-gold font-bold text-3xl mb-1">250+</p>
              <p className="text-white/60 text-[10px] tracking-widest uppercase font-semibold">Heavy Equipment</p>
            </div>
            <div className="w-[1px] h-12 bg-white/10" />
            <div>
              <p className="text-gold font-bold text-3xl mb-1">15+</p>
              <p className="text-white/60 text-[10px] tracking-widest uppercase font-semibold">Years Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="text-gold" />, title: "Registered Contractor", desc: "Certified vendor for RCD & PWD Bihar." },
              { icon: <HardHat className="text-gold" />, title: "Engineering Expertise", desc: "Professional execution by elite engineers." },
              { icon: <CheckCircle2 className="text-gold" />, title: "Quality & Safety", desc: "Zero-compromise safety standards." },
              { icon: <TrendingUp className="text-gold" />, title: "Scalable Solutions", desc: "Handling multi-crore EPC projects." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 border border-navy/5 bg-navy/[0.02] hover:shadow-2xl transition-all duration-300"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-navy font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <img src="https://picsum.photos/seed/blueprint/800/800" alt="bg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <p className="text-gold font-semibold tracking-[0.3em] text-xs uppercase mb-4">Our Capabilities</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Core Infrastructure Services</h2>
            </div>
            <button 
              onClick={() => setActivePage('services')}
              className="mt-8 md:mt-0 text-gold font-bold flex items-center hover:translate-x-2 transition-transform"
            >
              VIEW ALL SERVICES <ArrowRight className="ml-2" size={20} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://picsum.photos/seed/road/600/400", title: "Road Construction", desc: "Highways, expressways, and urban road networks." },
              { img: "https://picsum.photos/seed/bridge/600/400", title: "Bridge Engineering", desc: "Structural design and execution of complex bridges." },
              { img: "https://picsum.photos/seed/building/600/400", title: "Civil Infrastructure", desc: "Government buildings and public utility facilities." }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer" onClick={() => setActivePage('services')}>
                <div className="relative overflow-hidden mb-6 aspect-video">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/20 transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/construction-site/800/600" 
                alt="Vision" 
                className="w-full rounded-sm shadow-2xl" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 gold-gradient p-8 flex flex-col justify-center">
                <p className="text-navy font-bold text-4xl">100%</p>
                <p className="text-navy/80 text-[10px] font-bold tracking-widest uppercase">Project Completion</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gold font-semibold tracking-[0.3em] text-xs uppercase mb-4">Our Vision</p>
            <h2 className="text-4xl font-display font-bold text-navy mb-8 leading-tight">
              To become India's most trusted infrastructure partner.
            </h2>
            <p className="text-navy/70 text-lg leading-relaxed mb-8">
              We are committed to building a stronger India through engineering excellence, sustainable practices, and timely project delivery. Our focus remains on government infrastructure that creates long-term public value.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Modern Construction Methods",
                "Advanced Project Management",
                "Strict Compliance with Standards",
                "Sustainable Material Engineering"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-navy font-medium">
                  <CheckCircle2 className="text-gold mr-3" size={20} /> {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => setActivePage('about')}
              className="px-8 py-4 bg-navy text-white font-bold tracking-wider hover:bg-navy/90 transition-all"
            >
              LEARN MORE ABOUT US
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/office/1920/600" alt="About" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Our Legacy of Excellence</h1>
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">Institutional Strength • Engineering Precision</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Company Overview</h2>
              <p className="text-navy/70 text-lg leading-relaxed mb-6">
                Bharatx Infratech Private Limited is an infrastructure and civil engineering company focused on developing reliable public infrastructure projects. Headquartered in Gaya, Bihar, we specialize in government infrastructure works including road development, bridge construction, and civil engineering projects.
              </p>
              <p className="text-navy/70 text-lg leading-relaxed">
                Our team brings together decades of collective experience in executing complex EPC (Engineering, Procurement, and Construction) projects for state and central government departments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy/5 p-8 text-center">
                <p className="text-gold font-bold text-4xl mb-2">2026</p>
                <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">Incorporated</p>
              </div>
              <div className="bg-navy/5 p-8 text-center">
                <p className="text-gold font-bold text-4xl mb-2">Tier-1</p>
                <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">Contractor Status</p>
              </div>
              <div className="bg-navy/5 p-8 text-center">
                <p className="text-gold font-bold text-4xl mb-2">500+</p>
                <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">Workforce</p>
              </div>
              <div className="bg-navy/5 p-8 text-center">
                <p className="text-gold font-bold text-4xl mb-2">ISO</p>
                <p className="text-navy/60 text-xs font-bold uppercase tracking-widest">Certified Quality</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 border border-navy/10 bg-navy/[0.01]">
              <div className="w-12 h-12 gold-gradient flex items-center justify-center mb-6">
                <Globe className="text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Deliver durable and high-quality infrastructure projects that support economic growth and public connectivity across the nation.
              </p>
            </div>
            <div className="p-10 border border-navy/10 bg-navy/[0.01]">
              <div className="w-12 h-12 gold-gradient flex items-center justify-center mb-6">
                <TrendingUp className="text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                Become a trusted infrastructure contractor for major infrastructure development projects across India, setting benchmarks in engineering.
              </p>
            </div>
            <div className="p-10 border border-navy/10 bg-navy/[0.01]">
              <div className="w-12 h-12 gold-gradient flex items-center justify-center mb-6">
                <Award className="text-navy" />
              </div>
              <h3 className="text-xl font-bold mb-4">Core Values</h3>
              <ul className="text-navy/60 text-sm space-y-2">
                <li>• Engineering Excellence</li>
                <li>• Uncompromising Integrity</li>
                <li>• Safety-First Culture</li>
                <li>• Quality & Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = () => {
  const services = [
    {
      icon: <Route size={40} />,
      title: "Road Construction & Maintenance",
      desc: "Construction and rehabilitation of highways, expressways, and major district roads using advanced paving technology.",
      features: ["Highway Development", "Road Rehabilitation", "Pavement Design", "Maintenance Contracts"]
    },
    {
      icon: <Construction size={40} />,
      title: "Bridge & Flyover Construction",
      desc: "Structural engineering and construction of RCC and steel bridges, flyovers, and overpasses for urban and rural connectivity.",
      features: ["Structural Engineering", "Foundation Piling", "Superstructure Erection", "Bridge Maintenance"]
    },
    {
      icon: <Landmark size={40} />,
      title: "Building Construction",
      desc: "Development of government offices, institutional buildings, and public infrastructure facilities with modern amenities.",
      features: ["Government Offices", "Educational Institutions", "Healthcare Facilities", "Public Utilities"]
    },
    {
      icon: <Construction size={40} />,
      title: "Infrastructure Development",
      desc: "Execution of large-scale public infrastructure projects including smart city works and urban development initiatives.",
      features: ["Smart City Projects", "Urban Drainage Systems", "Public Parks", "Utility Relocation"]
    },
    {
      icon: <Briefcase size={40} />,
      title: "Civil Engineering & Project Management",
      desc: "End-to-end planning, design, and execution of infrastructure projects with rigorous quality control and monitoring.",
      features: ["Project Planning", "Quantity Surveying", "Quality Assurance", "Contract Management"]
    }
  ];

  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/blueprint2/1920/600" alt="Services" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Our Expertise</p>
          <h1 className="text-5xl md:text-6xl text-white font-bold">Engineering Capabilities</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-12 p-12 border border-navy/5 bg-navy/[0.01] ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="lg:w-1/3 flex justify-center">
                  <div className="w-32 h-32 rounded-full border-2 border-gold flex items-center justify-center text-gold">
                    {service.icon}
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="text-3xl font-bold text-navy mb-4">{service.title}</h3>
                  <p className="text-navy/70 text-lg mb-8 leading-relaxed">{service.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center text-navy font-medium">
                        <CheckCircle2 className="text-gold mr-2" size={18} /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "National Highway Expansion - Bihar",
      location: "Patna - Gaya Section",
      type: "Road Infrastructure",
      status: "Ongoing",
      value: "₹245 Cr",
      img: "https://picsum.photos/seed/nh/800/600"
    },
    {
      title: "District Infrastructure Improvement",
      location: "Gaya District",
      type: "Urban Development",
      status: "Completed",
      value: "₹85 Cr",
      img: "https://picsum.photos/seed/urban/800/600"
    },
    {
      title: "Government Administrative Complex",
      location: "Bihar Sharif",
      type: "Building Construction",
      status: "In Progress",
      value: "₹120 Cr",
      img: "https://picsum.photos/seed/complex/800/600"
    },
    {
      title: "Four-Lane Flyover Network",
      location: "Muzaffarpur",
      type: "Bridge Engineering",
      status: "Ongoing",
      value: "₹175 Cr",
      img: "https://picsum.photos/seed/flyover/800/600"
    }
  ];

  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/projects/1920/600" alt="Projects" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Iconic Footprint</h1>
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">₹500Cr+ Portfolio of National Significance</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group border border-navy/10 overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-navy px-4 py-1 text-xs font-bold uppercase tracking-wider">
                    {project.status}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gold font-bold text-xs uppercase tracking-widest mb-1">{project.type}</p>
                      <h3 className="text-2xl font-bold text-navy">{project.title}</h3>
                    </div>
                    <p className="text-navy font-bold text-xl">{project.value}</p>
                  </div>
                  <div className="flex items-center text-navy/60 text-sm mb-6">
                    <MapPin size={16} className="mr-2" /> {project.location}
                  </div>
                  <button className="text-navy font-bold flex items-center group-hover:text-gold transition-colors">
                    VIEW PROJECT DETAILS <ChevronRight className="ml-1" size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const RegistrationsPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/cert/1920/600" alt="Registrations" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Credentials & Trust</p>
          <h1 className="text-5xl md:text-6xl text-white font-bold">Government Registrations</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Registered Contractor Status</h2>
              <div className="space-y-6">
                {[
                  { dept: "Road Construction Department (RCD), Bihar", status: "Class-I Registered" },
                  { dept: "Public Works Department (PWD), Bihar", status: "Class-I Registered" },
                  { dept: "Rural Works Department (RWD), Bihar", status: "Registered Vendor" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-6 bg-navy/5 border-l-4 border-gold">
                    <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mr-6 shrink-0">
                      <Shield className="text-navy" />
                    </div>
                    <div>
                      <h4 className="text-navy font-bold text-lg">{item.dept}</h4>
                      <p className="text-gold font-bold text-xs uppercase tracking-widest">{item.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Future Partnerships</h2>
              <p className="text-navy/70 text-lg mb-8">
                We are actively expanding our footprint to partner with national and central government authorities for high-value infrastructure projects.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "NHAI (National Highways)",
                  "Ministry of Road Transport",
                  "Smart City Authorities",
                  "Public Sector Undertakings",
                  "Railway Infrastructure",
                  "Aviation Infrastructure"
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-navy/10 flex items-center text-navy font-semibold">
                    <CheckCircle2 className="text-gold mr-3 shrink-0" size={18} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const TechPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/tech/1920/600" alt="Tech" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Engineering the Future</h1>
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">Innovation • Digital Twins • Smart Infrastructure</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            {[
              { icon: <Cpu />, title: "Digital Engineering (BIM)", desc: "Using 3D modeling and digital twins for precision planning and execution." },
              { icon: <Globe />, title: "IoT Analytics", desc: "Real-time monitoring of structural health and site progress via sensors." },
              { icon: <Shield />, title: "Smart Materials", desc: "R&D in sustainable, high-durability construction materials for longevity." }
            ].map((item, i) => (
              <div key={i} className="p-10 border border-navy/10 bg-navy/[0.01] text-center">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-navy">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-navy p-12 lg:p-20 text-white flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Case Study</p>
              <h2 className="text-4xl font-bold mb-6">Digital Twin for Highway Expansion</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                We implemented a complete Digital Twin for the Gaya-Patna Highway project, allowing for real-time traffic simulation and structural stress analysis before the first stone was laid.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <p className="text-gold font-bold text-3xl">15%</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Cost Reduction</p>
                </div>
                <div>
                  <p className="text-gold font-bold text-3xl">20%</p>
                  <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Faster Delivery</p>
                </div>
              </div>
              <button className="px-8 py-4 border border-gold text-gold font-bold hover:bg-gold hover:text-navy transition-all">
                DOWNLOAD WHITE PAPER
              </button>
            </div>
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/seed/digitaltwin/800/600" alt="Digital Twin" className="rounded-sm shadow-2xl" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CareersPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/team/1920/600" alt="Careers" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Build the Future of India</h1>
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">Join the Elite Engineering Team</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Why Bharatx?</h2>
              <p className="text-navy/70 text-lg mb-8 leading-relaxed">
                We offer more than just a job; we offer the opportunity to work on projects that define the landscape of modern India. Our culture is built on engineering excellence, safety, and professional growth.
              </p>
              <div className="space-y-4">
                {[
                  "Exposure to Multi-Crore EPC Projects",
                  "Advanced Technical Training",
                  "Safety-First Work Culture",
                  "Competitive Compensation & Benefits"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-navy font-semibold">
                    <CheckCircle2 className="text-gold mr-3" size={20} /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/work1/400/400" alt="Work" className="rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work2/400/400" alt="Work" className="rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work3/400/400" alt="Work" className="rounded-sm" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work4/400/400" alt="Work" className="rounded-sm" referrerPolicy="no-referrer" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-navy mb-12">Current Opportunities</h2>
          <div className="space-y-4">
            {[
              { role: "Senior Project Manager (Highways)", loc: "Gaya, Bihar", exp: "12+ Years" },
              { role: "Structural Engineer (Bridges)", loc: "Patna, Bihar", exp: "8+ Years" },
              { role: "Site Engineer (Civil)", loc: "Various Locations", exp: "3-5 Years" },
              { role: "Safety & Quality Compliance Officer", loc: "Gaya, Bihar", exp: "6+ Years" }
            ].map((job, i) => (
              <div key={i} className="p-8 border border-navy/10 flex flex-col md:flex-row justify-between items-center hover:bg-navy/[0.02] transition-colors">
                <div>
                  <h4 className="text-xl font-bold text-navy mb-1">{job.role}</h4>
                  <p className="text-navy/50 text-sm">{job.loc} • {job.exp} Experience</p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 bg-navy text-white font-bold text-sm hover:bg-gold hover:text-navy transition-all">
                  APPLY NOW
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const InvestorsPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/finance/1920/600" alt="Investors" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-xs mb-4">Governance & Growth</p>
          <h1 className="text-5xl md:text-6xl text-white font-bold">Investor Relations</h1>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Corporate Governance</h2>
              <p className="text-navy/70 text-lg mb-8 leading-relaxed">
                Bharatx Infratech maintains the highest standards of transparency and ethical governance. We are committed to creating long-term value for our stakeholders through disciplined financial management and strategic infrastructure investments.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="p-6 bg-navy/5">
                  <BarChart3 className="text-gold mb-4" />
                  <h4 className="font-bold mb-2">Financial Rigor</h4>
                  <p className="text-navy/60 text-sm">Audited financial reporting and robust internal controls.</p>
                </div>
                <div className="p-6 bg-navy/5">
                  <Shield className="text-gold mb-4" />
                  <h4 className="font-bold mb-2">Risk Management</h4>
                  <p className="text-navy/60 text-sm">Comprehensive framework for project and operational risks.</p>
                </div>
              </div>
            </div>
            <div className="bg-navy text-white p-12">
              <h3 className="text-2xl font-bold mb-8">ESG Commitment</h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <Leaf className="text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Environmental</h4>
                    <p className="text-white/60 text-sm">Sustainable construction practices and carbon footprint reduction.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Social</h4>
                    <p className="text-white/60 text-sm">Community development and workforce welfare initiatives.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FileText className="text-gold mr-4 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Governance</h4>
                    <p className="text-white/60 text-sm">Board-level oversight and uncompromising ethical standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-24">
      <section className="relative py-32 bg-navy">
        <div className="absolute inset-0 opacity-20">
          <img src="https://picsum.photos/seed/contact/1920/600" alt="Contact" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold mb-6">Connect with the Architects of Progress</h1>
          <p className="text-gold font-semibold tracking-[0.3em] uppercase text-sm">Regional Headquarters • Gaya, Bihar</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Project Inquiries</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">Full Name</label>
                    <input type="text" className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">Project Requirement</label>
                  <select className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none transition-colors">
                    <option>Road Construction</option>
                    <option>Bridge & Flyover</option>
                    <option>Civil Infrastructure</option>
                    <option>Government Tender</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy/60 mb-2">Message</label>
                  <textarea rows={5} className="w-full p-4 bg-navy/5 border border-navy/10 focus:border-gold outline-none transition-colors"></textarea>
                </div>
                <button className="w-full py-4 gold-gradient text-navy font-bold tracking-widest hover:scale-[1.02] transition-transform">
                  SUBMIT INQUIRY
                </button>
              </form>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8">Our Presence</h2>
              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
                    <MapPin className="text-navy" />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg mb-1">Registered Office</h4>
                    <p className="text-navy/60">H. No. 136 Beladih, Cherki Bazar<br />Gaya, Bihar – 824237, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
                    <Phone className="text-navy" />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg mb-1">Contact Numbers</h4>
                    <p className="text-navy/60">+91 (631) 222-XXXX (Office)<br />+91 99XXXXXX (Project Dept)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 gold-gradient flex items-center justify-center mr-6 shrink-0">
                    <Mail className="text-navy" />
                  </div>
                  <div>
                    <h4 className="text-navy font-bold text-lg mb-1">Email Channels</h4>
                    <p className="text-navy/60">contact@bharatxinfratech.com<br />tenders@bharatxinfratech.com</p>
                  </div>
                </div>
              </div>
              <div className="h-80 bg-navy/5 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115664.8143212879!2d84.9213454!3d24.79545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32a4406e07d61%3A0x5519640497ae51!2sGaya%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home': return <HomePage setActivePage={setActivePage} />;
      case 'about': return <AboutPage />;
      case 'services': return <ServicesPage />;
      case 'projects': return <ProjectsPage />;
      case 'registrations': return <RegistrationsPage />;
      case 'tech': return <TechPage />;
      case 'careers': return <CareersPage />;
      case 'sitemap': return <SitemapPage />;
      case 'investors': return <InvestorsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
