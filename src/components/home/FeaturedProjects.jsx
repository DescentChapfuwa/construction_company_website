import SectionTitle from "../common/SectionTitle";
import { projects } from "../../data/projects";

const FeaturedProjects = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of our completed work"
        />

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-[#1F2937]">
                  {project.title}
                </h3>

                <p className="text-gray-600 mt-2">📍 {project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
