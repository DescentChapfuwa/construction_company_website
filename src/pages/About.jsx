import AboutHero from "../components/about/AboutHero";
import CompanyStory from "../components/about/CompanyStory";
import MissionVision from "../components/about/MissionVision";
import CoreValues from "../components/about/CoreValues";
import Team from "../components/about/Team";
import CompanyStats from "../components/about/CompanyStats";
import CTA from "../components/common/CTA";

const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <Team />
      <CompanyStats />
      <CTA />
    </>
  );
};

export default About;