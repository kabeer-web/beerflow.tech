import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Showcase from "./components/Showcase";
import CaseStudy from "./components/CaseStudy";
import Services from "./components/Services";
import Process from "./components/Process";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Seo from "./components/Seo";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import RelatedLinks from "./components/RelatedLinks";
import StickyCTA from "./components/StickyCTA";
import { landings } from "./data/seo";
import { SmoothScroll, ScrollProgress, Cursor, LinkInterceptor } from "./components/Fx";

const Page = ({ children }) => <div className="pt-24">{children}</div>;
const Home = () => (<><Hero /><Marquee /><Showcase /><Services /><Process /><Contact /></>);
const Work = () => (<Page><Showcase /><CaseStudy /><Contact /></Page>);
const ServicesPage = () => (<Page><Services /><Process /><Contact /></Page>);
const AboutPage = () => (<Page><About /><Contact /></Page>);
const ContactPage = () => (<Page><Contact /></Page>);

export default function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Seo /><SmoothScroll /><ScrollProgress /><Cursor /><LinkInterceptor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main key={location.pathname} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {Object.keys(landings).map((p) => <Route key={p} path={p} element={<Page><Landing path={p} /><Contact /></Page>} />)}
            <Route path="*" element={<Page><NotFound /></Page>} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <RelatedLinks />
      <Footer />
      <StickyCTA />
    </div>
  );
}
