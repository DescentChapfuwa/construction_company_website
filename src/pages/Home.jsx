import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Process from "../components/home/Process";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/common/CTA";


const Home = () => {
  return (
    <main>

      <Hero />

      <ServicesPreview />

      <AboutPreview />

      <WhyChooseUs />

      <FeaturedProjects />

      <Process />

      <Testimonials />

      <CTA />

    </main>
  );
};


export default Home;