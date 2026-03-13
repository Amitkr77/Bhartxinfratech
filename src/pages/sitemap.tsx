import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Briefcase,
  FolderKanban,
  FileCheck,
  Cpu,
  Users,
  TrendingUp,
  Phone,
  HelpCircle
} from "lucide-react";

export default function SitemapPage() {

  const pages = [
    { name: "About", path: "/about", icon: <Info size={20}/> },
    { name: "Services", path: "/services", icon: <Briefcase size={20}/> },
    { name: "Projects", path: "/projects", icon: <FolderKanban size={20}/> },
    { name: "Registrations", path: "/registrations", icon: <FileCheck size={20}/> },
    { name: "Technology", path: "/technology", icon: <Cpu size={20}/> },
    { name: "Careers", path: "/careers", icon: <Users size={20}/> },
    { name: "Investors", path: "/investors", icon: <TrendingUp size={20}/> },
    { name: "Contact", path: "/contact", icon: <Phone size={20}/> },
    { name: "Enquiry", path: "/enquiry", icon: <HelpCircle size={20}/> }
  ];

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-32 px-6 relative">

      {/* HOME NODE */}

      <Link
        to="/"
        className="flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-xl shadow-lg font-bold text-lg hover:scale-105 transition z-10"
      >
        <Home size={20}/>
        Home
      </Link>

      {/* Vertical line from Home */}
      <div className="w-[2px] h-12 bg-navy/40"></div>

      {/* Horizontal connector */}
      <div className="relative w-full max-w-5xl">

        <div className="absolute top-0 left-0 right-0 h-[2px] bg-navy/40"></div>

        {/* Page nodes */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10">

          {pages.map((page) => (

            <div key={page.name} className="flex flex-col items-center relative">

              {/* vertical line to node */}
              <div className="absolute -top-10 w-[2px] h-10 bg-navy/40"></div>

              <Link
                to={page.path}
                className="flex items-center justify-center gap-2 bg-white border border-navy/20 px-6 py-4 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition font-medium text-navy"
              >
                {page.icon}
                {page.name}
              </Link>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}