import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import CallToAction from "@/components/CallToAction";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Appointment from "@/components/Appointment";
import Departments from "@/components/Departments";
import Testimonials from "@/components/Testimonials";
import Doctors from "@/components/Doctors";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <FeaturedServices />
        <CallToAction />
        <About />
        <Stats />
        <Features />
        <Services />
        <Appointment />
        <Departments />
        <Testimonials />
        <Doctors />
        <Gallery />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}
