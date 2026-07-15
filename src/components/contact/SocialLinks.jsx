import company from "../../data/company";

import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Follow Us</h2>

        <div className="flex justify-center gap-8 mt-8 text-3xl text-[#F4B400]">
          <a href={company.social.facebook}>
            <FaFacebook />
          </a>

          <a href={company.social.instagram}>
            <FaInstagram />
          </a>

          <a href={company.social.linkedin}>
            <FaLinkedin />
          </a>

          <a href={company.social.tiktok}>
            <FaTiktok />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
