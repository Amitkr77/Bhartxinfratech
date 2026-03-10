import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

/* Page Type */
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

export default function App() {

const [activePage, setActivePage] = useState<Page>("home");

/* Scroll to top when page changes */
useEffect(() => {
window.scrollTo(0, 0);
}, [activePage]);

/* Page Switcher */
const renderPage = () => {


switch (activePage) {

  case "home":
    return <HomePage setActivePage={setActivePage} />;

  case "about":
    return <AboutPage />;

  case "services":
    return <ServicesPage />;

  case "projects":
    return <ProjectsPage />;

  case "registrations":
    return <RegistrationsPage />;

  case "tech":
    return <TechPage />;

  case "careers":
    return <CareersPage />;

  case "investors":
    return <InvestorsPage />;

  case "contact":
    return <ContactPage />;

  default:
    return <HomePage setActivePage={setActivePage} />;

}


};

return (


<div className="min-h-screen flex flex-col">

  {/* Navbar */}
  <Navbar activePage={activePage} setActivePage={setActivePage} />

  {/* Page Content */}
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

  {/* Footer */}
  <Footer setActivePage={setActivePage} />

</div>


);

}
