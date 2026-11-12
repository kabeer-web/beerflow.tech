import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
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
import FAQ from "./components/FAQ";
import Products from "./components/Products";
import WhatWeBuild from "./components/WhatWeBuild";
import Legal from "./components/Legal";
import { landings } from "./data/seo";
import { SmoothScroll, ScrollProgress, Cursor, LinkInterceptor } from "./components/Fx";

const Page = ({ children }) => <div className="pt-24">{children}</div>;

const Home = () => (
  <>
    <Hero />
    <WhatWeBuild />
    <Showcase />
    <CaseStudy />
    <Products />
    <About />
    <FAQ />
    <Contact />
  </>
);

const Work = () => (
  <Page>
    <Showcase />
    <Products />
    <CaseStudy />
    <Contact />
  </Page>
);

const ServicesPage = () => (
  <Page>
    <Services />
    <Process />
    <Contact />
  </Page>
);

const AboutPage = () => (
  <Page>
    <About />
    <Contact />
  </Page>
);

const ProcessPage = () => (
  <Page>
    <Process />
    <Contact />
  </Page>
);

const FaqPage = () => (
  <Page>
    <FAQ />
    <Contact />
  </Page>
);

const LegalPage = ({ path }) => (
  <Page>
    <Legal path={path} />
  </Page>
);

const ContactPage = () => (
  <Page>
    <Contact />
  </Page>
);

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Seo />
      <SmoothScroll />
      <ScrollProgress />
      <Cursor />
      <LinkInterceptor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/privacy" element={<LegalPage path="/privacy" />} />
            <Route path="/terms" element={<LegalPage path="/terms" />} />
            {Object.keys(landings).map((p) => (
              <Route
                key={p}
                path={p}
                element={
                  <Page>
                    <Landing path={p} />
                    <Contact />
                  </Page>
                }
              />
            ))}
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
