import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import RegistrationsPage from "./pages/RegistrationsPage";
import TechPage from "./pages/TechPage";
import CareersPage from "./pages/CareersPage";
import InvestorsPage from "./pages/InvestorsPage";
import ContactPage from "./pages/ContactPage";
import VendorPortalPage from "./pages/VendorPage";
import EnquiryPage from "./pages/EnquiryPage";

function AnimatedRoutes() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (

    <main className="flex-grow">

      <AnimatePresence mode="wait">

        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >

          <Routes location={location}>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/registrations" element={<RegistrationsPage />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/vendor-portal" element={<VendorPortalPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />

          </Routes>

        </motion.div>

      </AnimatePresence>

    </main>

  );
}

export default function App() {

  return (

    <Router>

      <div className="min-h-screen flex flex-col">

        <Navbar />

        <AnimatedRoutes />

        <Footer />

      </div>

    </Router>

  );

}