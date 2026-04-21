import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import BeforeAfter from '../components/BeforeAfter';
import ClinicGallery from '../components/ClinicGallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <ClinicGallery />
        <WhyChooseUs />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
