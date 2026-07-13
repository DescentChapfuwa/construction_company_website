import ServicesHero from "../components/services/ServicesHero";
import ConstructionServices from "../components/services/ConstructionServices";
import BrickService from "../components/services/BrickServices";
import RentalService from "../components/services/RentalServices";
import ServiceProcess from "../components/services/ServiceProcess";
import CTA from "../components/common/CTA";

const Services = () => {
  return (
    <>
      <ServicesHero />

      <ConstructionServices />

      <BrickService />

      <RentalService />

      <ServiceProcess />

      <CTA />
    </>
  );
};

export default Services;
