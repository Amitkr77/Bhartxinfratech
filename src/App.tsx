import { useEffect, lazy, Suspense } from "react";
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

/* Pages (Lazy Loaded) */
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const RegistrationsPage = lazy(() => import("./pages/RegistrationsPage"));
const TechPage = lazy(() => import("./pages/TechPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const InvestorsPage = lazy(() => import("./pages/InvestorsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const VendorPortalPage = lazy(() => import("./pages/VendorPage"));
const EnquiryPage = lazy(() => import("./pages/EnquiryPage"));
const SitemapPage = lazy(() => import("./pages/sitemap"));

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

        <Suspense fallback={<div>Loading...</div>}>

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
            <Route path="/sitemap" element={<SitemapPage />} />

          </Routes>

        </Suspense>

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
